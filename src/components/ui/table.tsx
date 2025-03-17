import React from "react";

const Table: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <table className={`w-full border-collapse ${className}`}>{children}</table>;
};

const TableHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <thead className={`bg-gray-700 text-white ${className}`}>{children}</thead>;
};

const TableBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <tbody className={className}>{children}</tbody>;
};

const TableRow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <tr className={`border-b border-gray-600 ${className}`}>{children}</tr>;
};

const TableHead: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <th className={`px-4 py-2 text-left font-semibold ${className}`}>{children}</th>;
};

const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <td className={`px-4 py-2 ${className}`}>{children}</td>;
};

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
