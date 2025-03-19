import { api4 } from "../services/api";

export const cancelRequest = async (requestId: number) => {
    const token = localStorage.getItem("token");
    const response = await api4.patch(`/requests/${requestId}/cancel/`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCancelRequestMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: cancelRequest,
        onSuccess: () => {
            queryClient.invalidateQueries(["requests"]); 
        },
        onError: (error) => {
            console.error("Failed to cancel request:", error);
            alert("Failed to cancel request!");
        },
    });
};
