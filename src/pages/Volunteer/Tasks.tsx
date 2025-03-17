import React, { useEffect } from "react";
import { useUserCampaignsMutations } from "../../Mutations/UserSpecificCampaignFetchMutation";
import { useCampaignStore } from "../../Store/useStore";
import Swal from 'sweetalert2'

const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
        case "High":
            return "text-red-500";
        case "Medium":
            return "text-yellow-500";
        case "Low":
            return "text-green-500";
        default:
            return "";
    }
};

const getStatusColor = (status: string) => {
    switch (status) {
        case "ended": return "text-green-500";
        case "ongoing": return "text-yellow-500";
        default: return "text-white";
    }
};

const handleLeave = () =>{
    Swal.fire({
        title : "Are you sure to leave?",
        text: "You won't be able to revert this action!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Leave!"
    }).then(()=>{
        console.log("Leave campaign")
    }).catch((err)=>{
        console.log("An error occured!", err);
        Swal.fire("Error","Unable to leave campaign","error")
    })
}

const VolunteerTasks: React.FC = () => {
    const { mutate, data, error, isLoading } = useUserCampaignsMutations();
    const setCampaigns = useCampaignStore((state) => state.setCampaigns);

    useEffect(() => {
        mutate(); 
    }, [mutate]);

    useEffect(() => {
        if (data) {
            setCampaigns(data); 
            
            console.log("user campaigns", data);
        }
    }, [data, setCampaigns]);
    const formatDate = (dateString: string) => {
        const date = new Date(dateString); 
        return date.toLocaleDateString(); 
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading tasks!</div>;

    return (
        <div className="min-h-screen p-6 text-white">
            <h2 className="text-3xl font-semibold mb-6">Your Tasks</h2>
            <div className="">
                <table className="w-full border border-gray-700 text-center min-w-[800px]">
                    <thead>
                        <tr className="bg-gray-900">
                            <th className="border border-gray-700 px-4 py-2">Task Id</th>
                            <th className="border border-gray-700 px-4 py-2">Name</th>
                            <th className="border border-gray-700 px-4 py-2">Location</th>
                            <th className="border border-gray-700 px-4 py-2">Urgency</th>
                            <th className="border border-gray-700 px-4 py-2">Status</th>
                            <th className="border border-gray-700 px-4 py-2">Created At</th>
                            <th className="border border-gray-700 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((task: any) => (
                            <tr key={task.id} className="text-black bg-white border border-gray-700">
                                <td className="border border-gray-700 px-4 py-2">{task.id}</td>
                                <td className="border border-gray-700 px-4 py-2">{task.name}</td>
                                <td className="border border-gray-700 px-4 py-2">{task.location}</td>
                                <td className={`border border-gray-700 px-4 py-2 ${getUrgencyColor(task.urgency)}`}>{task.urgency}</td>
                                <td className={`border border-gray-700 px-4 py-2 ${getStatusColor(task.status)}`}>{task.status}</td>
                                <td className="border border-gray-700 px-4 py-2">{formatDate(task.start_date)}</td>
                                <td className="border border-gray-700 px-4 py-2">
                                    <button className="bg-red-400 text-white px-4 py-1 rounded-md hover:bg-leave-600" onClick={handleLeave}>Leave</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VolunteerTasks;
