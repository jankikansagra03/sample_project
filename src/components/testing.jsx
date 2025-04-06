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
    hobbies: [],
  });

  const [preview, setPreview] = useState(null); // To preview the selected image
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      setLoading(true);
      axios
        .get(http://localhost:5000/api/users/fetch-user/${userId})
        .then((response) => {
          setUserData({ ...response.data });
          //   console.log(response.data.profilePic);
          setPreview(response.data.profilePic); // Set preview if profile picture exists
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

  // useEffect(() => {
  //     console.log
  // }, [preview]);
  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      hobbies: checked
        ? [...prevData.hobbies, value] // Add hobby if checked
        : prevData.hobbies.filter((hobby) => hobby !== value), // Remove hobby if unchecked
    }));
  };
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

    // if (userData.password !== userData.confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }

    setSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("hobbies", JSON.stringify(userData.hobbies));

    if (userData.password) {
      formData.append("password", userData.password);
    }
    if (userData.profilePicture && userData.profilePicture instanceof File) {
      formData.append("profilePicture", userData.profilePicture);
    }



    try {
      await axios.put(
        http://localhost:5000/api/users/update-user/${userId},
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(formData);
      alert("User updated successfully!");
      navigate("/admin/manage-users");
    } catch (error) {
      console.log(formData);
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
      <h1 className="text-center text-2xl w-100 bg-amber-800 text-white p-4">
        Edit User
      </h1>
      <br />
      {loading ? (
        <p>Loading user data...</p>
      ) : (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm text-amber-800">
                Fullname
              </label>
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
              <label className="block mb-2 text-sm text-amber-800">
                Mobile
              </label>
              <input
                type="text"
                name="mobile"
                className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                onChange={handleChange}
                value={userData.mobile}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-amber-800">
                Gender
              </label>
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
                <option value="gujarat">Gujarat</option>
                <option value="maharashtra">Maharashtra</option>
              </select>
            </div>

            {/* Password Field */}

            <div>
              <label className="block mb-2 text-sm text-amber-800">
                Password
              </label>
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
              <label className="block mb-2 text-sm text-amber-800">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                onChange={handleChange}
                value={userData.password}
                placeholder="Confirm new password"
              />
            </div>
            <div className="hobbies-group">
              <label className="block mb-2 text-sm text-amber-800">
                Hobbies
              </label>
              <div className="flex gap-4">
                <label className="text-amber-800">
                  <input
                    type="checkbox"
                    name="hobbies"
                    value="reading"
                    onChange={handleHobbyChange}
                    checked={userData.hobbies.includes("reading")}
                  />{" "}
                  Reading
                </label>
                <label className="text-amber-800">
                  <input
                    type="checkbox"
                    name="hobbies"
                    value="coding"
                    onChange={handleHobbyChange}
                    checked={userData.hobbies.includes("coding")}
                  />{" "}
                  Coding
                </label>
                <label className="text-amber-800">
                  <input
                    type="checkbox"
                    name="hobbies"
                    value="music"
                    onChange={handleHobbyChange}
                    checked={userData.hobbies.includes("music")}
                  />{" "}
                  Music
                </label>
              </div>
              <div className="error-message text-red-500 text-sm mt-1"></div>{" "}
              {/* Error message appears here */}
            </div>
            {/* Profile Picture Upload */}
            <div>
              <label className="block mb-2 text-sm text-amber-800">
                Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                onChange={handleFileChange}
              />
              {preview && (
                <img
                  src={http://localhost:5000/public/Images/profile_pictures/${preview}}
                  alt="Preview"
                  className="mt-2 w-32 h-32 rounded-full border"
                />
              )}
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2 text-white bg-amber-800 rounded-md hover:bg-white hover:text-amber-800 border border-amber-800 transition-colors duration-200"
            >
              {submitting ? "Updating..." : "Update"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/manage-users")}
              className="px-6 py-2 text-amber-800 bg-white rounded-md hover:bg-amber-800 hover:text-white border border-amber-800 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};