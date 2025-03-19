import { useQuery } from "@tanstack/react-query"
import { api3 } from "../services/api"


export const fetchDonations = async () =>{
    const token = localStorage.getItem("token")
    const res = await api3.get('/donations/all-donations/',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    console.log("tets",res.data)
    return res.data
}

export const useFetchDonations = ()=>{
    return useQuery({
        queryKey: ["donations"],
        queryFn: fetchDonations,
        staleTime: 1000 * 60 * 5
    })
}