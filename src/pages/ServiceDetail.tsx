import { useParams, Link } from "react-router-dom";
import { Globe, ShoppingCart, Smartphone, Megaphone, Search, Palette, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/home/CTASection";

const serviceData: Record<string, {
  icon: typeof Globe;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  technologies: string[];
  faqs: { q: string; a: string }[];
}> = {
  "web-design": {
    icon: Globe,
    title: "Website Design & Development",
    tagline: "Custom websites that captivate and convert",
    description: "We design and develop responsive, fast-loading, and visually stunning websites that represent your brand and drive business results. From single-page sites to complex web applications, our team delivers solutions built on modern technologies.",
    benefits: ["Fully Responsive Design", "SEO-Optimized Code", "Fast Loading Speed", "Custom CMS Integration", "Cross-Browser Compatible", "Ongoing Maintenance & Support"],
    technologies: ["React", "WordPress", "HTML5/CSS3", "PHP", "Node.js", "Tailwind CSS"],
    faqs: [
      { q: "How long does it take to build a website?", a: "Typically 2-6 weeks depending on complexity and requirements." },
      { q: "Do you provide hosting?", a: "Yes, we offer reliable hosting solutions and can help with domain setup." },
      { q: "Can I update the website myself?", a: "Absolutely! We build with user-friendly CMS platforms or provide training." },
    ],
  },
  "ecommerce": {
    icon: ShoppingCart,
    title: "Ecommerce Solutions",
    tagline: "Online stores that drive sales and growth",
    description: "Build a powerful online store with seamless payment integration, inventory management, and a shopping experience that converts visitors into loyal customers. We specialize in creating scalable ecommerce platforms for businesses of all sizes.",
    benefits: ["Secure Payment Gateway", "Inventory Management", "Mobile-Optimized Shopping", "Multi-Vendor Support", "Order Tracking System", "Analytics Dashboard"],
    technologies: ["WooCommerce", "Shopify", "Magento", "Payment APIs", "React", "Node.js"],
    faqs: [
      { q: "Which ecommerce platform do you recommend?", a: "It depends on your needs — WooCommerce for flexibility, Shopify for ease of use." },
      { q: "Can you integrate payment gateways?", a: "Yes, we integrate Razorpay, PayTM, Stripe, and more." },
      { q: "Do you provide product photography?", a: "We can guide you on product photography best practices or connect you with partners." },
    ],
  },
  "mobile-apps": {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Apps that users love to use",
    description: "We build intuitive, high-performance mobile applications for Android and iOS. Whether it's a consumer app, enterprise solution, or startup MVP, our apps are built for scalability, performance, and user delight.",
    benefits: ["Cross-Platform Development", "Native Performance", "Push Notifications", "Offline Functionality", "App Store Optimization", "Regular Updates & Support"],
    technologies: ["React Native", "Flutter", "Android (Kotlin)", "iOS (Swift)", "Firebase", "REST APIs"],
    faqs: [
      { q: "Do you build for both Android and iOS?", a: "Yes, we build cross-platform apps that work seamlessly on both platforms." },
      { q: "How much does an app cost?", a: "App costs vary based on complexity. Contact us for a free estimate." },
      { q: "Do you publish the app to stores?", a: "Yes, we handle the entire app store submission and optimization process." },
    ],
  },
  "digital-marketing": {
    icon: Megaphone,
    title: "Digital Marketing",
    tagline: "Marketing that delivers measurable results",
    description: "Our digital marketing services combine data-driven strategies with creative execution. From social media to PPC, we help businesses increase visibility, drive traffic, and generate qualified leads.",
    benefits: ["Social Media Marketing", "Google Ads Management", "Content Marketing", "Email Campaigns", "Brand Strategy", "Performance Analytics"],
    technologies: ["Google Ads", "Meta Business", "Mailchimp", "Google Analytics", "SEMrush", "Canva"],
    faqs: [
      { q: "How quickly will I see results?", a: "PPC can deliver immediate results; organic growth typically takes 3-6 months." },
      { q: "Do you manage social media accounts?", a: "Yes, we provide complete social media management including content creation." },
      { q: "What's your reporting process?", a: "We provide detailed monthly reports with KPIs, insights, and recommendations." },
    ],
  },
  "seo": {
    icon: Search,
    title: "SEO Services",
    tagline: "Rank higher, get found, grow faster",
    description: "Our SEO experts use proven strategies to improve your search engine rankings, increase organic traffic, and establish your online authority. We focus on sustainable, white-hat techniques that deliver long-term results.",
    benefits: ["Keyword Research & Strategy", "On-Page Optimization", "Technical SEO Audit", "Link Building", "Local SEO", "Monthly Reporting"],
    technologies: ["Google Search Console", "Ahrefs", "SEMrush", "Moz", "Google Analytics", "Schema Markup"],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Typically 3-6 months for noticeable improvements in rankings and traffic." },
      { q: "Do you guarantee first page rankings?", a: "No ethical SEO agency can guarantee rankings, but our track record speaks for itself." },
      { q: "Do you handle local SEO?", a: "Yes, including Google Business Profile optimization and local citation building." },
    ],
  },
  "ui-ux": {
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Designing experiences that delight users",
    description: "We create intuitive, accessible, and visually stunning digital experiences through user research, wireframing, prototyping, and visual design. Our designs are not just beautiful — they solve real problems and improve user satisfaction.",
    benefits: ["User Research & Testing", "Wireframing & Prototyping", "Visual Design Systems", "Interaction Design", "Accessibility Compliance", "Design Handoff"],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Zeplin"],
    faqs: [
      { q: "What's the difference between UI and UX?", a: "UX focuses on the user journey and experience; UI focuses on the visual interface design." },
      { q: "Do you provide design files?", a: "Yes, we deliver organized Figma files with design systems and components." },
      { q: "Can you redesign an existing product?", a: "Absolutely! We specialize in improving existing products through research-driven redesigns." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center dark-section">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-hero-foreground mb-4">Service Not Found</h1>
            <Link to="/services" className="cta-button">View All Services</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="hero-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-wide">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-gold" />
              </div>
            </div>
            <span className="section-label">{service.tagline}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6 max-w-3xl">
              {service.title}
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl leading-relaxed mb-8">
              {service.description}
            </p>
            <Link to="/contact" className="cta-button">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <ScrollReveal>
              <span className="section-label">Benefits</span>
              <h2 className="section-title">What You Get</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {service.benefits.map((b, i) => (
                <ScrollReveal key={b} delay={i * 80}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <Check className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="font-medium text-foreground">{b}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 px-4 dark-section">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-10">
                <span className="section-label">Tools & Technologies</span>
                <h2 className="section-title text-hero-foreground">Tech We Use</h2>
              </div>
            </ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech) => (
                <ScrollReveal key={tech}>
                  <span className="px-6 py-3 rounded-full glass-card text-hero-foreground text-sm font-medium">
                    {tech}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="container-wide max-w-3xl">
            <ScrollReveal>
              <span className="section-label">FAQ</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </ScrollReveal>
            <div className="space-y-4 mt-10">
              {service.faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <details className="group service-card !p-0 overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-foreground list-none">
                      {faq.q}
                      <span className="text-gold ml-4 group-open:rotate-45 transition-transform text-xl">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
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

export default ServiceDetail;
