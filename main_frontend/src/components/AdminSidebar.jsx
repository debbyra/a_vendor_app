import React from 'react';
import PropTypes from 'prop-types';
import CategoriesCard from '../components/LandingPageComponents/CategoriesCard';
import '../styles/Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
  const navigate = useNavigate();

  const closeSidebar = () => {
    console.log('Closing sidebar');
    props.toggleSidebar();
  };

  const navigateTo = (path) => {
    navigate(`/dashboard/${path}`);
  };

  const onAccountClick = () => {
    navigate("/dashboard/account");
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
          <p>Welcome, Admin!</p>
        </div>
        <div className="sidebar-content">
          <div className="categories">
            <div className="categories-top">
              <h3>
                <span>Tables</span>
              </h3>
            </div>
            <div onClick={() => navigateTo('orders')}>
              <CategoriesCard src="/icons/retail.png" name="Orders" />
            </div>
            <div onClick={() => navigateTo('users')}>
              <CategoriesCard src="/icons/fashion.png" name="Users" />
            </div>
            <div onClick={() => navigateTo('analytics')}>
              <CategoriesCard src="/icons/services.png" name="Analytics" />
            </div>
            <div onClick={() => navigateTo('reviews')}>
              <CategoriesCard src="/icons/furniture.png" name="Reviews" />
            </div>
            {/* Add more sections as needed */}
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
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
