import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const adminMenuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/admin/users" },
    { name: "Relief Requests", path: "/admin/relief-requests" },
    { name: "Donations", path: "/admin/donations" },
    { name: "Volunteers", path: "/admin/volunteers" },
    { name: "Notifications", path: "/admin/notifications" },
    { name: "Reports", path: "/admin/reports" },
    { name: "Settings", path: "/admin/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4 text-2xl font-bold">AidNet Admin</div>
      <nav className="mt-6">
        {adminMenuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/admin"} // Ensures exact match for /admin
            className={({ isActive }) =>
              `block py-2.5 px-4 rounded transition duration-200 ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;