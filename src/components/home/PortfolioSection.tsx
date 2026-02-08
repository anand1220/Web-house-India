import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  { title: "E-Commerce Platform", category: "Web Development", color: "from-gold/20 to-gold-dark/20" },
  { title: "Restaurant Booking App", category: "Mobile App", color: "from-blue-500/20 to-blue-700/20" },
  { title: "Real Estate Website", category: "Web Design", color: "from-emerald-500/20 to-emerald-700/20" },
  { title: "Healthcare Portal", category: "UI/UX Design", color: "from-purple-500/20 to-purple-700/20" },
  { title: "EdTech Platform", category: "Full Stack", color: "from-orange-500/20 to-orange-700/20" },
  { title: "Corporate Website", category: "Web Design", color: "from-cyan-500/20 to-cyan-700/20" },
];

const PortfolioSection = () => {
  return (
    <section className="section-padding dark-section">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title text-hero-foreground">Our Recent Work</h2>
            <p className="section-subtitle mx-auto text-hero-muted">
              A selection of projects that showcase our expertise and creativity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <div className="group relative rounded-2xl overflow-hidden border border-dark-border hover:border-gold/30 transition-all duration-500 cursor-pointer">
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-2xl bg-hero-bg/50 backdrop-blur flex items-center justify-center font-display text-2xl font-bold text-hero-foreground">
                    {project.title[0]}
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs text-gold font-medium uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-display text-lg font-semibold text-hero-foreground mt-1 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
