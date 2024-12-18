
import AddItemCard from '../Components/AddItem'

export default function Admin() {
    return (
        <div style={{backgroundImage: "url(/Images/hero.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh"}}>
            <div className="flex justify-center gap-10 pt-[20%]">
            <AddItemCard item="Gaming" />
            <AddItemCard item="Movies" />
            <AddItemCard item="Electronics" />
            </div>
            
        </div>
    )
}

