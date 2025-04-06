import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/fetch-user/${userId}`)
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
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-amber-800">User Profile</h2>
        {user ? (
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="relative h-40 bg-gradient-to-r from-amber-100 to-amber-800">
              {user.profilePic && (
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                  <img
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default-profile.png"; // Fallback image
                      e.target.src = "http://localhost:5000/public/Images/profile_pictures/profile.png"; // Use server path for fallback image
                    }}
                    src={`http://localhost:5000/public/Images/profile_pictures/${user.profilePic}`}
                    alt="Profile"
                    className="w-40 h-40 rounded-full border-4 border-amber-800 shadow-lg"
                  />
                </div>
              )}
            </div>

            <div className="pt-20 pb-6 px-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-amber-800 w-24">Full Name:</span>
                  <span className="font-semibold">{user.fullname}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-amber-800 w-24">Email:</span>
                  <span className="font-semibold">{user.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-amber-800 w-24">Mobile:</span>
                  <span className="font-semibold">{user.mobile}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-amber-800 w-24">Gender:</span>
                  <span className="font-semibold">{user.gender}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-amber-800 w-24">State:</span>
                  <span className="font-semibold">{user.state}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-amber-800 w-24">Password:</span>
                  <span className="font-semibold">{user.password}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-amber-800 w-24">Hobbies:</span>
                  <span className="font-semibold">{user.hobbies}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => navigate(`/admin/edit-user/${userId}`)}
                  className="px-6 py-2 bg-amber-800 text-white rounded-lg hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-colors duration-200 flex items-center space-x-2 hover:border-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">User not found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewUser;
