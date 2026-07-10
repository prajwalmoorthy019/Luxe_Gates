
import { customersData } from "../data/customersData";
import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
    const [customers, setCustomers] = useState(() => {
        const savedCustomers = localStorage.getItem("customers");

        return savedCustomers
            ? JSON.parse(savedCustomers)
            : customersData;
    });
    useEffect(() => {
        localStorage.setItem(
            "customers",
            JSON.stringify(customers)
        );
    }, [customers]);

    const addCustomer = (customer) => {
        setCustomers((prev) => [...prev, customer]);
    };

    const updateCustomer = (updatedCustomer) => {
        setCustomers((prev) =>
            prev.map((customer) =>
                customer.id === updatedCustomer.id
                    ? updatedCustomer
                    : customer
            )
        );
    };

    const deleteCustomer = (id) => {
        setCustomers((prev) =>
            prev.filter((customer) => customer.id !== id)
        );
    };

    return (
        <CustomerContext.Provider
            value={{
                customers,
                addCustomer,
                updateCustomer,
                deleteCustomer,
            }}
        >
            {children}
        </CustomerContext.Provider>
    );
}

export function useCustomers() {
    return useContext(CustomerContext);
}
