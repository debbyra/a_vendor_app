import "../../styles/UpdateInfo.css";

const SinglePdtVendorMain = () => {
  return (
    <div className="single-product-vendor-main">
      <div className="product-main-section">
        <div className="see-product-section">
          <div className="heading">
            <h3>Product Video</h3>
            <input type="file" className="custom-file-input" />
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
        <form action="" id="update-pdt-form" className="product-user-order">
          <div className="product-update-form">
            <label htmlFor="product-name" className="update-info-labels">
              <b>Product Name</b>
              <p>
                <b className="current">current:</b> Brazilian Braids
              </p>
            </label>
            <input
              type="text"
              placeholder="Enter New Product Name"
              name="product-name"
            ></input>

            <label htmlFor="product-price" className="update-info-labels">
              <b>Product Price</b>
              <p>
                <b className="current">current:</b> 5,000 @
              </p>
            </label>
            <input
              type="number"
              placeholder="Enter New Product Price"
              name="product-price"
            ></input>
            <label htmlFor="product-stock" className="update-info-labels">
              <b>Quantity in Stock</b>
              <p>
                <b className="current">current:</b> 200
              </p>
            </label>
            <input
              type="number"
              placeholder="Enter New Product Stock"
              name="product-stock"
            ></input>
            <textarea
              name="product-description"
              id=""
              cols="30"
              rows="10"
              placeholder="Add a product description..."
            ></textarea>
            <input type="submit" value="Update Information" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SinglePdtVendorMain;
