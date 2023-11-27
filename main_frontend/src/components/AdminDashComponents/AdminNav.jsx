import { useState } from 'react';
import Sidebar from "../Sidebar"; // Import the Sidebar component
import { useNavigate } from "react-router-dom";
import "../../styles/SecNav.css";

const AdminNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Initialize sidebarOpen state

  const navigate = useNavigate();

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="sec-nav">
      <button className="menu-button" onClick={toggleSidebar}>
        <img src="/icons/menu.png" alt="" />
      </button>
      {/* <button className="sell-button">SELL</button> */}

      

      {/* Conditionally render the Sidebar component based on sidebarOpen state */}
      {sidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default AdminNav;
