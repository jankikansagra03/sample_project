import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserNavbar from "./components/user_navbar";
import GuestNavbar from "./components/guest_navbar";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Contact from "./components/contact";
import About from "./components/about";
import Footer from "./components/footer";
import Team from "./components/team";
import Blog from "./components/blog";
import AdminPanel from "./components/admin_navbar";
import LogoutButton from "./components/logout";
import { useState, useEffect } from "react";
import ManageUsers from "./components/manage_users";
import UserDashboard from "./components/user_dashboard";
import ManageProducts from "./components/manage_products";
import AdminDashboard from "./components/admin_dashboard";
import EditUserForm from "./components/edit_user";
import ViewUser from "./components/view_user";
// import DataTable from "./components/datatable";

function App() {
  const userSession = localStorage.getItem("user"); // User session
  const adminSession = localStorage.getItem("admin"); // Admin session
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(() => {
    return userSession !== null;
  });
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return adminSession !== null;
  });

  useEffect(() => {
    if (userIsLoggedIn) {
      setUserIsLoggedIn(true);
    } else {
      setUserIsLoggedIn(false);
    }

    if (isAdminLoggedIn) {
      setIsAdminLoggedIn(true);
    } else {
      setIsAdminLoggedIn(false);
    }
  }, [userSession, adminSession]);
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<AdminPanel />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/logout"
          element={
            <LogoutButton
              setUserIsLoggedIn={setUserIsLoggedIn}
              setIsAdminLoggedIn={setIsAdminLoggedIn}
            />
          }
        />

        <Route path="/user-dashboard" element={<UserDashboard />} />

        <Route
          path="/admin-dashboard"
          element={
            <AdminPanel>
              <AdminDashboard />
            </AdminPanel>
          }
        />
        <Route
          path="/admin/manage-users"
          element={
            <AdminPanel>
              <ManageUsers />
            </AdminPanel>
          }
        />
        <Route
          path="/admin/manage-products"
          element={
            <AdminPanel>
              <ManageProducts />
            </AdminPanel>
          }
        />
        <Route path="/admin/edit-user/:userId" element={<AdminPanel><EditUserForm /></AdminPanel>} />
        <Route path="/admin/view-user/:userId" element={<AdminPanel><ViewUser /></AdminPanel>} >

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
