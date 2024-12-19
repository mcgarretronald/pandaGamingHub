import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function Gamesform() {
    const [charges, setCharges] = useState<string[]>([""]); // Track charge fields
    const [uploadedImageName, setUploadedImageName] = useState<string | null>(null);

    const handleAddCharge = () => {
        setCharges([...charges, ""]); // Add a new empty charge field
    };

    const handleChargeChange = (index: number, value: string) => {
        const updatedCharges = [...charges];
        updatedCharges[index] = value; // Update specific charge field
        setCharges(updatedCharges);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploadedImageName(file.name); // Capture uploaded file name
        }
    };

    return (
        <form className="flex flex-col p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
            <h1 className="text-center font-poppins text-3xl pb-5">ADD GAME</h1>
            <div className="flex flex-col gap-5 text-black">
                {/* Name Field */}
                <input
                    type="text"
                    placeholder="Game Name"
                    className="p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                />

                {/* Charges Fields */}
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-white">Charges</label>
                    {charges.map((charge, index) => (
                        <input
                            key={index}
                            type="text"
                            value={charge}
                            placeholder={`Charge ${index + 1}`}
                            className="p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-300"
                            onChange={(e) => handleChargeChange(index, e.target.value)}
                        />
                    ))}
                    <button
                        type="button"
                        onClick={handleAddCharge}
                        className="mt-2 p-2 bg-btnbackground text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                        + Add Charge
                    </button>
                </div>

                {/* Image Upload */}
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
