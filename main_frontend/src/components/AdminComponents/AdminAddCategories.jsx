import React, { useState } from "react";
import axios from "axios";

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryIcon, setCategoryIcon] = useState("");

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleIconChange = (e) => {
    setCategoryIcon(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new category object
    const newCategory = {
      name: categoryName,
      icon: categoryIcon,
    };

    try {
      // Post the new category to the backend
      const response = await axios.post("/api/categories", newCategory);
      console.log("Category created:", response.data);

      // Optionally, you can clear the form fields or perform any other actions after successful submission.
      setCategoryName("");
      setCategoryIcon("");
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <div>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryName">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="categoryIcon">Category Icon:</label>
          <input
            type="text"
            id="categoryIcon"
            value={categoryIcon}
            onChange={handleIconChange}
            required
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;
