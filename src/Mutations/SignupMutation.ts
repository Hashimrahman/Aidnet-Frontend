import { useMutation } from "@tanstack/react-query";
import { api1 } from "../services/api";

interface UserData {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    role: string;
    organization_name?: string;
    skills?: string;
    address: string;
    password: string;
    confirm_password: string;
}

const registerUser = async (userData: UserData) => {
    const response = await api1.post("/user/register/", userData);
    return response.data;
}

export const useSignupMutation = () => {
    return useMutation({
        mutationFn: registerUser,
    })
}

