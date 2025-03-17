import React from "react";
import { ClipboardList, CheckCircle, XCircle, Clock } from "lucide-react";

const requests = [
    { id: 1, title: "Food Supply", status: "Pending", icon: <Clock size={20} className="text-yellow-500 inline mr-3" /> },
    { id: 2, title: "Medical Aid", status: "Approved", icon: <CheckCircle size={20} className="text-green-500 inline mr-3" /> },
    { id: 3, title: "Shelter Assistance", status: "Rejected", icon: <XCircle size={20} className="text-red-500 inline mr-3" /> },
    { id: 4, title: "Water Supply", status: "Pending", icon: <Clock size={20} className="text-yellow-500 inline mr-3" /> },
];

const ManageRequests: React.FC = () => {
    return (
        <div className="min-h-screen text-white pt-10 px-4 md:px-10">
            <h1 className="text-3xl md:text-4xl font-poppins">Manage Requests</h1>
            <p className="text-gray-400 mt-2">View and update requests from affected users.</p>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
                <table className="w-full min-w-[600px] text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-4 text-gray-700 font-semibold">Request</th>
                            <th className="p-4 text-gray-700 font-semibold">Status</th>
                            <th className="p-4 text-gray-700 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, index) => (
                            <tr key={request.id} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                                <td className="p-4 items-center gap-3 text-gray-800 ">
                                   {/* <div className="flex"> */}
                                   <ClipboardList size={20} className="text-[#31B18D] inline mr-3" />
                                   {request.title}
                                   {/* </div> */}
                                </td>
                                <td className="p-4  items-center gap-2 text-gray-800 ">
                                    {request.icon}
                                    <span>{request.status}</span>
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

export default ManageRequests;
