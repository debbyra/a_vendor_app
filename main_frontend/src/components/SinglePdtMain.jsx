const SinglePdtMain = () => {
    return (
      <div className="single-product-main">
        <div className="product-main-section">
          <div className="see-product-section">
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
          <div className="product-user-order">
            <div className="product-name-and-price">
              <div className="">
                <h1>Brazilian Braids</h1>
                <h2>UGX.5000 @</h2>
              </div>
              <div className="current-quantity">
                <p>
                  <span>200</span> packets currently in stock
                </p>
              </div>
            </div>
            <p>Light and beautiful</p>
            <form action="">
              <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Input a number"
                />
              </div>
              <input type="submit" value="Notify Vendor" />
            </form>
          </div>
        </div>
      </div>
    );
}

export default SinglePdtMain;