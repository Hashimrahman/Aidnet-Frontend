import React from "react";
import { Eye, CheckCircle, Trash2 } from "lucide-react";

const reports = [
    { id: 1, reporter: "John Doe", reportedUser: "Alice Smith", reason: "Spam", status: "Pending" },
    { id: 2, reporter: "Jane Doe", reportedUser: "Bob Johnson", reason: "Harassment", status: "Resolved" },
    { id: 3, reporter: "Emily Davis", reportedUser: "Charlie Brown", reason: "Inappropriate Content", status: "Pending" },
];

const Reports: React.FC = () => {
    return (
        <div className="min-h-screen text-white pt-10 px-4 md:px-10">
            <h1 className="text-3xl md:text-4xl font-poppins">Manage Reports</h1>
            <p className="text-gray-400 mt-2">Review and take action on user reports.</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map((report) => (
                    <div key={report.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800">Report #{report.id}</h2>
                        <p className="text-gray-600 mt-2"><strong>Reporter:</strong> {report.reporter}</p>
                        <p className="text-gray-600"><strong>Reported User:</strong> {report.reportedUser}</p>
                        <p className="text-gray-600"><strong>Reason:</strong> {report.reason}</p>
                        <p className={`mt-2 font-semibold ${report.status === "Pending" ? "text-yellow-500" : "text-green-500"}`}>
                            {report.status}
                        </p>

                        <div className="mt-4 flex gap-3">
                            <button className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
                                <Eye size={16} /> View
                            </button>
                            <button className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition flex items-center gap-2">
                                <CheckCircle size={16} /> Resolve
                            </button>
                            <button className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition flex items-center gap-2">
                                <Trash2 size={16} /> Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reports;
