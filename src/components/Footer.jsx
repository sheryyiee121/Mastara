"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-fade",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-[#050505] overflow-hidden">

      {/* ── BIG HERO BANNER INSIDE FOOTER ── */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1"
          alt="Mastara Footer"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <p className="footer-fade text-[#D32F23] uppercase tracking-[0.4em] text-sm font-bold mb-8">
            Rooftop Fine Dining · I-8 Markaz, Islamabad
          </p>
          <h2 className="footer-fade text-[80px] sm:text-[110px] md:text-[140px] font-black italic text-white leading-none">
            Mastara
          </h2>
          <p className="footer-fade mt-8 text-gray-400 text-xl max-w-xl leading-relaxed">
            Where flavors meet heritage. Come dine with us.
          </p>
        </div>
      </div>

      {/* ── NEWSLETTER STRIP ── */}
      <div className="footer-fade w-full bg-[#D32F23] py-16">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div>
              <h3 className="text-white text-3xl lg:text-4xl font-black">
                Stay in the Loop
              </h3>
              <p className="text-white/70 mt-3 text-lg">
                New dishes, events & exclusive offers — straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-96 px-8 py-5 bg-black/30 border border-white/30 text-white text-lg placeholder-white/50 focus:border-white focus:outline-none transition-colors"
              />
              <button className="w-full sm:w-auto px-12 py-5 bg-black text-white text-base font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="footer-fade w-full py-28">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-12">

            {/* BRAND COLUMN — Wider */}
            <div className="lg:col-span-2 space-y-10">
              <Link href="/" className="inline-block">
                <span className="text-6xl font-black italic text-[#D32F23] hover:text-[#E54A3F] transition-colors duration-300">
                  Mastara
                </span>
              </Link>
              <p className="text-gray-400 text-lg leading-loose max-w-sm">
                Serving the finest Pakistani, Chinese, and Continental cuisines
                on our rooftop in I-8 Markaz, Islamabad since 2010.
              </p>
              <div className="flex gap-5">
                {[
                  {
                    label: "Facebook",
                    svg: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
                  },
                  {
                    label: "Instagram",
                    svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
                  },
                  {
                    label: "WhatsApp",
                    svg: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />,
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-14 h-14 rounded-full border border-white/15 flex items-center justify-center text-gray-500 hover:border-[#D32F23] hover:bg-[#D32F23] hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {s.svg}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* EXPLORE */}
            <div className="space-y-10">
              <h4 className="text-[#D32F23] uppercase tracking-[0.25em] text-xs font-black">
                Explore
              </h4>
              <ul className="space-y-6">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/menu", label: "Our Menu" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-gray-400 hover:text-white transition-colors text-lg group flex items-center gap-3"
                    >
                      <span className="w-0 h-px bg-[#D32F23] group-hover:w-5 transition-all duration-300" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* HOURS */}
            <div className="space-y-10">
              <h4 className="text-[#D32F23] uppercase tracking-[0.25em] text-xs font-black">
                Opening Hours
              </h4>
              <ul className="space-y-6">
                <li>
                  <div className="text-gray-500 text-sm uppercase tracking-wider mb-2">Mon – Thu</div>
                  <div className="text-white text-xl font-semibold">11 AM – 11 PM</div>
                </li>
                <li className="pt-2">
                  <div className="text-gray-500 text-sm uppercase tracking-wider mb-2">Fri – Sun</div>
                  <div className="text-white text-xl font-semibold">12 PM – 12 AM</div>
                </li>
                <li className="pt-2">
                  <div className="inline-flex items-center gap-2 text-[#D32F23] text-sm font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 bg-[#D32F23] rounded-full animate-pulse" />
                    Open Now
                  </div>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="space-y-10">
              <h4 className="text-[#D32F23] uppercase tracking-[0.25em] text-xs font-black">
                Get in Touch
              </h4>
              <ul className="space-y-7">
                <li>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Address</div>
                  <address className="not-italic text-gray-300 text-base leading-relaxed">
                    Rooftop, I-8 Markaz<br />
                    Islamabad, Pakistan
                  </address>
                </li>
                <li>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Phone</div>
                  <a href="tel:+925112345678" className="text-gray-300 hover:text-white text-base transition-colors">
                    +92 51 1234 5678
                  </a>
                </li>
                <li>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Email</div>
                  <a href="mailto:info@mastara.pk" className="text-gray-300 hover:text-white text-base transition-colors">
                    info@mastara.pk
                  </a>
                </li>
                <li className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 text-white bg-[#D32F23] px-7 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#B52419] transition-all duration-300"
                  >
                    Book a Table
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="w-full h-px bg-white/5" />

      {/* ── BOTTOM BAR ── */}
      <div className="footer-fade w-full py-10">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-24">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Mastara Restaurant — All Rights Reserved.
            </p>
            <div className="flex items-center gap-10">
              <Link href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-700 text-sm">
                Made with ♥ in Pakistan
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
