import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CustomerProvider } from "./context/CustomerContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import CreateCustomer from "./pages/CreateCustomer";
import ViewCustomer from "./pages/ViewCustomer";
import EditCustomer from "./pages/EditCustomer";
import Quotations from "./pages/Quotations";
import CreateQuotation from "./pages/CreateQuotation";
import Gallery from "./pages/Gallery";
import Settings from "./pages/Settings";

function App() {
  return (
    <CustomerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/new" element={<CreateCustomer />} />
          <Route path="/customers/view/:id" element={<ViewCustomer />} />
          <Route path="/customers/edit/:id" element={<EditCustomer />} />
          <Route path="/quotations" element={<Quotations />} />
          <Route path="/quotations/new" element={<CreateQuotation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </CustomerProvider>
  );
}

export default App;