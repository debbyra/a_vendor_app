import "../../styles/MainSection.css";
import TopBizSection from "./TopBizSection";
import Ads from "../Ads";

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="top-businesses">
        <h2>
          <span>Top Businesses In...</span>
        </h2>
        <TopBizSection
          title="Health and Beauty"
          url="/dashboard/top-in-health-and-beauty"
        />
        <TopBizSection title="Services" />
        <TopBizSection title="Furniture" />
        <TopBizSection title="Electronics" />
        <TopBizSection title="Fashion" />
        <TopBizSection title="Home Appliances" />
        <TopBizSection title="Retail" />
      </div>
      <Ads />
    </div>
  );
};

export default MainSection;