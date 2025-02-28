// import React from "react";
// import aboutImage from '../../assets/about-image.png'

// const About: React.FC = () => {
//     return (
//         <div className="flex h-screen bg-[#121212] px-6 md:px-12 flex-wrap justify-center">
            
//             <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:p-6 gap-6">
//                 <h1 className="text-4xl md:text-5xl tracking-widest leading-12 md:leading-16 font-montserrat font-bold gradient-underline text-[#D0DAF5]">About</h1>
//                 <div className="flex flex-col gap-4">
//                     <p className="text-white text-md md:text-2xl md:leading-10 font-roboto font-light tracking-widest text-justify">AidNet is a dynamic platform dedicated to connecting volunteers, donors, and disaster-affected communities. Our mission is to <span className="text-[#31B18D] text-md md:text-2xl">create a seamless, organized response to crises by enabling quick and efficient aid delivery.</span> Through collaboration, we empower individuals and organizations to make a lasting impact, ensuring no one faces disaster alone.</p>
//                 </div>
//             </div>
//             <div className="w-4/5 h-1/2 md:h-full md:w-1/2 flex items-center justify-center">
//                 <img src={aboutImage} alt="" className="md:p-28" />
//             </div>
            
//         </div>
//     )

// }
// export default About
import React from "react";
import aboutImage from '../../assets/about-image.png';

const About: React.FC = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse h-auto bg-[#121212] px-6 md:px-12 py-8 md:py-16">
            
            {/* Text section */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:p-6 gap-6">
                <h1 className="text-3xl md:text-5xl tracking-widest leading-12 md:leading-16 font-montserrat font-bold gradient-underline text-[#858585]">
                    About
                </h1>
                <div className="flex flex-col gap-4">
                    <p className="text-white text-lg md:text-2xl md:leading-10 font-roboto font-light tracking-widest text-justify">
                        AidNet is a dynamic platform dedicated to connecting volunteers, donors, and disaster-affected communities. Our mission is to&nbsp;
                        <span className="text-[#31B18D] text-lg md:text-2xl">
                            create a seamless, organized response to crises by enabling quick and efficient aid delivery.
                        </span> 
                        Through collaboration, we empower individuals and organizations to make a lasting impact, ensuring no one faces disaster alone.
                    </p>
                </div>
            </div>
            
            {/* Image section */}
            <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
                <img src={aboutImage} alt="About Image" className="w-3/4 md:w-auto md:p-28" />
            </div>
            
        </div>
    );
}

export default About;
