import Hero from "../components/LandingPageComponents/Hero";
import MainSection from "../components/LandingPageComponents/MainSection";
import DashNav from "../components/UserDashboardComponents/DashNav";
import SecNav from "../components/SecNav";

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <DashNav />
      <SecNav />
      <Hero />
      <MainSection />
    </div>
  );
};

export default UserDashboard;
