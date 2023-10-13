export function LoginForm(props) {
  function closeForm() {
    props.closeForm();
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
        type="text"
        placeholder="Enter Phone Number"
        name="email"
        required
        value={props.email}
      ></input>

      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
        value={props.password}
      ></input>

      {/* Creating a button to submit the login form and a button to close the form */}
      <button type="submit" className="btn">
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
