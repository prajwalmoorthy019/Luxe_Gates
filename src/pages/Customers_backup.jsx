import MainLayout from "../layouts/MainLayout";
import { Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

function Customers() {
const customers = [
{
id: 1,
name: "Rahul Sharma",
phone: "9876543210",
city: "Bangalore",
},
{
id: 2,
name: "Amit Verma",
phone: "9988776655",
city: "Mysore",
},
{
id: 3,
name: "Vikram Mehta",
phone: "9123456780",
city: "Chennai",
},
];

return ( <MainLayout> <div className="flex justify-between items-center mb-8"> <div> <h1 className="text-5xl font-bold">Customers</h1> <p className="text-zinc-500 mt-2">
Manage all customer records </p> </div>

```
    <Link
      to="/customers/new"
      className="bg-yellow-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
    >
      <Plus size={18} />
      Add Customer
    </Link>
  </div>

  <div className="bg-white rounded-3xl p-5 mb-6 border">
    <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
      <Search size={18} />
      <input
        type="text"
        placeholder="Search customers..."
        className="w-full outline-none"
      />
    </div>
  </div>

  <div className="bg-white rounded-3xl border overflow-hidden">
    <table className="w-full">
      <thead className="bg-zinc-50">
        <tr>
          <th className="text-left px-6 py-4">Name</th>
          <th className="text-left px-6 py-4">Phone</th>
          <th className="text-left px-6 py-4">City</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id} className="border-t">
            <td className="px-6 py-4">{customer.name}</td>
            <td className="px-6 py-4">{customer.phone}</td>
            <td className="px-6 py-4">{customer.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</MainLayout>
);
}

export default Customers;
