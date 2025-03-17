import React from "react";
import { Users, CheckCircle, XCircle, Clock } from "lucide-react";

const volunteers = [
    { id: 1, name: "John Doe", status: "Pending", icon: <Clock size={20} className="text-yellow-500 inline mr-3" /> },
    { id: 2, name: "Jane Smith", status: "Approved", icon: <CheckCircle size={20} className="text-green-500 inline mr-3" /> },
    { id: 3, name: "Robert Brown", status: "Rejected", icon: <XCircle size={20} className="text-red-500 inline mr-3" /> },
    { id: 4, name: "Emily White", status: "Pending", icon: <Clock size={20} className="text-yellow-500 inline mr-3" /> },
];

const ManageVolunteers: React.FC = () => {
    return (
        <div className="min-h-screen text-white pt-10 px-4 md:px-10">
            <h1 className="text-3xl md:text-4xl font-poppins">Manage Volunteers</h1>
            <p className="text-gray-400 mt-2">Review and manage volunteer applications.</p>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-4 text-gray-700 font-semibold">Volunteer</th>
                            <th className="p-4 text-gray-700 font-semibold">Status</th>
                            <th className="p-4 text-gray-700 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {volunteers.map((volunteer, index) => (
                            <tr key={volunteer.id} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                                <td className="p-4 items-center gap-3 text-gray-800 ">
                                    <Users size={20} className="text-[#31B18D] inline mr-3" />
                                    {volunteer.name}
                                </td>
                                <td className="p-4 items-center gap-2 text-gray-800 ">
                                    {volunteer.icon}
                                    <span>{volunteer.status}</span>
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

export default ManageVolunteers;
