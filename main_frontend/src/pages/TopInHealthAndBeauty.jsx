import DashNav from "../components/UserDashboardComponents/DashNav";
import SecNav from "../components/SecNav";
import TopBizCard from "../components/LandingPageComponents/TopBizCard";
import { Link, useParams } from "react-router-dom";

const TopInHealthAndBeauty = () => {
  const { id } = useParams();

  return (
    <div className="top-in-health-and-beauty">
      <DashNav />
      <SecNav />
      <h1>Top In Health and Beauty</h1>
      <div className="businesses">
        <Link to={`/dashboard/vendor/profile/${id}`}>
          <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        </Link>
        <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
        <TopBizCard image={"/video/thumbnail.jpg"} name="Dummy business" />
      </div>
    </div>
  );
};

export default TopInHealthAndBeauty;
