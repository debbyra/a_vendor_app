import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserDashboard from "./pages/UserDashboard";
import Dashboard from './pages/AdminDashboard';
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

const IndexLandingPage = () => (
  <div>
    <LandingPage />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<IndexLandingPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route
          path="/dashboard/biz_profile"
          element={<BusinessProfilePage />}
        />
        <Route path="/dashboard/account" element={<AccountPage />} />
        <Route
          path="/dashboard/health-and-beauty"
          element={<HealthAndBeauty />}
        />
        <Route
          path="/dashboard/top-in-health-and-beauty"
          element={<TopInHealthAndBeauty />}
        />
        
        <Route path="/dashboard/cart-page" element={<CartPage />} />
        <Route path="/dashboard/rating" element={<RatingPage />} />
        <Route
          path="/dashboard/business_products"
          element={<BusinessProducts />}
        />
        <Route
          path="/dashboard/single_product"
          element={<SingleProductPage />}
        />
        <Route path="/dashboard/all_ratings" element={<AllRatingsPage />} />

        {/* VENDOR PAGES */}
        <Route path="/vendor_dashboard" element={<VendorDash />} />
        <Route
          path="/vendor_dashboard/profile"
          element={<VendorProfilePage />}
        />
        <Route
          path="/vendor_dashboard/single_product"
          element={<VendorSingleProductPage />}
        />
        <Route
          path="/vendor_dashboard/upload_product"
          element={<VendorUploadProductPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;