import { useQuery } from "@tanstack/react-query"
import { api1 } from "../services/api"

export const fecthUser = async () =>{
    const token = localStorage.getItem("token")
    const response = await api1.get('/user/user-list/',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}

export const useFetchUsers = () =>{
    return useQuery({
        queryKey: ["users"],
        queryFn: fecthUser,
        staleTime: 1000 * 60 * 5,
    })
}