import { Monitor, MessageSquare, Cog, Palette, BarChart3, Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Monitor,
    title: "Web & App Development",
    desc: "Revolutionize your digital presence with our expert web and app development services tailored to your business needs.",
  },
  {
    icon: MessageSquare,
    title: "Consulting Services",
    desc: "Strategic guidance for success. Our consulting services help you navigate the digital landscape effectively.",
  },
  {
    icon: Cog,
    title: "Business Automations",
    desc: "Streamline and boost productivity with intelligent business automation solutions designed for growth.",
  },
  {
    icon: Palette,
    title: "Brand Development",
    desc: "Transforming your vision into a compelling brand identity that resonates with your target audience.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Empower decision-making with insightful Data Analytics that uncover trends and drive strategic growth.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Drive growth and expand your client base with comprehensive digital marketing strategies.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="scroll-fade-in text-center mb-12">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
            Expertise You Can Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">Explore Our Services</h2>
          <Button
            variant="outline"
            className="mt-6 border-foreground/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-inter"
          >
            Dive Deeper
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="scroll-fade-in group bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <s.icon size={36} className="text-foreground mb-5" />
              <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-4">{s.desc}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider group-hover:gap-3 transition-all"
              >
                Explore More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
