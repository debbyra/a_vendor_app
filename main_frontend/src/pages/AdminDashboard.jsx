// Admin Dashboard
import React from "react";
import DashNav from "../components/UserDashboardComponents/DashNav";
import AdminNav from "../components/AdminDashComponents/AdminNav"
import MainSection from "../components/AdminDashComponents/MainSection";

const Dashboard = () => {
  return (
    <div>
      <div className="user-dashboard">
        <DashNav />
        <AdminNav />
      </div>
      
      <div>
        {/* dashboard content goes here */}
        
        {/* <MainSection /> */}
      </div>
    </div>
  );
};

export default Dashboard;
