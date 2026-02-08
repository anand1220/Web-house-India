import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setSending(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="hero-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-wide">
            <span className="section-label">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6 max-w-3xl">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl leading-relaxed">
              Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can help.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <ScrollReveal>
                  <h2 className="font-display text-2xl font-bold mb-6">Get In Touch</h2>
                  <div className="space-y-6">
                    {[
                      { icon: MapPin, label: "Visit Us", value: "Bhagwat Nagar Main Rd, Patna, Bihar, India", href: "#map" },
                      { icon: Phone, label: "Call Us", value: "+91 8676994400", href: "tel:+918676994400" },
                      { icon: Mail, label: "Email Us", value: "info@webhouseindia.com", href: "mailto:info@webhouseindia.com" },
                    ].map((item) => (
                      <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                          <item.icon className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                          <div className="font-medium text-foreground group-hover:text-gold transition-colors">{item.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/918676994400?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button mt-8 w-full sm:w-auto !text-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </ScrollReveal>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <ScrollReveal delay={200}>
                  <form onSubmit={handleSubmit} className="service-card !p-8">
                    <h3 className="font-display text-xl font-semibold mb-6">Send Us a Message</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                          placeholder="Your name"
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                          placeholder="your@email.com"
                          maxLength={255}
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                        placeholder="+91 XXXXX XXXXX"
                        maxLength={20}
                      />
                    </div>
                    <div className="mb-6">
                      <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm resize-none"
                        placeholder="Tell us about your project..."
                        maxLength={1000}
                      />
                    </div>
                    <button type="submit" disabled={sending} className="cta-button w-full sm:w-auto !text-xs disabled:opacity-50">
                      {sending ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section id="map" className="h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7!2d85.1!3d25.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzAwLjAiTiA4NcKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            className="w-full h-full border-0 grayscale contrast-125"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="WebHouseIndia Location"
          />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
