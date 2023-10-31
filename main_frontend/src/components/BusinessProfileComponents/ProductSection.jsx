import ProductCard from "./ProductCard";
import "../../styles/ProductSection.css";
import "../../styles/TopBizSection.css";

const ProductSection = (props) => {
  return (
    <div className="product-section top-biz-section">
      <h4>
        <span>{props.title}</span>
      </h4>
      <div className="business-section">
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <ProductCard image={"/video/thumbnail.jpg"} name="Braids" />
        <button>
          <span>See More</span>
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
