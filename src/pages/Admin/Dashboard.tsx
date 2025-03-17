import React from "react";
import { Users, ClipboardList, HandHelping, Bell, Activity } from "lucide-react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const stats = [
    { title: "Total Users", count: 250, icon: <Users size={28} className="text-[#31B18D]" /> },
    { title: "Total Requests", count: 180, icon: <ClipboardList size={28} className="text-[#31B18D]" /> },
    { title: "Pending Donations", count: 50, icon: <HandHelping size={28} className="text-[#31B18D]" /> },
    { title: "Active Campaigns", count: 8, icon: <Activity size={28} className="text-[#31B18D]" /> },
    { title: "Notifications", count: 12, icon: <Bell size={28} className="text-[#31B18D]" /> },
];

// Bar Chart - Platform Statistics
const barData = {
    labels: ["Users", "Requests", "Donations", "Campaigns", "Notifications"],
    datasets: [
        {
            label: "Platform Stats",
            data: [250, 180, 50, 8, 12],
            backgroundColor: ["#31B18D", "#4F46E5", "#FACC15", "#EF4444", "#3B82F6"],
        },
    ],
};

// Doughnut Chart - User Distribution
// const doughnutData = {
//     labels: ["Volunteers", "Donors", "Affected Users", "Admins"],
//     datasets: [
//         {
//             label: "User Roles",
//             data: [120, 80, 40, 10], // Example user role distribution
//             backgroundColor: ["#1E90FF", "#FF8C00", "#FF1493", "#32CD32"],
//             hoverOffset: 6,
//         },
//     ],
// };
// Doughnut Chart - User Distribution
const doughnutData = {
    labels: ["Volunteers", "Donors", "Affected Users", "Admins"],
    datasets: [
        {
            label: "User Roles",
            data: [120, 80, 40, 10], // Example user role distribution
            backgroundColor: ["#1F77B4", "#FF7F0E", "#2CA02C", "#D62728"],
            hoverOffset: 6,
        },
    ],
};


const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
};
const barOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            grid: {
                color: "rgba(255, 255, 255, 0.2)", // Light gray for better visibility
            },
            ticks: {
                color: "#E5E7EB", // Light gray text
            },
        },
        y: {
            grid: {
                color: "rgba(255, 255, 255, 0.2)", // Light gray for better visibility
            },
            ticks: {
                color: "#E5E7EB", // Light gray text
            },
        },
    },
};

const doughnutOptions = {
    plugins: {
        legend: {
            labels: {
                color: "#E5E7EB", // Light gray for better visibility
            },
        },
    },
    elements: {
        arc: {
            borderWidth: 2,
            borderColor: "#1E1E1E", // Match background to remove white border
        },
    },
};


const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen text-white pt-10 px-4 md:px-10">
            {/* Greeting */}
            <h1 className="text-3xl md:text-4xl font-poppins">Welcome Admin,</h1>
            <p className="text-gray-400 mt-2">Here is an overview of the platform.</p>

            {/* Admin Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {stats.map((item, index) => (
                    <div key={index} className="bg-white text-black p-6 rounded-lg text-center shadow-lg flex flex-col items-center">
                        {item.icon}
                        <p className="text-lg md:text-xl font-semibold mt-2">{item.title}</p>
                        <p className="text-xl md:text-2xl font-bold">{item.count}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <h2 className="text-xl md:text-2xl font-semibold mt-8">Platform Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {/* Bar Chart - Platform Stats */}
                <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg flex justify-center items-center">
                    <div className="w-full md:w-2/3">
                        <h3 className="text-lg font-semibold text-gray-300 text-center mb-3">Overall Statistics</h3>
                        <Bar data={barData}  options={barOptions} />
                    </div>
                </div>

                {/* Doughnut Chart - User Distribution */}
                <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg flex justify-center items-center">
                    <div className="w-full md:w-2/3">
                        <h3 className="text-lg font-semibold text-gray-300 text-center mb-3">User Role Distribution</h3>
                        <Doughnut data={doughnutData} options={doughnutOptions}/>
                    </div>
                </div>
            </div>


            {/* Management Sections */}
            <h2 className="text-xl md:text-2xl font-semibold mt-8">Quick Management</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {["Manage Users", "Manage Requests", "Manage Donations", "System Settings"].map((title, index) => (
                    <div key={index} className="bg-[#1E1E1E] p-6 rounded-lg text-center shadow-lg cursor-pointer hover:bg-[#31B18D] hover:text-white transition">
                        <p className="text-lg md:text-xl font-semibold">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
