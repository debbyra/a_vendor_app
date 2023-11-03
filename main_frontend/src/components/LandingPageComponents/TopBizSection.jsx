import "../../styles/TopBizSection.css";
import TopBizCard from "./TopBizCard";
import { Link, useNavigate } from "react-router-dom";

const TopBizSection = (props) => {
  const navigate = useNavigate();

  const onSeeMoreClick = () => {
    navigate(props.url);
  };

  return (
    <div className="top-biz-section">
      <h3>
        <span>{props.title}</span>
      </h3>
      <div className="business-section">
        <Link to="/dashboard/biz_profile">
          <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        </Link>
        <TopBizCard image={"/video/thumbnail.jpg"} name="Lorem ipsum" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Lorem ipsum" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Lorem ipsum" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Lorem ipsum" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Lorem ipsum" />
        <button onClick={onSeeMoreClick}>
          <span>See More</span>
        </button>
      </div>
    </div>
  );
};

export default TopBizSection;
