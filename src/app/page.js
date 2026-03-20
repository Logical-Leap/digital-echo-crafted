import Home2About from "@/components/about/Home2About";
import Home1Approach from "@/components/approachSection/Home1Approach";
import Home1Banner from "@/components/banner/Home1Banner";
// import Home2Blog from "@/components/blog/Home2Blog";
// import BannerWithCaseStudySlider from "@/components/caseStudy/BannerWithCaseStudySlider";
import Home2Contact from "@/components/contact/Home2Contact";
import Footer from "@/components/footer/Footer";
import Header1 from "@/components/header/Header1";
import Home1BannerMarquee from "@/components/marquee/Home1BannerMarquee";
// import LogoMarquee from "@/components/marquee/LogoMarquee";
// import Home1Portfolio from "@/components/portfolio/Home1Portfolio";
import Home1Solution from "@/components/solution/Home1Solution";
// import Home2Testimonial from "@/components/testimonial/Home2Testimonial";
import Home2WorkProcess from "@/components/workProcess/Home2WorkProcess";

export const metadata = {
  icons: {
    icon: "/assets/img/square-logo.png",
  },
};
export default function Home() {
  return (
    <>
      <Header1 />
      <Home1Banner />

      <Home1BannerMarquee />
      <Home2About />
      <Home1Solution />
      {/* <Home1Portfolio /> */}
      <Home2WorkProcess />
      {/* <BannerWithCaseStudySlider /> */}
      <Home1Approach />
      {/* <LogoMarquee /> */}
      {/* <Home2Testimonial /> */}
      <Home2Contact />
      <Footer />
    </>
  );
}
