gsap.set(".container", { scale: 0.7 });

gsap
  .timeline()
  .from(".container", { duration: 1, opacity: 0 })
  .from(".title2", { opacity: 0, scale: 0, ease: "back" })
  .from("#freds img", {
    y: 160,
    stagger: 0.1,
    duration: 0.8,
    ease: "back",
    opacity: 0,
  })
  .from(".title3", { xPercent: 100, duration: 0.2 });
