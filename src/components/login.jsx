import React from "react";
import useJQueryValidation from "./useJQueryValidation";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const location = useLocation();
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ message: "", type: "" }); // Alert state

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const status = params.get("status");
    const message = params.get("message");

    if (status && message) {
      setStatusMessage(message);
      setStatusType(status); // 'success' or 'error'
    }
  }, [location]);

  useJQueryValidation("login_form", {
    password: { required: true, minlength: 3, maxlength: 20 },
    email: { required: true, email: true },
  }, {
    password: {
      required: "Password is required", minlength: "At least 3 characters", maxlength: "PAssword must contain maximum 20 characters"
    },
    email: { required: "Email is required", email: "Enter a valid email" },
  });


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", { email, password });

      // Store token and user details


      setAlert({ message: "Login successful!", type: "success" });

      // Redirect based on user role
      setTimeout(() => {
        if (response.data.user.role === "admin") {
          localStorage.setItem("admintoken", response.data.token);
          localStorage.setItem("admin", JSON.stringify(response.data.user));
          navigate("/admin-dashboard");

        } else {
          localStorage.setItem("usertoken", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/user-dashboard");

        }
      }, 2000);
    } catch (error) {
      setAlert({
        message: error.response?.data?.error || "Invalid credentials. Please try again!",
        type: "error",
      });
    }
  }


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

      <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-4 lg:py-8 mx-auto">
        <div className="max-w-md mx-auto mt-5">
          <div className="bg-white border shadow-sm border-amber-800 rounded-xl">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-amber-800">Sign in</h1>
                <p className="mt-2 text-sm text-amber-800">
                  Don't have an account yet?
                  <a
                    className="font-medium text-amber-800 decoration-2 hover:underline"
                    href="register.php"
                  >
                    Sign up here
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
                  Sign in with Google
                </button>

                <div className="py-3 flex items-center text-xs text-amber-800 uppercase before:flex-[1_1_0%] before:border-t before:border-amber-800 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-amber-800 after:ml-6">
                  Or
                </div>

                <form id="login_form" onSubmit={handleLogin}>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm text-amber-800"
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="block w-full px-4 py-3 text-sm border rounded-md border-amber-800 focus:border-blue-500 focus:ring-blue-500"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      {/* <div className="error" id="emailError"></div> */}
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm text-amber-800"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="block w-full px-4 py-3 text-sm border rounded-md border-amber-800 focus:border-blue-500 focus:ring-blue-500"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      {/* <div className="error" id="passwordError"></div> */}
                    </div>

                    <div className="flex items-center">
                      <div className="flex">
                        <input
                          type="checkbox"
                          className="relative shrink-0 w-[16px] h-[16px] border border-amber-800 rounded-sm"
                          id="remember_me"
                          name="remember_me"
                        />
                        <label
                          htmlFor="remember_me"
                          className="ml-3 text-sm text-amber-800"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="ml-auto">
                        <a
                          className="text-sm text-amber-800 decoration-2 hover:underline"
                          href="forgot_password.php"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-white align-middle transition-all border rounded-md shadow-sm bg-amber-800 hover:bg-white hover:border border-amber-800 hover:text-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
