import Ratings from "../Ratings";
import "../../styles/TopBizSection.css";
import "../../styles/RatingSection.css";

const VendorRatingSection = () => {
  return (
    <div className="rating-section top-biz-section">
      <h2>Reviews</h2>
      <div className="ratings-section business-section">
        <Ratings username="Lorem" value="5" comment="Lorem ipsum dolor" />
        <Ratings username="Lorem" value="2" comment="Lorem ipsum" />
        <Ratings username="Lorem" value="3" comment="Lorem ipsum" />
        <Ratings username="Lorem" value="1" comment="Lorem ipsum" />
        <Ratings username="Lorem" value="5" comment="Lorem ipsum" />
        <Ratings username="Lorem" value="4" comment="Lorem ipsum" />
        <a href="/dashboard/all_ratings">
          <button>See All</button>
        </a>
      </div>
    </div>
  );
};

export default VendorRatingSection;
