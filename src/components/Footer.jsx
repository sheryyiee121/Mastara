"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "WhatsApp",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
  {
    label: "TikTok",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
];

export default function Footer() {
  const footerRef = useRef(null);
  const heroRef = useRef(null);
  const newsletterRef = useRef(null);
  const brandRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Hero Banner — Cinematic reveal
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      
      heroTl
        .fromTo(".hero-overlay", 
          { scaleY: 1 }, 
          { scaleY: 0, duration: 1.2, ease: "power4.inOut", transformOrigin: "top" }
        )
        .fromTo(".hero-tagline", 
          { opacity: 0, y: 30, letterSpacing: "0.2em" }, 
          { opacity: 1, y: 0, letterSpacing: "0.6em", duration: 1, ease: "power3.out" }, 
          "-=0.6"
        )
        .fromTo(".hero-title", 
          { opacity: 0, y: 80, scale: 0.9 }, 
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }, 
          "-=0.7"
        )
        .fromTo(".hero-desc", 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 
          "-=0.5"
        );

      // Newsletter — Centered hero-style animations
      const nlTl = gsap.timeline({
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      
      nlTl
        .fromTo(".nl-tagline", 
          { opacity: 0, y: -30, letterSpacing: "0.2em" }, 
          { opacity: 1, y: 0, letterSpacing: "0.5em", duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".nl-title", 
          { opacity: 0, y: 60, scale: 0.9 }, 
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }, 
          "-=0.5"
        )
        .fromTo(".nl-desc", 
          { opacity: 0, y: 40 }, 
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 
          "-=0.7"
        )
        .fromTo(".nl-form", 
          { opacity: 0, y: 50, scale: 0.95 }, 
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.4)" }, 
          "-=0.5"
        )
        .fromTo(".nl-input", 
          { opacity: 0, scaleX: 0 }, 
          { opacity: 1, scaleX: 1, duration: 0.6, ease: "power2.out", transformOrigin: "left" }, 
          "-=0.6"
        )
        .fromTo(".nl-btn", 
          { opacity: 0, scale: 0.8, rotate: -5 }, 
          { opacity: 1, scale: 1, rotate: 0, duration: 0.5, ease: "back.out(2)" }, 
          "-=0.3"
        )
        .fromTo(".nl-note", 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 
          "-=0.2"
        );

      // Brand Row — Logo pulse, text fade, icons pop
      const brandTl = gsap.timeline({
        scrollTrigger: {
          trigger: brandRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      
      brandTl
        .fromTo(".brand-logo", 
          { opacity: 0, scale: 0.5, rotate: -10 }, 
          { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "elastic.out(1, 0.5)" }
        )
        .fromTo(".brand-text", 
          { opacity: 0, y: 40 }, 
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 
          "-=0.6"
        )
        .fromTo(".social-icon", 
          { opacity: 0, scale: 0, rotate: 180 }, 
          { opacity: 1, scale: 1, rotate: 0, duration: 0.6, stagger: 0.12, ease: "back.out(2)" }, 
          "-=0.4"
        );

      // Links Grid — Staggered columns with slide up
      const linksTl = gsap.timeline({
        scrollTrigger: {
          trigger: linksRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      
      linksTl
        .fromTo(".link-col", 
          { opacity: 0, y: 60 }, 
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
        )
        .fromTo(".link-heading", 
          { opacity: 0, x: -30 }, 
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, 
          "-=0.6"
        )
        .fromTo(".link-item", 
          { opacity: 0, x: -20 }, 
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }, 
          "-=0.4"
        );

      // Bottom bar fade in
      gsap.fromTo(".bottom-bar", 
        { opacity: 0, y: 20 }, 
        { 
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: ".bottom-bar",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-[#050505] overflow-hidden mb-5 pb-[10px]">

      {/* ════════════════════════════════════════
          HERO BANNER — Tall, dramatic, centered
      ════════════════════════════════════════ */}
      <div ref={heroRef} className="relative w-full h-[760px] md:h-[860px] lg:h-[940px]">
        <Image
          src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1"
          alt="Mastara Footer"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="hero-overlay absolute inset-0 bg-[#D32F23] z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-0 px-4 text-center">
          <p className="hero-tagline text-[#D32F23] uppercase tracking-[0.6em] text-[14px] sm:text-md font-black">
            Rooftop Dining · Islamabad
          </p>
          <div className="hero-title -my-10 sm:-my-12">
            <Image
              src="/logo/Mastara__7___2_-removebg-preview.png"
              alt="Mastara"
              width={400} 
              height={400}
              className="block object-contain"
            />
          </div>
          <p className="hero-desc max-w-xl text-base leading-none text-gray-400 sm:text-lg md:text-xl">
            Where elegance meets warmth. Every sunset, every plate, every detail — elevated.
          </p>
        </div>
      </div>


      {/* ════════════════════════════════════════
          NEWSLETTER — Full Hero Section with Background Image
      ════════════════════════════════════════ */}
      <div ref={newsletterRef} className="relative w-full h-[680px] md:h-[760px] lg:h-[840px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          alt="Newsletter Background"
          fill
          className="object-cover object-center"
        />
        
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-[#D32F23]/90" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        
        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
          
          <p className="nl-tagline text-white/60 uppercase tracking-[0.5em] text-[10px] sm:text-xs font-black mb-8 md:mb-10">
            Never Miss an Update
          </p>
          
          <h3 className="nl-title text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight max-w-4xl">
            Stay in the Loop
          </h3>
          
          <p className="nl-desc text-white/70 mt-8 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl">
            New dishes, events &amp; exclusive offers — straight to your inbox.
          </p>
          
          <div className="nl-form flex flex-col sm:flex-row items-center justify-center gap-0 mt-12 md:mt-16 w-full max-w-2xl">
            <div className="nl-input overflow-hidden w-full sm:flex-1">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-8 lg:px-10 py-6 lg:py-7 bg-black/30 border-2 border-white/20 text-white text-base lg:text-lg placeholder-white/50 focus:border-white focus:outline-none transition-colors text-center sm:text-left"
              />
            </div>
            <button className="nl-btn w-full sm:w-auto px-12 lg:px-16 py-6 lg:py-7 bg-black text-white text-sm lg:text-base font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap hover:scale-105">
              Subscribe
            </button>
          </div>
          
          <p className="nl-note text-white/40 text-xs sm:text-sm mt-8 tracking-wide">
            Join 10,000+ food lovers. Unsubscribe anytime.
          </p>
          
        </div>
      </div>


      {/* ════════════════════════════════════════
          BRAND ROW — Logo, tagline, socials
          Extra breathing room
      ════════════════════════════════════════ */}
      <div ref={brandRef} className="w-full border-b border-white/[0.06]" style={{marginTop: "50px", marginBottom: "30px"}}>
        <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-20 py-28 md:py-36 lg:py-44">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-16 lg:gap-20">

            <Link href="/" className="brand-logo inline-block shrink-0 relative left-6 sm:left-8 lg:left-10">
              <Image
                src="/logo/Mastara__7___2_-removebg-preview.png"
                alt="Mastara"
                width={200}
                height={200}
                className="object-contain hover:opacity-80 transition-opacity duration-300"
              />
            </Link>

            <p className="brand-text text-gray-500 text-base sm:text-lg lg:text-xl leading-[2] max-w-xl text-center lg:text-left">
              Serving the finest Pakistani, Chinese, and Continental cuisines
              on our rooftop in I-8 Markaz, Islamabad since 2010.
            </p>

            <div className="flex gap-6 lg:gap-7 shrink-0">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="social-icon w-14 h-14 sm:w-[4rem] sm:h-[4rem] lg:w-14 lg:h-14 rounded-full border-2 border-white/10 flex items-center justify-center text-gray-500 hover:border-[#D32F23] hover:bg-[#D32F23] hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>


      {/* ════════════════════════════════════════
          4-COLUMN LINKS GRID
          Maximum whitespace, premium feel
      ════════════════════════════════════════ */}
      <div ref={linksRef} className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 xl:py-48">
          <div className="grid grid-cols-1 gap-14 pl-4 sm:grid-cols-2 sm:gap-16 sm:pl-6 lg:gap-20 lg:pl-8 xl:grid-cols-4 xl:gap-16">

            {/* ── Explore ── */}
            <div className="link-col">
              <h4 className="link-heading text-[#D32F23] uppercase tracking-[0.4em] text-[14px] font-black pb-6 mb-12 border-b border-white/[0.06]">
                Explore
              </h4>
              <ul className="space-y-6 sm:space-y-8">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/menu", label: "Our Menu" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href} className="link-item">
                    <Link
                      href={l.href}
                      className="text-gray-500 hover:text-white transition-all duration-300 text-[15px] sm:text-base group flex items-center gap-4 hover:translate-x-2"
                    >
                      <span className="w-0 h-px bg-[#D32F23] group-hover:w-6 transition-all duration-300 shrink-0" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Opening Hours ── */}
            <div className="link-col">
              <h4 className="link-heading text-[#D32F23] uppercase tracking-[0.4em] text-[14px] font-black pb-6 mb-12 border-b border-white/[0.06]">
                Opening Hours
              </h4>
              <ul className="space-y-10 sm:space-y-12 lg:space-y-14">
                <li className="link-item">
                  <div className="text-gray-600 text-[11px] uppercase tracking-[0.2em] mb-6">
                    Monday – Thursday
                  </div>
                  <div className="text-white text-2xl sm:text-3xl font-bold">11 AM – 11 PM</div>
                </li>
                <li className="link-item">
                  <div className="text-gray-600 text-[11px] uppercase tracking-[0.2em] mb-6">
                    Friday – Sunday
                  </div>
                  <div className="text-white text-2xl sm:text-3xl font-bold">12 PM – 12 AM</div>
                </li>
                <li className="link-item pt-8">
                  <div className="inline-flex items-center gap-3 text-[#D32F23] text-xs font-black uppercase tracking-[0.2em]">
                    <span className="w-3 h-3 bg-[#D32F23] rounded-full animate-pulse" />
                    Open Now
                  </div>
                </li>
              </ul>
            </div>

            {/* ── Location ── */}
            <div className="link-col">
              <h4 className="link-heading text-[#D32F23] uppercase tracking-[0.4em] text-[14px] font-black pb-6 mb-12 border-b border-white/[0.06]">
                Location
              </h4>
              <ul className="space-y-10 sm:space-y-12 lg:space-y-14">
                <li className="link-item">
                  <div className="text-gray-600 text-[11px] uppercase tracking-[0.2em] mb-6">Address</div>
                  <address className="not-italic text-gray-400 text-[15px] sm:text-base leading-[2]">
                    Rooftop, I-8 Markaz<br />
                    Islamabad, Pakistan
                  </address>
                </li>
                <li className="link-item">
                  <div className="text-gray-600 text-[11px] uppercase tracking-[0.2em] mb-6">Phone</div>
                  <a href="tel:+925112345678" className="text-gray-400 hover:text-white transition-colors text-[15px] sm:text-base hover:tracking-wider duration-300">
                    +92 51 1234 5678
                  </a>
                </li>
                <li className="link-item">
                  <div className="text-gray-600 text-[11px] uppercase tracking-[0.2em] mb-6">Email</div>
                  <a href="mailto:info@mastara.pk" className="text-gray-400 hover:text-white transition-colors text-[15px] sm:text-base hover:tracking-wider duration-300">
                    info@mastara.pk
                  </a>
                </li>
              </ul>
            </div>

            {/* ── Reservations ── */}
            <div className="link-col">
              <h4 className="link-heading text-[#D32F23] uppercase tracking-[0.4em] text-[14px] font-black pb-6 mb-12 border-b border-white/[0.06]">
                Reservations
              </h4>
              <p className="link-item mb-10 text-[15px] leading-[2] text-gray-500 sm:mb-14 sm:text-base lg:mb-16">
                Join us for an unforgettable rooftop dining experience in the
                heart of Islamabad.
              </p>
              <Link
                href="/contact"
                className="link-item inline-flex w-full items-center justify-center gap-4 bg-[#D32F23] px-8 py-5 text-center text-sm font-black uppercase tracking-[0.15em] text-white transition-all duration-300 hover:scale-105 hover:bg-[#B52419] hover:shadow-lg hover:shadow-[#D32F23]/30 sm:w-auto sm:px-12 sm:py-7"
              >
                Book a Table
                <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>


      {/* ════════════════════════════════════════
          BOTTOM BAR — Spaced out, elegant
      ════════════════════════════════════════ */}
      <div className="bottom-bar mb-[10px] w-full border-t border-white/[0.06]" style={{ marginBottom: "30px" }}>
        <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:px-20 lg:py-20">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:gap-10 md:text-left">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Mastara Restaurant — All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:justify-end md:gap-10 lg:gap-12">
              <Link href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-400 hover:tracking-wider">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-400 hover:tracking-wider">
                Terms of Service
              </Link>
              <span className="text-gray-600 text-sm">Made with ♥ in Pakistan</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}


