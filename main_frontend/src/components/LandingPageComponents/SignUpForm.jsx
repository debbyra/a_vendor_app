import { useState } from "react";

export const SignUpForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [location_id, setLocationId] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  function closeForm2() {
    props.closeForm();
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let signUpDetails = {
      name: `${firstName} ${lastName}`,
      email: email,
      contact: contact,
      password: password,
      locations_id: location_id
    };

    if (password !== confirmPassword) {
      // Passwords don't match, show an error message
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:5000/auth/register", {
      method: "POST",
      body: JSON.stringify(signUpDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // Check if there is a message or error in the response data
        if (data.message) {
          setData(data.message);
        } else if (data.error) {
          setData(data.error);
        }
      })
      .catch((err) => console.log(err));

    // Set state to indicate form submission
    setHasSubmitted(!hasSubmitted);
  };

  return (
    <>
      <h1>
        <span>Sign Up</span>
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

        <input
          type="text"
          placeholder="Enter your location"
          name="location"
          required
          value={location_id}
          onChange={(e) => setLocationId(e.target.value)}
        ></input>

        {/* Submit form details */}
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>

      {/* Close sign up form */}
      <button type="button" className="btn-cancel" onClick={closeForm2}>
        Close
      </button>

      <p>
        Already registered? <a href="#">Log In</a>.
      </p>
    </>
  );
};
