import { Link } from "react-router-dom";
import { Globe, ShoppingCart, Smartphone, Megaphone, Search, Palette, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/home/CTASection";

const allServices = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "We create stunning, responsive, and high-performance websites tailored to your brand and business goals. From corporate websites to landing pages, we deliver pixel-perfect results.",
    path: "/services/web-design",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Solutions",
    description: "Build powerful online stores with seamless payment integration, inventory management, and user-friendly shopping experiences that drive sales and customer loyalty.",
    path: "/services/ecommerce",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for Android and iOS that engage users, streamline operations, and expand your digital reach.",
    path: "/services/mobile-apps",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including social media marketing, PPC advertising, content marketing, and email campaigns that deliver measurable ROI.",
    path: "/services/digital-marketing",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Data-driven search engine optimization that improves your rankings, increases organic traffic, and establishes your authority in search results.",
    path: "/services/seo",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User research-driven design that creates intuitive, accessible, and visually striking digital experiences. We turn complex workflows into delightful interfaces.",
    path: "/services/ui-ux",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-wide">
            <span className="section-label">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6 max-w-3xl">
              Comprehensive <span className="gradient-text">Digital Solutions</span>
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl leading-relaxed">
              From design to development to marketing — everything your business needs to succeed online.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allServices.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 100}>
                  <Link to={service.path} className="service-card group flex gap-6 h-full">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <service.icon className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="flex items-center gap-1 text-gold text-sm font-medium">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Services;
