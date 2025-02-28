import React from "react";

const notifications = [
  {
    id: 1,
    message: "Your Request Has Been Approved",
    timestamp: "February 5, 2025 9:23 AM",
  },
  {
    id: 2,
    message: "Your Request Has Been Approved",
    timestamp: "February 5, 2025 9:23 AM",
  },
  {
    id: 3,
    message: "Your Request Has Been Approved",
    timestamp: "February 5, 2025 9:23 AM",
  },
  {
    id: 4,
    message: "Your Request Has Been Approved",
    timestamp: "February 5, 2025 9:23 AM",
  },
];

export default function Notifications() {
  return (
    <div className="min-h-screen text-white md:p-8">
      <h1 className="text-3xl font-poppins mb-12">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="border-b border-gray-600 pb-4 last:border-b-0"
          >
            <p className="text-lg font-medium">{notification.message}</p>
            <p className="text-gray-400 text-sm">At {notification.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
