import Ads from "../Ads";
import ProductSection from "../BusinessProfileComponents/ProductSection";
import "../../styles/BizMainSection.css";

const VendorMainSection = () => {
  return (
    <div className="biz-main-section">
      <div className="main-content">
        <div className="biz-main-content">
          <div className="main-content-div">
            <div className="vendor-video-heading">
              <h3>Take a tour into our shop...</h3>
              <input type="file" id="custom-file-input" />
            </div>
            <video
              id="my-video"
              className="video-js"
              controls
              preload="auto"
              width="640"
              height="264"
              poster="/video/thumbnail.jpg"
              data-setup="{}"
            >
              <source src="/video/videoplayback.mp4" type="video/mp4" />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider
                upgrading to a web browser that
                <a
                  href="https://videojs.com/html5-video-support/"
                  target="_blank"
                >
                  supports HTML5 video
                </a>
              </p>
            </video>
          </div>
          <div className="main-content-div">
            <div className="products-heading">
              <h3>Our Products</h3>
              <a href="/vendor_dashboard/upload_product">
                <button>Add New Product</button>
              </a>
            </div>
            <div className="" id="biz-pdts">
              <ProductSection title="Top Products" />
              <ProductSection title="Braids" />
            </div>
          </div>
        </div>
      </div>
      <Ads />
    </div>
  );
};

export default VendorMainSection;
