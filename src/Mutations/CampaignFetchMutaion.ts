import { useMutation } from "@tanstack/react-query";
import { api2 } from "../services/api";


// interface Campaign {
//     id: string;
//     name: string;
//     description: string | null;
//     location: string;
//     start_date: string;
//     status: string;
//     organizer: number;
//     collected_amount: string;
//     max_capacity: number;
//     remaining_capacity: number;
//     volunteers_required: number;
//     volunteers_registered: number;
//     participations: Array<{ id: string; user_id: string; participant_type: string; joined_at: string }>;
// }

export const fetchCampaigns = async () =>{
    const response = await api2.get('/campaigns/get-create-campaigns/');
    return response.data
}

export const useCampaignsMutations = () =>{
    return useMutation({
        mutationFn: fetchCampaigns
    })
}