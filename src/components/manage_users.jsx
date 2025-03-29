import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/users/all-users") // Replace with actual API URL
            .then((response) => {
                console.log("Users fetched:", response.data);
                if (Array.isArray(response.data)) {
                    setUsers(response.data);
                } else if (Array.isArray(response.data.users)) {
                    setUsers(response.data.users);
                } else {
                    throw new Error("Invalid response format");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching users:", error.response || error);
                setError(error.response?.data?.message || "Failed to fetch users");
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        console.log("Updated users state:", users);
    }, [users]);

    // Define table columns
    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.fullname,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
        },
        {
            name: "Role",
            selector: (row) => row.role,
            sortable: true,
        },
        {
            name: "Profile",
            cell: (row) => (
                <img
                    src={`http://localhost:5000/public/Images/profile_pictures/${row.profilePic}`} // Ensure correct path
                    onError={(e) => (e.target.src = "/default-profile.png")} // Fallback image
                    alt="Profile"
                    className="w-12 h-12 rounded-full border"
                />
            ),
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={() => editUser(row.id)}>Edit</button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => deleteUser(row.id)}>Delete</button>
                </div>
            ),
        },
    ];

    const editUser = (id) => {
        alert(`Edit user with ID: ${id}`);
    };

    const deleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            axios
                .delete(`http://localhost:5000/api/users/${id}`)
                .then(() => {
                    setUsers(users.filter((user) => user.id !== id));
                })
                .catch(() => alert("Error deleting user"));
        }
    };

    return (

        <div className="max-w-4xl mx-auto mt-5 p-4 bg-white shadow-lg rounded-lg border">
            <h1 className="text-2xl font-bold text-center mb-5">Manage Users</h1>

            {loading && <p className="text-center text-gray-500">Loading users...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {/* {!loading && !error && users.length > 0 ? (
                <DataTable
                    columns={columns}
                    data={users}
                    pagination
                    highlightOnHover
                    className="shadow-lg rounded-lg border"
                />
            ) : (
                !loading && <p className="text-center text-gray-500">No users found.</p>
            )} */}
            {!loading && !error && users.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 text-left">ID</th>
                                <th className="px-4 py-2 text-left">Name</th>
                                <th className="px-4 py-2 text-left">Email</th>
                                <th className="px-4 py-2 text-left">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border-t hover:bg-gray-50">
                                    <td className="px-4 py-2">{user._id}</td>
                                    <td className="px-4 py-2">{user.fullname}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                !loading && <p className="text-center text-gray-500">No users found.</p>
            )}

        </div>
    );
}

export default ManageUsers;
