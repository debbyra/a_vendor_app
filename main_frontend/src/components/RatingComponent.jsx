import { Typography, Button, Box, TextField } from "@mui/material";
import StarRating from "../components/StarRating";
import { useState } from "react";

const RatingComponent = (props) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Submit the rating and comment to your backend or perform any other desired actions.
  };

  return (
    <div className="rating-component">
      <img src="/images/profile-user.png" alt="profile image" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          "> div": {
            marginBottom: "20px",
          },
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <Box>
            <Typography component="p" textAlign={"center"} mb={1}>
              {props.username}
            </Typography>
            <StarRating precision={0.5} onRatingChange={handleRatingChange} />
            <TextField
              label="Your Comment"
              variant="outlined"
              fullWidth
              value={comment}
              onChange={handleCommentChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default RatingComponent;
