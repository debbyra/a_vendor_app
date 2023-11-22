import AllRatingsMain from "../components/AllRatingsMain";
import DashNav from "../components/UserDashboardComponents/DashNav";
import SecNav from "../components/SecNav";
import "../styles/AllRatingsPage.css";

const AllRatingsPage = () => {
    return (
      <div className="all-ratings-page">
      <DashNav />
      <SecNav />
      <AllRatingsMain />
    </div>
    )
}

export default AllRatingsPage;