import React from "react";
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate()
    return (
        <nav className="fixed w-full top-5">
            <ul className="flex justify-between items-center mx-2 md:mx-14  bg-[rgba(58,58,58,0.56)] px-2 py-5 rounded-md sticky top-10 backdrop-blur-sm">
                <li><img src={logo} className="w-24 md:w-48" alt="" /></li>
                <div className="flex gap-1 ">
                    <button className="rounded-3xl px-6 md:px-12 py-1 bg-white text-black" onClick={()=>navigate('login')}>Login</button>
                    <button className="rounded-3xl px-6 md:px-12 py-1 bg-[#31B18D]" onClick={()=>navigate('signup')}>Sign Up</button>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar