import DashNav from "../components/UserDashboardComponents/DashNav";
import SecNav from "../components/SecNav";
import TopBizSection from "../components/LandingPageComponents/TopBizSection";
import "../styles/CategoriesPage.css";

const HealthAndBeauty = () => {
    return (
      <div className="categories-page">
        <DashNav />
        <SecNav />
        <div className="top">
          <img src="/icons/health.png" alt="" />
          <h1>HEALTH AND BEAUTY</h1>
        </div>
        <div className="category-businesses">
          <TopBizSection title="Top Businesses" url="/dashboard/top-in-health-and-beauty" />
          <TopBizSection title="MakeUp" />
          <TopBizSection title="Skin Care" />
          <TopBizSection title="Hair" />
          <TopBizSection title="Fragrance" />
          <TopBizSection title="Foot, Hand and Nail Care" />
          <TopBizSection title="Tools and Accessories" />
          <TopBizSection title="Hair removal" />
          <TopBizSection title="Personal Care" />
          <TopBizSection title="Oral Care" />
        </div>
      </div>
    );
}

export default HealthAndBeauty;