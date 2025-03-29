import React, { useState, useEffect } from "react";
import { Menu, Home, Users, Box, ShoppingCart, BarChart, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import GuestNavbar from "./guest_navbar";
import Footer from "./footer";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`bg-[#8A3D00] text-white fixed left-0 top-0 h-full transition-all duration-300 ease-in-out ${isOpen ? "w-64" : "w-16"}`}>
            <div className="p-4 flex justify-between items-center">
                <h1 className={`text-xl font-bold ${!isOpen && "hidden"}`}>Admin Panel</h1>
                <button onClick={toggleSidebar} className="text-white">
                    <Menu size={24} />
                </button>
            </div>
            <ul className="mt-6 space-y-4 p-2">
                {[
                    { icon: Home, label: "Dashboard", to: "/admin-dashboard" },
                    { icon: Users, label: "Manage Users", to: "/admin/manage-users" },
                    { icon: Box, label: "Manage Products", to: "/admin/manage-products" },
                    { icon: ShoppingCart, label: "Orders", to: "" },
                    { icon: BarChart, label: "Reports", to: "" },
                    { icon: Settings, label: "Settings", to: "" },
                    { icon: LogOut, label: "Logout", to: "/logout" },
                ].map(({ icon: Icon, label, to }, index) => (
                    <Link key={index} to={to}>
                        <li className="flex items-center gap-3 cursor-pointer p-2 hover:bg-[#A6521F] w-auto rounded">
                            <Icon size={24} />
                            <span className={`${!isOpen && "hidden"}`}>{label}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

const AdminPanel = ({ children }) => {
    const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => setIsOpen(window.innerWidth > 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex">
            <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
            <div className="transition-all duration-300 w-full" style={{ marginLeft: isOpen ? "16rem" : "4rem" }}>
                <GuestNavbar />
                <div className="p-4">
                    {children} {/* Renders the component passed as a prop */}
                </div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default AdminPanel;
