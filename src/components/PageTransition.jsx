"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        overlayRef.current,
        { scaleY: 1, transformOrigin: "top" },
        { scaleY: 0, duration: 0.8, ease: "power4.inOut" }
      );

      tl.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-[#D32F23] z-[100] pointer-events-none"
        style={{ transformOrigin: "top" }}
      />
      <div ref={containerRef}>{children}</div>
    </>
  );
}
