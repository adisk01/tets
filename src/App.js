//import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./userDashboard/Login.jsx";
import Register from "./userDashboard/Signup.jsx";
import Dashboard from "./userDashboard/Dashboard.jsx";
import AdminIndividual from "./AdminDashboard/AdminIndividual.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminIndividual/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
