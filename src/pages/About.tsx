import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Target, Eye, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="hero-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-wide">
            <span className="section-label">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6 max-w-3xl">
              Your Trusted <span className="gradient-text">Digital Partner</span> From Patna
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl leading-relaxed">
              We are a passionate team of designers, developers, and digital marketers dedicated to building results-driven web solutions.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <span className="section-label">Our Story</span>
                <h2 className="section-title">Building Digital Excellence Since Day One</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    WebHouseIndia was born out of a simple vision — to make premium digital solutions accessible to businesses of all sizes. Based in Patna, Bihar, we started as a small team of web enthusiasts passionate about creating beautiful, functional websites.
                  </p>
                  <p>
                    Over the years, we've grown into a full-service digital agency serving clients across India and beyond. From website design and ecommerce development to SEO and digital marketing, we offer end-to-end solutions that help businesses thrive online.
                  </p>
                  <p>
                    Our commitment to quality, innovation, and client satisfaction has earned us the trust of hundreds of businesses. We don't just build websites — we build lasting digital partnerships.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Target, title: "Mission", desc: "To empower businesses with innovative digital solutions that drive growth and create impact." },
                    { icon: Eye, title: "Vision", desc: "To be the most trusted digital agency in India, known for quality and client success." },
                    { icon: Users, title: "Team Culture", desc: "Collaborative, creative, and always learning — we thrive on solving complex challenges." },
                    { icon: Heart, title: "Core Values", desc: "Integrity, innovation, and excellence in every project we deliver." },
                  ].map((item) => (
                    <div key={item.title} className="service-card">
                      <item.icon className="w-8 h-8 text-gold mb-4" />
                      <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="dark-section py-16 px-4">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "200+", label: "Happy Clients" },
                { value: "8+", label: "Years Experience" },
                { value: "15+", label: "Team Members" },
              ].map((stat) => (
                <ScrollReveal key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold gradient-text font-display mb-2">{stat.value}</div>
                  <div className="text-hero-muted text-sm">{stat.label}</div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default About;
