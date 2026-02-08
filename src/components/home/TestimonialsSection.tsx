import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    text: "WebHouseIndia transformed our online presence completely. Their attention to detail and professional approach exceeded our expectations. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    role: "Founder, FashionBee",
    text: "The ecommerce website they built for us has been a game-changer. Sales increased by 300% within the first quarter. Outstanding work!",
  },
  {
    name: "Amit Verma",
    role: "Director, EduLearn Academy",
    text: "Professional, affordable, and incredibly talented team. They delivered our education platform ahead of schedule with exceptional quality.",
  },
  {
    name: "Sunita Devi",
    role: "Owner, Patna Foods",
    text: "From design to SEO, they handled everything perfectly. Our restaurant booking website now ranks #1 in Patna for local searches.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.name} className="w-full flex-shrink-0 px-4">
                    <div className="text-center">
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl leading-relaxed text-foreground mb-8 font-display italic">
                        "{t.text}"
                      </blockquote>
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 font-display font-bold text-gold text-lg">
                        {t.name[0]}
                      </div>
                      <div className="font-semibold text-foreground">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-gold w-8" : "bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
