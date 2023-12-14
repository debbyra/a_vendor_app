import React from "react";
import PropTypes from "prop-types";
import CategoriesCard from "../components/LandingPageComponents/CategoriesCard";
import "../styles/Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();

  const onHealthAndBeautyClick = () => {
    navigate("/dashboard/health-and-beauty");
  };

  const onAccountClick = () => {
    navigate("/dashboard/account");
  };

  const closeSidebar = () => {
    console.log("Closing sidebar"); // Debugging
    props.toggleSidebar(); // Use toggleSidebar to close the sidebar
  };

  const onServicesClick = () => {
    navigate("/dashboard/services");
  };

  return (
    <>
      <div className={`sidebar`}>
        <img
          src="/icons/close.png"
          className="close-icon"
          alt=""
          onClick={closeSidebar}
        />
        <div className="top-info">
          <p>Welcome!</p>
        </div>
        <div className="sidebar-content">
          <div className="categories">
            <div className="categories-top">
              <h3>
                {/* <span>Categories</span> */}
              </h3>
              {/* <button className="sell-button">SELL</button> */}
            </div>
            <div className="health-and-beauty" onClick={onHealthAndBeautyClick}>
              <CategoriesCard
                src={`/icons/health.png`}
                name={"Users"}
              />
            </div>
            <div className="services" onClick={onServicesClick}>
              <CategoriesCard src={`/icons/services.png`} name={"Categories"} />
            </div>

            <CategoriesCard src={`/icons/furniture.png`} name={"Products"} />
            <CategoriesCard
              src={`/icons/electronics.png`}
              name={"Notifications"}
            />
            <CategoriesCard src={`/icons/fashion.png`} name={"Reviews"} />
            
            <CategoriesCard src={`/icons/retail.png`} name={"Retail"} />
          </div>
          <div className="settings">
            <h3>
              <span>Settings</span>
            </h3>
            <a href="" onClick={onAccountClick}>
              Your Account
            </a>
          </div>
        </div>
      </div>
      <div className="overlay active" onClick={closeSidebar}></div>
    </>
  );
};

Sidebar.propTypes = {
  // isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  action: PropTypes.string, // Add PropTypes for other props as needed
};

export default Sidebar;
