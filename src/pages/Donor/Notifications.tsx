import React from "react";

const notifications = [
  {
      id: 1,
      message: 'Your donation of "100 Food Packs" has been successfully received and is being processed.',
      timestamp: 'February 5, 2025, 10:15 AM',
  },
  {
      id: 2,
      message: 'Your donation of "Medical Supplies" has been delivered to the relief center. Thank you for your generosity!',
      timestamp: 'February 5, 2025, 2:30 PM',
  },
  {
      id: 3,
      message: 'Your "Winter Clothing Donation" is still in transit. Expected delivery by February 10, 2025.',
      timestamp: 'February 5, 2025, 4:00 PM',
  },
  {
      id: 4,
      message: 'Thank you for your generous donation! You have been recognized as one of the top donors for this relief mission.',
      timestamp: 'February 5, 2025, 6:00 PM',
  },
  {
      id: 5,
      message: 'A new donation campaign "Emergency Medical Supplies" has started. Consider contributing to the cause!',
      timestamp: 'February 5, 2025, 8:00 PM',
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
