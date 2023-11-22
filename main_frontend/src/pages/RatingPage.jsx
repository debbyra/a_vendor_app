import RatingComponent from "../components/RatingComponent";
import DashNav from "../components/UserDashboardComponents/DashNav";
import SecNav from "../components/SecNav.jsx";
import "../styles/RatingPage.css";

const RatingPage = () => {
  return (
    <div className="rating-page">
      <DashNav />
      <SecNav />
      <h1>Add a rating</h1>
      <RatingComponent username="Jane Doe" comment="Lorem ipsum" />
    </div>
  );
};

export default RatingPage;
