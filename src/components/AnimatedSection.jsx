"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 1,
  stagger = 0.1,
  ...rest
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = sectionRef.current;
      let animationConfig = {};

      switch (animation) {
        case "fadeUp":
          animationConfig = {
            from: { opacity: 0, y: 60 },
            to: { opacity: 1, y: 0 },
          };
          break;
        case "fadeDown":
          animationConfig = {
            from: { opacity: 0, y: -60 },
            to: { opacity: 1, y: 0 },
          };
          break;
        case "fadeLeft":
          animationConfig = {
            from: { opacity: 0, x: -60 },
            to: { opacity: 1, x: 0 },
          };
          break;
        case "fadeRight":
          animationConfig = {
            from: { opacity: 0, x: 60 },
            to: { opacity: 1, x: 0 },
          };
          break;
        case "scaleUp":
          animationConfig = {
            from: { opacity: 0, scale: 0.8 },
            to: { opacity: 1, scale: 1 },
          };
          break;
        case "rotateIn":
          animationConfig = {
            from: { opacity: 0, rotation: -10 },
            to: { opacity: 1, rotation: 0 },
          };
          break;
        default:
          animationConfig = {
            from: { opacity: 0 },
            to: { opacity: 1 },
          };
      }

      gsap.fromTo(element, animationConfig.from, {
        ...animationConfig.to,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [animation, delay, duration]);

  return (
    <div ref={sectionRef} className={className} {...rest}>
      {children}
    </div>
  );
}
