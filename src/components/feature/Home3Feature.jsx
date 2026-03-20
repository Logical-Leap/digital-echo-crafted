"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home3Feature = () => {
  const settings = {
    infinite: true,
    centerMode: false,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        id="web-design-service"
        className="home3-feature-section "
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="feature-content-wrap">
                <div
                  className="section-title mb-40 wow animate fadeInDown"
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
                    Our Web Design Process
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
                  <h2>Expert Web Design Services</h2>
                  <p>
                    At Digital Kingsmen, we specialize in creating visually
                    stunning and user-friendly websites tailored to your
                    business needs. Our designs not only captivate your audience
                    but also drive conversions, helping you achieve your online
                    goals.
                  </p>
                </div>
                <div className="feature-list-wrap">
                  <div className="progressBarContainer">
                    <div
                      className="feature-and-progress wow animate fadeInDown"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-feature">
                        <div className="content">
                          <h6>Responsive Design</h6>
                          <p>
                            Our websites are optimized for all devices, ensuring
                            a seamless user experience across desktops, tablets,
                            and mobile devices. This adaptability enhances
                            accessibility and engagement, leading to higher user
                            satisfaction.
                          </p>
                        </div>
                      </div>
                      <span data-slick-index={0} className="progressBar" />
                    </div>
                    <div
                      className="feature-and-progress wow animate fadeInDown"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-feature two pt-25">
                        <div className="content">
                          <h6>SEO-Optimized Structures</h6>
                          <p>
                            We build websites with search engine optimization in
                            mind, helping you improve visibility and rank higher
                            in search results. Our focus on SEO best practices
                            ensures that your site attracts organic traffic from
                            day one.
                          </p>
                        </div>
                      </div>
                      <span data-slick-index={1} className="progressBar" />
                    </div>
                    <div
                      className="feature-and-progress wow animate fadeInDown"
                      data-wow-delay="800ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-feature three pt-25">
                        <div className="content">
                          <h6>Custom Services</h6>
                          <p>
                            Every business is unique, and so are our designs. We
                            collaborate with you to create a website that
                            reflects your brand identity and meets your specific
                            functional requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Slider
                {...settings}
                className="slider single-item wow animate zoomIn"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="slider-item">
                  <div className="feature-img">
                    <img
                      src="assets/img/home3/home3-feature-slider-img1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="slider-item">
                  <div className="feature-img">
                    <img
                      src="assets/img/home3/home3-feature-slider-img2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="slider-item">
                  <div className="feature-img">
                    <img
                      src="assets/img/home3/home3-feature-slider-img3.png"
                      alt=""
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3Feature;
