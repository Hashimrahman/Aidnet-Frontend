import React from "react";

const notifications = [
    {
      id: 1,
      message: 'You have been assigned to "Emergency Food Distribution" for the Flood Relief Mission.',
      timestamp: 'February 5, 2025, 10:15 AM',
    },
    {
      id: 2,
      message: 'Your task "Medical Supply Delivery" has been marked as completed. Thank you for your contribution!',
      timestamp: 'February 5, 2025, 2:30 PM',
    },
    {
      id: 3,
      message: 'Additional volunteers needed for "Shelter Setup Assistance" at XYZ location. Can you help?',
      timestamp: 'February 5, 2025, 4:00 PM',
    },
    {
      id: 4,
      message: 'You Received Feedback on Your Activity',
      timestamp: 'February 5, 2025, 6:00 PM',
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
