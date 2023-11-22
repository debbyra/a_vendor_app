import DashNav from "./UserDashboardComponents/DashNav";
import SecNav from "./SecNav";
import ProductCard from "./BusinessProfileComponents/ProductCard";
// import { Link } from "react-router-dom";

const BusinessProducts = () => {
  return (
    <div className="top-in-health-and-beauty">
      <DashNav />
      <SecNav />
      <h1>Business Products</h1>
      <div className="businesses">
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
      </div>
    </div>
  );
};

export default BusinessProducts;
