import React from "react";
import PropTypes from "prop-types";
import CategoriesCard from "../components/LandingPageComponents/CategoriesCard";
import "../styles/Sidebar.css";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onHealthAndBeautyClick = () => {
    navigate("/dashboard/health-and-beauty");
  };
<<<<<<< HEAD

  const getToken = () =>
    localStorage.getItem("access_token")
      ? JSON.parse(localStorage.getItem("access_token"))
      : null;

  const getFirstName = () =>
    localStorage.getItem("first_name")
      ? JSON.parse(localStorage.getItem("first_name"))
      : null;

  const userType = localStorage.getItem("user_type");

  const onAccountClick = () => {
    const token = getToken();
    if (token) {
      if (userType === "customer") {
        navigate(`/dashboard/account/customer/${id}`);
      } else if (userType === "vendor") {
        navigate(`/dashboard/account/${userType}/${id}`);
      } else if (userType === "admin") {
        navigate(`/dashboard/account/admin/${id}`);
      }
    } else {
      alert("Please sign in to access your account.");
    }
=======

  const onAccountClick = () => {
    navigate("/dashboard/account");
>>>>>>> d37283c3019152dcc2b047a9ab5760e14a9f1928
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
        {/* <img
          src="/icons/close.png"
          className="close-icon"
          alt=""
          onClick={closeSidebar}
        /> */}
        <div className="top-info">
          <p>Welcome, {getFirstName() || "guest"}!</p>
        </div>
        <div className="sidebar-content">
          <div className="categories">
            <div className="categories-top">
              <h3>
                <span>Categories</span>
              </h3>
              {/* <button className="sell-button">SELL</button> */}
            </div>
            <div className="health-and-beauty" onClick={onHealthAndBeautyClick}>
              <CategoriesCard
                src={`/icons/health.png`}
                name={"Health and Beauty"}
              />
            </div>
            <div className="services" onClick={onServicesClick}>
              <CategoriesCard src={`/icons/services.png`} name={"Services"} />
            </div>

            <CategoriesCard src={`/icons/furniture.png`} name={"Furniture"} />
            <CategoriesCard
              src={`/icons/electronics.png`}
              name={"Electronics"}
            />
            <CategoriesCard src={`/icons/fashion.png`} name={"Fashion"} />
            <CategoriesCard
              src={`/icons/appliances.png`}
              name={"Home Appliances"}
            />
            <CategoriesCard src={`/icons/retail.png`} name={"Retail"} />
          </div>
          <div className="settings">
            <h3>
              <span>Settings</span>
            </h3>
            <a
              href={`/dashboard/account/${userType}/${id}`}
              onClick={onAccountClick}
            >
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
