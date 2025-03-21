import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-gray-800 p-4 rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  );
};

export { Card };
