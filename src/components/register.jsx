import React from "react";
import useJQueryValidation from "./useJQueryValidation";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  //jquery validation
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
        required: true,
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

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
    hobbies: [],
    state: "",
    profilePic: null,
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

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
  };

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

    if (formData.profilePic) {
      formDataToSend.append("profilePic", formData.profilePic);
    }

    console.log("Sending Data:", Object.fromEntries(formDataToSend.entries()));


    try {
      const response = await axios.post("http://localhost:5000/api/users/add-user", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setStatusMessage(response.data.message || "User added successfully!");
      setStatusType("success");
      setTimeout(() => {
        navigate("/login"); // Redirect to login route
      }, 3000);
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Something went wrong!";
      setStatusMessage(errorMessage);
      setStatusType("error");
      setTimeout(() => {
        navigate("/register"); // Redirect to login route
      }, 3000);
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-5">
        {/* Alert Message */}
        {statusMessage && (
          <div
            className={`p-3 mb-4 text-white rounded-lg ${statusType === "success" ? "bg-green-500" : "bg-red-500"
              }`}
          >
            {statusMessage}
          </div>
        )}
      </div>
      <div className="max-w-screen-lg w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-3xl w-full mx-auto mt-5">
          <div className="bg-white border shadow-sm border-amber-800 rounded-xl">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-amber-800">Sign up</h1>
                <p className="mt-2 text-sm text-amber-800">
                  Already have an account?
                  <a
                    className="font-medium text-amber-800 decoration-2 hover:underline"
                    href="login.php"
                  >
                    Sign in here
                  </a>
                </p>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-white align-middle transition-all border rounded-md shadow-sm bg-amber-800 hover:bg-white hover:border border-amber-800 hover:text-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
                >
                  <svg
                    className="w-4 h-auto"
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    fill="none"
                  >
                    <path
                      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4694 37.8937C17.2807 37.8937 12.0023 33.7812 10.1526 28.1412L9.88557 28.1706L2.61662 33.7812L2.52075 34.0456C6.36416 41.7125 14.287 47 23.4694 47Z"
                      fill="#34A853"
                    />
                    <path
                      d="M10.1526 28.1413C9.66 26.6725 9.37737 25.1156 9.37737 23.5C9.37737 21.8844 9.66 20.3275 10.1526 18.8588V18.5356L2.75345 12.8369L2.52075 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1526 28.1413Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36416 5.2875 2.52075 12.9544L10.1526 18.8588C12.0023 13.2187 17.2807 9.07688 23.4694 9.07688Z"
                      fill="#EB4335"
                    />
                  </svg>
                  Sign up with Google
                </button>

                <div className="py-3 flex items-center text-xs text-amber-800 uppercase before:flex-[1_1_0%] before:border-t before:border-amber-800 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-amber-800 after:ml-6">
                  Or
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
                          className="w-full px-4 py-2 border rounded-md border-amber-800 focus:ring-blue-500" onChange={handleChange}
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
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                        <div className="error text-red-500 text-sm mt-1"></div>
                      </div>

                      {/* Hobbies */}
                      {/* <div>
                        <label className="block mb-2 text-sm text-amber-800">
                          Hobbies
                        </label>
                        <div className="flex gap-4">
                          <label className="text-amber-800">
                            <input
                              type="checkbox"
                              name="hobbies"
                              value="Reading"
                            />{" "}
                            Reading
                          </label>
                          <label className="text-amber-800">
                            <input
                              type="checkbox"
                              name="hobbies"
                              value="Coding"
                            />{" "}
                            Coding
                          </label>
                          <label className="text-amber-800">
                            <input
                              type="checkbox"
                              name="hobbies"
                              value="Music"
                            />{" "}
                            Music
                          </label>
                        </div>
                        <div className="error text-red-500 text-sm mt-1"></div>
                      </div> */}
                      <div className="hobbies-group">
                        <label className="block mb-2 text-sm text-amber-800">Hobbies</label>
                        <div className="flex gap-4">
                          <label className="text-amber-800">
                            <input type="checkbox" name="hobbies" value="Reading" onChange={handleChange} /> Reading
                          </label>
                          <label className="text-amber-800">
                            <input type="checkbox" name="hobbies" value="Coding" onChange={handleChange} /> Coding
                          </label>
                          <label className="text-amber-800">
                            <input type="checkbox" name="hobbies" value="Music" onChange={handleChange} /> Music
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
                        >
                          <option value="" onChange={handleChange}>Select State</option>
                          <option value="Gujarat" onChange={handleChange}>Gujarat</option>
                          <option value="Maharashtra" onChange={handleChange}>Maharashtra</option>
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
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full mt-4 px-4 py-2 text-white bg-amber-800 rounded-md hover:bg-white hover:text-amber-800 border border-amber-800"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
