import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createIcons, icons } from "lucide";
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
// import Contact from "./pages/Contact";

function App() {

  return (
    <Router>
      {/* <LogoutButton></LogoutButton> */}
      {/* <AdminPanel></AdminPanel> */}
      <UserNavbar />
      <br />
      <GuestNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
