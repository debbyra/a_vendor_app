// Admin Dashboard
import React from "react";
import Hero from "../components/LandingPageComponents/Hero";
import DashNav from "../components/UserDashboardComponents/DashNav";
import AdminNav from "../components/AdminDashComponents/AdminNav"

const Dashboard = () => {
  return (
    <div>
      <h1>Admin-Dash</h1>
      <div className="user-dashboard">
        <DashNav />
        <AdminNav />
        <Hero />
      </div>
      
      <div>
        {/* dashboard content goes here */}
        <p>Welcome to your vendor dashboard!</p>
      </div>
    </div>
  );
};

export default Dashboard;
