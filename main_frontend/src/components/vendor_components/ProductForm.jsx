import { useState } from "react";

export const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const productData = {
      name,
      price,
      quantity,
      image: image || null, // Set image to null if it's an empty string
      video: video || null, // Set video to null if it's an empty string
      // Add other fields as needed
    };

    // TODO: Perform the API call to send productData to the server
    // For example, using fetch or axios

    console.log("Product Data:", productData);
  };

  return (
    <div className="upload-product">
      <h3>Upload a Product</h3>
      <form
        onSubmit={handleFormSubmit}
        className="product-user-order"
        id="product-upload-form"
      >
        <label className="update-info-labels">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />

        <label className="update-info-labels">
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />

        <label className="update-info-labels">
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <br />

        <label className="update-info-labels">
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <br />

        <label className="update-info-labels">
          Video URL:
          <input
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </label>
        <br />

        {/* Add more fields as needed */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
