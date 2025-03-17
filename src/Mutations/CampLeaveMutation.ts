import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { api2 } from "../services/api"
const token = localStorage.getItem("token")

const leaveCamp = async (campaignId: string) =>{
    const response = await api2.delete(`/campaigns/${campaignId}/leave/`,
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

export const useLeaveCampaignMutation = () => {
    return useMutation({
        mutationFn: leaveCamp,
        onSuccess: (data) =>{
            toast.success("Successfully Left Camp!", { position: "top-right" });
            console.log("successfully joined camp", data)
        },
        onError: (err) =>{
            toast.error("Failed to Left Camp!", { position: "top-right" });
            console.error("Failed to join camp", err)
        }
    })
}