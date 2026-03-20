import React from "react";

const Home3Tools = () => {
  return (
    <>
      <div
        id="consultation-services"
        style={{ paddingTop: "120px" }}
        className="home3-tools-section mb-110  "
      >
        <div className="container" style={{ paddingTop: "65px" }}>
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8">
              <div
                className="section-title text-center wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <g>
                      <circle cx={5} cy={5} r={5} />
                    </g>
                  </svg>
                  Consultations
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <g>
                      <circle cx={5} cy={5} r={5} />
                    </g>
                  </svg>
                </span>
                <h2>Get Help With the Tech You Use</h2>
                <p>
                  At Digital Kingsmen, we provide tailored consultations to help
                  you maximize the effectiveness of the platforms you already
                  rely on. Whether it's Shopify, WordPress, HubSpot, or any
                  other tool, our expert guidance ensures you leverage these
                  resources for optimal business growth
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="tools-card">
                <div className="icon">
                  <img src="assets/img/home3/icon/shopify-logo.svg" alt="" />
                </div>
                <div className="content">
                  <h6>Shopify</h6>
                  <p>
                    optimize your Shopify store for seamless e-commerce and
                    increased sales.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="tools-card">
                <div className="icon">
                  <img src="assets/img/home3/icon/squarespace.svg" alt="" />
                </div>
                <div className="content">
                  <h6>Squarespace</h6>
                  <p>
                    Create stunning Squarespace websites that enhance your
                    brand’s visibility.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="tools-card">
                <div className="icon">
                  <img src="assets/img/home3/icon/wordpress-logo.svg" alt="" />
                </div>
                <div className="content">
                  <h6>WordPress</h6>
                  <p>
                    WordPress services to improve performance and search
                    visibility.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="tools-card">
                <div className="icon">
                  <img
                    src="assets/img/home3/icon/google-analytics-logo.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h6>Google Analytics</h6>
                  <p>
                    Google Analytics for data-driven decisions and insights.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="tools-card">
                <div className="icon">
                  <img src="assets/img/home3/icon/mailchimp-icon.svg" alt="" />
                </div>
                <div className="content">
                  <h6>Mailchimp</h6>
                  <p>
                    Manage targeted email campaigns in Mailchimp to boost
                    engagement.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="tools-card">
                <div className="icon">
                  <img src="assets/img/home3/icon/gmb-logo.svg" alt="" />
                </div>
                <div className="content">
                  <h6>Google My Business</h6>
                  <p>
                    Optimize your Google My Business profile for better local
                    visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3Tools;
