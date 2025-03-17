import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar"; // Reuse the Sidebar component from earlier

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">
        <Outlet /> {/* Renders the nested admin routes */}
      </div>
    </div>
  );
};

export default AdminLayout;