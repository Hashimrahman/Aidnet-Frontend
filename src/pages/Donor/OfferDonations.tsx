import React, { useState } from "react";
import { useDonationStore } from "../../Store/useStore";

const OfferDonations: React.FC = () => {
    const { formData, setFormData, resetForm } = useDonationStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(e.target.name, e.target.value);
    };

    const handleClear = () => {
        resetForm();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen flex flex-col items-start justify-start md:px-4 gap mt-10">
            <h2 className="text-3xl text-white mb-6 font-poppins">Submit a Donation</h2>
            <form
                onSubmit={handleSubmit}
                className="md:w-full max-w-md  md:max-w-2xl p-4 md:p-8 rounded-lg flex flex-col gap-2 md:gap-4"
            >
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Amount / Quantity"
                    className="w-full p-2 md:p-4 mb-4 bg-white text-black rounded-md focus:outline-none"
                />

                <select
                    name="assistanceType"
                    value={formData.donationType}
                    onChange={handleChange}
                    className="w-full p-2 md:p-4 mb-4 bg-white text-black rounded-md focus:outline-none"
                >
                    <option value="">Type of Assistance</option>
                    <option value="medical">Medical</option>
                    <option value="food">Food</option>
                    <option value="shelter">Equipments</option>
                </select>

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Additional Details"
                    className="w-full p-2 md:p-4 md:mb-4 bg-white text-black rounded-md h-40 focus:outline-none"
                ></textarea>

                <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between mb-4">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="pickup"
                            name="modeOfDelivery"
                            value="pickup"
                            checked={formData.modeOfDelivery === "pickup"}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="pickup" className="text-white">Available for Pickup</label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="delivery"
                            name="modeOfDelivery"
                            value="delivery"
                            checked={formData.modeOfDelivery === "delivery"}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="delivery" className="text-white">Will be Delivered</label>
                    </div>
                </div>

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

export default OfferDonations;
