import React, { useState, useEffect } from "react";
import icon from '../../assets/icon.png';
import logo from '../../assets/logo.png';
import {
    Bell, ClipboardType, HandHelping, LayoutDashboard,
    List, MessageCircle, MessageSquare
} from "lucide-react";

import Dashboard from "./Dashboard";
import RequestForm from "./RequestForm";
import MyRequests from "./MyRequests";
import DonationOffers from "./DonationOffers";
// import Chat from "./Chat";
import Chat from '../../components/Chat/Chat'
import Notifications from "./Notifications";
import Feedback from "./Feedback";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import AIChatPopup from "../../components/AiChat/AiChatPopUp";

const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
    { id: "request-help", label: "Request Help", icon: <HandHelping /> },
    { id: "my-requests", label: "My Requests", icon: <List /> },
    { id: "donation-offers", label: "Donation Offers", icon: <HandHelping /> },
    { id: "chat", label: "Chat Room", icon: <MessageSquare /> },
    { id: "notifications", label: "Notifications", icon: <Bell /> },
    { id: "feedback", label: "Feedback", icon: <ClipboardType /> }
];

const componentMap: Record<string, React.FC> = {
    "dashboard": Dashboard,
    "request-help": RequestForm,
    "my-requests": MyRequests,
    "donation-offers": DonationOffers,
    "chat": Chat,
    "notifications": Notifications,
    "feedback": Feedback
};

const UserDashboard: React.FC = () => {
    const [activeItem, setActiveItem] = useState("dashboard");
    const [isExpanded, setIsExpanded] = useState(false);
    const [showText, setShowText] = useState(false);
    const navigate = useNavigate()
    const token: string | null = localStorage.getItem('token')
    const role: string | null = localStorage.getItem('role')
    const queryClient = useQueryClient()

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isExpanded) {
            timer = setTimeout(() => setShowText(true), 150);
        } else {
            setShowText(false);
        }
        return () => clearTimeout(timer);
    }, [isExpanded]);

    const ActiveComponent = componentMap[activeItem];

    const handleLogout = () => {
        console.log("logout")
        localStorage.clear()
        navigate('/')
    }

    return (
        role == 'affected' ? (
            <div className="w-full min-h-screen flex bg-[#121212]">
                <div className={`${activeItem === 'chat' ? "hidden" : "flex"}`}>
                    <AIChatPopup />
                </div>
                {/* sidebar */}
                <div
                    className={`fixed left-0 h-screen bg-[#1E1E1E] py-4 transition-all duration-300 ${isExpanded ? "w-64" : "w-20"
                        }`}
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                >
                    <div className="p-4 flex items-center justify-center h-16">
                        {!showText && <img src={icon} alt="aid net logo" className="ml-2 transition-opacity h-10 duration-300" />}
                        {showText && <img src={logo} alt="aid net logo" className="transition-opacity h-16 duration-300" />}

                    </div>

                    <div className="flex flex-col gap-3 items-center mt-6 scroll-auto">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                className={`w-[90%] py-2 rounded-md flex items-center transition-all duration-100 ${activeItem === item.id ? "bg-[#31B18D] text-white" : "bg-[#D0DAF5] text-black"
                                    } ${isExpanded ? "pl-6 gap-x-4" : "justify-center"}`}
                                onClick={() => setActiveItem(item.id)}
                            >
                                {item.icon}
                                {showText && <span className="flex-1 text-left transition-opacity duration-100">{item.label}</span>}
                            </button>
                        ))}
                    </div>
                    <div className="flex w-full justify-center">
                        <button className="text-white fixed bottom-10" onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
                {/* active content */}
                <div className="ml-20 flex-1 md:p-6 overflow-x-auto">
                    <ActiveComponent />
                </div>
            </div>) : (
            <div className="w-full flex min-h-screen bg-[#121212] text-white p-10">
                <div>

                    <h1 className="text-3xl">Access Denied!!</h1>
                    <button onClick={() => navigate('/')} className="bg-green-500 px-4 py-2 mt-6 rounded-md">Go Home</button>
                </div>
            </div>
        )
    );
};

export default UserDashboard;
