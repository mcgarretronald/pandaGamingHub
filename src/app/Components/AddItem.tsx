import { FaPlus } from "react-icons/fa";
interface Props {
    item: string
}
export default function AddItemCard({ item }: Props) {
    return (
        <div className="flex flex-col items-center">
            <div className="rounded-[8px] p-20 bg-white bg-opacity-60 shadow-2xl">
            <FaPlus  size={40} className="font-bold "/>
            </div>
            
            <p className="text-2xl mt-3">Add new {item}</p>
        </div>
    )
}

