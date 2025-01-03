"use client";
import { useState } from "react";
import AddItemCard from "../Components/AddItem";
import Gamesform from "../Components/Forms/gamesform";
import Moviesform from "../Components/Forms/moviesform";
import Electronicsform from "../Components/Forms/electronicsform";
import NavigationBar from "../Components/NavigationBar";

export default function Admin() {
    const [activeForm, setActiveForm] = useState<string | null>(null);

    // Handle card click and set the active form
    const handleCardClick = (form: string) => {
        setActiveForm(form);
    };

    // Render the appropriate form based on the selected item
    const renderForm = () => {
        switch (activeForm) {
            case "Gaming":
                return <Gamesform />;
            case "Movies":
                return <Moviesform />;
            case "Electronics":
                return <Electronicsform />;
            default:
                return null;
        }
    };

    return (
        <div
            className="w-full h-full fixed"
            style={{
                backgroundImage: "url(/Images/hero.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <NavigationBar />

            {/* AddItemCard Section */}
            <div className="flex md:flex-row flex-col items-center justify-center gap-10 pt-[15%]">
                <AddItemCard item="Gaming" onClick={() => handleCardClick("Gaming")} />
                <AddItemCard item="Movies" onClick={() => handleCardClick("Movies")} />
                <AddItemCard item="Electronics" onClick={() => handleCardClick("Electronics")} />
            </div>
            
            
            {/* Modal Section */}
            {activeForm !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
                    <div className="bg-[#080808] bg-opacity-90 p-8 rounded-lg shadow-xl w-[90%] md:w-[50%]">
                        {/* Close Button */}
                        <div className="flex justify-end">
                            <button
                                onClick={() => setActiveForm(null)}
                                className="font-bold  flex align-center justify-center text-lg px-2 bg-btnbackground rounded hover:bg-blue-400"
                            >
                                x
                            </button>
                        </div>
                        {/* Render Selected Form */}
                        {renderForm()}
                    </div>
                </div>
            )}
        </div>
    );
}
