import { RouteObject } from "react-router-dom";
import Signup from "./pages/Authentication/SignUp";
import Login from "./pages/Authentication/Login";
import Layout from "./components/Layout/Layout";
import Hero from "./pages/Hero/Hero";
import UserDashboard from "./pages/User-Dashboard/UserDashboard";
import VolunteerDashboard from "./pages/Volunteer/VolunteerDashboard";

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
    { path: '/userDashboard', element: <UserDashboard /> },
    { path: '/volunteerDashboard', element: <VolunteerDashboard /> },
]
export default routes