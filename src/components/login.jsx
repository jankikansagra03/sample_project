import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useJQueryValidation from "./useJQueryValidation";
import GuestNavbar from "./guest_navbar";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for button

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const status = params.get("status");
    const message = params.get("message");

    if (status && message) {
      setStatusMessage(message);
      setStatusType(status); // 'success' or 'error'
    }
  }, [location]);

  useJQueryValidation(
    "login_form",
    {
      email: { required: true, email: true },
      password: { required: true, minlength: 3, maxlength: 20 },
    },
    {
      email: { required: "Email is required", email: "Enter a valid email" },
      password: {
        required: "Password is required",
        minlength: "At least 3 characters",
        maxlength: "Password must be a maximum of 20 characters",
      },
    }
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      // Store user token and details
      localStorage.setItem(`${data.user.role}token`, data.token);
      localStorage.setItem(data.user.role, JSON.stringify(data.user));
      // window.dispatchEvent(new Event("authChange"));

      setStatusMessage(data.message);
      setStatusType(data.status);

      setTimeout(() => {
        navigate(data.user.role === "admin" ? "/admin-dashboard" : "/user-dashboard");
      }, 2000);
    } catch (error) {
      setStatusMessage(error.response?.data?.message || "Invalid credentials. Please try again!");
      setStatusType(error.response?.data?.status || "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GuestNavbar />
      <div className="max-w-md mx-auto mt-5">
        {/* Status Message Alert */}
        <br />
        {statusMessage && (
          <div className={`p-3 mb-4 text-white rounded-lg ${statusType === "success" ? "bg-green-500" : "bg-red-500"}`}>
            {statusMessage}
          </div>
        )}

        <div className="bg-white border shadow-sm border-amber-800 rounded-xl p-7">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-amber-800">Sign in</h1>
            <p className="mt-2 text-sm text-amber-800">
              Don't have an account yet?{" "}
              <a className="font-medium text-amber-800 decoration-2 hover:underline" href="register.php">
                Sign up here
              </a>
            </p>
          </div>

          <form id="login_form" onSubmit={handleLogin} className="mt-5">
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-amber-800">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-4 py-3 text-sm border rounded-md border-amber-800 focus:border-blue-500 focus:ring-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm text-amber-800">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="block w-full px-4 py-3 text-sm border rounded-md border-amber-800 focus:border-blue-500 focus:ring-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 border border-amber-800 rounded-sm" />
                  <span className="ml-3 text-sm text-amber-800">Remember me</span>
                </label>
                <a href="forgot_password.php" className="ml-auto text-sm text-amber-800 decoration-2 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-white transition-all border rounded-md shadow-sm bg-amber-800 hover:bg-white hover:border hover:text-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
        <br />
      </div>
    </>
  );
}

export default Login;
