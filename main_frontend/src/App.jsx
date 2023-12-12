import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserDashboard from "./pages/UserDashboard";
import BusinessProfilePage from "./pages/BusinessProfilePage";
import AccountPage from "./pages/AccountPage";
import HealthAndBeauty from "./pages/HealthAndBeautyPage";
import TopInHealthAndBeauty from "./pages/TopInHealthAndBeauty";
import CartPage from "./pages/CartPage";
import RatingPage from "./pages/RatingPage";
import BusinessProducts from "./components/BusinessProducts";
import SingleProductPage from "./pages/SingleProductPage";
import AllRatingsPage from "./pages/AllRatingsPage";

// VENDOR PAGES
import VendorDash from "./pages/vendor_pages/VendorDash";
import VendorProfilePage from "./pages/vendor_pages/VendorProfilePage";
import VendorSingleProductPage from "./pages/vendor_pages/VendorSingleProductPage";
import VendorUploadProductPage from "./pages/vendor_pages/VendorUploadProductPage";
import "./App.css";

// ADMIN PAGES
import AdminAddCategoriesPage from "./pages/admin_pages/AdminAddCategoriesPage";

const IndexLandingPage = () => (
  <div>
    <LandingPage />
  </div>
);

function App() {
  const userType = localStorage.getItem("user_type");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<IndexLandingPage />} />
        <Route
          path={`/dashboard/${userType}/:id`}
          element={<UserDashboard />}
        />
        <Route
          path={`/dashboard/biz_profile/${userType}/:id`}
          element={<BusinessProfilePage />}
        />
        <Route
          path={`/dashboard/account/${userType}/:id`}
          element={<AccountPage />}
        />
        <Route
          path={`/dashboard/health-and-beauty/${userType}/:id`}
          element={<HealthAndBeauty />}
        />
        <Route
          path={`/dashboard/top-in-health-and-beauty/${userType}/:id`}
          element={<TopInHealthAndBeauty />}
        />
        <Route
          path={`/dashboard/cart-page/${userType}/:id`}
          element={<CartPage />}
        />
        <Route
          path={`/dashboard/rating/${userType}/:id`}
          element={<RatingPage />}
        />
        <Route
          path={`/dashboard/business_products/${userType}/:id`}
          element={<BusinessProducts />}
        />
        <Route
          path={`/dashboard/single_product/${userType}/:id`}
          element={<SingleProductPage />}
        />
        <Route
          path={`/dashboard/all_ratings/${userType}/:id`}
          element={<AllRatingsPage />}
        />

        {/* VENDOR PAGES */}
        <Route
          path={`/dashboard/vendor/:id`}
          element={<VendorDash />}
        />
        <Route
          path={`/dashboard/vendor/profile/:id`}
          element={<VendorProfilePage />}
        />
        <Route
          path={`/dashboard/vendor/single_product/:id`}
          element={<VendorSingleProductPage />}
        />
        <Route
          path={`/dashboard/vendor/upload_product/:id`}
          element={<VendorUploadProductPage />}
        />

        {/* ADMIN ROUTES */}
        <Route path={`/dashboard/admin/add_category`} element={<AdminAddCategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
