import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    console.log("Protected Route:", isLoggedIn);

    if (!isLoggedIn) {
        console.log("Redirecting to Login");
        return <Navigate to="/" replace />;
    }

    console.log("Opening Protected Page");

    return children;
}

export default ProtectedRoute;