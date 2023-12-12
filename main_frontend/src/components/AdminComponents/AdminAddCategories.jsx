import React, { useState } from "react";

const AdminAddCategoriesForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryIcon, setCategoryIcon] = useState("");

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleIconChange = (e) => {
    setCategoryIcon(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategory = {
      name: categoryName,
      icon: categoryIcon,
    };

    fetch("http://localhost:5000/business-categories/create", {
      method: "POST",
      body: JSON.stringify(newCategory),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
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
            type="file"
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

export default AdminAddCategoriesForm;
