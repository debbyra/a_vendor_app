import { useState } from "react";
import LoginForm from "../LoginForm";
import { SellerSignUpForm } from "./SellerSignUpForm";

export const SignUpForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [data, setData] = useState("");

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSellerSignUpForm, setShowSellerSignUpForm] = useState(false);

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  function closeForm2() {
    props.closeForm();
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let signUpDetails = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      contact: contact,
      password: password,
<<<<<<< HEAD
=======
      // locations_id: location_id
>>>>>>> d37283c3019152dcc2b047a9ab5760e14a9f1928
    };

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:5000/auth/register/customer", {
      method: "POST",
      body: JSON.stringify(signUpDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Check if there is a message or error in the response data
        if (data.message) {
          setData(data.message);
        } else if (data.error) {
          setData(data.error);
        }
      })
      .catch((err) => console.log(err));

    setHasSubmitted(!hasSubmitted);
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
        <span>Customer Sign Up</span>
      </h1>
      <a
        href="#sellersignin"
        className="signin"
        onClick={toggleSellerSignUpForm}
      >
        Sign Up As A Seller
      </a>
      {/* Display message if form has been submitted */}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Your First Name"
          name="firstName"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Enter Your Last Name"
          name="lastName"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Enter Your Contact"
          name="contact"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        ></input>

        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        ></input>

<<<<<<< HEAD
=======
        
  
        

>>>>>>> d37283c3019152dcc2b047a9ab5760e14a9f1928
        {/* Submit form details */}
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>

      {/* Close sign up form */}
      <button type="button" className="btn-cancel" onClick={closeForm2}>
        Close
      </button>

      {/* Display login form popup when showLoginForm is true */}
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

      <p>
        Already registered?{" "}
        <a href="#" onClick={toggleLoginForm}>
          Log In
        </a>
        .
      </p>
    </>
  );
};
