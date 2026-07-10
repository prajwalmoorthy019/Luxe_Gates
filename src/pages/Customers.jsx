
import MainLayout from "../layouts/MainLayout";
import {
  Search,
  Plus,
  Eye,
  PencilLine,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCustomers } from "../context/CustomerContext";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";

function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const { customers, deleteCustomer } = useCustomers();

  const filteredCustomers = customers.filter((customer) => {
    const search = searchTerm.toLowerCase();

    return (
      customer.name.toLowerCase().includes(search) ||
      customer.email.toLowerCase().includes(search) ||
      customer.phone.includes(search) ||
      customer.city.toLowerCase().includes(search)
    );
  });

  const totalPages = Math.ceil(
    filteredCustomers.length / itemsPerPage
  );

  const indexOfLastCustomer = currentPage * itemsPerPage;

  const indexOfFirstCustomer =
    indexOfLastCustomer - itemsPerPage;

  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  
  const totalCustomers = customers.length;

  const activeCustomers = customers.filter(
    (customer) => customer.status === "Active"
  ).length;

  const leadCustomers = customers.filter(
    (customer) => customer.status === "Lead"
  ).length;

  const inactiveCustomers = customers.filter(
    (customer) => customer.status === "Inactive"
  ).length;

  return (<MainLayout>
    {/* Header */} <div className="flex justify-between items-center mb-8"> <div> <h1 className="text-5xl font-bold">
      Customers </h1>

      ```
      <p className="text-zinc-500 mt-2">
        Manage all customer records
      </p>
    </div>

      <Link
        to="/customers/new"
        className="bg-yellow-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-yellow-700 transition"
      >
        <Plus size={18} />
        Add Customer
      </Link>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-3xl border p-5 shadow-sm">
        <p className="text-zinc-500 text-sm">
          Total Customers
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {totalCustomers}
        </h2>
      </div>

      <div className="bg-white rounded-3xl border p-5 shadow-sm">
        <p className="text-zinc-500 text-sm">
          Active Customers
        </p>

        <h2 className="text-3xl font-bold text-green-600 mt-2">
          {activeCustomers}
        </h2>
      </div>

      <div className="bg-white rounded-3xl border p-5 shadow-sm">
        <p className="text-zinc-500 text-sm">
          Leads
        </p>

        <h2 className="text-3xl font-bold text-yellow-600 mt-2">
          {leadCustomers}
        </h2>
      </div>

      <div className="bg-white rounded-3xl border p-5 shadow-sm">
        <p className="text-zinc-500 text-sm">
          Inactive Customers
        </p>

        <h2 className="text-3xl font-bold text-red-600 mt-2">
          {inactiveCustomers}
        </h2>
      </div>
    </div>

    {/* Search */}
    <div className="bg-white rounded-3xl border p-5 shadow-sm">
      <div className="flex items-center gap-3 border rounded-2xl px-4 py-3">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search customer..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="w-full outline-none"
        />
      </div>
    </div>

    {/* Table */}
    <div className="bg-white rounded-3xl border mt-6 overflow-hidden shadow-sm">
      <table className="w-full">
        <thead className="bg-zinc-50">
          <tr>
            <th className="text-left px-6 py-4">
              Customer
            </th>

            <th className="text-left px-6 py-4">
              Type
            </th>

            <th className="text-left px-6 py-4">
              Phone
            </th>

            <th className="text-left px-6 py-4">
              City
            </th>

            <th className="text-left px-6 py-4">
              Status
            </th>

            <th className="text-left px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredCustomers.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center py-10 text-zinc-500"
              >
                No customers found
              </td>
            </tr>
          ) : (
            currentCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t hover:bg-zinc-50"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold">
                      {customer.name}
                    </p>

                    <p className="text-sm text-zinc-500">
                      {customer.email}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4">
                  {customer.type}
                </td>

                <td className="px-6 py-4">
                  {customer.phone}
                </td>

                <td className="px-6 py-4">
                  {customer.city}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${customer.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : customer.status === "Lead"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <Link
                      to={`/customers/view/${customer.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      to={`/customers/edit/${customer.id}`}
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      <PencilLine size={18} />
                    </Link>

                    <button
                      onClick={() => {
                        if (window.confirm("Delete this customer?")) {
                          deleteCustomer(customer.id);
                        }
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredCustomers.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

    </div>

  </MainLayout>


  );
}

export default Customers;
