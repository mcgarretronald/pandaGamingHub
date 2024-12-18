"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"      

export default function NavigationBar() {
    const pathname = usePathname(); 

    const isActive = (path: string) => pathname === path ? "text-[#00FFFF]" : "";  // Corrected color format

    return (
        <div className='flex justify-between items-center md:mx-12 mx-3 mt-5 font-roboto'>
            <div>
                <Link href={"/Home"}>
                    <Image
                        src={"/Images/logo.png"}
                        alt="PANDA GAMING HUB"
                        width={40} 
                        height={40} 
                    />
                </Link>
            </div>

            <div className="flex list-none md:gap-20 gap-5 font-roboto ">
                <Link href={"/Gaming"}>

                        <li className={`cursor-pointer ${isActive("/Gaming")}`}>Gaming</li>
                </Link>
                <Link href={"/Movies"}>

                        <li className={`cursor-pointer ${isActive("/Movies")}`}>Movies & Series</li>
                </Link>
                <Link href={"/Electronics"}>

                        <li className={`cursor-pointer ${isActive("/Electronics")}`}>Electronics</li>
                </Link>
            </div>
        </div>
    )
}
