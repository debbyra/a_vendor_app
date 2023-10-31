import DashNav from "../components/UserDashboardComponents/DashNav";
import SecNav from "../components/SecNav";
import UpdateInfo from "../components/UpdateInfo";

const AccountPage = () => {
 return (
    <div className="account-page">
        <DashNav />
        <SecNav />
        <UpdateInfo />
    </div>
 )
}

export default AccountPage;