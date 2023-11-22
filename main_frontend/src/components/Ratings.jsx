import { Rating } from "@mui/material";

const Ratings = (props) => {
  const numValue = parseInt(props.value);

  return (
    <div className="ratings">
      <img src="/images/profile-user.png" alt="" />
      <p className="user-name">{props.username}</p>
      <Rating name="read-only" value={numValue} readOnly />
      <p className="comment">{props.comment}</p>
    </div>
  );
};

export default Ratings;
