import { Check } from "lucide-react";

const benefits = [
  "Identify Performance Issues",
  "Enhance User Experience",
  "Boost Search Engine Rankings",
  "Increase Conversion Rates",
  "Receive Expert Recommendations",
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">
        {/* Left */}
        <div className="scroll-fade-in">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
            Free Audit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground">
            Request Your Free Website Audit
          </h2>
          <p className="text-foreground/60 mb-8 leading-relaxed">
            Discover where your business is at and how we can improve your online presence.
          </p>
          <div className="space-y-3 mb-8">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-primary" />
                </div>
                <span className="text-sm text-foreground/80">{b}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Connect With Us!</p>
            <div className="flex gap-4 text-foreground/60">
              {["LinkedIn", "Facebook", "Twitter", "Instagram"].map((s) => (
                <a key={s} href="#" className="text-sm hover:text-primary transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="scroll-fade-in">
          <div className="bg-secondary rounded-lg p-1 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-secondary-foreground mb-4">Your Success Starts Here!</h3>
            </div>
            <iframe
              src="https://link.digitalkingsmen.com/widget/form/KH3kxkPtzOq7ffgUC2Fh"
              className="w-full h-[500px] border-0"
              title="Contact Form"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
