import React, { useEffect } from "react";
import { Phone, MessageSquare, TriangleDashed, Locate, Users, TriangleAlert } from "lucide-react";
import { useCampaignsMutations } from "../../Mutations/CampaignFetchMutaion";
import { useCampaignStore } from "../../Store/useStore";
import camp1 from '../../assets/camp1.jpg'
import { useJoinCampaignMutation } from "../../Mutations/CampJoinMutation";
import { useLeaveCampaignMutation } from "../../Mutations/CampLeaveMutation";
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

// const activeCampaigns = [
//     {
//         id: 1,
//         location: "Location 1",
//         urgency: "Severe",
//         type: "Flood",
//     },
//     {
//         id: 2,
//         location: "Location 2",
//         urgency: "Minor",
//         type: "Tsunami",
//     },
// ];

const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
        case "High":
            return "text-red-500";
        case "Medium":
            return "text-yellow-500";
        case "Low":
            return "text-green-500";
        default:
            return "";
    }
};

const Dashboard: React.FC = () => {
    const { mutate, data } = useCampaignsMutations();
    const setCampaigns = useCampaignStore((state) => state.setCampaigns);
    const { mutate: joinCampaign} = useJoinCampaignMutation()
        const { mutate: leaveCampaign} = useLeaveCampaignMutation()

    useEffect(() => {
        mutate();
    }, [mutate]);

    useEffect(() => {
        if (data) {
            setCampaigns(data);
            console.log("camps", data)
        }
    }, [data, setCampaigns]);

    const handleJoin = (campaignId: string) => {
        joinCampaign(campaignId)
    };
    const handleLeave = (campaignId: string) => {
        leaveCampaign(campaignId)
        console.log("leaving")
    };


    return (
        <div className="min-h-screen text-white pt-10 px-4 md:px-10">
            {/* Greeting */}
            <h1 className="text-3xl md:text-4xl font-poppins">Hello Volunteer,</h1>

            {/* Request Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Total Missions Completed", "Ongoing Missions", "Total Hours Volunteered"].map((title, index) => (
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
            <h2 className="text-xl md:text-3xl font-poppins mt-8 md:mt-20">Emergency Campaigns</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data?.filter(campaign => campaign.urgency == 'High').length > 0 ? (data?.filter(campaign => campaign.urgency == 'High').map((campaign) => {
                    const isParticipant = campaign.participations.some(
                        (participation) => participation.user_id === Number(localStorage.getItem("userId"))                    );
                    console.log(isParticipant)
                    return (
                        <div
                            key={campaign.id}
                            className="bg-white text-black rounded-lg p-4 flex flex-col md:flex-row shadow-md gap-4 w-full max-w-lg mx-auto"
                        >
                            <div className="md:w-1/3 w-full flex flex-col items-center">
                                <img
                                    src={campaign.image || camp1}
                                    alt={campaign.disasterType}
                                    className="w-full h-32 rounded-md object-cover"
                                />
                                <button
                                    className={`mt-4 ${isParticipant ? 'bg-[#b13131]' : 'bg-[#31B18D]'} bg-[#31B18D] text-white px-4 py-2 rounded-full hover:bg-[#257a62] w-full`}
                                    onClick={() => isParticipant ? handleLeave(campaign.id) : handleJoin(campaign.id)} // Use handleLeave if participant
                                >
                                    {isParticipant ? "Leave Campaign" : "Join Campaign"}
                                </button>
                            </div>

                            <div className="mt-4 flex flex-col gap-2 items-start sm:w-2/3 w-full">
                                <p className="flex flex-col md:flex-row md:gap-2 md:items-center text-lg">
                                    <TriangleDashed className="hidden md:flex" /> <span className="font-semibold">Name:</span> {campaign.name}
                                </p>
                                <p className="flex flex-col md:flex-row md:gap-2 md:items-center text-lg">
                                    <Locate className="hidden md:flex" /> <span className="font-semibold">Location:</span> {campaign.location}
                                </p>
                                <p className="flex md:gap-2 md:items-center text-lg gap-2">
                                    <Users className="hidden md:flex" /> <span className="font-semibold">Capacity:</span> {campaign.max_capacity}
                                </p>
                                <p className="flex flex-col md:flex-row md:gap-2 md:items-center text-lg">
                                    <Users className="hidden md:flex" /> <span className="font-semibold">Volunteers needed:</span> {Math.abs(campaign.volunteers_required - campaign.volunteers_registered)}
                                </p>
                                <p className={`font-semibold ${getUrgencyColor(campaign.urgency)} flex flex-col md:flex-row md:gap-2 md:items-center text-lg`}>
                                    <TriangleAlert /> Urgency: {campaign.urgency}
                                </p>
                            </div>
                        </div>
                    )
                })) : <h1 className="opacity-55">No High Emergency Campaigns</h1>}
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

