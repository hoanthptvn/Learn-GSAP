// gsap.to("h1", { x: 400 });

/**
 * BASIC Tweens
 */

gsap.fromTo(
  ".green",
  { x: 700, y: 400, opacity: 0 },
  {
    x: 400,
    y: 200,
    scale: 3,
    opacity: 1,
    rotate: 360,
    duration: 3,
    ease: "elastic.in(1,0.3)",
  }
);

gsap.to(".pink", {
  duration: 3,
  x: 600,
  repeat: 1,
  yoyo: true,
  ease: "ease-in-out",
});
