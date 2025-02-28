import React from "react";

const MyRequests: React.FC = () => {
    const requests = [
        { id: 1, disasterType: "Landslide", location: "Location 1", urgency: "High", status: "Fulfilled", createdAt: "01/02/2025" },
        { id: 2, disasterType: "Landslide", location: "Location 2", urgency: "Medium", status: "In Progress", createdAt: "01/02/2025" },
        { id: 3, disasterType: "Earthquake", location: "Location 3", urgency: "Low", status: "Pending", createdAt: "01/02/2025" },
        { id: 4, disasterType: "Tsunami", location: "Location 4", urgency: "Low", status: "Rejected", createdAt: "01/02/2025" },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Fulfilled": return "text-green-500";
            case "In Progress": return "text-yellow-500";
            case "Pending": return "text-yellow-400";
            case "Rejected": return "text-red-500";
            default: return "text-white";
        }
    };

    const getUrgencyColor = (status: string) => {
        switch (status) {
            case "High": return "text-red-500";
            case "Medium": return "text-yellow-400";
            case "Low": return "text-green-500";
            default: return "";
        }
    };

    return (
        <div className="min-h-screen p-6 text-white">
            <h2 className="text-3xl font-semibold mb-6">Your Requests</h2>
            <div className="">
                <table className="w-full border border-gray-700 text-center min-w-[800px]">
                    <thead>
                        <tr className="bg-gray-900">
                            <th className="border border-gray-700 px-4 py-2">Request Id</th>
                            <th className="border border-gray-700 px-4 py-2">Disaster Type</th>
                            <th className="border border-gray-700 px-4 py-2">Location</th>
                            <th className="border border-gray-700 px-4 py-2">Urgency</th>
                            <th className="border border-gray-700 px-4 py-2">Status</th>
                            <th className="border border-gray-700 px-4 py-2">Created At</th>
                            <th className="border border-gray-700 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req) => (
                            <tr key={req.id} className="text-black bg-white border border-gray-700">
                                <td className="border border-gray-700 px-4 py-2">{req.id}</td>
                                <td className="border border-gray-700 px-4 py-2">{req.disasterType}</td>
                                <td className="border border-gray-700 px-4 py-2">{req.location}</td>
                                <td className={`border border-gray-700 px-4 py-2 ${getUrgencyColor(req.urgency)}`}>{req.urgency}</td>
                                <td className={`border border-gray-700 px-4 py-2 ${getStatusColor(req.status)}`}>{req.status}</td>
                                <td className="border border-gray-700 px-4 py-2">{req.createdAt}</td>
                                <td className="border border-gray-700 px-4 py-2">
                                    <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700">Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRequests;
