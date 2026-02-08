import { ClipboardList, PenTool, Code2, TestTube, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { icon: ClipboardList, title: "Requirement Analysis", desc: "We understand your goals, audience, and business needs." },
  { icon: PenTool, title: "Design", desc: "Crafting stunning, user-focused designs and prototypes." },
  { icon: Code2, title: "Development", desc: "Building robust, scalable solutions with clean code." },
  { icon: TestTube, title: "Testing", desc: "Rigorous QA to ensure flawless performance." },
  { icon: Rocket, title: "Delivery & Support", desc: "Launch, monitor, and continuously improve." },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle mx-auto">
              A proven, structured approach that delivers consistent results.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 120}>
                <div className="relative text-center group">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-card border border-border mx-auto mb-5 flex items-center justify-center group-hover:border-gold/50 group-hover:shadow-[0_0_30px_-10px_hsl(var(--gold)/0.3)] transition-all duration-500">
                    <step.icon className="w-7 h-7 text-gold" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-hero-bg text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
