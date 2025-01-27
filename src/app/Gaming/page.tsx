"use client";
import React, { useState, useEffect } from 'react';
import NavigationBar from '../Components/NavigationBar';
import Image from 'next/image';

// Define the type for each game object
interface Game {
  background_image: string;
  name: string;
  platforms: { platform: { name: string } }[]; // Include platform details for filtering
  ratings: {
    average: number;
    count: number;
  };
  prices: {
    oneGame: string;
    oneHour: string;
    thirtyMinutes: string;
  };
}

const GamingPage = () => {
  // State for storing fetched games, errors, and search term
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch game data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games?platforms=18&key=${process.env.NEXT_PUBLIC_GAMES_API_KEY}`);
        const data = await response.json();

        // Map API response to our Game interface structure
        const gamesArray = data.results.map((game: { name: string; background_image: string; platforms: { platform: { name: string } }[]; rating: number; ratings_count: number }) => ({
          name: game.name,
          background_image: game.background_image,
          platforms: game.platforms,
          ratings: {
            average: game.rating, // average rating
            count: game.ratings_count, // number of reviews
          },
          prices: {
            oneGame: 'Pay after play', // Fallback prices (adjust as necessary)
            oneHour: 'Ksh 100',
            thirtyMinutes: 'Ksh 50',
          }
        }));

        setGames(gamesArray);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
          console.error("Error fetching data:", error);
        }
      };

    fetchData();
  }, []);

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter games based on the search term
  const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchTerm));

  return (
    <div>
      <NavigationBar />
      {error && <div className="error-message text-red-500 text-center">{error}</div>}
      
      {/* Search Bar */}
      <div className="flex p-4">
        <div className="ml-12 w-full sm:w-2/3 lg:w-1/2">
          <input
            type="text"
            placeholder="Search for a game..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:border-gray-500 focus:outline-none transition-colors duration-300"
          />
        </div>
      </div>

      {/* Game List Display */}
      <div className="flex justify-center ">
        <div className="gaming-list mx-auto text-center my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {/* Display games or fallback if no games match */}
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => (
              <div key={index} className="game-item flex flex-col items-center justify-center rounded-[8px] relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:translate-y-[-5px]">
                
                {/* Game Image */}
                <Image
                  src={game.background_image || '/Images/notfound.png'}  // Fallback to a default image if background_image is unavailable
                  alt={game.name}
                  width={500}
                  height={500}
                  className="object-cover rounded-lg brightness-90 cursor-pointer"
                />

                {/* Game Name */}
                <h2 className='text-xl font-bold font-roboto text-white'>{game.name}</h2>
                
                {/* Reviews next to the game name */}
                <div className="text-sm font-semibold text-yellow-300">
                  ⭐ {game.ratings.average ? `${game.ratings.average} (${game.ratings.count} reviews)` : "No ratings yet"}
                </div>
              </div>
            ))
          ) : (
            // Fallback content if no games match
            <div className="flex justify-center items-center w-full h-full col-span-full">
              <div className="flex mt-[10%] flex-col justify-center items-center text-center">
                <Image
                  src="/Images/notfound.png"
                  alt="No games found"
                  width={400}
                  height={700}
                />
                <p className="mt-4 text-lg">The game you&apos;re looking for may have been removed or is currently unavailable</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamingPage;
