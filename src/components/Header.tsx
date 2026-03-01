import { useState, useEffect } from "react";
import { Phone, X, Grid3X3, Moon, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = ["Home", "Services", "About", "FAQ's", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollTo = (id: string) => {
    const map: Record<string, string> = {
      Home: "hero",
      Services: "services",
      About: "about",
      "FAQ's": "approach",
      Contact: "contact",
    };
    document.getElementById(map[id] || "hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="flex-shrink-0">
          <img
            src="https://digitalkingsmen.com/assets/img/white-logo.png"
            alt="Digital Kingsmen"
            className="h-10"
          />
        </a>

        {/* Nav Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Phone with "Any Question" label in bordered box */}
          <a
            href="tel:504-285-2241"
            className="hidden md:flex flex-col items-center gap-0.5 border border-border rounded-md px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
          >
            <span className="text-[10px] uppercase tracking-wider text-foreground/50">Any Question</span>
            <span className="flex items-center gap-2 text-sm">
              <Phone size={14} />
              504-285-2241
            </span>
          </a>

          {/* Side Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-foreground/80 hover:text-primary transition-colors">
                <Grid3X3 size={22} />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-card border-border">
              <SheetTitle className="text-foreground">Digital Kingsmen</SheetTitle>
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Contact</h4>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <p>📞 504-285-2241</p>
                    <p>✉️ info@digitalkingsmen.com</p>
                    <p>📍 New Orleans, LA</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Follow Us</h4>
                  <div className="flex gap-4 text-foreground/70">
                    {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((s) => (
                      <a key={s} href="#" className="hover:text-primary transition-colors text-sm">{s}</a>
                    ))}
                  </div>
                </div>
                {/* Mobile Nav */}
                <div className="lg:hidden">
                  <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Navigation</h4>
                  <div className="space-y-2">
                    {navLinks.map((link) => (
                      <button
                        key={link}
                        onClick={() => scrollTo(link)}
                        className="block text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 text-foreground/80 hover:text-primary transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
