import { Phone, Mail, MapPin, Star, Send } from "lucide-react";

const serviceLinksLeft = ["Web Design", "Digital Marketing", "Analytics"];
const serviceLinksRight = ["Brand Development", "Automation Services", "Consultations"];

export default function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-0">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Our Services */}
          <div>
            <h4 className="text-2xl font-bold text-foreground mb-1">Our Services</h4>
            <div className="w-10 h-0.5 bg-primary mb-6" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="space-y-3">
                {serviceLinksLeft.map((s) => (
                  <a key={s} href="#services" className="block text-sm text-foreground/60 hover:text-primary transition-colors">
                    {s}
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                {serviceLinksRight.map((s) => (
                  <a key={s} href="#services" className="block text-sm text-foreground/60 hover:text-primary transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <img
                src="https://digitalkingsmen.com/assets/img/home1/footer-logo-bg-dark.png"
                alt=""
                className="absolute inset-0 w-full h-full object-contain opacity-40"
              />
              <img
                src="https://digitalkingsmen.com/assets/img/footer-dark-logo.png"
                alt="Digital Kingsmen"
                className="absolute inset-0 w-full h-full object-contain p-4"
              />
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Star size={12} className="text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                What Sets Us Apart
              </span>
              <Star size={12} className="text-primary" />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">What Sets Us Apart?</h4>
            <p className="text-sm text-foreground/60 leading-relaxed">
              At Digital Kingsmen, we combine innovative technology with personalized strategies to
              deliver exceptional results for local businesses. Our commitment to excellence and a
              deep understanding of your unique needs ensure that we empower your brand to thrive in
              a competitive market.
            </p>
          </div>
        </div>

        {/* Contact Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
              <Phone size={18} className="text-primary" />
            </div>
            <div>
              <span className="text-xs text-primary font-semibold block">Call Any Time</span>
              <a href="tel:504-285-2241" className="text-sm text-foreground hover:text-primary transition-colors">
                +1 504-285-2241
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 md:justify-center">
            <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-primary" />
            </div>
            <div>
              <span className="text-xs text-primary font-semibold block">Address</span>
              <span className="text-sm text-foreground">New Orleans, LA</span>
            </div>
          </div>
          <div className="flex items-center gap-4 md:justify-end">
            <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
              <Send size={18} className="text-primary" />
            </div>
            <div>
              <span className="text-xs text-primary font-semibold block">Say Hello</span>
              <a href="mailto:info@digitalkingsmen.com" className="text-sm text-foreground hover:text-primary transition-colors">
                info@digitalkingsmen.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50">
            Copyright 2024 <span className="font-semibold text-foreground">Digital Kingsmen</span>
          </p>
          <div className="flex gap-8 text-sm text-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
