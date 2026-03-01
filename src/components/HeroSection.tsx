import { Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="scroll-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <Star size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
              Elevate Your Business
            </span>
            <Star size={14} className="text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[50px] font-black leading-tight mb-6 text-foreground">
            Web Design and Marketing for Growing Businesses
          </h1>
          <p className="text-foreground/70 mb-8 max-w-lg leading-relaxed">
            Digital Kingsmen offers elite web design and advanced marketing strategies, empowering
            growing businesses to excel. Elevate your brand and connect with customers effectively.
          </p>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-semibold px-8 py-6 rounded-[5px] text-sm"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request a digital audit
          </Button>
          <p className="text-xs text-foreground/40 mt-4 max-w-md">
            *A DIGITAL AUDIT assesses your online presence to help optimize strategies, improve
            customer engagement, and drive growth.
          </p>
        </div>

        {/* Right Visuals */}
        <div className="relative scroll-fade-in hidden lg:block">
          <div className="relative w-full h-[500px]">
            <img
              src="https://digitalkingsmen.com/assets/img/home1/banner-img1.png"
              alt="Office environment"
              className="absolute top-0 right-0 w-[280px] rounded-lg shadow-2xl z-10 hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://digitalkingsmen.com/assets/img/home1/banner-img2.png"
              alt="Team collaboration"
              className="absolute top-20 right-40 w-[260px] rounded-lg shadow-2xl z-20 hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://digitalkingsmen.com/assets/img/home1/banner-img3.png"
              alt="Work setup"
              className="absolute top-44 right-16 w-[240px] rounded-lg shadow-2xl z-30 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Rotating Circle Text */}
          <div className="absolute bottom-10 left-0 w-[120px] h-[120px]">
            <div className="relative w-full h-full">
              <svg className="animate-spin-slow w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path id="circlePath" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
                </defs>
                <text className="text-[10px] fill-foreground uppercase tracking-[0.3em]">
                  <textPath href="#circlePath">SCALE · STRATEGY · DESIGN · </textPath>
                </text>
              </svg>
              <button className="absolute inset-0 m-auto w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Play size={16} className="text-primary-foreground ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
