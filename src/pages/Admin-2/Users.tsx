import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  // Mock API call
  return [
    { id: 1, name: "John Doe", role: "Volunteer", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Donor", status: "Inactive" },
  ];
};

const Users = () => {
  const { data, isLoading } = useQuery({ queryKey: ["users"], queryFn: fetchUsers });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.status}</td>
              <td className="p-2">
                <button className="bg-red-500 text-white px-2 py-1 rounded">Ban</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;