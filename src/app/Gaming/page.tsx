"use client";
import React, { useState, useEffect } from 'react';
import NavigationBar from '../Components/NavigationBar';
import Image from 'next/image';

// Define the type for each game object
interface Game {
  imageUrl: string;
  name: string;
  charges: {
    oneGame: string;
    oneHour: string;
    thirtyMinutes: string;
  };
}

export default function GamingPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://panda-gaming-hub-default-rtdb.firebaseio.com/games.json");
        const data = await response.json();

        // Convert the fetched object into an array if necessary (if Firebase returns data as an object)
        const gamesArray = Object.values(data);
        setGames(gamesArray);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('An unknown error occurred'));
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchTerm));

  return (
    <div>
      <NavigationBar />

      <div className="flex p-4">
        {/* Search Bar aligned to the left */}
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

      <div className="flex">
        <div className="gaming-list mx-auto my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {error && <p>Error fetching data: {error.message}</p>}

          {/* Display games or show fallback if no games match */}
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => (
              <div key={index} className="game-item flex flex-col items-center rounded-[8px] relative group">
                <Image
                  src={game.imageUrl || '/default-image.png'}  // Fallback to a default image if imageUrl is unavailable
                  alt={game.name}
                  width={300}  // Adjust width
                  height={100} // Adjust height
                  className="object-cover rounded-lg brightness-90"
                />

                <h2 className='absolute bottom-2 text-xl font-bold font-roboto text-white'>{game.name}</h2>

                {/* Charges div (hidden by default) */}
                <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-center">
                    <p>One Game: {game.charges.oneGame || 'Pay after play'}</p>
                    <p>1/2 hour: {game.charges.thirtyMinutes || 'Ksh 50'}</p>
                    <p>1 Hour: {game.charges.oneHour || 'Ksh 100'}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Fallback content with centering
            <div className="flex justify-center items-center w-full h-full col-span-full">
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src="/Images/notfound.png"
                  alt="No games found"
                  width={600}
                  height={500}
                />
                <p className="mt-4 text-lg">The game you&apos;re looking for may have been removed or is currently unavailable</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
