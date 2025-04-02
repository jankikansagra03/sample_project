import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/users/${userId}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
                alert("Failed to fetch user details.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [userId]);

    if (loading) return <p>Loading user details...</p>;

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-xl font-bold">User Details</h2>
            {user ? (
                <div className="border p-4 rounded-md shadow-md">
                    <p><strong>Full Name:</strong> {user.fullname}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Mobile:</strong> {user.mobile}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>State:</strong> {user.state}</p>
                    {user.profilePicture && (
                        <img src={user.profilePicture} alt="Profile" className="mt-2 w-32 h-32 rounded-full border" />
                    )}
                    <button
                        onClick={() => navigate(`/admin/edit-user/${userId}`)}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Edit User
                    </button>
                </div>
            ) : (
                <p>User not found.</p>
            )}
        </div>
    );
};

export default ViewUser;
