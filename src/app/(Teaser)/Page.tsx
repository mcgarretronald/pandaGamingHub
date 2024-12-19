"use client"
import Image from "next/image";
import Loader from "../Components/Loader/Loader";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";  

export default function TeaserPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setFadeOut(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isLoading && fadeOut) {
            setTimeout(() => {
                router.push('/Home');
            }, 1000);
        }
    }, [isLoading, fadeOut, router]);

    return (
        <div className={`flex justify-center items-center flex-col h-screen gap-10 bg-gradient-to-br from-[#19191B] to-[#01011f] transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <audio autoPlay loop>
                <source src="/Music/startup.mp3" type="audio/mp3" />
            </audio>
            <Image
                src={"/Images/logo.png"}
                alt="PANDA GAMING HUB"
                width={300}
                height={400}
                blurDataURL={"/Images/logo.png"}
                placeholder="blur"
            />
            <h1 className="font-poppins font-bold lg:text-[86px] md:text-6xl text-3xl text-white">PANDA GAMING HUB</h1>
            <Loader />
        </div>
    );
}

