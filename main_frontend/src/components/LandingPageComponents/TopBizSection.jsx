import "../../styles/TopBizSection.css";
import TopBizCard from "./TopBizCard";
import { Link, useNavigate, useParams } from "react-router-dom";

const TopBizSection = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onSeeMoreClick = () => {
    navigate(props.url);
  };

  return (
    <div className="top-biz-section">
      <h2>
        <span>{props.title}</span>
      </h2>
      <div className="business-section">
        <Link to={`/dashboard/vendor/profile/${id}`}>
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
