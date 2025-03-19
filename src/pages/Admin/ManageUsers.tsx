// import React from "react";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// const ManageUsers: React.FC = () => {
//     const users = [
//         { id: 1, name: "Alice Johnson", role: "Admin", email: "alice@example.com", status: "Active", createdAt: "01/02/2025" },
//         { id: 2, name: "Bob Smith", role: "Moderator", email: "bob@example.com", status: "Pending", createdAt: "02/02/2025" },
//         { id: 3, name: "Charlie Brown", role: "User", email: "charlie@example.com", status: "Inactive", createdAt: "03/02/2025" },
//         { id: 4, name: "Daisy Lee", role: "User", email: "daisy@example.com", status: "Active", createdAt: "04/02/2025" },
//     ];

//     const getStatusColor = (status: string) => {
//         switch (status) {
//             case "Active": return "text-green-500";
//             case "Pending": return "text-yellow-500";
//             case "Inactive": return "text-red-500";
//             default: return "text-gray-500";
//         }
//     };

//     return (
//         <Card className="p-8 shadow-xl rounded-2xl bg-gray-800 text-white min-h-screen">
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-3xl font-semibold">Manage Users</h2>
//             </div>
//             <ScrollArea className="max-h-[450px] overflow-y-auto border border-gray-700 rounded-sm">
//                 <Table className="w-full text-sm">
//                     <TableHeader className="bg-gray-700 text-gray-300">
//                         <TableRow>
//                             <TableHead className="px-4 py-3 text-left">User ID</TableHead>
//                             <TableHead className="px-4 py-3 text-left">Name</TableHead>
//                             <TableHead className="px-4 py-3 text-left">Role</TableHead>
//                             <TableHead className="px-4 py-3 text-left">Email</TableHead>
//                             <TableHead className="px-4 py-3 text-left">Status</TableHead>
//                             <TableHead className="px-4 py-3 text-left">Created At</TableHead>
//                             <TableHead className="px-4 py-3 text-left">Actions</TableHead>
//                         </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                         {users.map((user, index) => (
//                             <TableRow key={user.id} className={`border-b border-gray-600 ${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'}`}> 
//                                 <TableCell className="px-4 py-3">{user.id}</TableCell>
//                                 <TableCell className="px-4 py-3 font-medium">{user.name}</TableCell>
//                                 <TableCell className="px-4 py-3">{user.role}</TableCell>
//                                 <TableCell className="px-4 py-3">{user.email}</TableCell>
//                                 <TableCell className="px-4 py-3">
//                                     <Badge className={`${getStatusColor(user.status)} px-3 py-1 rounded-full font-semibold`}>{user.status}</Badge>
//                                 </TableCell>
//                                 <TableCell className="px-4 py-3">{user.createdAt}</TableCell>
//                                 <TableCell className="px-4 py-3">
//                                     <Button variant="destructive" className="px-3 py-1 rounded-lg shadow-sm hover:bg-red-700">Delete</Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </ScrollArea>
//         </Card>
//     );
// };

// export default ManageUsers;


import React from "react";
import { Users, CheckCircle, XCircle, Clock } from "lucide-react";
import { useFetchUsers } from "../../Mutations/UserFetchMuation";

// const users = [
//     { id: 1, name: "John Doe", role: "Admin", email: "john@example.com", status: "Active", createdAt: "2025-03-10", icon: <CheckCircle size={20} className="text-green-500 inline mr-3" /> },
//     { id: 2, name: "Jane Smith", role: "User", email: "jane@example.com", status: "Inactive", createdAt: "2025-03-08", icon: <XCircle size={20} className="text-red-500 inline mr-3" /> },
//     { id: 3, name: "Robert Brown", role: "Volunteer", email: "robert@example.com", status: "Pending", createdAt: "2025-03-05", icon: <Clock size={20} className="text-yellow-500 inline mr-3" /> },
//     { id: 4, name: "Emily White", role: "Donor", email: "emily@example.com", status: "Active", createdAt: "2025-03-01", icon: <CheckCircle size={20} className="text-green-500 inline mr-3" /> },
// ];

const ManageUsers: React.FC = () => {

    const { data: users } = useFetchUsers()

    return (
        <div className="min-h-screen text-white pt-10 px-4 md:px-10">
            <h1 className="text-3xl md:text-4xl font-poppins">User Management</h1>
            <p className="text-gray-400 mt-2">View and manage all users in the system.</p>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-4 text-gray-700 font-semibold">User ID</th>
                            <th className="p-4 text-gray-700 font-semibold">Name</th>
                            <th className="p-4 text-gray-700 font-semibold">Role</th>
                            <th className="p-4 text-gray-700 font-semibold">Email</th>
                            <th className="p-4 text-gray-700 font-semibold">Phone number</th>
                            <th className="p-4 text-gray-700 font-semibold">Status</th>
                            <th className="p-4 text-gray-700 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <tr key={user.id} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                                <td className="p-4 text-gray-800">{user.id}</td>
                                <td className="p-4 text-gray-800 flex items-center gap-3">
                                    <Users size={20} className="text-[#31B18D]" />
                                    {user.name}
                                </td>
                                <td className="p-4 text-gray-800">{user.role}</td>
                                <td className="p-4 text-gray-800">{user.email}</td>
                                <td className="p-4 text-gray-800">{user.phone_number}</td>
                                <td className="p-4 text-gray-800 flex items-center gap-2">
                                    {user.is_active ? (<CheckCircle size={20} className="text-green-500 inline mr-3" />) : (<XCircle size={20} className="text-red-500 inline mr-3" />)}
                                    <span>{user.is_active ? 'Active' : 'Inactive'}</span>
                                </td>

                                <td className="p-4">
                                    <button className="bg-[#31B18D] text-white px-4 py-2 rounded-lg hover:bg-[#289B77] transition">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition ml-2">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
