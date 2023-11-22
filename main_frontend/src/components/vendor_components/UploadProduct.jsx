import "../../styles/UploadProduct.css";

const UploadProduct = () => {
    return (
      <div className="upload-product">
        <h1>UPLOAD PRODUCT</h1>
        <form action="" className="product-user-order" id="product-upload-form">
          <div className="product-update-form" id="product-upload-form-div">
            <div>
              <label htmlFor="product-name" className="update-info-labels">
                <b>Product Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter New Product Name"
                name="product-name"
                required
              ></input>
            </div>

            <div>
              <label htmlFor="product-price" className="update-info-labels">
                <b>Product Price</b>
              </label>
              <input
                type="number"
                placeholder="Enter New Product Price"
                name="product-price"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="product-stock" className="update-info-labels">
                <b>Quantity in Stock</b>
              </label>
              <input
                type="number"
                placeholder="Enter New Product Stock"
                name="product-stock"
                required
              ></input>
            </div>
            <textarea
              name="product-description"
              id=""
              cols="30"
              rows="10"
              placeholder="Add a product description..."
              required
            ></textarea>
            <input type="submit" value="Upload" />
          </div>
        </form>
      </div>
    );
}

export default UploadProduct;