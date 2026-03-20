import { useEffect } from "react";
import ScrollProgress from "@/components/common/ScrollProgress";
import ThemeSwitch from "@/components/common/Theme";
import useWow from "@/hooks/useWow";
import Home2About from "@/components/about/Home2About";
import Home1Approach from "@/components/approachSection/Home1Approach";
import Home1Banner from "@/components/banner/Home1Banner";
import Home2Contact from "@/components/contact/Home2Contact";
import Footer from "@/components/footer/Footer";
import Header1 from "@/components/header/Header1";
import Home1BannerMarquee from "@/components/marquee/Home1BannerMarquee";
import Home1Solution from "@/components/solution/Home1Solution";
import Home2WorkProcess from "@/components/workProcess/Home2WorkProcess";

export default function App() {
  useWow();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <ScrollProgress />
      <ThemeSwitch />
      <Header1 />
      <Home1Banner />
      <Home1BannerMarquee />
      <Home2About />
      <Home1Solution />
      <Home2WorkProcess />
      <Home1Approach />
      <Home2Contact />
      <Footer />
    </>
  );
}
