import React from "react";
import { MapPin, Users, Phone, MessageSquare } from "lucide-react";
import camp1 from '../../assets/camp1.jpg';

const camp = [
    { location: "Location A", capacity: 100, image: camp1 },
    { location: "Location B", capacity: 200, image: camp1 },
];

const notifications = [
    {
        id: 1,
        message: "Flood relief campaign",
        status: "completed on Jan 30, 2025 ✅",
    },
    {
        id: 2,
        message: "Land Slide",
        status: "Started on Feb 5, 2025 ⏳(on going)",
    },
];

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen text-white pt-10 px-4 md:px-10">
            {/* Greeting */}
            <h1 className="text-3xl md:text-4xl font-poppins">Hello Donor,</h1>

            {/* Request Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Total Donations", "Pending Donations", "Fulfilled Donations"].map((title, index) => (
                    <div key={index} className="bg-white text-black p-6 rounded-lg text-center shadow-lg">
                        <p className="text-lg md:text-xl font-semibold">{title}</p>
                        <p className="text-xl md:text-2xl font-bold">10</p>
                    </div>
                ))}
            </div>

            {/* Active Campaigns */}
            <h2 className="text-xl md:text-3xl mt-8 md:mt-20 mb-6 font-poppins">Recent Activities</h2>
            <div className="space-y-4">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className="border-b border-gray-600 pb-4 last:border-b-0"
                    >
                        <p className="text-lg font-medium">{notification.message}</p>
                        <p className="text-gray-400 text-sm">{notification.status}</p>
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

