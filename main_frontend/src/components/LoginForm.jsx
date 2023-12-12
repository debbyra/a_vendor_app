import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "./LandingPageComponents/SignUpForm";
import SellerSignInForm from "./LandingPageComponents/SellerSignInForm";

function LoginForm({ closeForm, handleLogin }) {
  // console.log(props);
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [data, setData] = useState("");

  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showSellerLoginForm, setShowSellerLoginForm] = useState(false);

  const navigate = useNavigate();

  function handleLoginUser(e) {
    e.preventDefault();

    let loginDetails = {
      contact: contact,
      password: password,
    };

    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify(loginDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Check if there is a message or error in the response data
        if (data.message) {
          setData(data.message);
          if (data.access_token) {
            localStorage.setItem(
              "access_token",
              JSON.stringify(data.access_token)
            );
            localStorage.setItem(
              "first_name",
              JSON.stringify(data.for.first_name)
            );
            navigate(`/dashboard/customer/${data.for.id}`);
          }
        } else if (data.error) {
          setData(data.error);
        }
      })
      .catch((err) => console.log(err));

    // Set state to indicate form submission
    setHasSubmitted(!hasSubmitted);

    navigate("/dashboard");
  }

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  const toggleSellerLoginForm = () => {
    setShowSellerLoginForm(!showSellerLoginForm);
  };

  return (
    <>
      <h1>
        <span>Customer Login</span>
      </h1>

      <a
        href="#sellersignin"
        className="signin"
        onClick={toggleSellerLoginForm}
      >
        Sign In As A Seller
      </a>

      <input
        type="tel"
        placeholder="Enter Phone Number"
        name="contact"
        required
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      ></input>

      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      {/* Creating a button to submit the login form and a button to close the form */}
      <button type="submit" className="btn" onClick={handleLoginUser}>
        Login
      </button>
      <button type="button" className="btn-cancel" onClick={closeForm}>
        Close
      </button>

      {showSignUpForm && (
        <div className="form-popup">
          <div className="form-container">
            <SignUpForm closeForm={toggleSignUpForm} />
          </div>
        </div>
      )}

      {showSellerLoginForm && (
        <div className="form-popup">
          <div className="form-container">
            <SellerSignInForm closeForm={toggleSellerLoginForm} />
          </div>
        </div>
      )}

      <p>
        Have no account yet?{" "}
        <a href="#" onClick={toggleSignUpForm}>
          Register now
        </a>
        .
      </p>
    </>
  );
}

export default LoginForm;
