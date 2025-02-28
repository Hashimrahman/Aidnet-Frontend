import { useMutation } from "@tanstack/react-query";
import api from "../services/api"

interface LoginData {
    email: string,
    password: string
}

const loginUser = async(loginData: LoginData) =>{
    const response = await api.post("/user/login/", loginData);
    localStorage.setItem("token", response.data.access_token)
    return response.data;
}

export const useLoginMutation = () =>{
    return useMutation({
        mutationFn: loginUser,
    })
}