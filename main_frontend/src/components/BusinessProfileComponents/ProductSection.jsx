import ProductCard from "./ProductCard";
import "../../styles/ProductSection.css";
import "../../styles/TopBizSection.css";
import { Link } from "react-router-dom";

const ProductSection = (props) => {
  return (
    <div className="product-section top-biz-section">
      <h3>
        <span>{props.title}</span>
      </h3>
      <div className="business-section">
        <Link to={"/dashboard/single_product"}>
          <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        </Link>
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <button>
          <span>
            <a href="/dashboard/business_products">See More</a>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
