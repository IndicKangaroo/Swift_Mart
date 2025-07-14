import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/Signup";
import "./index.css";
import { store } from "./store/store";
import AdminPanel from "./pages/AdminPanel";
import AllUsers from "./pages/AllUsers";
import AllProduct from "./pages/AllProduct";
import CategoryProduct from "./pages/CategoryProduct";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import SearchProduct from "./pages/SearchProduct";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Order from "./pages/OrdePage";
import AllOrder from "./pages/AllOrder";
import MysteryBox from "./pages/MysteryBox";
import ClaimBox from "./pages/ClaimBox";
import OlxMarketplace from "./pages/OlxMarketplace.jsx";



import OlxProductDetail from "./pages/OlxProductDetail.jsx";
import OlxPurchases from "./pages/OlxPurchases";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import AdminProductsDashboard from "./components/AdminProductsDashboard";
import OlxSuccess from "./pages/OlxSuccess";
import ResetPassword from "./pages/ResetPassword";
import Prize from "./pages/Prize";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import CorporateInfo from "./pages/CorporateInfo";
import ContactUs from "./pages/ContactUs";
import Returns from "./pages/Returns";
import FAQ from "./pages/Faq"
import Shipping from "./pages/Shipping";
import TrackOrder from "./pages/TrackOrder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/Termsofuse.jsx";
import Security from "./pages/Security";
import Sitemap from "./pages/SiteMap";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:token" element={<ResetPassword />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="product-category" element={<CategoryProduct />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="success" element={<Success />} />
      <Route path="cancel" element={<Cancel />} />
      <Route path="search" element={<SearchProduct />} />
      <Route path="order" element={<Order />} />
      <Route path="mystery-box" element={<MysteryBox />} />
      <Route path="claim-box" element={<ClaimBox />} />
      <Route path="prize" element={<Prize />} />

      {/* OLX Marketplace Routes */}
      <Route path="/olx-marketplace" element={<OlxMarketplace />} />
      <Route
        path="/olx-marketplace/product/:id"
        element={<OlxProductDetail />}
      />
      <Route path="/olx-success" element={<OlxSuccess />} />
      <Route path="/olx-cart" element={<OlxCart />} />
      <Route path="/olx-purchases" element={<OlxPurchases />} />
      <Route path="/olx-purchase-success" element={<PurchaseSuccess />} />

      <Route path="about-us" element={<AboutUs />} />
      <Route path="careers" element={<Careers />} />
      <Route path="press" element={<Press />} />
      <Route path="corporate-info" element={<CorporateInfo />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="returns" element={<Returns />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="shipping" element={<Shipping />} />
      <Route path="track-order" element={<TrackOrder />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-of-use" element={<TermsOfUse />} />
      <Route path="security" element={<Security />} />
      <Route path="sitemap" element={<Sitemap />} />

      {/* Admin Panel Routes */}
      <Route path="admin-panel" element={<AdminPanel />}>
        <Route path="all-users" element={<AllUsers />} />
        <Route path="all-products" element={<AllProduct />} />
        <Route path="all-orders" element={<AllOrder />} />
        <Route path="admin-products" element={<AdminProductsDashboard />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// Add these imports at the top of your main.jsx


// Then add these routes inside your existing Route structure:
