import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

function CreateQuotation() {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    gateType: "",
    width: "",
    height: "",
    material: "",
    amount: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-zinc-900">
            Create Quotation
          </h1>

          <p className="text-zinc-500 mt-2">
            Generate a professional quotation for your customer
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm">

          {/* Quote Number */}
          <div className="mb-10">
            <label className="block text-sm font-medium text-zinc-600 mb-2">
              Quote Number
            </label>

            <input
              value="QT-2026-0001"
              disabled
              className="w-full md:w-80 border border-zinc-200 bg-zinc-50 rounded-xl px-4 py-3"
            />
          </div>

          {/* Customer Section */}
          <h2 className="text-2xl font-semibold mb-6">
            Customer Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            <input
              type="text"
              name="customerName"
              placeholder="Customer Name"
              value={formData.customerName}
              onChange={handleChange}
              className="border border-zinc-200 rounded-xl px-4 py-3"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-zinc-200 rounded-xl px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border border-zinc-200 rounded-xl px-4 py-3"
            />

          </div>

          {/* Gate Section */}
          <h2 className="text-2xl font-semibold mb-6">
            Gate Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

            <select
              name="gateType"
              value={formData.gateType}
              onChange={handleChange}
              className="border border-zinc-200 rounded-xl px-4 py-3"
            >
              <option value="">Select Gate Type</option>
              <option>Sliding Gate</option>
              <option>Swing Gate</option>
              <option>Automatic Gate</option>
              <option>Designer Gate</option>
            </select>

            <select
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="border border-zinc-200 rounded-xl px-4 py-3"
            >
              <option value="">Select Material</option>
              <option>Steel</option>
              <option>Aluminium</option>
              <option>Wrought Iron</option>
            </select>

            <input
              type="number"
              name="width"
              placeholder="Width (ft)"
              value={formData.width}
              onChange={handleChange}
              className="border border-zinc-200 rounded-xl px-4 py-3"
            />

            <input
              type="number"
              name="height"
              placeholder="Height (ft)"
              value={formData.height}
              onChange={handleChange}
              className="border border-zinc-200 rounded-xl px-4 py-3"
            />

          </div>

          {/* Pricing */}
          <h2 className="text-2xl font-semibold mb-6">
            Pricing
          </h2>

          <div className="mb-10">

            <input
              type="number"
              name="amount"
              placeholder="Estimated Amount"
              value={formData.amount}
              onChange={handleChange}
              className="border border-zinc-200 rounded-xl px-4 py-3 w-full md:w-80"
            />

          </div>

          {/* Notes */}
          <h2 className="text-2xl font-semibold mb-6">
            Additional Notes
          </h2>

          <textarea
            rows="5"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Enter any additional quotation notes..."
            className="w-full border border-zinc-200 rounded-xl px-4 py-3 mb-10"
          />

          {/* Action Buttons */}
          <div className="flex gap-4">

            <button className="px-6 py-3 rounded-xl bg-zinc-200 hover:bg-zinc-300 transition-all">
              Save Draft
            </button>

            <button className="px-6 py-3 rounded-xl bg-yellow-600 hover:bg-yellow-700 text-white transition-all">
              Generate PDF
            </button>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default CreateQuotation;