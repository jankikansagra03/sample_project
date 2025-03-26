import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    // const navigate = useNavigate();

    const handleLogout = () => {
        // Clear localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // Clear sessionStorage (if used)
        sessionStorage.clear();

        // Clear cookies (if applicable)
        document.cookie.split(";").forEach((cookie) => {
            document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/");
        });

        // Force page reload to clear cache
        window.location.href = "/login"; // Full reload ensures fresh session
    };

    return <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>;
};

export default LogoutButton;
