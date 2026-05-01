import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ServicePage from "./app/services/page.jsx";
import WebDesignPage from "./app/services/web-design/page.jsx";
import DigitalMarketingPage from "./app/services/digital-marketing/page.jsx";
import AnalyticsPage from "./app/services/analytics/page.jsx";
import BrandDevelopmentPage from "./app/services/brand-development/page.jsx";
import AutomationPage from "./app/services/automation/page.jsx";
import ConsultationsPage from "./app/services/consultations/page.jsx";
import Aboutpage from "./app/about/page.jsx";
import FaqPage from "./app/faq/page.jsx";
import ContactPage from "./app/contact/page.jsx";

// CSS imports (order matters - style.css last to override)
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/bootstrap-icons.css";
import "../public/assets/css/boxicons.min.css";
import "../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../public/assets/css/slick-theme.css";
import "../public/assets/css/animate.min.css";
import "../public/assets/css/slick.css";
import "../public/assets/css/bootstrap-datetimepicker.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "yet-another-react-lightbox/styles.css";
import "../public/assets/css/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/web-design" element={<WebDesignPage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/analytics" element={<AnalyticsPage />} />
        <Route path="/services/brand-development" element={<BrandDevelopmentPage />} />
        <Route path="/services/automation" element={<AutomationPage />} />
        <Route path="/services/consultations" element={<ConsultationsPage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
