const phrases = [
  "WELCOME TO DIGITAL KINGSMEN",
  "WHERE INNOVATION MEETS EXCELLENCE",
  "YOUR SATISFACTION IS OUR PRIORITY",
  "EMPOWERING YOUR VISION FOR GREATNESS",
  "THRIVE DIGITALLY TO SUCCEED GLOBALLY",
  "ACHIEVE EXTRAORDINARY RESULTS",
];

export default function MarqueeSection() {
  const content = phrases.map((p) => (
    <span key={p} className="flex items-center gap-6 mx-6">
      <span className="text-lg md:text-xl font-bold text-foreground whitespace-nowrap tracking-wider">{p}</span>
      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
    </span>
  ));

  return (
    <section className="py-6 border-y border-border overflow-hidden">
      <div className="animate-marquee flex w-max">
        {content}
        {content}
      </div>
    </section>
  );
}
