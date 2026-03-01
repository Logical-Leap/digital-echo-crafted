const steps = [
  {
    num: "01",
    title: "Discovery & Consultation",
    desc: "Understanding your unique needs and goals through comprehensive analysis.",
    points: ["Brainstorming", "Problem Identification"],
    img: "https://digitalkingsmen.com/assets/img/home1/approach-img1.png",
  },
  {
    num: "02",
    title: "Planning and Strategy",
    desc: "Strategic planning for optimal results in a concise, effective approach.",
    points: ["Collaborating", "Resource Allocation"],
    img: "https://digitalkingsmen.com/assets/img/home1/approach-img2.png",
  },
  {
    num: "03",
    title: "Design & Development",
    desc: "Crafting seamless experiences through innovative design and development.",
    points: ["Generating ideas", "Prototyping Excellence"],
    img: "https://digitalkingsmen.com/assets/img/home1/approach-img3.png",
  },
  {
    num: "04",
    title: "Quality Assurance",
    desc: "Ensuring excellence through meticulous testing and validation processes.",
    points: ["Idea generation", "Continuous Testing"],
    img: "https://digitalkingsmen.com/assets/img/home1/approach-img4.png",
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="scroll-fade-in text-center mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
            Workflow Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">The Kingsmen Approach</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="scroll-fade-in text-center">
              {/* Number circle */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div
                  className="w-full h-full rounded-full overflow-hidden opacity-30"
                  style={{
                    backgroundImage: `url(${s.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-black text-foreground">
                  {s.num}
                </span>
              </div>
              <span className="text-[10px] font-semibold text-primary uppercase tracking-[0.2em]">
                STEP {s.num}
              </span>
              <h3 className="text-base font-bold text-foreground mt-2 mb-3">{s.title}</h3>
              <p className="text-sm text-foreground/60 mb-4 leading-relaxed">{s.desc}</p>
              <div className="space-y-1 text-xs text-foreground/50">
                {s.points.map((p) => (
                  <p key={p}>• {p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
