"use client";
import { useState, useEffect } from "react";
import NavigationBar from "../Components/NavigationBar";
import Image from "next/image";

// Define Media type (common for Movies and TV Shows)
interface Media {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  type: "movie" | "tv";
  name?: string; // Optional property for TV shows
  first_air_date?: string; // Optional property for TV shows
}

// Define Genre type
interface Genre {
  id: number;
  name: string;
}

const MediaPage = () => {
  const [media, setMedia] = useState<Media[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  useEffect(() => {
    const fetchMediaAndGenres = async () => {
      try {
        // Fetch movies and TV shows
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&page=1`
        );
        const tvResponse = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&page=1`
        );

        // Fetch genres (for movies only, as TV genres are usually the same)
        const genreResponse = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}`
        );

        const movieData = await movieResponse.json();
        const tvData = await tvResponse.json();
        const genreData = await genreResponse.json();

        // Add type identifiers to movies and TV shows
        const moviesWithType = movieData.results.map((movie: Media) => ({
          ...movie,
          type: "movie",
        }));
        const tvWithType = tvData.results.map((tv: Media) => ({
          ...tv,
          title: tv.name, // TV shows use "name" instead of "title"
          release_date: tv.first_air_date, // Adjust for TV shows
          type: "tv",
        }));

        // Combine movies and TV shows into a single list
        setMedia([...moviesWithType, ...tvWithType]);
        setGenres(genreData.genres);
      } catch (err: unknown) {
        setError("Failed to fetch movies, TV shows, or genres");
        console.error(err);
      }
    };

    fetchMediaAndGenres();
  }, []);

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Handle genre selection
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setSelectedGenre(value === 0 ? null : value); // Set to null for "All" option
  };

  // Filter media (movies and TV shows) based on search and genre
  const filteredMedia = media.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm);
    const matchesGenre =
      selectedGenre === null || item.genre_ids.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <NavigationBar />

      {/* Search and Filter Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        <div className="w-full sm:w-2/3 lg:w-1/2">
          <input
            type="text"
            placeholder="Search for a movie or TV show..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:border-gray-500 focus:outline-none transition-colors duration-300"
          />
        </div>
        <div>
          <select
            onChange={handleGenreChange}
            className="px-4 py-2 rounded-lg border border-gray-300 text-black focus:border-gray-500 focus:outline-none transition-colors duration-300"
          >
            <option value={0}>All Genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && <div className="text-red-500 text-center">{error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {filteredMedia.length > 0 ? (
          filteredMedia.map((item) => (
            <div
              key={item.id}
              className="media-card p-4 rounded-lg hover:scale-105  hover:translate-y-[-5px] text-center shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                width={500}
                height={750}
                className="w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.release_date}</p>
              <p className="text-gray-400 mt-2 h-[200px] overflow-y-scroll scrollbar-hide">
                {item.overview}
              </p>
              <p className="text-yellow-500 mt-2">
                ⭐ {item.vote_average} ({item.vote_count} reviews)
              </p>
              <p className="text-sm italic text-gray-400">
                {item.type === "movie" ? "Movie" : "TV Show"}
              </p>

              {/* Pre-order button */}
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I%20will%20be%20coming%20for%20the%20${item.type}%20"${item.title}".%20Please%20have%20it%20ready.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-white w-full text-center bg-btnbackground py-2 px-4 rounded-lg hover:bg-green-500"
              >
                Pre-order
              </a>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center w-full h-full col-span-full">
            <div className="flex flex-col justify-center items-center text-center">
              <Image
                src="/Images/notfound.png"
                alt="No media found"
                width={400}
                height={700}
              />
              <p className="mt-4 text-lg">
                The movie or TV show you&apos;re looking for may have been
                removed or is currently unavailable.
              </p>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-white w-full text-center bg-btnbackground py-2 px-4 rounded-lg hover:bg-green-500"
              >
                Contact Us your request 
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaPage;
