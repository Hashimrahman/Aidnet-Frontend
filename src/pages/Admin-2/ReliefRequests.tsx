import { useQuery } from "@tanstack/react-query";

const fetchRequests = async () => {
  // Mock API call
  return [
    { id: 1, type: "Medical", status: "Pending", priority: "High" },
    { id: 2, type: "Shelter", status: "Active", priority: "Medium" },
  ];
};

const ReliefRequests = () => {
  const { data, isLoading } = useQuery({ queryKey: ["requests"], queryFn: fetchRequests });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Relief Requests</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Type</th>
            <th className="p-2">Status</th>
            <th className="p-2">Priority</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((request) => (
            <tr key={request.id} className="border-t">
              <td className="p-2">{request.id}</td>
              <td className="p-2">{request.type}</td>
              <td className="p-2">{request.status}</td>
              <td className="p-2">{request.priority}</td>
              <td className="p-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">Approve</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReliefRequests;