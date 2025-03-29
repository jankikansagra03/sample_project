import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ setUserIsLoggedIn, setIsAdminLoggedIn }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear localStorage
        localStorage.removeItem("usertoken");
        localStorage.removeItem("user");
        localStorage.removeItem("admintoken");
        localStorage.removeItem("admin");

        // Clear sessionStorage (if used)
        sessionStorage.clear();

        // Update state before navigating
        setUserIsLoggedIn(false);
        setIsAdminLoggedIn(false);

        // Navigate to login page
        navigate("/login");
    }, [navigate, setUserIsLoggedIn, setIsAdminLoggedIn]);

    return null; // Component does not render anything
};

export default LogoutButton;
