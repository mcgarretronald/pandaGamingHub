import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-36">
            <div className="flex flex-col sm:flex-row justify-between mx-5 sm:mx-10 md:mx-20 lg:mx-0 py-6">
                {/* Links Section */}
                <section className="flex flex-col sm:flex-row text-sm list-none gap-8 mb-6 sm:mb-0">
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

                {/* Social Media Section */}
                <section className="flex flex-col sm:flex-row justify-between list-none gap-8 sm:gap-12 mb-6 sm:mb-0">
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

            <hr className="my-3" />

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-5 px-5 sm:px-10 md:px-20 lg:px-36">
                {/* Copyright Section */}
                <section className="text-sm text-center sm:text-left mb-4 sm:mb-0">
                    <p>© 2024 Panda Gaming Hub. All rights reserved.</p>
                </section>

                {/* Logo Section */}
                <section>
                    <Image src={"/Images/logo.png"} alt="Panda Gaming Hub Logo" width={50} height={100} />
                </section>

                {/* Terms and Privacy Section */}
                <section className="flex flex-col sm:flex-row text-sm list-none gap-8 mt-4 sm:mt-0">
                    <p className="cursor-pointer hover:text-[#00FFFF]">Terms of Service</p>
                    <p className="cursor-pointer hover:text-[#00FFFF]">Privacy Policy</p>
                </section>
            </div>
        </div>
    );
}
