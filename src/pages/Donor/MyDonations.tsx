// import React from "react";

// const MyDonations: React.FC = () => {
//     const requests = [
//         { id: 1, disasterType: "Landslide", location: "Location 1", urgency: "High", status: "Fulfilled", createdAt: "01/02/2025" },
//         { id: 2, disasterType: "Landslide", location: "Location 2", urgency: "Medium", status: "In Progress", createdAt: "01/02/2025" },
//         { id: 3, disasterType: "Earthquake", location: "Location 3", urgency: "Low", status: "Pending", createdAt: "01/02/2025" },
//         { id: 4, disasterType: "Tsunami", location: "Location 4", urgency: "Low", status: "Rejected", createdAt: "01/02/2025" },
//     ];

//     const getStatusColor = (status: string) => {
//         switch (status) {
//             case "Fulfilled": return "text-green-500";
//             case "In Progress": return "text-yellow-500";
//             case "Pending": return "text-yellow-400";
//             case "Rejected": return "text-red-500";
//             default: return "text-white";
//         }
//     };

//     const getUrgencyColor = (status: string) => {
//         switch (status) {
//             case "High": return "text-red-500";
//             case "Medium": return "text-yellow-400";
//             case "Low": return "text-green-500";
//             default: return "";
//         }
//     };

//     return (
//         <div className="min-h-screen p-6 text-white">
//             <h2 className="text-3xl font-semibold mb-6">Your Requests</h2>
//             <div className="">
//                 <table className="w-full border border-gray-700 text-center min-w-[800px]">
//                     <thead>
//                         <tr className="bg-gray-900">
//                             <th className="border border-gray-700 px-4 py-2">Request Id</th>
//                             <th className="border border-gray-700 px-4 py-2">Disaster Type</th>
//                             <th className="border border-gray-700 px-4 py-2">Location</th>
//                             <th className="border border-gray-700 px-4 py-2">Urgency</th>
//                             <th className="border border-gray-700 px-4 py-2">Status</th>
//                             <th className="border border-gray-700 px-4 py-2">Created At</th>
//                             <th className="border border-gray-700 px-4 py-2">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {requests.map((req) => (
//                             <tr key={req.id} className="text-black bg-white border border-gray-700">
//                                 <td className="border border-gray-700 px-4 py-2">{req.id}</td>
//                                 <td className="border border-gray-700 px-4 py-2">{req.disasterType}</td>
//                                 <td className="border border-gray-700 px-4 py-2">{req.location}</td>
//                                 <td className={`border border-gray-700 px-4 py-2 ${getUrgencyColor(req.urgency)}`}>{req.urgency}</td>
//                                 <td className={`border border-gray-700 px-4 py-2 ${getStatusColor(req.status)}`}>{req.status}</td>
//                                 <td className="border border-gray-700 px-4 py-2">{req.createdAt}</td>
//                                 <td className="border border-gray-700 px-4 py-2">
//                                     <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700">Cancel</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default MyDonations;


import React from "react";

const MyDonations: React.FC = () => {
    // Dummy data reflecting the Donation model structure
    const donations = [
        { 
            id: 1, 
            type: "Food", 
            donor_id: 101, 
            quantity: 100, 
            description: "Rice and grains", 
            delivery_method: "Pickup", 
            status: "Available", 
            relief_campaign_id: "b9c9f3f5-e460-4c9c-8d42-16f69d2112cd", 
            createdAt: "01/02/2025"
        },
        { 
            id: 2, 
            type: "Medical Supplies", 
            donor_id: 102, 
            quantity: 50, 
            description: "First aid kits", 
            delivery_method: "Delivered", 
            status: "Delivered", 
            relief_campaign_id: "a3c7e234-985a-438f-9286-8fb2b2cb96a2", 
            createdAt: "01/02/2025"
        },
        { 
            id: 3, 
            type: "Clothing", 
            donor_id: 103, 
            quantity: 200, 
            description: "Winter jackets", 
            delivery_method: "Pickup", 
            status: "Available", 
            relief_campaign_id: "e1d9a1bb-9d7b-4ac4-a9b2-0c8e0810ac3f", 
            createdAt: "02/02/2025"
        },
        { 
            id: 4, 
            type: "Shelter Materials", 
            donor_id: 104, 
            quantity: 100, 
            description: "Tents and tarps", 
            delivery_method: "Delivered", 
            status: "Delivered", 
            relief_campaign_id: "98a5f2a4-5791-476e-bc8c-c195453a2b7f", 
            createdAt: "03/02/2025"
        },
    ];

    // Function to get the correct status color
    const getStatusColor = (status: string) => {
        switch (status) {
            case "Available": return "text-green-500";
            case "Delivered": return "text-blue-500";
            default: return "text-white";
        }
    };

    // Function to get the delivery method color
    const getDeliveryMethodColor = (deliveryMethod: string) => {
        switch (deliveryMethod) {
            case "Pickup": return "text-yellow-500";
            case "Delivered": return "text-blue-500";
            default: return "";
        }
    };

    return (
        <div className="min-h-screen p-6 text-white">
            <h2 className="text-3xl font-semibold mb-6">Your Donations</h2>
            <div className="">
                <table className="w-full border border-gray-700 text-center min-w-[800px]">
                    <thead>
                        <tr className="bg-gray-900">
                            <th className="border border-gray-700 px-4 py-2">Donation Id</th>
                            <th className="border border-gray-700 px-4 py-2">Type</th>
                            <th className="border border-gray-700 px-4 py-2">Quantity</th>
                            <th className="border border-gray-700 px-4 py-2">Delivery Method</th>
                            <th className="border border-gray-700 px-4 py-2">Status</th>
                            <th className="border border-gray-700 px-4 py-2">Created At</th>
                            <th className="border border-gray-700 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map((donation) => (
                            <tr key={donation.id} className="text-black bg-white border border-gray-700">
                                <td className="border border-gray-700 px-4 py-2">{donation.id}</td>
                                <td className="border border-gray-700 px-4 py-2">{donation.type}</td>
                                <td className="border border-gray-700 px-4 py-2">{donation.quantity}</td>
                                <td className={`border border-gray-700 px-4 py-2 ${getDeliveryMethodColor(donation.delivery_method)}`}>
                                    {donation.delivery_method}
                                </td>
                                <td className={`border border-gray-700 px-4 py-2 ${getStatusColor(donation.status)}`}>
                                    {donation.status}
                                </td>
                                <td className="border border-gray-700 px-4 py-2">{donation.createdAt}</td>
                                <td className="border border-gray-700 px-4 py-2">
                                    <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDonations;
