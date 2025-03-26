import React, { useState, useEffect } from "react";
import { Menu, Home, Users, Box, ShoppingCart, BarChart, Settings, LogOut } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`bg-[#8A3D00] text-white fixed left-0 top-0 h-full transition-all duration-300 ease-in-out ${isOpen ? "w-60" : "w-16"
                }`}
        >
            <div className="p-4 flex justify-between items-center">
                <h1 className={`text-xl font-bold ${!isOpen && "hidden"}`}>Admin Panel</h1>
                <button onClick={toggleSidebar} className="text-white">
                    <Menu size={24} />
                </button>
            </div>
            <ul className="mt-6 space-y-4 px-4">
                {[
                    { icon: Home, label: "Dashboard" },
                    { icon: Users, label: "Manage Users" },
                    { icon: Box, label: "Manage Products" },
                    { icon: ShoppingCart, label: "Orders" },
                    { icon: BarChart, label: "Reports" },
                    { icon: Settings, label: "Settings" },
                    { icon: LogOut, label: "Logout" },
                ].map(({ icon: Icon, label }, index) => (
                    <li key={index} className="flex items-center gap-3 cursor-pointer hover:bg-[#A6521F] p-2 rounded">
                        <Icon size={24} />
                        <span className={`${!isOpen && "hidden"}`}>{label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const AdminPanel = () => {
    const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => setIsOpen(window.innerWidth > 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex">
            <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
            <div className={`p-5 transition-all duration-300`} style={{ marginLeft: isOpen ? "16rem" : "4rem" }}>
                <h1 className="text-2xl font-bold">Welcome to Admin Dashboard</h1>
                <p className="text-gray-600 mt-2">Manage your site efficiently.</p>
                <div className="h-screen bg-gray-100 mt-4 p-5 rounded-lg">Scrollable content here...</div>
            </div>
        </div>
    );
};

export default AdminPanel;
