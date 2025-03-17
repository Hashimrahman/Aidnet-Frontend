import { useMutation } from "@tanstack/react-query";
import {api1} from "../services/api"

interface LoginData {
    email: string,
    password: string
}

const loginUser = async(loginData: LoginData) =>{
    const response = await api1.post("/user/login/", loginData);
    localStorage.setItem("token", response.data.access_token)
    return response.data;
}

export const useLoginMutation = () =>{
    return useMutation({
        mutationFn: loginUser,
    })
}