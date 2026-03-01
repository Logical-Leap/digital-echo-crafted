import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  "Web Design",
  "Digital Marketing",
  "Analytics",
  "Brand Development",
  "Business Automations",
  "Consulting",
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo Center */}
        <div className="flex justify-center mb-12">
          <div className="relative w-40 h-40">
            <img
              src="https://digitalkingsmen.com/assets/img/home1/footer-logo-bg-dark.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain opacity-30"
            />
            <img
              src="https://digitalkingsmen.com/assets/img/footer-dark-logo.png"
              alt="Digital Kingsmen"
              className="absolute inset-0 w-full h-full object-contain p-6"
            />
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Our Services</h4>
            <div className="space-y-2">
              {serviceLinks.map((s) => (
                <a key={s} href="#services" className="block text-sm text-foreground/60 hover:text-primary transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Value Prop */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">What Sets Us Apart</h4>
            <p className="text-sm text-foreground/60 leading-relaxed">
              At Digital Kingsmen, we combine innovative strategies with a deep understanding of your
              business needs. Our dedicated team is committed to delivering measurable results that
              drive real growth.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:504-285-2241" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Phone size={14} /> 504-285-2241
              </a>
              <a href="mailto:info@digitalkingsmen.com" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Mail size={14} /> info@digitalkingsmen.com
              </a>
              <p className="flex items-center gap-3 text-sm text-foreground/60">
                <MapPin size={14} /> New Orleans, LA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40">© 2024 Digital Kingsmen. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
