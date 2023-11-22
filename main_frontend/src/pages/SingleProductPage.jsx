import DashNav from "../components/UserDashboardComponents/DashNav";
import SecNav from "../components/SecNav";
import SinglePdtMain from "../components/SinglePdtMain";
import ProductNav from "../components/ProductNav";
import "../styles/SingleProductPage.css";

const SingleProductPage = () => {
    return (
        <div className="single-product-page">
            <DashNav />
            <SecNav />
            <ProductNav />
            <SinglePdtMain />
        </div>
    )
}

export default SingleProductPage;