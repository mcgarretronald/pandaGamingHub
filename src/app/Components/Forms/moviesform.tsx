import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function Moviesform() {
    const [uploadedImageName, setUploadedImageName] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Get the first file
        if (file) {
            setUploadedImageName(file.name); // Set the file name in state
        }
    };

    return (
        <form className="flex flex-col p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
            <h1 className="text-center font-poppins text-3xl pb-5">ADD MOVIE</h1>
            <div className="flex flex-col gap-5 text-black">
                {/* Upload Image Input */}
                <div className="relative border-2 border-dashed border-white rounded-lg p-6 text-center hover:border-gray-500 transition-colors duration-300">
                    <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                    />
                    <div className="flex flex-col items-center justify-center">
                        <FaCloudUploadAlt size={40} className="text-white mb-2" />
                        <p className="text-white font-medium">
                            {uploadedImageName || "Click to upload an image"}
                        </p>
                    </div>
                </div>
               

                {/* Other Inputs */}
                <input
                    type="text"
                    placeholder="Movie Name"
                    className="p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />
                <input
                    type="text"
                    placeholder="Genre i.e. Fantasy, Action"
                    className="p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />
                <input
                    type="text"
                    placeholder="Year"
                    className="p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />
                <input
                    type="text"
                    placeholder="Link of Trailer"
                    className="p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="mt-6 p-3 bg-btnbackground text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
            >
                Submit
            </button>
        </form>
    );
}
