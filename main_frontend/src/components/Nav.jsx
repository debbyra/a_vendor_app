import { useState } from "react";
import "../styles/Nav.css";
import { LoginForm } from "./LandingPageComponents/LoginForm";
import { SignUpForm } from "./LandingPageComponents/SignUpForm";

const Nav = () => {
    const [isLoginFormVisible, setLoginFormVisible] = useState(false);
    const [isSignUpFormVisible, setSignUpFormVisible] = useState(false);

    function openForm() {
      setLoginFormVisible(true);
    }

    function openForm2() {
      setSignUpFormVisible(true);
    }

    const closeForm = () => {
      setLoginFormVisible(false);
      setSignUpFormVisible(false);
    };

    return (
      <div className="nav">
        <h2>SmallBizSafari</h2>
        <div className="nav-buttons">
          <a href="#" className="login" onClick={openForm}>
            Login
          </a>
          <p>|</p>
          <a href="#" className="register" onClick={openForm2}>
            Register
          </a>
        </div>
        {isLoginFormVisible && (
          <div className="form-popup">
            <div className="form-container">
              <LoginForm closeForm={closeForm} />
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
      </div>
    );
}

export default Nav;