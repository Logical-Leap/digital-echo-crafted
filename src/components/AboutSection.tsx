import { useCountUp } from "@/hooks/useCountUp";
import { ArrowUp, Users, BarChart3, Target } from "lucide-react";

const stats = [
  { value: 40, label: "Average increase in sales for our clients.", icon: Users },
  { value: 80, label: "Google and Facebook reviews.", icon: BarChart3 },
  { value: 100, label: "Chance for more business in your company.", icon: Target },
];

const cards = [
  {
    title: "Better audiences",
    desc: "We excel in providing you with a quality audience through innovative digital marketing and lead generation.",
    icon: Users,
  },
  {
    title: "Better analytics",
    desc: "Enhance your business with our superior analytics, providing insights that drive growth and success.",
    icon: BarChart3,
  },
  {
    title: "Better outcomes",
    desc: "We ensure better outcomes through expert digital marketing and strategic lead generation.",
    icon: Target,
  },
];

function StatCounter({ value, label }: { value: number; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-4xl md:text-5xl font-black text-foreground">{count}%</span>
        <ArrowUp size={18} className="text-primary" />
      </div>
      <p className="text-sm text-foreground/60">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Eyebrow */}
        <div className="scroll-fade-in text-center mb-12">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
            Discover Digital Kingsmen
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 max-w-3xl mx-auto leading-snug text-foreground">
            We are a <span className="wavy-underline">digital marketing</span> agency working with
            businesses to help deliver <span className="wavy-underline">quality leads</span> and{" "}
            <span className="wavy-underline">loyal customers</span>.
          </h2>
        </div>

        {/* Stats */}
        <div className="scroll-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((s) => (
            <StatCounter key={s.value} value={s.value} label={s.label} />
          ))}
        </div>

        {/* Description */}
        <p className="scroll-fade-in text-center text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          At Digital Kingsmen, we specialize in transforming businesses through expert digital
          strategies. Our dedicated team works tirelessly to provide innovative solutions that drive
          growth and deliver measurable results.
        </p>

        {/* Cards */}
        <div className="scroll-fade-in grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <c.icon size={32} className="text-foreground mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-3">{c.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
