import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserDashboard from "./pages/UserDashboard";
import BusinessProfilePage from "./pages/BusinessProfilePage";
import AccountPage from "./pages/AccountPage";
import HealthAndBeauty from "./pages/HealthAndBeautyPage";
import TopInHealthAndBeauty from "./pages/TopInHealthAndBeauty";
import CartPage from "./pages/CartPage";
import Dashboard from "./pages/AdminDashboard";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<UserDashboard />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
