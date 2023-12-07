import "../../styles/Nav.css";
import { useNavigate } from "react-router-dom";

const DashNav = () => {
  const navigate = useNavigate();

  const onHeadingClick = () => {
    navigate("/dashboard");
  }

  return (
    <div className="nav">
      <h2 onClick={onHeadingClick}>Welcome to your SmallBizSafari DashBoard</h2>
      <div className="nav-buttons">
        <a href="/">
          <button className="logout">Logout</button>
        </a>
      </div>
    </div>
  );
};

export default DashNav;
