import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-lg ${className}`}>
      {children}
    </span>
  );
};

export { Badge };
