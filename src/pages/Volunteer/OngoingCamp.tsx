import React, { useEffect } from "react";
import camp1 from "../../assets/camp1.jpg";
import { Locate, TriangleAlert, TriangleDashed, Users } from "lucide-react";
import { useCampaignsMutations, useFetchCampaigns } from "../../Mutations/CampaignFetchMutaion";
import { useCampaignStore } from "../../Store/useStore";
// import api from "../../services/api";  // Assuming you have an Axios instance
import { useJoinCampaignMutation } from "../../Mutations/CampParticipationMutation";
import { useLeaveCampaignMutation } from "../../Mutations/CampParticipationMutation";

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

const OngoingCamp: React.FC = () => {
    const { data, error, isLoading } = useFetchCampaigns();
    const { mutate: joinCampaign, isLoading: isJoining, error: joinError } = useJoinCampaignMutation()
    const { mutate: leaveCampaign, isLoading: isLeaving, error: leaveError } = useLeaveCampaignMutation()
    // const setCampaigns = useCampaignStore((state) => state.setCampaigns);

    // useEffect(() => {
    //     mutate();
    // }, [mutate]);

    // useEffect(() => {
    //     if (data) {
    //         setCampaigns(data);
    //         console.log("camps", data)
    //     }
    // }, [data, setCampaigns]);
    console.log("camps user", data)

    const handleJoin = (campaignId: string) => {
        joinCampaign(campaignId)
    };
    const handleLeave = (campaignId: string) => {
        leaveCampaign(campaignId)
        console.log("leaving")
    };

    if (isLoading) return <div className="text-white">Loading campaigns...</div>;
    if (error instanceof Error) return <div>Error: {error.message}</div>;
    if (data && data.length === 0) return <div>No ongoing campaigns available.</div>;


    return (
        <div className="min-h-screen text-white p-6">
            <h2 className="text-3xl font-semibold mb-8 text-left">Ongoing Campaigns</h2>
            <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-1 justify-center">
                {data?.filter(campaign => campaign.status == 'ongoing').map((campaign) => {
                    const isParticipant = campaign.participations.some(
                        (participation) => participation.user_id === Number(localStorage.getItem("userId"))
                    );
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
                })}
            </div>
        </div>
    );
};

export default OngoingCamp;
