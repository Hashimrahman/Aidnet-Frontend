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

interface RequestFormState {
    formData: {
        disasterType: string,
        location: string,
        urgencyLevel: string,
        assistanceType: string,
        additionalDetails: string,
    }
    setFormData: (name: string, value: string) => void;
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


export const useRequestStore = create<RequestFormState>((set) => ({
    formData: {
        disasterType: '',
        location: '',
        urgencyLevel: '',
        assistanceType: '',
        additionalDetails: '',
    },
    setFormData: (name, value) =>
        set((state) => ({
            formData: { ...state.formData, [name]: value },
        })),
    resetForm: () =>
        set({
            formData: {
                disasterType: '',
                location: '',
                urgencyLevel: '',
                assistanceType: '',
                additionalDetails: '',
            }
        })
}))


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
                assistanceType: '',
                description: '',
                modeOfDelivery: 'pickup',
            }
        })
}));
