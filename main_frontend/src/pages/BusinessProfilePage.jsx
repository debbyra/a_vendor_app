import DashNav from "../components/UserDashboardComponents/DashNav";
import SecNav from "../components/SecNav";
import TopSection from "../components/BusinessProfileComponents/TopSection";
import BizMainSection from "../components/BusinessProfileComponents/BizMainSection";
import RatingSection from "../components/RatingSection";

const BusinessProfilePage = () => {
  return (
    <div className="business-profile-page">
      <DashNav />
      <SecNav />
      <TopSection />
      <BizMainSection />
      <RatingSection />
    </div>
  );
};

export default BusinessProfilePage;