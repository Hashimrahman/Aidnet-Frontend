// import { useMutation } from "@tanstack/react-query";
// import { api4 } from "../services/api";


// interface RequestData {
//     title: string;
//     description: string;
//     category: string;
//     quantity: number;
//     locatoin: string;
// }
// const createRequest = async (requestData: RequestData) => {
//     const token = localStorage.getItem("token")
//     const response = await api4.post('/requests/create-get/', requestData, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
//     return response.data
// }

// export const useCreateRequestMutation = () => {
//     return useMutation({
//         mutationFn: createRequest
//     })
// }

import { useMutation } from "@tanstack/react-query";
import { api4 } from "../services/api";

interface RequestData {
    request_type: string;
    location: string;
    urgency_level: string;
    details: string;
    quantity: number;
}

const createRequest = async (requestData: RequestData) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User not authenticated");

        const response = await api4.post('/requests/create-get/', requestData, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
    } catch (error: any) {
        console.error("Error creating request:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Failed to create request");
    }
};

export const useCreateRequestMutation = () => {
    return useMutation({
        mutationFn: createRequest
    });
};
