import React, { useState } from "react";

const VendorRegistrationForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [products, setProducts] = useState([]);

  const handleProductSubmit = (productData) => {
    // Perform the product API call here
    // You can use fetch or axios to send the productData to the server
    console.log("Product data submitted to API:", productData);

    // Add the product to the products array
    setProducts((prevProducts) => [...prevProducts, productData]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate and submit the form data to the backend
    if (
      businessName &&
      description &&
      location &&
      videoUrl &&
      category &&
      products.length > 0
    ) {
      // Prepare the data for submission
      const formData = {
        businessName,
        description,
        location,
        videoUrl,
        category,
        products,
      };

      // Submit the data to the backend or perform necessary actions
      console.log("Form data submitted:", formData);
    } else {
      // Display an error message or take appropriate action
      console.error("Please fill in all required fields");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Business Name:
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />
      </label>

      <label>
        Brief Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>

      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </label>

      <label>
        Video URL:
        <input
          type="url"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
        />
      </label>

      <div className="">
        <ProductForm onProductSubmit={handleProductSubmit} />
      </div>

      <div>
        <h3>Products:</h3>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.description}
            </li>
          ))}
        </ul>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default VendorRegistrationForm;
