import { FaPlus } from "react-icons/fa";

interface Props {
    item: string;
    onClick: () => void; // Add interactivity for clicks
}

export default function AddItemCard({ item, onClick }: Props) {
    return (
        <div
            className="flex flex-col items-center cursor-pointer"
            onClick={onClick} // Handle click events
        >
            {/* Icon Container */}
            <div className="rounded-[12px] p-20 bg-white bg-opacity-80 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <FaPlus size={50} className="text-gray-700" />
            </div>

            {/* Item Label */}
            <p className="text-xl font-medium mt-4 ">
                Add new {item}
            </p>
        </div>
    );
}
