import React, { useState } from "react";
import { useRequestStore } from "../../Store/useStore";

const RequestForm: React.FC = () => {
    const { formData, setFormData, resetForm } = useRequestStore()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(e.target.name, e.target.value);
    };

    const handleClear = () => {
        resetForm()
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen flex flex-col items-start justify-start md:px-4 gap mt-10">
            <h2 className="text-3xl font-semibold text-white mb-6">Submit a Request</h2>
            <form
                onSubmit={handleSubmit}
                className="md:w-full max-w-md  md:max-w-2xl p-4 md:p-8 rounded-lg flex flex-col gap-2 md:gap-4"
            >


                <select
                    name="disasterType"
                    value={formData.disasterType}
                    onChange={handleChange}
                    className="w-full p-2 md:p-4 mb-4 bg-white text-black rounded-md focus:outline-none"
                >
                    <option value="">Disaster Type</option>
                    <option value="earthquake">Earthquake</option>
                    <option value="flood">Flood</option>
                    <option value="fire">Fire</option>
                </select>

                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    className="w-full p-2 md:p-4 mb-4 bg-white text-black rounded-md focus:outline-none"
                />

                <select
                    name="urgencyLevel"
                    value={formData.urgencyLevel}
                    onChange={handleChange}
                    className="w-full p-2 md:p-4 mb-4 bg-white text-black rounded-md focus:outline-none"
                >
                    <option value="">Urgency Level</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <select
                    name="assistanceType"
                    value={formData.assistanceType}
                    onChange={handleChange}
                    className="w-full p-2 md:p-4 mb-4 bg-white text-black rounded-md focus:outline-none"
                >
                    <option value="">Type of Assistance</option>
                    <option value="medical">Medical</option>
                    <option value="food">Food</option>
                    <option value="shelter">Shelter</option>
                </select>

                <textarea
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    placeholder="Additional Details"
                    className="w-full p-2 md:p-4 md:mb-4 bg-white text-black rounded-md h-24 focus:outline-none"
                ></textarea>

                <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between">
                    <button
                        type="button"
                        onClick={handleClear}
                        className="md:px-10 md:py-2 text-right text-white md:bg-white md:text-black rounded-md hover:bg-gray-200"
                    >
                        Clear
                    </button>
                    <button
                        type="submit"
                        className="px-20 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RequestForm;
