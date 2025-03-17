import React from "react";
import { Users, CheckCircle, XCircle, Clock, ClipboardList, HeartHandshake, HelpingHand } from "lucide-react";
import { useParams } from "react-router-dom";

const userData = {
    id: 1,
    name: "John Doe",
    role: "Volunteer",
    email: "john@example.com",
    status: "Active",
    createdAt: "2025-03-10",
    activities: ["Delivered food to Camp A", "Medical aid support at Zone B"],
    donations: ["Donated $500 for relief fund", "Supplied 100 water bottles"],
    requests: ["Requested medical aid for Zone C", "Need urgent food supplies"],
};

const UserDetails: React.FC = () => {
    const { userId } = useParams(); // Fetching dynamic user ID from URL

    return (
        <div className="min-h-screen text-white pt-10 px-4 md:px-10">
            <h1 className="text-3xl md:text-4xl font-poppins">User Details</h1>
            <p className="text-gray-400 mt-2">View detailed information about the user.</p>

            {/* Basic Details Card */}
            <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800">Basic Information</h2>
                <div className="mt-4 text-gray-700">
                    <p><strong>User ID:</strong> {userData.id}</p>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Role:</strong> {userData.role}</p>
                    <p><strong>Status:</strong> <span className={`inline-flex items-center gap-2 ${userData.status === "Active" ? "text-green-500" : "text-red-500"}`}>
                        {userData.status === "Active" ? <CheckCircle size={16} /> : <XCircle size={16} />}
                        {userData.status}
                    </span></p>
                    <p><strong>Created At:</strong> {userData.createdAt}</p>
                </div>
            </div>

            {/* Role-Specific Details */}
            {userData.role === "Volunteer" && (
                <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                        <HelpingHand size={24} className="text-blue-500" /> Volunteer Activities
                    </h2>
                    <ul className="mt-4 text-gray-700 list-disc pl-5">
                        {userData.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                        ))}
                    </ul>
                </div>
            )}

            {userData.role === "Donor" && (
                <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                        <HeartHandshake size={24} className="text-green-500" /> Donations
                    </h2>
                    <ul className="mt-4 text-gray-700 list-disc pl-5">
                        {userData.donations.map((donation, index) => (
                            <li key={index}>{donation}</li>
                        ))}
                    </ul>
                </div>
            )}

            {userData.role === "Affected" && (
                <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                        <ClipboardList size={24} className="text-yellow-500" /> Requests
                    </h2>
                    <ul className="mt-4 text-gray-700 list-disc pl-5">
                        {userData.requests.map((request, index) => (
                            <li key={index}>{request}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="mt-6 flex gap-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                    Delete User
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                    Ban User
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                    Go Back
                </button>
            </div>

        </div>
    );
};

export default UserDetails;
