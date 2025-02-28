import React from "react";
import food from '../../assets/food.png'

const donations = [
    { id: 1, item: "Food", description: "10kg rice bags available", status: "Available", image: food },
    { id: 2, item: "Food", description: "10kg rice bags available", status: "Available", image: food },
    { id: 3, item: "Food", description: "10kg rice bags available", status: "Available", image: food },
    { id: 4, item: "Food", description: "10kg rice bags available", status: "Available", image: food },
    { id: 5, item: "Food", description: "10kg rice bags available", status: "Available", image: food },
    { id: 6, item: "Food", description: "10kg rice bags available", status: "Available", image: food },
];

const DonationOffers: React.FC = () => {
    return (
        <div className="min-h-screen text-white p-6">
            <h2 className="text-3xl font-poppins mb-12">Available Donations</h2>
            <div className="flex flex-wrap justify-start gap-12">
                {donations.map((donation) => (
                    <div key={donation.id} className="bg-white text-black p-4 rounded-xl shadow-lg w-64 flex flex-col items-center">
                        <img src={donation.image} alt="Food" className="w-full  mb-4" />
                        <div className="w-full">
                        <h3 className="text-lg font-semibold">Item : {donation.item}</h3>
                        <p className="text-sm text-gray-600">{donation.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span className="text-green-500 text-sm">{donation.status}</span>
                        </div>
                        <button className="mt-3 bg-[#93E5A9] text-black px-6 py-1 rounded-md hover:bg-[#89f6a6] hover:cursor-pointer">Claim</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonationOffers;
