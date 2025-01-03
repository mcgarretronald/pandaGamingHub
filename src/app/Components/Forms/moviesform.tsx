import { useState } from "react";
import { database } from "../../Utils/firebase"; // Adjust the path based on your structure
import { ref, push } from "firebase/database";
import Image from "next/image";

export default function Moviesform() {
    const [movieDetails, setMovieDetails] = useState({
        name: "",
        genre: "",
        year: "",
        trailer: "",
        imageUrl: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setMovieDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const moviesRef = ref(database, "movies");
            await push(moviesRef, movieDetails);

            alert("Movie added successfully!");
            setMovieDetails({ name: "", genre: "", year: "", trailer: "", imageUrl: "" });
        } catch (error) {
            console.error("Error adding movie:", error);
            alert("Failed to add movie. Please try again.");
        }
    };

    return (
        <form
            className="flex flex-col p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
            onSubmit={handleSubmit}
        >
            <h1 className="text-center font-poppins text-3xl pb-5">ADD MOVIE</h1>
            <div className="flex flex-col gap-5 text-black">
                {/* Image URL Input */}
                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={movieDetails.imageUrl}
                    onChange={handleChange}
                    className="p-1 px-3 text-sm rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />
                {/* Image Preview */}
                {movieDetails.imageUrl && (
                    <div className="mt-1 flex items-center justify-center">
                        <Image
                            src={movieDetails.imageUrl}
                            alt="Movie Preview"
                            width={500} // Adjust width as needed
                            height={256} // Adjust height as needed
                            className="w-[200px] h-[200px] p-2 flex  rounded-lg border"
                            onError={() => alert("Invalid Image URL")} 
                        />
                    </div>
                )}

                {/* Other Inputs */}
                <input
                    type="text"
                    name="name"
                    placeholder="Movie Name"
                    value={movieDetails.name}
                    onChange={handleChange}
                    className="p-1 px-3 text-sm rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />
                <input
                    type="text"
                    name="genre"
                    placeholder="Genre i.e. Fantasy, Action"
                    value={movieDetails.genre}
                    onChange={handleChange}
                    className="p-1 px-3 text-sm rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />
                <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={movieDetails.year}
                    onChange={handleChange}
                    className="p-1 px-3 text-sm rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />
                <input
                    type="text"
                    name="trailer"
                    placeholder="Link of Trailer"
                    value={movieDetails.trailer}
                    onChange={handleChange}
                    className="p-1 px-3 text-sm rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="mt-6 p-3 text-sm bg-btnbackground text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
            >
                Submit
            </button>
        </form>
    );
}
