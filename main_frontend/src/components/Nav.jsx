import { useState, useEffect } from "react";
import "../styles/Nav.css";
import LoginForm from "./LoginForm";
import { SignUpForm } from "./LandingPageComponents/SignUpForm";
import { SellerSignUpForm } from "./LandingPageComponents/SellerSignUpForm";
import SellerSignInForm from "./LandingPageComponents/SellerSignInForm";
import PropTypes from "prop-types";

const Nav = ({ isLoggedIn, handleLogin, handleLogout }) => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isSignUpFormVisible, setSignUpFormVisible] = useState(false);
  const [isSellerSignUpFormVisible, setSellerSignUpFormVisible] = useState(false);
  const [isSellerLoginFormVisible, setSellerLoginFormVisible] =
    useState(false);

  function openForm() {
    setLoginFormVisible(true);
    setSignUpFormVisible(false);
    setSellerSignUpFormVisible(false);
  }

  function openForm2() {
    setSignUpFormVisible(true);
    setLoginFormVisible(false);
    setSellerSignUpFormVisible(false);
  }

  function openForm3() {
    setSignUpFormVisible(false);
    setLoginFormVisible(false);
    setSellerSignUpFormVisible(true);
  }

  const closeForm = () => {
    setLoginFormVisible(false);
    setSignUpFormVisible(false);
    setSellerSignUpFormVisible(false);
    setSellerLoginFormVisible(false)
  };

  return (
    <div className="nav">
      <h2>SmallBizSafari</h2>
      <div className="nav-buttons">
        <>
          <a href="#" className="login" onClick={openForm}>
            Login
          </a>
          <p>|</p>
          <a href="#" className="register" onClick={openForm2}>
            Register
          </a>
        </>
      </div>
      {isLoginFormVisible && (
        <div className="form-popup">
          <div className="form-container">
            <LoginForm closeForm={closeForm} handleLogin={handleLogin} />
          </div>
        </div>
      )}
      {isSignUpFormVisible && (
        <div className="form-popup">
          <div className="form-container">
            <SignUpForm closeForm={closeForm} />
          </div>
        </div>
      )}
      {isSellerSignUpFormVisible && (
        <div className="form-popup">
          <div className="form-container">
            <SellerSignUpForm closeForm={closeForm} openForm={openForm3} />
          </div>
        </div>
      )}
      {isSellerLoginFormVisible && (
        <div className="form-popup">
          <div className="form-container">
            <SellerSignInForm closeForm={closeForm} openForm={openForm3} />
          </div>
        </div>
      )}
    </div>
  );
};

Nav.propTypes = {
  isLoggedIn: PropTypes.bool,
  handleLogout: PropTypes.func,
  handleLogin: PropTypes.func,
};

export default Nav;
