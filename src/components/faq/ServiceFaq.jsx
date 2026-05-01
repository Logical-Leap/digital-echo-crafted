"use client";
import React from "react";

const ServiceFaq = ({ title = "Frequently Asked Questions", sectionTitle = "Web Design FAQs", subtitle, items = [], idPrefix = "service-faq" }) => {
  if (!items.length) return null;

  const mid = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, mid);
  const rightItems = items.slice(mid);

  return (
    <div className="home3-faq-section mb-110" id={`${idPrefix}-section`}>
      <div className="container">
        <div className="row justify-content-center mb-70">
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
                {title}
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
              <h2>{sectionTitle}</h2>
              {subtitle && <p>{subtitle}</p>}
            </div>
          </div>
        </div>
        <div className="faq-wrap">
          <div className="faq-content">
            <div className="accordion" id={`${idPrefix}Accordion`}>
              <div className="row g-lg-5 g-4">
                <div
                  className="col-lg-6 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  {leftItems.map((item, index) => {
                    const isFirst = index === 0;
                    const num = String(index + 1).padStart(2, "0");
                    const headingId = `${idPrefix}Heading${index + 1}`;
                    const collapseId = `${idPrefix}Collapse${index + 1}`;
                    return (
                      <div key={index} className="accordion-item">
                        <h2 className="accordion-header" id={headingId}>
                          <button
                            className={`accordion-button${isFirst ? "" : " collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={isFirst}
                            aria-controls={collapseId}
                          >
                            {num}. {item.question}
                          </button>
                        </h2>
                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse${isFirst ? " show" : ""}`}
                          aria-labelledby={headingId}
                          data-bs-parent={`#${idPrefix}Accordion`}
                        >
                          <div className="accordion-body">{item.answer}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="col-lg-6 wow animate fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  {rightItems.map((item, index) => {
                    const idx = mid + index;
                    const isFirstRight = index === 0 && rightItems.length > 0;
                    const num = String(idx + 1).padStart(2, "0");
                    const headingId = `${idPrefix}Heading${idx + 1}`;
                    const collapseId = `${idPrefix}Collapse${idx + 1}`;
                    return (
                      <div key={idx} className="accordion-item">
                        <h2 className="accordion-header" id={headingId}>
                          <button
                            className={`accordion-button${isFirstRight ? "" : " collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={isFirstRight}
                            aria-controls={collapseId}
                          >
                            {num}. {item.question}
                          </button>
                        </h2>
                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse${isFirstRight ? " show" : ""}`}
                          aria-labelledby={headingId}
                          data-bs-parent={`#${idPrefix}Accordion`}
                        >
                          <div className="accordion-body">{item.answer}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFaq;
