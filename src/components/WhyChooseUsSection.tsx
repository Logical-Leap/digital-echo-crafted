import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Customized Strategies",
    desc: "Tailored solutions for your unique business challenges.",
    points: ["In-Depth Consultation", "Scalable Strategies"],
    img: "https://digitalkingsmen.com/assets/img/home2/feature-img1.png",
  },
  {
    title: "Expert Team",
    desc: "A dedicated team of skilled professionals at your service.",
    points: ["Diverse Skill Set", "Continuous Learning"],
    img: "https://digitalkingsmen.com/assets/img/home2/feature-img2.png",
  },
  {
    title: "Advanced Tools",
    desc: "Leveraging cutting-edge technology to deliver results.",
    points: ["Innovative Solutions", "Analytics-Driven"],
    img: "https://digitalkingsmen.com/assets/img/home2/feature-img3.png",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <div className="scroll-fade-in">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
            Committed to Your Growth
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground">
            Why We're the Best Choice
          </h2>
          <p className="text-foreground/60 leading-relaxed mb-8">
            Discover how our relentless focus on quality and innovative strategies empowers local
            businesses to achieve their goals. We deliver measurable results that make a real
            difference.
          </p>
          <Button
            className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground font-inter px-8 py-6 rounded-[5px] transition-all"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request a Digital Audit
          </Button>
        </div>

        {/* Right */}
        <div className="space-y-8">
          {features.map((f) => (
            <div key={f.title} className="scroll-fade-in flex gap-6 items-start">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-foreground/60 mb-3">{f.desc}</p>
                <div className="space-y-1">
                  {f.points.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm text-foreground/70">
                      <Check size={14} className="text-primary flex-shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={f.img}
                alt={f.title}
                className="w-[140px] h-[100px] object-cover rounded-lg hidden md:block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
