import { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../../Utils/firebase"; 
import Image from "next/image";
export default function Gamesform() {
    const [gameDetails, setGameDetails] = useState({
        name: "",
        imageUrl: "",
        charges: {
            oneGame: "",
            thirtyMinutes: "",
            oneHour: "",
        },
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name in gameDetails.charges) {
            setGameDetails((prev) => ({
                ...prev,
                charges: { ...prev.charges, [name]: value },
            }));
        } else {
            setGameDetails((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const gamesRef = ref(database, "games");
            await push(gamesRef, gameDetails);

            alert("Game added successfully!");
            setGameDetails({
                name: "",
                imageUrl: "",
                charges: {
                    oneGame: "",
                    thirtyMinutes: "50",
                    oneHour: "100",
                },
            });
        } catch (error) {
            console.error("Error adding game:", error);
            alert("Failed to add game. Please try again.");
        }
    };

    return (
        <form
            className="flex flex-col px-6 py-2 rounded shadow-md w-full max-w-md mx-auto"
            onSubmit={handleSubmit}
        >
            <h1 className="text-center font-poppins text-3xl pb-2">ADD GAME</h1>
            <div className="flex flex-col gap-5 text-black">
                {/* Game Name Input */}
                <input
                    type="text"
                    name="name"
                    placeholder="Game Name"
                    value={gameDetails.name}
                    onChange={handleChange}
                    className="p-1 px-3 text-sm rounded border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />

                {/* Image URL Input */}
                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={gameDetails.imageUrl}
                    onChange={handleChange}
                    className="p-1 px-3 text-sm rounded border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />
                {/* Image Preview */}
                {gameDetails.imageUrl && (
                    <div className="mt-3 flex items-center justify-center">
                        <Image
                            src={gameDetails.imageUrl}
                            alt="Game Preview"
                            width={500} // Adjust width as needed
                            height={256} // Adjust height as needed
                            className="w-[200px] h-[200px] p-2 flex  rounded border"
                            onError={(e) => (e.currentTarget.src = "")}
                        />
                    </div>
                )}

                {/* Charges Inputs */}
                <div className="flex flex-col gap-4">
                    <label className="font-medium text-white">Charges</label>
                    <input
                        type="text"
                        name="oneGame"
                        placeholder="Price for One Game"
                        value={gameDetails.charges.oneGame}
                        onChange={handleChange}
                        className="p-1 px-3 text-sm rounded border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                    />
                    <input
                        type="text"
                        name="thirtyMinutes"
                        placeholder="Price for 30 Minutes"
                        value={gameDetails.charges.thirtyMinutes}
                        onChange={handleChange}
                        className="p-1 px-3 text-sm rounded border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                    />
                    <input
                        type="text"
                        name="oneHour"
                        placeholder="Price for 1 Hour"
                        value={gameDetails.charges.oneHour}
                        onChange={handleChange}
                        className="p-1 px-3 text-sm rounded border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="mt-6 px-3 py-2  bg-btnbackground text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
            >
                Submit
            </button>
        </form>
    );
}
