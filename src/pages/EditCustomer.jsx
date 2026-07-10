
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { ArrowLeft, Save } from "lucide-react";
import { useCustomers } from "../context/CustomerContext";

function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { customers, updateCustomer } = useCustomers();

  const customer = customers.find(
    (c) => c.id === Number(id)
  );

  if (!customer) {
    return (
      <MainLayout>
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-red-600">
            Customer Not Found
          </h1>

          <Link
            to="/customers"
            className="text-blue-600 mt-5 inline-block"
          >
            Back to Customers
          </Link>
        </div>
      </MainLayout>
    );
  }

  const [formData, setFormData] = useState({
    name: customer.name,
    type: customer.type,
    email: customer.email,
    phone: customer.phone,
    city: customer.city,
    status: customer.status,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateCustomer({
      id: customer.id,
      createdAt: customer.createdAt,
      updatedAt: new Date().toLocaleString(),
      ...formData,
    });

    navigate("/customers");
  };

  return (
    <MainLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <Link
            to="/customers"
            className="flex items-center gap-2 text-zinc-500 hover:text-black mb-3"
          >
            <ArrowLeft size={18} />
            Back to Customers
          </Link>

          <h1 className="text-5xl font-bold">
            Edit Customer
          </h1>

          <p className="text-zinc-500 mt-2">
            Update customer information
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl border shadow-sm p-8"
      >
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Customer Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Customer Type
            </label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option>Residential</option>
              <option>Commercial</option>
              <option>Builder</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              City
            </label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option>Active</option>
              <option>Lead</option>
              <option>Inactive</option>
            </select>
          </div>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <Link
            to="/customers"
            className="px-6 py-3 rounded-xl border"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <Save size={18} />
            Save Changes
          </button>

        </div>
      </form>
    </MainLayout>
  );
}

export default EditCustomer;

