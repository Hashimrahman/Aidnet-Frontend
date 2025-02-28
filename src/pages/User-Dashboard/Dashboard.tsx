import React from "react";
import { MapPin, Users, Phone, MessageSquare } from "lucide-react";
import camp1 from '../../assets/camp1.jpg';

const camp = [
    { location: "Location A", capacity: 100, image: camp1 },
    { location: "Location B", capacity: 200, image: camp1 },
];

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen text-white pt-10 px-4 md:px-10">
            {/* Greeting */}
            <h1 className="text-3xl md:text-4xl font-poppins">Hello User,</h1>

            {/* Request Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Total Requests", "Pending Requests", "Fulfilled Requests"].map((title, index) => (
                    <div key={index} className="bg-white text-black p-6 rounded-lg text-center shadow-lg">
                        <p className="text-lg md:text-xl font-semibold">{title}</p>
                        <p className="text-xl md:text-2xl font-bold">10</p>
                    </div>
                ))}
            </div>

            {/* Active Campaigns */}
            <h2 className="text-xl md:text-2xl font-semibold mt-8">Active Campaigns</h2>
            <div className="mt-4 flex flex-wrap gap-6 justify-center lg:justify-start">
                {camp.map((item, index) => (
                    <div key={index} className="bg-white text-black p-4 rounded-lg flex flex-col md:flex-row items-center w-full md:w-[400px] shadow-lg">
                        <img src={item.image} alt="Campaign" className="rounded-md w-24 h-24 object-cover" />
                        <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
                            <p className="flex items-center gap-1 justify-center md:justify-start"><MapPin size={16} /> <span>Location: {item.location}</span></p>
                            <p className="flex items-center gap-1 justify-center md:justify-start"><Users size={16} /> <span>Capacity: {item.capacity}</span></p>
                            <button className="mt-3 bg-[#31B18D] text-white px-5 py-2 rounded-full hover:bg-[#289a79] transition">
                                Join
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact Section */}
            <h2 className="text-xl md:text-2xl font-semibold mt-8">Contact Us</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2].map((_, index) => (
                    <div key={index} className="border border-gray-600 p-6 rounded-lg shadow-lg text-center sm:text-left">
                        <p className="font-semibold text-lg">Site Administrator</p>
                        <p className="mt-2 text-gray-300">Name: Admin</p>
                        <p className="flex items-center gap-2 justify-center sm:justify-start text-gray-300"><Phone size={16} /> 123-456-7890</p>
                        <p className="flex items-center gap-2 justify-center sm:justify-start text-gray-300"><MessageSquare size={16} /> admin@example.com</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

