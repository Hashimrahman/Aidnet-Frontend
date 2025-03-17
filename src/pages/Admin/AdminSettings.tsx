// import { useState } from "react";
// import { Moon, Sun, ShieldCheck, Key, Database, Trash2, Link, Bell } from "lucide-react";

// const AdminSettings = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [twoFactorAuth, setTwoFactorAuth] = useState(false);
//   const [apiKey, setApiKey] = useState("sk-***************");
//   const [activeTab, setActiveTab] = useState("general");

//   const tabs = [
//     { name: "General", icon: <Sun />, value: "general" },
//     { name: "Security", icon: <ShieldCheck />, value: "security" },
//     { name: "System", icon: <Database />, value: "system" },
//     { name: "Integrations", icon: <Link />, value: "integrations" },
//     { name: "Logs", icon: <Bell />, value: "logs" },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-900 rounded-xl shadow-md">
//       <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">Admin Settings</h2>
      
//       {/* Tabs Navigation */}
//       <div className="flex space-x-3 mb-6">
//         {tabs.map((tab) => (
//           <button
//             key={tab.value}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
//               activeTab === tab.value ? "bg-teal-500 text-white" : "hover:bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => setActiveTab(tab.value)}
//           >
//             {tab.icon}
//             {tab.name}
//           </button>
//         ))}
//       </div>

//       {/* Settings Content */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         {activeTab === "general" && (
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="font-medium">Dark Mode</span>
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//               >
//                 {darkMode ? <Moon className="text-gray-600" /> : <Sun className="text-yellow-500" />}
//               </button>
//             </div>
//           </div>
//         )}

//         {activeTab === "security" && (
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="font-medium">Enable Two-Factor Authentication</span>
//               <button
//                 onClick={() => setTwoFactorAuth(!twoFactorAuth)}
//                 className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//               >
//                 {twoFactorAuth ? <ShieldCheck className="text-green-500" /> : <ShieldCheck className="text-gray-400" />}
//               </button>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">API Key</label>
//               <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-lg">
//                 <input type="text" value={apiKey} readOnly className="w-full bg-transparent text-gray-600" />
//                 <Key className="text-gray-500" />
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "system" && (
//           <div className="space-y-4">
//             <button className="w-full bg-teal-500 text-white p-3 rounded-lg shadow-md hover:bg-teal-600">
//               <Database className="inline-block mr-2" /> Backup Database
//             </button>
//             <button className="w-full bg-red-500 text-white p-3 rounded-lg shadow-md hover:bg-red-600">
//               <Trash2 className="inline-block mr-2" /> Clear Cache & Logs
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminSettings;


import { useState } from "react";
import { Bell, ShieldCheck, Users, Palette, Lock } from "lucide-react";

const AdminSettings = () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <h2 className="text-2xl font-bold mb-6">Admin Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* General Settings */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <ShieldCheck size={20} /> General Settings
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Manage core settings for the admin panel.
                    </p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Update Settings
                    </button>
                </div>

                {/* User Management */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Users size={20} /> User Management
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Control user roles and permissions.
                    </p>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        Manage Users
                    </button>
                </div>

                {/* Theme Customization */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Palette size={20} /> Theme Customization
                    </h3>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Enable Dark Mode</span>
                        <button onClick={() => setDarkMode(!darkMode)}
                            className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-transform ${darkMode ? 'justify-end' : 'justify-start'}`}>
                            <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                        </button>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Bell size={20} /> Notifications
                    </h3>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Enable Notifications</span>
                        <button onClick={() => setNotifications(!notifications)}
                            className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-transform ${notifications ? 'justify-end' : 'justify-start'}`}>
                            <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                        </button>
                    </div>
                </div>

                {/* Security Settings */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Lock size={20} /> Security
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Update passwords and security settings.
                    </p>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        Manage Security
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;