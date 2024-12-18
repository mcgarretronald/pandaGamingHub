import Link from "next/link"
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="mx-36">
            <div className="flex justify-between mx-5">
                <section className="flex justify-between text-sm list-none gap-8">
                    <Link href={"/"}>
                        <li className="cursor-pointer hover:text-[#00FFFF]">About Us</li>
                    </Link>
                    <Link href={"/"}>
                        <li className="cursor-pointer hover:text-[#00FFFF]">Discover</li>
                    </Link>
                    <Link href={"/"}>
                        <li className="cursor-pointer hover:text-[#00FFFF]">Explore</li>
                    </Link>
                </section>
                <section className="flex justify-between list-none gap-8">
                    <Link href={"/"}>
                        <FaFacebookSquare size={25} className="cursor-pointer hover:text-[#316FF6]" />
                    </Link>
                    <Link href={"/"}>
                        <BsTwitter size={25} className="cursor-pointer hover:text-[#1DA1F2]" />
                    </Link>
                    <Link href={"/"}>
                        <SiTelegram size={25} className="cursor-pointer hover:text-[#0088cc]" />
                    </Link>
                    <Link href={"/"}>
                        <FaYoutube size={25} className="cursor-pointer hover:text-[#ff0000]" />
                    </Link>

                </section>
            </div>
            <hr  className="my-3"/>
            <div className="flex justify-between items-center mb-5">
                <section className="text-sm">
                    <p>© 2024 Panda Gaming Hub. All rights reserved.</p>
                </section>
                <section>
                    <Image src={"/Images/logo.png"} alt="Panda Gaming Hub Logo" width={50} height={100} />
                </section>
                <section className="flex justify-between text-sm list-none gap-8">
                    <p className="cursor-pointer hover:text-[#00FFFF]">Terms of Service</p>
                    <p className="cursor-pointer hover:text-[#00FFFF]">Privacy Policy</p>
                </section>
            </div>
        </div>
    )
}
