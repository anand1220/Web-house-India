import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => {
  return (
    <section className="section-padding dark-section relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="container-wide relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-label">Ready to Start?</span>
            <h2 className="section-title text-hero-foreground">
              Let's Build Your{" "}
              <span className="gradient-text">Digital Presence</span>
            </h2>
            <p className="text-hero-muted text-lg mb-10 leading-relaxed">
              Transform your business with a stunning website and powerful digital marketing. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="cta-button">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918676994400?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-outline"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
