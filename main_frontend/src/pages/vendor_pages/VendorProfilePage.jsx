import DashNav from "../../components/UserDashboardComponents/DashNav";
import VendorSecNav from "../../components/vendor_components/VendorSecNav";
import VendorTopSection from "../../components/vendor_components/VendorTopSection";
import VendorMainSection from "../../components/vendor_components/VendorMainSection";
import VendorRatingSection from "../../components/vendor_components/VendorRatingSection";

const VendorProfilePage = () => {
  return (
    <div className="business-profile-page">
      <DashNav />
      <VendorSecNav />
      <VendorTopSection />
      <VendorMainSection />
      <VendorRatingSection />
    </div>
  );
};

export default VendorProfilePage;
