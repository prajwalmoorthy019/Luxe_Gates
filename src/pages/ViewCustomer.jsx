import MainLayout from "../layouts/MainLayout";
import { Link, useParams } from "react-router-dom";
import { customersData } from "../data/customersData";

function ViewCustomer() {
    const { id } = useParams();

    const customer = customersData.find(
        (customer) => customer.id === Number(id)
    );

    if (!customer) {
        return (<MainLayout> <div className="bg-white rounded-3xl border p-8 shadow-sm"> <h1 className="text-3xl font-bold text-red-600">
            Customer Not Found </h1>

            <Link
                to="/customers"
                className="inline-block mt-6 bg-yellow-600 text-white px-6 py-3 rounded-2xl hover:bg-yellow-700 transition"
            >
                Back to Customers
            </Link>
        </div>
        </MainLayout>
        );

}

return ( <MainLayout>
{/* Header */} <div className="flex justify-between items-center mb-8"> <div> <h1 className="text-5xl font-bold">
Customer Details </h1>
            < p className = "text-zinc-500 mt-2" >
                View customer information
      </p >
    </div >

            <div className="flex gap-3">
                <Link
                    to="/customers"
                    className="border border-zinc-300 px-5 py-3 rounded-2xl hover:bg-zinc-50 transition"
                >
                    Back
                </Link>

                <Link
                    to={`/customers/edit/${customer.id}`}
                    className="bg-yellow-600 text-white px-5 py-3 rounded-2xl hover:bg-yellow-700 transition"
                >
                    Edit Customer
                </Link>
            </div>
  </div >

            {/* Customer Details Card */ }
            < div className = "bg-white rounded-3xl border shadow-sm p-8" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-sm text-zinc-500">
                            Customer Name
                        </p>

                        <p className="text-lg font-semibold mt-1">
                            {customer.name}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">
                            Customer Type
                        </p>

                        <p className="text-lg font-semibold mt-1">
                            {customer.type}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">
                            Phone Number
                        </p>

                        <p className="text-lg font-semibold mt-1">
                            {customer.phone}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">
                            Email Address
                        </p>

                        <p className="text-lg font-semibold mt-1">
                            {customer.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">
                            City
                        </p>

                        <p className="text-lg font-semibold mt-1">
                            {customer.city}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">
                            Status
                        </p>

                        <span
                            className={`inline-block px-3 py-1 rounded-full text-sm mt-1 ${customer.status === "Active"
                                    ? "bg-green-100 text-green-700"
                                    : customer.status === "Lead"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-red-100 text-red-700"
                                }`}
                        >
                            {customer.status}
                        </span>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">
                            Created On
                        </p>

                        <p className="text-lg font-semibold mt-1">
                            {customer.createdAt}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">
                            Last Updated
                        </p>

                        <p className="text-lg font-semibold mt-1">
                            {customer.updatedAt}
                        </p>
                    </div>
                </div>
  </div >
</MainLayout >

);
}

export default ViewCustomer;
