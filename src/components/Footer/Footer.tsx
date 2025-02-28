import React from "react";
import { Mail, Instagram, MessageCircle, Users } from "lucide-react";
import logo from '../../assets/logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Header Section */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#D0DAF5] roboto-font">Aid Net. We’re here</h2>
        <p className="text-gray-400 mt-2">"Join the Movement. Make an Impact Today!"</p>
         
        {/* Buttons Section */}
        <div className="flex gap-6 mt-6">
          <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
            <Users className="w-5 h-5" /> Join Us
          </button>
          <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
            <MessageCircle className="w-5 h-5" /> Contact
          </button>
        </div>

        <div className="w-full border-t border-gray-700 my-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full px-6">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="AidNet Logo" className="h-12" />
          </div>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">© 2025 AidNet. All Rights Reserved.</p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <Mail className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
