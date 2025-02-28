import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"
const token = localStorage.getItem("token")

const joinCamp = async (campaignId: string) =>{
    const response = await axios.post(`http://localhost:8001/campaigns/${campaignId}/join/`,
        {},
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

export const useJoinCampaignMutation = () => {
    return useMutation({
        mutationFn: joinCamp,
        onSuccess: (data) =>{
            toast.success("Successfully Joined Camp!", { position: "top-right" });
            console.log("successfully joined camp", data)
        },
        onError: (err) =>{
            toast.error("Failed to Join Camp!", { position: "top-right" });
            console.error("Failed to join camp", err)
        }
    })
}