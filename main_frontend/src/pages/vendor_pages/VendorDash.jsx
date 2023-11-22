import DashNav from "../../components/UserDashboardComponents/DashNav";
import VendorSecNav from "../../components/vendor_components/VendorSecNav";
import Hero from "../../components/LandingPageComponents/Hero";
import MainSection from "../../components/LandingPageComponents/MainSection";

const VendorDash = () => {
    return (
        <div className="vendor-dashboard">
            <DashNav />
            <VendorSecNav />
            <Hero />
            <MainSection />
        </div>
    )
}

export default VendorDash;