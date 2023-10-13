import "../../styles/MainSection.css";
import TopBizSection from "./TopBizSection";

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="top-businesses">
        <h2>
          <span>Top Businesses In...</span>
        </h2>
        <TopBizSection title="Health and Beauty" />
        <TopBizSection title="Services" />
        <TopBizSection title="Furniture" />
        <TopBizSection title="Electronics" />
        <TopBizSection title="Fashion" />
        <TopBizSection title="Home Appliances" />
        <TopBizSection title="Retail" />
      </div>
      <div className="ads">
        <h2>ADS</h2>
      </div>
    </div>
  );
};

export default MainSection;