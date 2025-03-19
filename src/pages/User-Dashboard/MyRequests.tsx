import React from "react";
import { useFetchRequests } from "../../Mutations/RequestFetchMutaion";
import { useCancelRequestMutation } from "../../Mutations/useCancelRequestMutation";

const MyRequests: React.FC = () => {
    const { data: requests, isLoading, isError } = useFetchRequests()
    // const requests = [
    //     { id: 1, disasterType: "Landslide", location: "Location 1", urgency: "High", status: "Fulfilled", createdAt: "01/02/2025" },
    //     { id: 2, disasterType: "Landslide", location: "Location 2", urgency: "Medium", status: "In Progress", createdAt: "01/02/2025" },
    //     { id: 3, disasterType: "Earthquake", location: "Location 3", urgency: "Low", status: "Pending", createdAt: "01/02/2025" },
    //     { id: 4, disasterType: "Tsunami", location: "Location 4", urgency: "Low", status: "Rejected", createdAt: "01/02/2025" },
    // ];
    const cancelMutation = useCancelRequestMutation();

    const handleCancel = (requestId: number) => {
        if (window.confirm("Are you sure you want to cancel this request?")) {
            cancelMutation.mutate(requestId);
        }
    };

    console.log("request", requests)
    const userId = localStorage.getItem("userId")

    const getStatusColor = (status: string) => {
        switch (status) {
            case "pending": return "text-yellow-400";
            case "resolved": return "text-green-500";
            case "rejected": return "text-red-500";
            case "cancelled": return "text-orange-500";
            default: return "text-white";
        }
    };

    const getUrgencyColor = (status: string) => {
        switch (status) {
            case "high": return "text-red-500";
            case "medium": return "text-yellow-400";
            case "low": return "text-green-500";
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
                            <th className="border border-gray-700 px-4 py-2">Request Type</th>
                            <th className="border border-gray-700 px-4 py-2">Location</th>
                            <th className="border border-gray-700 px-4 py-2">Urgency</th>
                            <th className="border border-gray-700 px-4 py-2">Status</th>
                            <th className="border border-gray-700 px-4 py-2">Created At</th>
                            <th className="border border-gray-700 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {requests?.filter((req)=> req.requested_user_id == userId).map((req) => (
                            <tr key={req.id} className="text-black bg-white border border-gray-700">
                                <td className="border border-gray-700 px-4 py-2">{req.id}</td>
                                <td className="border border-gray-700 px-4 py-2">{req.request_type}</td>
                                <td className="border border-gray-700 px-4 py-2">{req.location}</td>
                                <td className={`border border-gray-700 px-4 py-2 ${getUrgencyColor(req.urgency_level)}`}>{req.urgency_level}</td>
                                <td className={`border border-gray-700 px-4 py-2 ${getStatusColor(req.status)}`}>{req.status}</td>
                                <td className="border border-gray-700 px-4 py-2">{new Date(req.created_at).toLocaleString().split(",").join(" -")}</td>
                                <td className="border border-gray-700 px-4 py-2">
                                    <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700">Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody> */}
                    <tbody>
                        {requests?.filter((req) => req.requested_user_id == userId).length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center border border-gray-700 px-4 py-2">No requests yet</td>
                            </tr>
                        ) : (
                            requests?.filter((req) => req.requested_user_id == userId).map((req) => (
                                <tr key={req.id} className="text-black bg-white border border-gray-700">
                                    <td className="border border-gray-700 px-4 py-2">{req.id}</td>
                                    <td className="border border-gray-700 px-4 py-2">{req.request_type}</td>
                                    <td className="border border-gray-700 px-4 py-2">{req.location}</td>
                                    <td className={`border border-gray-700 px-4 py-2 ${getUrgencyColor(req.urgency_level)}`}>{req.urgency_level}</td>
                                    <td className={`border border-gray-700 px-4 py-2 ${getStatusColor(req.status)}`}>{req.status}</td>
                                    <td className="border border-gray-700 px-4 py-2">{new Date(req.created_at).toLocaleString().split(",").join(" -")}</td>
                                    <td className="border border-gray-700 px-4 py-2">
                                        {/* <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700">Cancel</button> */}
                                        {!req.is_cancelled ? (
                                            <button
                                                onClick={()=>handleCancel(req.id)}
                                                className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                                                disabled={cancelMutation.isPending}
                                            >
                                                {cancelMutation.isPending ? "Cancelling..." : "Cancel Request"}
                                            </button>
                                        ) : (
                                            <p className="text-red-400 mt-2">Request Cancelled</p>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyRequests;
