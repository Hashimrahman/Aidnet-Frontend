import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const token = localStorage.getItem("token")
export const fetchUserCampaigns = async () => {
    const response = await axios.get('http://localhost:8001/campaigns/user-campaigns/',
        {
            headers :{
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

export const useUserCampaignsMutations = () =>{
    return useMutation({
        mutationFn: fetchUserCampaigns
    })
}