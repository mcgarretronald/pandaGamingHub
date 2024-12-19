"use client"
import NavigationBar from './NavigationBar';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <video
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            >
                <source src="Videos/hreovideo.mp4" type="video/mp4" />
            </video>
            <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                <div>
                    <NavigationBar />
                </div>
                <div className="flex flex-col lg:mt-[15%] mt-[15%] md:mt-[20rem] text-center justify-center items-center h-full">
                    <h1 className="font-poppins font-bold text-[64px]">PANDA GAMING HUB</h1>
                    <p className="font-roboto lg:text-[30px] text-2xl font-normal">Gaming, Movies, Accessories & Tournaments in One Place</p>
                    <Link href={'/Movies'}>
                        <button type="button" className="font-roboto text-[20px] font-light bg-btnbackground rounded-[8px] px-[50px] mt-5 py-[10px]">
                            Explore Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
