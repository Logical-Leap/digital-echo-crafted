import MainLayout from "@/components/layout/MainLayout";
import React from "react";

const FaqPage = () => {
  return (
    <MainLayout>
      <div className="faq-section scroll-margin pt-120 mb-120" id="faq-section">
        <div className="container">
          <div className="row g-4 mb-120">
            <div className="col-lg-4 d-flex justify-content-lg-center align-items-lg-center">
              <div className="verticle-text">
                <h2>General</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content style-2">
                <div className="accordion" id="accordionGeneral">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseOne"
                        aria-expanded="true"
                        aria-controls="faqcollapseOne"
                      >
                        01. What services do you offer?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqheadingOne"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        We provide a range of services including web design,
                        digital marketing, brand development, and consultation
                        tailored to your business needs. We aim to take care of
                        every need you may have in the digital realm.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseTwo"
                        aria-expanded="false"
                        aria-controls="faqcollapseTwo"
                      >
                        02. Who are your typical clients?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingTwo"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Our clients range from local small businesses to global
                        industry leaders looking to enhance their online
                        presence and drive growth through effective digital
                        strategies.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseThree"
                        aria-expanded="false"
                        aria-controls="faqcollapseThree"
                      >
                        03. How can I contact you?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingThree"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        You can reach us through our contact page, email us
                        directly, or call us at our business phone number.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseFour"
                        aria-expanded="false"
                        aria-controls="faqcollapseFour"
                      >
                        04. Where are you located?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingFour"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        We are based in New Orleans, LA, but we work with
                        clients nationwide and even internationally.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseFive"
                        aria-expanded="false"
                        aria-controls="faqcollapseFive"
                      >
                        05. What industries do you specialize in?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingFive"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        We have experience working with a variety of industries,
                        including retail, industrial, education, and home
                        services.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseSix"
                        aria-expanded="false"
                        aria-controls="faqcollapseSix"
                      >
                        06. Do you have any case studies or testimonials?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingSix"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Yes, we showcase our success stories and client
                        testimonials on our website. Feel free to check them
                        out!
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseSeven"
                        aria-expanded="false"
                        aria-controls="faqcollapseSeven"
                      >
                        07. How do you stay updated on industry trends?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingSeven"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Our team regularly attends workshops, webinars, and
                        industry conferences to ensure we are on the cutting
                        edge of digital marketing trends.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseEight"
                        aria-expanded="false"
                        aria-controls="faqcollapseEight"
                      >
                        08. Can I schedule a consultation?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingEight"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Absolutely! You can schedule a consultation through our
                        contact page or by calling us directly.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mb-120">
            <div className="col-lg-4 d-flex justify-content-lg-center align-items-lg-center">
              <div className="verticle-text">
                <h2>Process</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content style-2">
                <div className="accordion" id="accordionPayment">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2One">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2One"
                        aria-expanded="true"
                        aria-controls="faqcollapse2One"
                      >
                        01. What is your process for new projects?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2One"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqheading2One"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We begin with a consultation to understand your needs,
                        followed by planning, design, implementation, and
                        ongoing support.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Two">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Two"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Two"
                      >
                        02. How long does a typical project take?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Two"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Two"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Project timelines vary based on complexity, but we
                        provide estimated timelines during the initial
                        consultation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Three">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Three"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Three"
                      >
                        03. Will I be involved in the design process?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Three"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Three"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Absolutely! We encourage client feedback at every stage
                        to ensure the final product aligns with your vision.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Four">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Four"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Four"
                      >
                        04. What tools do you use for project management?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Four"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Four"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We use tools like ClickUp and custom built software to
                        keep projects organized and ensure clear communication.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Five">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Five"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Five"
                      >
                        05. How do you handle revisions?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Five"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Five"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We typically include a set number of revisions in our
                        project scope, and any additional changes can be
                        discussed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Six">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Six"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Six"
                      >
                        06. What if I need to make changes during the project?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Six"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Six"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We are flexible and can accommodate changes as long as
                        they are discussed and agreed upon.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Seven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Seven"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Seven"
                      >
                        07. How do you ensure quality control?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Seven"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Seven"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We have a thorough review process in place, including
                        testing and client feedback, to maintain high standards.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Eight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Eight"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Eight"
                      >
                        08. What happens after project completion?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Eight"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Eight"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We provide training and documentation for your team,
                        along with ongoing support options.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4  mb-120">
            <div className="col-lg-4 d-flex justify-content-lg-center align-items-lg-center">
              <div className="verticle-text">
                <h2>Capabilities</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content style-2">
                <div className="accordion" id="accordionPayment">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2One">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2One"
                        aria-expanded="true"
                        aria-controls="faqcollapse2One"
                      >
                        01. What platforms do you specialize in?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2One"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqheading2One"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We specialize in custom software services, but also work
                        with platforms like WordPress, Shopify, Squarespace, and
                        HubSpot, among others.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Two">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Two"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Two"
                      >
                        02. Can you help with SEO?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Two"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Two"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Yes, we offer comprehensive SEO services to improve your
                        website's visibility and drive organic traffic.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Three">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Three"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Three"
                      >
                        03. Do you provide social media management?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Three"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Three"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Absolutely! We create and manage social media campaigns
                        to enhance your online presence.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Four">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Four"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Four"
                      >
                        04. Can you integrate third-party tools?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Four"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Four"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Yes, we can integrate various third-party tools and
                        applications to enhance your website's functionality.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Five">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Five"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Five"
                      >
                        05. What kind of analytics do you provide?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Five"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Five"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We offer detailed analytics reports to track your
                        website's performance, marketing performance, and the
                        effectiveness of our strategies.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Six">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Six"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Six"
                      >
                        06. Can you assist with branding?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Six"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Six"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We offer brand development services to help you
                        establish a strong and consistent brand identity.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Seven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Seven"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Seven"
                      >
                        07. What kind of design services do you provide?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Seven"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Seven"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We provide a range of design services, from web design
                        and branding to graphics and marketing materials.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Eight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Eight"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Eight"
                      >
                        08. How do you measure the success of your strategies?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Eight"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Eight"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We use key performance indicators (KPIs) and analytics
                        tools to evaluate the effectiveness of our strategies
                        and make data-driven adjustments.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 d-flex justify-content-lg-center align-items-lg-center">
              <div className="verticle-text">
                <h2>Payment</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content style-2">
                <div className="accordion" id="accordionPayment">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2One">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2One"
                        aria-expanded="true"
                        aria-controls="faqcollapse2One"
                      >
                        01. What payment methods do you accept?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2One"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqheading2One"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We accept various payment methods, including
                        credit/debit cards, bank transfers, and payment
                        platforms like PayPal.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Two">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Two"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Two"
                      >
                        02. Do you require a deposit?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Two"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Two"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Yes, we typically require a deposit before starting work
                        on a project, with the remaining balance due upon
                        completion.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Three">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Three"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Three"
                      >
                        03. Are there any ongoing costs after project
                        completion?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Three"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Three"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Depending on the services you choose, there may be
                        ongoing costs for maintenance, hosting, or marketing
                        support.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Four">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Four"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Four"
                      >
                        04. Can I pay in installments?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Four"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Four"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We offer flexible payment plans, including installment
                        options, which can be discussed during the consultation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Five">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Five"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Five"
                      >
                        05. What happens if I miss a payment?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Five"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Five"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        We’ll reach out to discuss any missed payments and find
                        a solution, but late fees may apply as outlined in our
                        agreement.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Six">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Six"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Six"
                      >
                        06. Do you offer refunds?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Six"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Six"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Refund policies vary depending on the service. Please
                        inquire directly for details regarding specific
                        situations.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Seven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Seven"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Seven"
                      >
                        07. Is there a charge for consultations?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Seven"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Seven"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Initial consultations are typically free, but follow-up
                        sessions may incur a fee based on the scope of services.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Eight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Eight"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Eight"
                      >
                        08. Do you provide detailed invoices and receipts?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Eight"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Eight"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Yes, we provide detailed invoices and receipts for all
                        payments. This includes itemized breakdowns of services
                        rendered and any applicable taxes or fees.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FaqPage;
