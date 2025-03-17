import { RouteObject } from "react-router-dom";
import Signup from "./pages/Authentication/SignUp";
import Login from "./pages/Authentication/Login";
import Layout from "./components/Layout/Layout";
import Hero from "./pages/Hero/Hero";
import UserDashboard from "./pages/User-Dashboard/UserDashboard";
import VolunteerDashboard from "./pages/Volunteer/VolunteerDashboard";
import Chat from "./components/Chat/Chat";
import DonorDashboard from "./pages/Donor/DonorDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserDetails from "./pages/Admin/UserDeatils";
// import AdminLayout from "./components/Admin/AdminLayout";
// import AdminDashboard from "./pages/Admin-2/Dashboard";
// import Users from "./pages/Admin-2/Users";
// import ReliefRequests from "./pages/Admin-2/ReliefRequests";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [

      { path: '/', element: <Hero /> },
    ]
  },
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: '/chat', element: <Chat /> },
  { path: '/userDashboard', element: <UserDashboard /> },
  { path: '/volunteerDashboard', element: <VolunteerDashboard /> },
  { path: '/donorDashboard', element: <DonorDashboard /> },
  { path: '/adminDashboard', element: <AdminDashboard /> },
  { path: '/adminDashboard/userDetails', element: <UserDetails /> },
  // {
  //   path: "/admin",
  //   element: <AdminLayout />, // Admin-specific layout
  //   children: [
  //     { path: "", element: <AdminDashboard /> }, // Default admin route
  //     { path: "users", element: <Users /> },
  //     { path: "relief-requests", element: <ReliefRequests /> },
  //     // Add more admin routes as needed (e.g., donations, volunteers, etc.)
  //   ],
  // },

]
export default routes