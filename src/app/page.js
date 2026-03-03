"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "@/components/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(titleRef.current, { opacity: 0, y: 120 }, { opacity: 1, y: 0, duration: 1.4, ease: "power4.out" })
        .fromTo(subtitleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.7")
        .fromTo(ctaRef.current?.children || [], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.5");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="overflow-hidden bg-black">

      {/* ══════════════════════════════════════════════════════
          HERO — Full viewport
      ══════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative w-full h-screen min-h-[768px] flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Mastara Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-black/85" />
        </div>

        <div className="relative z-10 text-center px-8 w-full max-w-5xl mx-auto">
          <div ref={titleRef}>
            <p className="text-[#D32F23] uppercase tracking-[0.5em] text-sm font-bold mb-10">
              Rooftop Dining · Islamabad
            </p>
            <h1 className="text-[80px] sm:text-[120px] md:text-[160px] font-black text-white leading-none font-display uppercase tracking-wide">
              Mastara
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-white/50 text-base sm:text-lg font-light tracking-[0.2em] uppercase">
              <span>Desi</span>
              <span className="w-1.5 h-1.5 bg-[#D32F23] rounded-full" />
              <span>Thai</span>
              <span className="w-1.5 h-1.5 bg-[#D32F23] rounded-full" />
              <span>Chinese</span>
              <span className="w-1.5 h-1.5 bg-[#D32F23] rounded-full" />
              <span>Fast Food</span>
              <span className="w-1.5 h-1.5 bg-[#D32F23] rounded-full" />
              <span>Continental</span>
            </div>
          </div>

          <p
            ref={subtitleRef}
            className="mt-14 text-gray-300 text-xl sm:text-2xl max-w-2xl mx-auto leading-loose font-light"
          >
            Where elegance meets warmth. Every sunset, every plate, every detail is designed to elevate ordinary evenings into unforgettable experiences.
          </p>

          <div ref={ctaRef} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/menu"
              className="px-14 py-5 bg-[#D32F23] text-white text-sm font-black uppercase tracking-[0.25em] hover:bg-[#B52419] transition-all duration-300 min-w-[210px] text-center"
            >
              Explore Menu
            </Link>
            <Link
              href="/contact"
              className="px-14 py-5 border border-white/30 text-white text-sm font-black uppercase tracking-[0.25em] hover:border-white hover:bg-white/10 transition-all duration-300 min-w-[210px] text-center"
            >
              Book a Table
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          MARQUEE STRIP — Animated sliding marquee
      ══════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#D32F23] overflow-hidden py-6 sm:py-8 mb-16 sm:mb-20 lg:mb-28">
        <div className="marquee-container relative flex">
          <div className="marquee-track flex items-center gap-12 sm:gap-16 whitespace-nowrap animate-marquee">
            {["Panoramic Views", "✦", "Refined Cuisine", "✦", "Warm Hospitality", "✦", "Rooftop Dining", "✦", "Islamabad Skyline", "✦", "Desi Flavors", "✦", "Thai Delights", "✦", "Chinese Specialties", "✦", "Fast Food", "✦", "Continental Elegance", "✦"].map((text, i) => (
              <span key={i} className="text-white text-base sm:text-lg md:text-xl font-black uppercase tracking-widest shrink-0">
                {text}
              </span>
            ))}
          </div>
          <div className="marquee-track flex items-center gap-12 sm:gap-16 whitespace-nowrap animate-marquee" aria-hidden="true">
            {["Panoramic Views", "✦", "Refined Cuisine", "✦", "Warm Hospitality", "✦", "Rooftop Dining", "✦", "Islamabad Skyline", "✦", "Desi Flavors", "✦", "Thai Delights", "✦", "Chinese Specialties", "✦", "Fast Food", "✦", "Continental Elegance", "✦"].map((text, i) => (
              <span key={`dup-${i}`} className="text-white text-base sm:text-lg md:text-xl font-black uppercase tracking-widest shrink-0">
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          ABOUT — Stacked on mobile, side-by-side on desktop.
          Text panel is 100% solid bg with rounded image.
      ══════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#0d0d0d] pt-20 sm:pt-28 lg:pt-36 pb-24 sm:pb-32 lg:pb-40">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 xl:gap-28">

            {/* Image — left side with rounded corners */}
            <div className="relative w-full lg:w-1/2 shrink-0">
              <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-3xl lg:rounded-[2.5rem]">
                <Image
                  src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1280&dpr=1"
                  alt="Pakistani Cuisine"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            {/* Text — right side with proper spacing */}
            <div className="w-full lg:w-1/2 shrink-0">
              <div className="max-w-xl">
            <AnimatedSection animation="fadeLeft">
              <span className="text-[#D32F23] uppercase tracking-[0.4em] text-xs font-black">
                About Mastara
              </span>

              <h2 className="mt-8 sm:mt-10 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                Elevated<br />Dining Above<br />The Skyline
              </h2>

              <div className="mt-10 sm:mt-12 w-16 h-1 bg-[#D32F23]" />

              <p className="mt-10 sm:mt-14 text-gray-400 text-base sm:text-lg leading-relaxed sm:leading-[2]">
                Mastara is a rooftop restaurant in Islamabad crafted for those who appreciate
                exceptional dining with unforgettable views. We combine refined cuisine, warm
                hospitality, and a sophisticated ambiance.
              </p>

              <p className="mt-6 sm:mt-8 text-gray-500 text-sm sm:text-base leading-relaxed sm:leading-[2]">
                From intimate dinners to celebratory gatherings, every detail is thoughtfully
                curated to ensure comfort, elegance, and lasting memories for every guest.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-4 mt-12 sm:mt-16 group"
              >
                <span className="text-white text-sm font-black uppercase tracking-[0.2em] border-b border-white/20 group-hover:border-[#D32F23] group-hover:text-[#D32F23] transition-all duration-300 pb-1.5">
                  Our Story
                </span>
                <svg className="w-5 h-5 text-white group-hover:translate-x-2 group-hover:text-[#D32F23] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          CUISINES — 4 tall cards on solid black
      ══════════════════════════════════════════════════════ */}
      <section className="w-full bg-black py-48 md:py-56">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-24">

          <AnimatedSection animation="fadeUp" className="text-center mb-32 md:mb-40">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
              Our Specialties
            </span>
            <h2 className="mt-10 text-6xl lg:text-8xl font-black text-white leading-none">
              Explore<br />Our Menu
            </h2>
            <div className="mt-12 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: "Desi", tagline: "Authentic Pakistani Flavors", desc: "Karahi, Biryani, Nihari, Haleem — the heart of Pakistan on a plate.", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" },
              { name: "Thai", tagline: "Spicy Thai Delights", desc: "Pad Thai, Tom Yum, Green Curry — authentic Thai flavors with a kick.", image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" },
              { name: "Chinese", tagline: "Classic Chinese Specialties", desc: "Chowmein, Manchurian, Fried Rice — timeless Asian favorites.", image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" },
              { name: "Fast Food", tagline: "Tempting Favorites", desc: "Burgers, Fries, Wings — quick bites crafted with quality.", image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" },
              { name: "Continental", tagline: "Elegant Western Cuisine", desc: "Steaks, Pasta, Grills — refined dishes with sophistication.", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" },
            ].map((item, i) => (
              <AnimatedSection key={item.name} animation="scaleUp" delay={i * 0.08}>
                <Link href="/menu" className="group block relative overflow-hidden h-[480px] sm:h-[520px] lg:h-[560px]">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  {/* Strong gradient so text is always readable */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent" />
                  {/* Fixed-height text area at bottom — generous padding for clear separation */}
                  <div className="absolute inset-x-0 bottom-0 px-8 sm:px-12 pb-10 sm:pb-14 pt-28 sm:pt-32 bg-linear-to-t from-black via-black/95 to-transparent">
                    <p className="text-[#D32F23] uppercase tracking-[0.25em] text-xs font-black mb-4 sm:mb-5">
                      {item.tagline}
                    </p>
                    <h3 className="text-4xl sm:text-5xl font-black text-white mb-5 sm:mb-6">{item.name}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 mb-6 sm:mb-8">
                      {item.desc}
                    </p>
                    <div className="w-0 group-hover:w-16 h-px bg-[#D32F23] transition-all duration-500" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          STATS — Full-screen bg image
      ══════════════════════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[768px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Restaurant Ambiance"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/78" />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-24 md:mb-32">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">By the Numbers</span>
            <h2 className="mt-8 text-5xl lg:text-6xl font-black text-white">
              Mastara at a Glance
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 text-center">
            {[
              { number: "15+", label: "Years of Service" },
              { number: "50+", label: "Expert Chefs" },
              { number: "200+", label: "Signature Dishes" },
              { number: "10K+", label: "Happy Guests" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} animation="fadeUp" delay={i * 0.12}>
                <div className="text-[70px] sm:text-[80px] lg:text-[100px] font-black text-[#D32F23] leading-none">
                  {s.number}
                </div>
                <div className="mt-8 w-10 h-px bg-[#D32F23]/50 mx-auto mb-5" />
                <div className="text-white uppercase tracking-[0.2em] text-sm font-medium">
                  {s.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          EXPERIENCE — Image RIGHT, text LEFT (reversed)
      ══════════════════════════════════════════════════════ */}
      <section className="w-full flex flex-col-reverse lg:flex-row min-h-screen">

        {/* Text — left half, fully opaque solid bg with clear separation */}
        <div className="w-full lg:w-1/2 shrink-0 bg-black flex items-center justify-end py-16 sm:py-24 lg:py-0">
          <div className="px-8 sm:px-12 md:px-16 lg:px-14 xl:px-20 py-8 sm:py-10 lg:py-20 w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
            <AnimatedSection animation="fadeRight">
              <span className="text-[#D32F23] uppercase tracking-[0.4em] text-xs font-black">
                The Experience
              </span>

              <h2 className="mt-8 sm:mt-10 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                More Than<br />Just a Meal
              </h2>

              <div className="mt-10 sm:mt-12 w-16 h-1 bg-[#D32F23]" />

              <p className="mt-10 sm:mt-14 text-gray-400 text-base sm:text-lg leading-relaxed sm:leading-[2]">
                At Mastara, we&apos;ve crafted an atmosphere where families gather,
                friends reconnect, and memories are made above the skyline of
                Islamabad.
              </p>

              <div className="mt-12 sm:mt-16 space-y-8 sm:space-y-12">
                {[
                  { icon: "✦", title: "Rooftop Terrace", desc: "Open-air dining with a panoramic Islamabad view" },
                  { icon: "✦", title: "Live BBQ Station", desc: "Watch your tikkas grilled to perfection" },
                  { icon: "✦", title: "100% Halal", desc: "Certified and guaranteed, every single time" },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-5 sm:gap-7">
                    <span className="text-[#D32F23] text-lg sm:text-xl mt-0.5 shrink-0">{f.icon}</span>
                    <div>
                      <div className="text-white font-black text-base sm:text-lg">{f.title}</div>
                      <div className="text-gray-500 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-block mt-14 sm:mt-20 px-10 sm:px-12 py-4 sm:py-5 bg-[#D32F23] text-white font-black text-sm uppercase tracking-[0.25em] hover:bg-[#B52419] transition-all duration-300"
              >
                Reserve a Table
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* Image — right half */}
        <div className="relative w-full lg:w-1/2 h-[60vh] sm:h-[70vh] lg:h-auto shrink-0">
          <Image
            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1280&dpr=1"
            alt="Dining Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#080808] py-56 md:py-64">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-24">

          <AnimatedSection animation="fadeUp" className="text-center mb-36 md:mb-44">
            <span className="text-[#D32F23] uppercase tracking-[0.4em] text-xs font-black">
              Testimonials
            </span>
            <h2 className="mt-10 text-6xl lg:text-8xl font-black text-white leading-none">
              What Our<br />Guests Say
            </h2>
            <div className="mt-12 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { quote: "Best karahi in the whole of Islamabad. Period.", author: "Ayesha Siddiqui", role: "Food Blogger", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200" },
              { quote: "The ambiance, the food, the service — all absolutely world class.", author: "Omar Farooq", role: "Regular Guest", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200" },
              { quote: "Mastara made our anniversary unforgettable. Will be back!", author: "Zara & Ali Malik", role: "Anniversary Dinner", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200" },
            ].map((t, i) => (
              <AnimatedSection key={t.author} animation="fadeUp" delay={i * 0.15}>
                <div className="flex flex-col items-center text-center bg-[#0d0d0d] border border-white/8 p-8 sm:p-12 lg:p-14 gap-8 sm:gap-10 h-full">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#D32F23]/50 shrink-0 mt-2">
                    <Image src={t.image} alt={t.author} width={112} height={112} className="object-cover w-full h-full" />
                  </div>

                  <div className="flex gap-2 mt-2">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 sm:w-5 sm:h-5 text-[#D32F23]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-white font-light leading-loose italic flex-1 px-2">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="w-full pt-8 sm:pt-10 border-t border-white/8 mt-auto">
                    <div className="text-white font-black text-sm sm:text-base">{t.author}</div>
                    <div className="text-[#D32F23] text-xs uppercase tracking-[0.2em] mt-2 sm:mt-3">{t.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          GALLERY PREVIEW — Masonry grid
      ══════════════════════════════════════════════════════ */}
      <section className="w-full bg-black py-48 md:py-56">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-24">

          <AnimatedSection animation="fadeUp" className="text-center mb-32 md:mb-40">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
              Gallery
            </span>
            <h2 className="mt-10 text-6xl lg:text-8xl font-black text-white leading-none">
              See Our<br />World
            </h2>
            <div className="mt-12 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <AnimatedSection animation="scaleUp" delay={0.0} className="col-span-12 md:col-span-7 relative h-[480px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" alt="Gallery 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
            </AnimatedSection>
            <AnimatedSection animation="scaleUp" delay={0.1} className="col-span-12 md:col-span-5 relative h-[480px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1" alt="Gallery 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
            </AnimatedSection>

            <AnimatedSection animation="scaleUp" delay={0.12} className="col-span-12 md:col-span-4 relative h-[400px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1" alt="Gallery 3" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
            </AnimatedSection>
            <AnimatedSection animation="scaleUp" delay={0.18} className="col-span-12 md:col-span-4 relative h-[400px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1" alt="Gallery 4" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
            </AnimatedSection>
            <AnimatedSection animation="scaleUp" delay={0.24} className="col-span-12 md:col-span-4 relative h-[400px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1" alt="Gallery 5" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
            </AnimatedSection>

            <AnimatedSection animation="scaleUp" delay={0.1} className="col-span-12 md:col-span-5 relative h-[440px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" alt="Gallery 6" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
            </AnimatedSection>
            <AnimatedSection animation="scaleUp" delay={0.18} className="col-span-12 md:col-span-7 relative h-[440px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" alt="Gallery 7" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" className="text-center mt-24 md:mt-28">
            <Link
              href="/gallery"
              className="inline-block px-16 py-6 border border-white/20 text-white text-sm font-black uppercase tracking-[0.25em] hover:border-[#D32F23] hover:text-[#D32F23] transition-all duration-300"
            >
              View Full Gallery
            </Link>
          </AnimatedSection>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          FINAL CTA — Full viewport
      ══════════════════════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[850px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Final CTA"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-[#D32F23]/35" />
        </div>

        <div className="relative z-10 text-center px-8 w-full max-w-5xl mx-auto">
          <AnimatedSection animation="scaleUp">
            <p className="text-white/60 uppercase tracking-[0.45em] text-xs font-bold mb-14">
              Reservations Open
            </p>
            <h2 className="text-[70px] sm:text-[100px] md:text-[130px] font-black text-white leading-none mb-20">
              Book Your<br />Table Now
            </h2>
            <Link
              href="/contact"
              className="inline-block px-20 py-7 bg-[#D32F23] text-white text-lg font-black uppercase tracking-[0.25em] hover:bg-[#B52419] transition-all duration-300"
            >
              Reserve Tonight
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </main>
  );
}
