import { useMutation, useQuery } from "@tanstack/react-query"
import { api4 } from "../services/api"



export const fetchRequests = async () =>{
    const token = localStorage.getItem("token")
    const response = await api4.get('/requests/create-get/',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}

export const useFetchRequests = () =>{
    return useQuery({
        queryKey: ["requests"],
        queryFn: fetchRequests,
        staleTime: 1000 * 60 * 5,
    })
}