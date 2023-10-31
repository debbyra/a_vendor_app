import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserDashboard from "./pages/UserDashboard";
import BusinessProfilePage from "./pages/BusinessProfilePage";
import AccountPage from "./pages/AccountPage";
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
        <Route
          path="/dashboard/biz_profile"
          element={<BusinessProfilePage />}
        />
        <Route path="/dashboard/account" element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
