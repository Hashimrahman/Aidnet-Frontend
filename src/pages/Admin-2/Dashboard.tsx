import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const fetchStats = async (): Promise<{
  requests: number;
  donations: number;
  volunteers: number;
  recentActivity: { name: string; requests: number }[];
}> => {
  // Replace with your actual API call
  return {
    requests: 120,
    donations: 45000,
    volunteers: 85,
    recentActivity: [
      { name: "Jan", requests: 20 },
      { name: "Feb", requests: 30 },
      { name: "Mar", requests: 50 },
    ],
  };
};

const AdminDashboard = () => {
  const { data, isLoading } = useQuery({ queryKey: ["stats"], queryFn: fetchStats });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-100 rounded">
          <h2 className="text-lg">Relief Requests</h2>
          <p className="text-2xl font-bold">{data?.requests}</p>
        </div>
        <div className="p-4 bg-green-100 rounded">
          <h2 className="text-lg">Donations</h2>
          <p className="text-2xl font-bold">${data?.donations}</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded">
          <h2 className="text-lg">Volunteers</h2>
          <p className="text-2xl font-bold">{data?.volunteers}</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <BarChart width={600} height={300} data={data?.recentActivity}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="requests" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default AdminDashboard;