import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoginForm from "../LoginForm";
import { SellerSignUpForm } from "./SellerSignUpForm";

function SellerSignInForm(props) {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [data, setData] = useState("");

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSellerSignUpForm, setShowSellerSignUpForm] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

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
            localStorage.setItem("user_type", JSON.stringify(data.user_type));
            navigate(`/dashboard/vendor/${data.for.id}`);
          }
        } else if (data.error) {
          setData(data.error);
        }
      })
      .catch((err) => console.log(err));

    // Set state to indicate form submission
    setHasSubmitted(!hasSubmitted);

    navigate(`/dashboard/vendor/${id}`);
  }

  const closeForm4 = () => {
    // Call the closeForm function passed from props
    if (props.closeForm) {
      props.closeForm();
    }
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const toggleSellerSignUpForm = () => {
    setShowSellerSignUpForm(!showSellerSignUpForm);
  };

  return (
    <>
      <h1>
        <span>Seller Login</span>
      </h1>

      <a href="#customersignin" className="signin" onClick={toggleLoginForm}>
        Sign In As A Customer
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
      <button type="button" className="btn-cancel" onClick={closeForm4}>
        Close
      </button>

      <p>
        Have no account yet?{" "}
        <a href="#" onClick={toggleSellerSignUpForm}>
          Register now as Seller
        </a>
        .
      </p>

      {showLoginForm && (
        <div className="form-popup">
          <div className="form-container">
            <LoginForm closeForm={toggleLoginForm} />
          </div>
        </div>
      )}

      {showSellerSignUpForm && (
        <div className="form-popup">
          <div className="form-container">
            <SellerSignUpForm closeForm={toggleSellerSignUpForm} />
          </div>
        </div>
      )}
    </>
  );
}

export default SellerSignInForm;
