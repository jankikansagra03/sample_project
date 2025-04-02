import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditUserForm = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState({
        fullname: "",
        email: "",
        mobile: "",
        gender: "",
        state: "",
        password: "",
        confirmPassword: "",
        profilePicture: "", // Store the uploaded image URL
    });

    const [preview, setPreview] = useState(null); // To preview the selected image
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            setLoading(true);
            axios
                .get(`http://localhost:5000/api/users/users/${userId}`)
                .then((response) => {
                    setUserData({ ...response.data, password: "", confirmPassword: "" });
                    setPreview(response.data.profilePicture); // Set preview if profile picture exists
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    alert("Error fetching user data");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [userId]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUserData((prevData) => ({
                ...prevData,
                profilePicture: file, // Store the file in state
            }));
            setPreview(URL.createObjectURL(file)); // Generate preview URL
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userData.password !== userData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setSubmitting(true);

        const formData = new FormData();
        formData.append("fullname", userData.fullname);
        formData.append("email", userData.email);
        formData.append("mobile", userData.mobile);
        formData.append("gender", userData.gender);
        formData.append("state", userData.state);

        if (userData.password) {
            formData.append("password", userData.password);
        }
        if (userData.profilePicture) {
            formData.append("profilePicture", userData.profilePicture);
        }

        try {
            await axios.put(`http://localhost:5000/api/users/${userId}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("User updated successfully!");
            navigate("/admin/manage-users");
        } catch (error) {
            alert("Failed to update user");
            console.error("Error updating user:", error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="form-container">
            <h2>Edit User</h2>
            {loading ? (
                <p>Loading user data...</p>
            ) : (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 text-sm text-amber-800">Fullname</label>
                            <input
                                type="text"
                                name="fullname"
                                className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                                onChange={handleChange}
                                value={userData.fullname}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-amber-800">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                                onChange={handleChange}
                                value={userData.email}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-amber-800">Mobile</label>
                            <input
                                type="text"
                                name="mobile"
                                className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                                onChange={handleChange}
                                value={userData.mobile}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-amber-800">Gender</label>
                            <select
                                name="gender"
                                className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                                onChange={handleChange}
                                value={userData.gender}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-amber-800">State</label>
                            <select
                                name="state"
                                className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                                onChange={handleChange}
                                value={userData.state}
                            >
                                <option value="">Select State</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Maharashtra">Maharashtra</option>
                            </select>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block mb-2 text-sm text-amber-800">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                                onChange={handleChange}
                                value={userData.password}
                                placeholder="Enter new password (optional)"
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block mb-2 text-sm text-amber-800">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                                onChange={handleChange}
                                value={userData.confirmPassword}
                                placeholder="Confirm new password"
                            />
                        </div>

                        {/* Profile Picture Upload */}
                        <div>
                            <label className="block mb-2 text-sm text-amber-800">Profile Picture</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                                onChange={handleFileChange}
                            />
                            {preview && (
                                <img src={preview} alt="Preview" className="mt-2 w-32 h-32 rounded-full border" />
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full mt-4 px-4 py-2 text-white bg-amber-800 rounded-md hover:bg-white hover:text-amber-800 border border-amber-800"
                    >
                        {submitting ? "Updating..." : "Update"}
                    </button>
                    <button type="button" onClick={() => navigate("/admin/manage-users")} className="ml-4">
                        Cancel
                    </button>
                </form>
            )}
        </div>
    );
};

export default EditUserForm;
