import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { label: "Website Design", path: "/services/web-design" },
  { label: "Ecommerce Solutions", path: "/services/ecommerce" },
  { label: "Mobile App Development", path: "/services/mobile-apps" },
  { label: "Digital Marketing", path: "/services/digital-marketing" },
  { label: "SEO Services", path: "/services/seo" },
  { label: "UI/UX Design", path: "/services/ui-ux" },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="dark-section border-t border-dark-border">
      <div className="container-wide section-padding !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center font-display font-bold text-hero-bg text-lg">
                W
              </div>
              <span className="font-display text-xl font-bold text-hero-foreground">
                WebHouse<span className="text-gold">India</span>
              </span>
            </Link>
            <p className="text-hero-muted text-sm leading-relaxed mb-6">
              A creative web design and digital marketing agency from Patna, Bihar — dedicated to building results-driven digital solutions for businesses worldwide.
            </p>
            <div className="flex gap-3">
              {["facebook", "instagram", "linkedin", "twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-hero-muted hover:text-gold hover:border-gold/40 transition-all duration-300 text-xs uppercase font-bold"
                  aria-label={s}
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-hero-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-hero-muted hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-hero-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.path}>
                  <Link
                    to={s.path}
                    className="text-hero-muted hover:text-gold transition-colors text-sm"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-hero-foreground mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-hero-muted">
                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>Bhagwat Nagar Main Rd, Patna, Bihar, India</span>
              </li>
              <li>
                <a href="tel:+918676994400" className="flex items-center gap-3 text-sm text-hero-muted hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  +91 8676994400
                </a>
              </li>
              <li>
                <a href="mailto:info@webhouseindia.com" className="flex items-center gap-3 text-sm text-hero-muted hover:text-gold transition-colors">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  info@webhouseindia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-hero-muted text-sm">
            © {new Date().getFullYear()} WebHouseIndia. All rights reserved.
          </p>
          <p className="text-hero-muted text-xs">
            Designed & Developed with ❤️ in Patna, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
