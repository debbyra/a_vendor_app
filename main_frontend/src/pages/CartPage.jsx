import DashNav from "../components/UserDashboardComponents/DashNav";
import SecNav from "../components/SecNav";
import "../styles/CartPage.css";
// import { useNavigate } from "react-router-dom";

const CartPage = () => {
    // const navigate = useNavigate();
    
    // const onBrowseButtonClick = () => {
    //     navigate("/dashboard");
    // }

  return (
    <div className="cart-page">
      <DashNav />
      <SecNav />
      <div className="cart-main-section">
        <div className="cart-heading-section">
          <h2>
            Your <span>SmallBizSafari</span> Cart is empty
          </h2>
          <div className="cart-total-product-price">
            <h3>Sub-Total:</h3>
            <h2>UGX 0 (0 Items)</h2>
          </div>
        </div>
        <div className="browse-button-div">
          <img src="/icons/cart-illustration.png"></img>
          <a href="/dashboard">Browse local businesses</a>
        </div>
      </div>
      <footer>
        The price and availability of items at <span>SmallBizSafari</span> are
        subject to change. The Cart is a temporary place to store a list of your
        items and reflects each item's most recent price.
      </footer>
    </div>
  );
};

export default CartPage;
