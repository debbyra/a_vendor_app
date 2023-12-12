import { useState } from "react";

export const SellerSignUpForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [data, setData] = useState("");

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const closeForm3 = () => {
    // Call the closeForm function passed from props
    if (props.closeForm) {
      props.closeForm();
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let signUpDetails = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      contact: contact,
      password: password,
    };

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:5000/auth/register/vendor", {
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

  return (
    <>
      <h1>
        <span>Seller Sign Up</span>
      </h1>
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

        {/* Submit form details */}
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>

      {/* Close sign up form */}
      <button type="button" className="btn-cancel" onClick={closeForm3}>
        Close
      </button>

      <p>
        Already registered? <a href="#">Log In as Seller</a>.
      </p>
    </>
  );
};
