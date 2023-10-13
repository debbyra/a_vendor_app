export const SignUpForm = (props) => {
      function closeForm2() {
        props.closeForm();
      }

      return (
        <>
          <h1>
            <span>Sign Up</span>
          </h1>
          {/* Display message if form has been submitted */}
          <input
            type="text"
            placeholder="Enter Your First Name"
            name="first-name"
            required
          ></input>

          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="last-name"
            required
          ></input>

          <input
            type="text"
            placeholder="Enter Your Contact"
            name="contact"
            required
          ></input>

          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          ></input>

          <input
            type="password"
            placeholder="Confirm Password"
            name="psw"
            required
          ></input>

          {/* Submit form details */}
          <button type="submit" className="btn">
            Sign Up
          </button>

          {/* Close sign up form */}
          <button type="button" className="btn-cancel" onClick={closeForm2}>
            Close
          </button>

          <p>
            Already registered? <a href="#">Log In</a>.
          </p>
        </>
      );
}