import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { api2 } from "../services/api"
const token = localStorage.getItem("token")

const joinCamp = async (campaignId: string) =>{
    const response = await api2.post(`/campaigns/${campaignId}/participation/`,
        {
            "action" : "join"
        },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const leaveCamp = async(campaignId: string) =>{
    const response = await api2.post(`/campaigns/${campaignId}/participation/`,
        {
            "action" : "leave"
        },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    )
}

export const useJoinCampaignMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: joinCamp,
        onSuccess: (data) =>{
            toast.success("Successfully Joined Camp!", { position: "top-right" });
            queryClient.invalidateQueries(["campaigns"]); 
            console.log("successfully joined camp", data)
        },
        onError: (err) =>{
            toast.error("Failed to Join Camp!", { position: "top-right" });
            console.error("Failed to join camp", err)
        }
    })
}

export const useLeaveCampaignMutation = () =>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: leaveCamp,
        onSuccess: (data) =>{
            toast.success("Successfully Left Camp!", {position: "top-right"});
            queryClient.invalidateQueries(["campaigns"]); 
            console.log("Scuccessfully left camp", data)
        },
        onError: (err) =>{
            toast.error("Failed to leave camp!", {position: "top-right"})
            console.error("Failed to leace camp", err)
        }
    })
}