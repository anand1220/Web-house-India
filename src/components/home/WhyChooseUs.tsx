import { Users, Heart, Award, IndianRupee } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our skilled professionals bring years of expertise across design, development, and marketing.",
  },
  {
    icon: Heart,
    title: "Client-Centric Approach",
    description: "We listen, understand your vision, and craft solutions tailored to your business goals.",
  },
  {
    icon: Award,
    title: "Quality Delivery",
    description: "We deliver pixel-perfect, high-performance solutions that exceed expectations every time.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Premium quality at competitive prices — making world-class digital solutions accessible.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding dark-section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title text-hero-foreground">
              A Partner You Can{" "}
              <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-hero-muted text-lg leading-relaxed">
              Since our inception, we've been dedicated to helping businesses establish a strong digital presence. We combine creativity with technology to deliver solutions that truly make a difference.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 150}>
                <div className="glass-card rounded-2xl p-6 hover:border-gold/30 transition-all duration-500">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <reason.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-hero-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-hero-muted text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
