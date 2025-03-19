import React from "react";
import { create } from "zustand";


// ================================================ INTERFACES ================================================

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

interface SignupState {
    formData: {
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        role: string;
        organization_name: string;
        skills: string;
        address: string;
        password: string;
        confirm_password: string;
    };
    setFormData: (name: string, value: string) => void;
    resetForm: () => void;
}

interface Request {
    id: number;
    requested_user_id: number;
    location: string;
    request_type: "medical" | "food" | "shelter";
    urgency_level: "low" | "medium" | "high";
    details: string | null;
    quantity: number;
    status: "pending" | "approved" | "rejected";
    created_at: string;
    updated_at: string;
}


interface RequestState {
    formData: {
        request_type: string;
        location: string;
        urgency_level: string;
        details: string;
        quantity: number;
    };
    requests: Request[];
    setFormData: (name: string, value: string | number) => void;
    resetForm: () => void;
    setRequests: (requests: Request[]) => void;
    addRequest: (request: Request) => void;
    updateRequest: (updatedRequest: Request) => void;
    removeRequest: (id: number) => void;
}

interface RequestFormState {
    formData: {
        request_type: string,
        location: string,
        urgency_level: string,
        details: string,
        quantity: number
    }
    setFormData: (name: string, value: string | number) => void;
    resetForm: () => void;
}


interface Campaign {
    id: string;
    name: string;
    description: string | null;
    location: string;
    start_date: string;
    status: string;
    organizer: number;
    collected_amount: string;
    max_capacity: number;
    remaining_capacity: number;
    volunteers_required: number;
    volunteers_registered: number;
    participations: Array<{ id: string; user_id: string; participant_type: string; joined_at: string }>;
}

interface AllCampaigns {
    campaigns: Campaign[],
    setCampaigns: (campaigns: Campaign[]) => void
}


interface DonationFormState {
    formData: {
        amount: number,
        donationType: string,
        description: string,
        modeOfDelivery: 'pickup' | 'delivery';
    }
    setFormData: (name: string, value: string) => void;
    resetForm: () => void;
}



// ================================================ STATES ================================================

export const useCounterState = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
}))

export const useSignupStore = create<SignupState>((set) => ({
    formData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        role: "",
        organization_name: "",
        skills: "",
        address: "",
        password: "",
        confirm_password: "",
    },
    setFormData: (name, value) =>
        set((state) => ({
            formData: { ...state.formData, [name]: value }
        })),
    resetForm: () =>
        set({
            formData: {
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                role: "",
                organization_name: "",
                skills: "",
                address: "",
                password: "",
                confirm_password: "",
            }
        })
}));


// export const useRequestStore = create<RequestFormState>((set) => ({
//     formData: {
//         disasterType: '',
//         location: '',
//         urgencyLevel: '',
//         assistanceType: '',
//         additionalDetails: '',
//     },
//     setFormData: (name, value) =>
//         set((state) => ({
//             formData: { ...state.formData, [name]: value },
//         })),
//     resetForm: () =>
//         set({
//             formData: {
//                 disasterType: '',
//                 location: '',
//                 urgencyLevel: '',
//                 assistanceType: '',
//                 additionalDetails: '',
//             }
//         })
// }))
// export const useRequestStore = create<RequestFormState>((set) => ({
//     formData: {
//         request_type: '',
//         location: '',
//         urgency_level: '',
//         details: '',
//         quantity: 1,
//     },
//     setFormData: (name, value) =>
//         set((state) => ({
//             formData: { ...state.formData, [name]: value },
//         })),
//     resetForm: () =>
//         set({
//             formData: {
//                 request_type: '',
//                 location: '',
//                 urgency_level: '',
//                 details: '',
//                 quantity: 1,
//             }
//         })
// }));


export const useRequestStore = create<RequestState>((set) => ({
    formData: {
        request_type: "",
        location: "",
        urgency_level: "",
        details: "",
        quantity: 1,
    },
    requests: [],

    setFormData: (name, value) =>
        set((state) => ({
            formData: { ...state.formData, [name]: value },
        })),

    resetForm: () =>
        set({
            formData: {
                request_type: "",
                location: "",
                urgency_level: "",
                details: "",
                quantity: 1,
            },
        }),

    setRequests: (requests) => set({ requests }),

    addRequest: (request) =>
        set((state) => ({ requests: [...state.requests, request] })),

    updateRequest: (updatedRequest) =>
        set((state) => ({
            requests: state.requests.map((req) =>
                req.id === updatedRequest.id ? updatedRequest : req
            ),
        })),

    removeRequest: (id) =>
        set((state) => ({
            requests: state.requests.filter((req) => req.id !== id),
        })),
}));


export const useCampaignStore = create<AllCampaigns>((set) => ({
    campaigns: [],
    setCampaigns: (campaigns) => set({ campaigns }),
}))


export const useDonationStore = create<DonationFormState>((set) => ({
    formData: {
        amount: 0,
        donationType: '',
        description: '',
        modeOfDelivery: 'pickup',
    },
    setFormData: (name, value) =>
        set((state) => ({
            formData: { ...state.formData, [name]: value },
        })),
    resetForm: () =>
        set({
            formData: {
                amount: 0,
                donationType: '',
                description: '',
                modeOfDelivery: 'pickup',
            }
        })
}));
