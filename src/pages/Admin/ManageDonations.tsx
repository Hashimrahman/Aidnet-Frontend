import React from "react";
import { Heart, CheckCircle, XCircle, Clock } from "lucide-react";

const donations = [
    { id: 1, title: "Clothes Donation", status: "Pending", icon: <Clock size={20} className="text-yellow-500 inline mr-3" /> },
    { id: 2, title: "Food Donation", status: "Approved", icon: <CheckCircle size={20} className="text-green-500 inline mr-3" /> },
    { id: 3, title: "Medical Supplies", status: "Rejected", icon: <XCircle size={20} className="text-red-500 inline mr-3" /> },
    { id: 4, title: "Water Bottles", status: "Pending", icon: <Clock size={20} className="text-yellow-500 inline mr-3" /> },
];

const ManageDonations: React.FC = () => {
    return (
        <div className="min-h-screen text-white pt-10 px-4 md:px-10">
            <h1 className="text-3xl md:text-4xl font-poppins">Manage Donations</h1>
            <p className="text-gray-400 mt-2">View and update donation offers from contributors.</p>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-4 text-gray-700 font-semibold">Donation</th>
                            <th className="p-4 text-gray-700 font-semibold">Status</th>
                            <th className="p-4 text-gray-700 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map((donation, index) => (
                            <tr key={donation.id} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                                <td className="p-4 items-center gap-3 text-gray-800 ">
                                    <Heart size={20} className="text-[#31B18D] inline mr-3" />
                                    {donation.title}
                                </td>
                                <td className="p-4 items-center gap-2 text-gray-800 ">
                                    {donation.icon}
                                    <span>{donation.status}</span>
                                </td>
                                <td className="p-4 ">
                                    <button className="bg-[#31B18D] text-white px-4 py-2 rounded-lg hover:bg-[#289B77] transition">
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDonations;
