import "../../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-img">
        <img src="/images/hero-img.png" alt="shopping illustration" />
      </div>
      <div className="hero-information">
        <div className="hero-main-heading">
          <h1>
            Discover Local Treasures - <span>SmallBizSafari</span>
          </h1>
        </div>
        <div className="hero-description">
          <p>
            Your Guide to Exploring Small Businesses and Their Unique Products
          </p>
        </div>
        <div className="hero-search-bar">
          <form action="#">
            <div className="dropdown">
              <button className="dropbtn">All</button>
              <div className="dropdown-content">
                <a href="#">All</a>
                <a href="#">Health and Beauty</a>
                <a href="#">Services</a>
                <a href="#">Furniture</a>
                <a href="#">Electronics</a>
                <a href="#">Fashion</a>
                <a href="#">Home Appliances</a>
                <a href="#">Retail</a>
              </div>
            </div>
            <input
              type="text"
              name="product-name"
              id="product-name"
              placeholder="SmallBizSafari"
            />
            <input type="submit" value="search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
