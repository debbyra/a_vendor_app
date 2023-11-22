import SecNav from "../../components/SecNav";
import DashNav from "../../components/UserDashboardComponents/DashNav";
import UploadProduct from "../../components/vendor_components/UploadProduct";

const VendorUploadProductPage = () => {
  return (
    <div className="vendor-upload-product-page">
      <DashNav />
      <SecNav />
      <UploadProduct />
    </div>
  );
};

export default VendorUploadProductPage;
