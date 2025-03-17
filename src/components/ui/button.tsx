import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "destructive";
}

const Button: React.FC<ButtonProps> = ({ children, variant, className, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    destructive: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant || "primary"]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export { Button };
