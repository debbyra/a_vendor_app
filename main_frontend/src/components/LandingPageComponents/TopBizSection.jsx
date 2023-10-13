import "../../styles/TopBizSection.css";
import TopBizCard from "./TopBizCard";

const TopBizSection = (props) => {
    return (
      <div className="top-biz-section">
        <h3>
          <span>{props.title}</span>
        </h3>
        <div className="business-section">
          <TopBizCard
            image={"/images/test-img.png"}
            name="Mama Maria’s Beauty Salon"
          />
          <TopBizCard
            image={"/images/test-img.png"}
            name="Mama Maria’s Beauty Salon"
          />
          <TopBizCard
            image={"/images/test-img.png"}
            name="Mama Maria’s Beauty Salon"
          />
          <TopBizCard
            image={"/images/test-img.png"}
            name="Mama Maria’s Beauty Salon"
          />
          <TopBizCard
            image={"/images/test-img.png"}
            name="Mama Maria’s Beauty Salon"
          />
          <TopBizCard
            image={"/images/test-img.png"}
            name="Mama Maria’s Beauty Salon"
          />
          <button>
            <span>See More</span>
          </button>
        </div>
      </div>
    );
}

export default TopBizSection;