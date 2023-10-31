import "../styles/UpdateInfo.css";

const UpdateInfo = () => {
  return (
    <div className="update-info">
      <>
        {/* Heading */}
        <h1>Update your info</h1>
        <h4 className="update-msg">Please fill in all fields</h4>

        {/* Show success message if submitted */}
        {/* {hasSubmitted ? (
          <p className="update-msg">Lorem ipsum dolor sit amet</p>
        ) : (
          <h4 className="update-msg">Please fill in all fields</h4>
        )} */}

        {/* First Name Label */}
        <label htmlFor="first-name" className="update-info-labels">
          <b>First name</b>
          {/* Show current first name */}
          <p>
            <b className="current">current:</b> Jane
          </p>
        </label>

        {/* First Name Input */}
        <input
          type="text"
          placeholder="Enter Your First Name"
          name="first-name"
          required
          // value={props.firstName}
          // onChange={(e) => setChangeFirstName(e.target.value)}
        ></input>

        {/* Last Name Label */}
        <label htmlFor="last-name" className="update-info-labels">
          <b>Last name</b>
          {/* Show current last name */}
          <p>
            <b className="current">current:</b> Doe
          </p>
        </label>

        {/* Last Name Input */}
        <input
          type="text"
          placeholder="Enter Your Last Name"
          name="last-name"
          required
          // value={props.lastName}
          // onChange={(e) => setChangeLastName(e.target.value)}
        ></input>

        {/* Email Label */}
        <label htmlFor="email" className="update-info-labels">
          <b>Email</b>
          {/* Show current email */}
          <p>
            <b className="current">current:</b> janedoe@server.com
          </p>
        </label>

        {/* Email Input */}
        <input
          type="text"
          placeholder="Enter Your Email"
          name="email"
          required
          // value={props.email}
          // onChange={(e) => setChangeEmail(e.target.value)}
        ></input>

        {/* Contact Label */}
        <label htmlFor="contact" className="update-info-labels">
          <b>Contact</b>
          {/* Show current contact */}
          <p>
            <b className="current">current:</b> 777777
          </p>
        </label>

        {/* Contact Input */}
        <input
          type="text"
          placeholder="Enter Your Contact"
          name="contact"
          required
          // value={props.contact}
          // onChange={(e) => setChangeContact(e.target.value)}
        ></input>

        {/* Submit button */}
        <button type="submit" className="btn">
          Update
        </button>
      </>
    </div>
  );
};

export default UpdateInfo;