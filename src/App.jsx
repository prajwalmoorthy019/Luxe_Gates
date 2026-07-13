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

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <CustomerProvider>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customers"
            element={
              <ProtectedRoute>
                <Customers />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customers/new"
            element={
              <ProtectedRoute>
                <CreateCustomer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customers/view/:id"
            element={
              <ProtectedRoute>
                <ViewCustomer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customers/edit/:id"
            element={
              <ProtectedRoute>
                <EditCustomer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/quotations"
            element={
              <ProtectedRoute>
                <Quotations />
              </ProtectedRoute>
            }
          />

          <Route
            path="/quotations/new"
            element={
              <ProtectedRoute>
                <CreateQuotation />
              </ProtectedRoute>
            }
          />

          <Route
            path="/gallery"
            element={
              <ProtectedRoute>
                <Gallery />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>
    </CustomerProvider>
  );
}

export default App;