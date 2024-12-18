import React from 'react';
import NavigationBar from '../Components/NavigationBar';

export default function Homepage() {
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
        <source src="/hreovideo.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'relative', zIndex: 1, color: '#fff', }}>
      <div>
        <div >
          <NavigationBar/>
        </div>
        <div className='flex flex-col lg:mt-[15%] mt-[15%] md:mt-[20rem] text-center justify-center items-center h-full'>
        <h1 className='font-poppins font-bold text-[64px]' >PANDA GAMING HUB</h1>
        <p className='font-roboto lg:text-[30px] text-2xl font-normal'>Gaming, Movies, Accessories & Tournaments in One Place</p>
        <button type="button" className='font-roboto text-[20px] font-light bg-btnbackground rounded-[8px] px-[50px] mt-5 py-[10px]'>Explore Now</button>

        </div>
      
      </div>
      </div>
    </div>
  );
}

