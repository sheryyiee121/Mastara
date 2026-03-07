"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll("a"),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-28 px-6 lg:px-16">
          <Link href="/" ref={logoRef} className="navbar-logo-offset inline-flex items-center group">
            <Image
              src="/logo/Mastara__7___2_-removebg-preview.png"
              alt="Mastara"
              width={200}
              height={200}
              className="object-contain group-hover:opacity-80 transition-opacity duration-300"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => (linksRef.current[index] = el)}
                className={`relative px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 group ${
                  pathname === link.href
                    ? "text-[#D32F23]"
                    : "text-white hover:text-[#D32F23]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#D32F23] transition-all duration-300 ${
                    pathname === link.href ? "w-1/2" : "w-0 group-hover:w-1/2"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden relative w-12 h-12 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-7 h-6">
              <span
                className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "top-2.5 rotate-45" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute left-0 top-2.5 w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "top-2.5 -rotate-45" : "top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
        >
          <div className="px-6 sm:px-8 py-8 sm:py-10 space-y-3 sm:space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-5 sm:px-6 py-4 sm:py-5 text-lg sm:text-xl font-medium uppercase tracking-wider transition-all duration-300 border-l-2 ${
                  pathname === link.href
                    ? "text-[#D32F23] border-[#D32F23] bg-white/5"
                    : "text-white border-transparent hover:border-[#D32F23] hover:text-[#D32F23] hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}


