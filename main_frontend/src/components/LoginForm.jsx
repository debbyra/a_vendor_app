import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ closeForm, handleLogin }) {
  // console.log(props);
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLoginUser() {
    if (contact.trim() === "" || password.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    } else {
      console.log("Calling handleLogin");
      handleLogin;
      navigate("/dashboard");
    }
  }

  return (
    <>
      <h1>
        <span>Login</span>
      </h1>

      <a href="#adminsignin" className="signin">
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

      <p>
        Have no account yet? <a href="#">Register now</a>.
      </p>
    </>
  );
}

export default LoginForm;