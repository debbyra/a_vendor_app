import "../../styles/TopSection.css";
import { Rating } from "@mui/material";

const VendorTopSection = () => {
  return (
    <div className="hero-section" id="top-section">
      <div className="">
        <div className="biz-pfp">
          <a href="/dashboard/account">
            <img src="/images/profile-user.png" alt="" id="biz-pfp-img" />
          </a>
        </div>
        <div className="biz-description">
          <div className="biz-heading-and-rating">
            <h2>Mama Maria's Beauty Shop</h2>
            <a href="/dashboard/all_ratings">
              <Rating name="read-only" value={4} readOnly />
            </a>
          </div>
          <p>
            We transform beauty into an art. Discover the ultimate blend of
            relaxation, style, and expertise at our salon.
          </p>
          <div className="biz-location">
            <div className="location-place">
              <p id="location">Location: </p>
              <p>Downtown Kampala</p>
            </div>
            <button id="button-google-maps">Check Google Maps</button>
          </div>
          <div className="search-bar">
            <form action="#">
              <input
                type="text"
                name="product-name"
                id="product-name"
                placeholder="Search Mama Maria's beauty shop"
              />
              <input type="submit" value="search" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorTopSection;
