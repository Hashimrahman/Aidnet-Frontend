import React, { useState } from "react";
import { X } from "lucide-react";

const Feedback: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState<any>(null);
    const [feedback, setFeedback] = useState("");

    const requests = [
        { id: 1, request: "Donation", donor: "Donor Name 1", status: "Completed" },
        { id: 2, request: "Donation", donor: "Donor Name 2", status: "Completed" },
    ];

    const openModal = (request: any) => {
        setSelectedRequest(request);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setFeedback("");
    };

    const handleSubmit = () => {
        console.log("Submitted Feedback:", { ...selectedRequest, feedback });
        closeModal();
    };

    return (
        <div className="min-h-screen p-6 text-white">
            <h2 className="text-3xl font-semibold mb-6">Feedback</h2>
            <table className="w-full border border-gray-700 text-center min-w-[800px]">
                <thead>
                    <tr className="bg-gray-900">
                        <th className="border border-gray-700 px-4 py-2">Request ID</th>
                        <th className="border border-gray-700 px-4 py-2">Request</th>
                        <th className="border border-gray-700 px-4 py-2">Donor</th>
                        <th className="border border-gray-700 px-4 py-2">Status</th>
                        <th className="border border-gray-700 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((req) => (
                        <tr key={req.id} className="text-black bg-white border border-gray-700">
                            <td className="border border-gray-700 px-4 py-2">{req.id}</td>
                            <td className="border border-gray-700 px-4 py-2">{req.request}</td>
                            <td className="border border-gray-700 px-4 py-2">{req.donor}</td>
                            <td className="border border-gray-700 px-4 py-2 text-green-500">{req.status}</td>
                            <td className="border border-gray-700 px-4 py-2">
                                <button
                                    className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-700"
                                    onClick={() => openModal(req)}
                                >
                                    Submit Feedback
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/30">
                    <button onClick={closeModal} className="absolute top-10 right-10 text-white bg-gray-700 p-2 rounded-full hover:bg-gray-900">
                        <X className="w-6 h-6" />
                    </button>

                    <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
                        <h2 className="text-xl font-semibold mb-4 text-black">Feedback</h2>
                        <form>
                            <label className="block mb-2 text-black">Request Id:</label>
                            <input type="text" value={selectedRequest?.id} disabled className="w-full p-3 rounded bg-[rgba(0,0,0,0.1)] text-black" />

                            <label className="block mt-4 mb-2 text-black">Request:</label>
                            <input type="text" value={selectedRequest?.request} disabled className="w-full p-3 rounded bg-[rgba(91,14,14,0.1)] text-black" />

                            <label className="block mt-4 mb-2 text-black">Donor:</label>
                            <input type="text" value={selectedRequest?.donor} disabled className="w-full p-3 rounded bg-[rgba(0,0,0,0.1)] text-black" />

                            <label className="block mt-4 mb-2 text-black">Feedback:</label>
                            <textarea
                                placeholder="Write your feedback"
                                className="w-full p-2 rounded h-30 bg-[rgba(0,0,0,0.1)] text-black"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            ></textarea>

                            <button
                                type="button"
                                className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-700"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Feedback;
