import DashNav from "../../components/UserDashboardComponents/DashNav";
import SecNav from "../../components/SecNav";
import ProductNav from "../../components/ProductNav";
import SinglePdtVendorMain from "../../components/vendor_components/SinglePdtVendorMain";
import "../../styles/SingleProductPage.css";

const VendorSingleProductPage = () => {
    return (
      <div className="vendor-single-product-page">
        <DashNav />
        <SecNav />
        <ProductNav />
        <SinglePdtVendorMain />
      </div>
    );
}

export default VendorSingleProductPage;