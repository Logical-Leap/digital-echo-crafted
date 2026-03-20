import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

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
    <App />
  </React.StrictMode>
);
