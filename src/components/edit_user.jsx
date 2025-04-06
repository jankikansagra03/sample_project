

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import useJQueryValidation from "./useJQueryValidation";

const EditUserForm = () => {
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
    hobbies: [],
    state: "",
    profilePic: "",
  });
  // const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
    hobbies: [],
    state: "",
    profilePic: "",
  });
  const navigate = useNavigate();
  useJQueryValidation(
    "register_form",
    {
      fullname: {
        required: true,
        minlength: 2,
        maxlength: 50,
      },
      email: {
        required: true,
        email: true,
      },
      mobile: {
        required: true,
        regex: /^[0-9]{10}$/,
      },
      password: {
        required: true,
        minlength: 8,
        regex:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      },
      confirmPassword: {
        required: true,
        equalTo: "#password",
      },
      gender: {
        required: true,
      },
      hobbies: {
        required: true,
        minlength: 1,
      },
      state: {
        required: true,
      },
      profilePic: {
        // required: true,
        imageMimes: true,
        filesize: 100000, // 100KB in bytes
      },
    },
    {
      fullname: {
        required: "Please enter your name",
        minlength: "Name must be at least 2 characters long",
        maxlength: "Name name cannot be longer than 50 characters",
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      password: {
        required: "Please enter a password",
        minlength: "Password must be at least 8 characters long",
        regex:
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
      },
      confirmPassword: {
        required: "Please confirm your password",
        equalTo: "Passwords do not match",
      },
      mobile: {
        required: "Please enter your phone number",
        regex: "Please enter a valid 10-digit phone number",
      },
      gender: {
        required: "Please select your gender",
      },
      hobbies: {
        required: "Please select at least one hobby",
        minlength: "Please select at least one hobby",
      },
      state: {
        required: "Please select your state",
      },
      profilePic: {
        required: "Please upload a profile picture",
        accept: "Please upload an image file",
        filesize: "File size must be less than 200KB",
      },
    }
  );
  useEffect(() => {
    if (userId) {
      setLoading(true);
      axios
        .get(`http://localhost:5000/api/users/fetch-user/${userId}`)
        .then((response) => {
          setUserData({ ...response.data });
          console.log(userData);
          setFormData({
            fullname: response.data.fullname || "",
            email: response.data.email || "",
            mobile: response.data.mobile || "",
            password: response.data.password || "",
            confirmPassword: response.data.password || "",
            gender: response.data.gender || "",
            hobbies: response.data.hobbies || [],
            state: response.data.state || "",
            profilePic: response.data.profilePic || null,
          });
          // console.log("http://localhost:5000/public/Images/profile_pictures/"+formData.profilePic)
          // setPreview(URL.createObjectURL(formData.profilePic)); 
          // console.log("User Data:", response.data); // Log the user data t

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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (name === "profilePic" && type === "file") {
      const file = files[0];
      if (file && file.size <= 200000) {
        setFormData((prev) => ({ ...prev, profilePic: file }));
      } else {
        alert("File must be less than 200KB");
      }
    } else if (name === "hobbies" && type === "checkbox") {
      const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(h => h.value);
      setFormData({ ...formData, hobbies });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };// useEffect(() => {
  //     console.log
  // }, [preview]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formDataToSend = new FormData();

    const formDataToSend = new FormData();
    formDataToSend.append("fullname", formData.fullname);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("state", formData.state);
    formDataToSend.append('hobbies', JSON.stringify(formData.hobbies)); 
    if (formData.profilePic) {
      formDataToSend.append("profilePic", formData.profilePic);
    }


    console.log("Sending Data:", Object.fromEntries(formDataToSend.entries()));

    try {
      await axios.put(
        `http://localhost:5000/api/users/update-user/${userId}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("User updated successfully!");
      navigate("/admin/manage-users");
    } catch (error) {
      alert("Failed to update user");
      console.error("Error updating user:", error);
    } finally {
      // setSubmitting(false);
    }
  };

  return (
    <div className="form-container">


      {loading ? (
        <p>Loading user data...</p>
      ) : (
        <div className="max-w-screen-lg w-full px-4 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto">
          <div className="max-w-3xl w-full mx-auto mt-5">
            <div className="bg-white border shadow-sm border-amber-800 rounded-xl">
              <div className="p-4 sm:p-7">


                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-amber-800">
                      Edit User
                    </h2>
                  </div>
                  <div className="max-w-4xl w-full mx-auto bg-white p-10 rounded-lg shadow-md">
                    <form id="register_form" encType="multipart/form-data" method="post" onSubmit={handleSubmit} onChange={handleChange}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Fullname */}
                        <div>
                          <label className="block mb-2 text-sm text-amber-800">
                            Fullname
                          </label>
                          <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500" onChange={handleChange}
                          />
                          <div className="error text-red-500 text-sm mt-1"></div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block mb-2 text-sm text-amber-800">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500" onChange={handleChange}
                            readOnly
                          />
                          <div className="error text-red-500 text-sm mt-1"></div>
                        </div>

                        {/* Mobile */}
                        <div>
                          <label className="block mb-2 text-sm text-amber-800">
                            Mobile
                          </label>
                          <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500" onChange={handleChange}
                          />
                          <div className="error text-red-500 text-sm mt-1"></div>
                        </div>

                        {/* Password */}
                        <div>
                          <label className="block mb-2 text-sm text-amber-800">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500" onChange={handleChange}
                          />
                          <div className="error text-red-500 text-sm mt-1"></div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                          <label className="block mb-2 text-sm text-amber-800">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500" onChange={handleChange}
                          />
                          <div className="error text-red-500 text-sm mt-1"></div>
                        </div>

                        {/* Gender */}
                        <div>
                          <label className="block mb-2 text-sm text-amber-800">
                            Gender
                          </label>
                          <select
                            name="gender"

                            className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500" onChange={handleChange}
                            value={formData.gender}
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                          <div className="error text-red-500 text-sm mt-1"></div>
                        </div>


                        <div className="hobbies-group">
                          <label className="block mb-2 text-sm text-amber-800">Hobbies</label>
                          <div className="flex gap-4">
                            <label className="text-amber-800">
                              <input type="checkbox" name="hobbies" value="reading" onChange={handleChange} checked={formData.hobbies.includes("reading")} /> Reading
                            </label>
                            <label className="text-amber-800">
                              <input type="checkbox" name="hobbies" value="coding" onChange={handleChange} checked={formData.hobbies.includes("coding")} /> Coding
                            </label>
                            <label className="text-amber-800">
                              <input type="checkbox" name="hobbies" value="music" onChange={handleChange} checked={formData.hobbies.includes("music")} /> Music
                            </label>
                          </div>
                          <div className="error-message text-red-500 text-sm mt-1"></div> {/* Error message appears here */}
                        </div>

                        {/* State */}
                        <div>
                          <label className="block mb-2 text-sm text-amber-800">
                            State
                          </label>
                          <select
                            name="state"
                            className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500"
                            onChange={handleChange}
                            value={formData.state}
                          >
                            <option value="">Select State</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Maharashtra">Maharashtra</option>
                          </select>
                          <div className="error text-red-500 text-sm mt-1"></div>
                        </div>

                        {/* Profile Picture */}
                        <div>
                          <label className="block mb-2 text-sm text-amber-800">
                            Profile Picture (Max 200KB)
                          </label>
                          <input
                            type="file"
                            name="profilePic"
                            id="profilePic"
                            className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500" onChange={handleChange}
                          />
                          <div
                            id="profilePicError"
                            className="error text-red-500 text-sm mt-1"
                          ></div>
                        </div>
                        <div>
                          <label className="block mb-2 text-sm text-amber-800">
                            Profile Picture Preview
                          </label>
                          <div>

                          </div>

                          {formData.profilePic && (
                            <div className="mt-4">
                            <img
                              src={
                                `http://localhost:5000/public/Images/profile_pictures/${formData.profilePic}`
                              }
                              alt="Profile Preview"
                              className="w-20 h-20 object-cover rounded-full"
                            />
                            </div>
                            )}
                    </div>
                      <button
                        type="submit"
                        className="w-full mt-4 px-4 py-2 text-white bg-amber-800 rounded-md hover:bg-white hover:text-amber-800 border border-amber-800"
                      >
                        Sign Up
                      </button>
                      </div>
                      `
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUserForm;
