import React from "react";
import homeImage from '../../assets/home-img.png'

const Home: React.FC = () => {

    return (
        <div className="flex h-screen bg-[#121212] px-6 md:px-12 flex-wrap">
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:p-6 gap-6">
                <h1 className="text-4xl md:text-5xl tracking-widest leading-12 md:leading-16 font-montserrat text-[#D0DAF5] font-bold">Empowering Change, One Step at a Time</h1>
                <div className="flex flex-col gap-4">
                    <p className="text-white text-lg md:text-3xl md:leading-12 font-roboto font-light tracking-widest ">Bringing together volunteers, donors, and those in need to deliver swift, organized disaster relief and support during critical moments.</p>
                    <button className="bg-[#31B18D] text-white font-poppins text-lg tracking-widest font-extralight md:w-1/3 px-12 py-2  rounded-md">Know More</button>
                </div>
            </div>
            <div className="w-full hidden md:w-1/2 md:flex items-center justify-center">
                <img src={homeImage} alt="" className="md:p-28" />
            </div>
        </div>
    )

}
export default Home