import Ads from "../Ads";
import ProductSection from "./ProductSection";
import "../../styles/BizMainSection.css";

const BizMainSection = () => {
    return (
      <div className="biz-main-section">
        <div className="main-content">
          <div className="biz-main-content">
            <div className="main-content-div">
              <h3>Take a tour into our shop...</h3>
              <video
                id="my-video"
                class="video-js"
                controls
                preload="auto"
                width="640"
                height="264"
                poster="/video/thumbnail.jpg"
                data-setup="{}"
              >
                <source src="/video/videoplayback.mp4" type="video/mp4" />
                <p class="vjs-no-js">
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
              <h3>Our Products</h3>
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
}

export default BizMainSection;