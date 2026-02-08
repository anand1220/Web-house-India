import { Link } from "react-router-dom";
import { Globe, ShoppingCart, Smartphone, Megaphone, Search, Palette, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom, responsive websites that captivate visitors and convert them into customers.",
    path: "/services/web-design",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Solutions",
    description: "Powerful online stores that drive sales with seamless shopping experiences.",
    path: "/services/ecommerce",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Intuitive mobile applications for Android and iOS that engage and retain users.",
    path: "/services/mobile-apps",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that boost visibility and accelerate growth.",
    path: "/services/digital-marketing",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Search engine optimization that puts your business on top of Google rankings.",
    path: "/services/seo",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates delightful, intuitive digital experiences.",
    path: "/services/ui-ux",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive digital solutions to help your business thrive in the digital world.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <Link to={service.path} className="service-card group block h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
