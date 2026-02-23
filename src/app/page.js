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

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 120 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power4.out" }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="overflow-hidden bg-black">

      {/* ================================================================
          HERO — Full 100vh with big bold text
      ================================================================ */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div ref={titleRef}>
            <p className="text-[#D32F23] uppercase tracking-[0.5em] text-base font-medium mb-8">
              Rooftop Fine Dining · I-8 Markaz, Islamabad
            </p>
            <h1 className="text-[100px] sm:text-[140px] md:text-[180px] font-black italic text-white leading-none">
              Mastara
            </h1>
            <div className="flex items-center justify-center gap-6 mt-6 text-white/60 text-xl font-light tracking-widest uppercase">
              <span>Desi</span>
              <span className="w-2 h-2 bg-[#D32F23] rounded-full inline-block" />
              <span>Chinese</span>
              <span className="w-2 h-2 bg-[#D32F23] rounded-full inline-block" />
              <span>Continental</span>
              <span className="w-2 h-2 bg-[#D32F23] rounded-full inline-block" />
              <span>BBQ</span>
            </div>
          </div>

          <p
            ref={subtitleRef}
            className="mt-12 text-gray-300 text-2xl max-w-2xl mx-auto leading-relaxed font-light"
          >
            Where every plate tells a story of Pakistan&apos;s rich culinary heritage
          </p>

          <div ref={ctaRef} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              href="/menu"
              className="px-16 py-6 bg-[#D32F23] text-white text-base font-bold uppercase tracking-[0.2em] hover:bg-[#B52419] transition-all duration-300 min-w-[220px]"
            >
              Explore Menu
            </Link>
            <Link
              href="/contact"
              className="px-16 py-6 border border-white/40 text-white text-base font-bold uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-all duration-300 min-w-[220px]"
            >
              Book a Table
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>


      {/* ================================================================
          INTRO TEXT STRIP
      ================================================================ */}
      <section className="w-full bg-[#D32F23] py-12 overflow-hidden">
        <div className="flex items-center gap-16 animate-none">
          <div className="flex items-center gap-16 whitespace-nowrap px-16 py-2">
            {["Authentic Flavors", "·", "Crafted with Love", "·", "Islamabad's Finest", "·", "Rooftop Dining", "·", "100% Halal", "·", "Authentic Flavors", "·", "Crafted with Love", "·", "Islamabad's Finest", "·", "Rooftop Dining", "·", "100% Halal"].map((text, i) => (
              <span key={i} className="text-white text-xl font-semibold uppercase tracking-widest">
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          WELCOME / ABOUT — Full screen image left, text right
      ================================================================ */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto">
          <Image
            src="https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1280&dpr=1"
            alt="Our Kitchen"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="w-full lg:w-1/2 bg-[#0a0a0a] flex items-center">
          <div className="px-16 lg:px-24 xl:px-32 py-24 lg:py-0 max-w-2xl">
            <AnimatedSection animation="fadeLeft">
              <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-bold">
                About Mastara
              </span>

              <h2 className="mt-8 text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                A Passion<br />for Pakistani<br />Cuisine
              </h2>

              <div className="mt-10 w-20 h-1 bg-[#D32F23]" />

              <p className="mt-10 text-gray-400 text-xl leading-loose">
                Founded atop I-8 Markaz, Islamabad, Mastara has been serving soulful,
                authentic Pakistani food for over a decade. Our chefs bring generations
                of culinary tradition to every dish.
              </p>

              <p className="mt-6 text-gray-500 text-lg leading-loose">
                From rich, slow-cooked desi curries to crispy Indo-Chinese stir-fries
                and refined Continental dishes — we celebrate the full spectrum of flavors.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-4 mt-14 text-white text-lg font-semibold group"
              >
                <span className="border-b border-white/30 group-hover:border-[#D32F23] group-hover:text-[#D32F23] transition-all duration-300 pb-1">
                  Our Story
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-[#D32F23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* ================================================================
          CUISINE CATEGORIES — 4 Big Full-Width Cards
      ================================================================ */}
      <section className="w-full bg-black py-40">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-28">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-bold">
              Our Specialties
            </span>
            <h2 className="mt-8 text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
              Explore<br />Our Menu
            </h2>
            <div className="mt-10 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Desi",
                tagline: "Authentic Pakistani Flavors",
                desc: "Karahi, Biryani, Nihari, Haleem — the heart of Pakistan on a plate.",
                image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1",
                href: "/menu",
              },
              {
                name: "Chinese",
                tagline: "Indo-Pak Chinese Favorites",
                desc: "Chowmein, Manchurian, Fried Rice — our spin on Asian classics.",
                image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1",
                href: "/menu",
              },
              {
                name: "Continental",
                tagline: "Western Classics, Local Soul",
                desc: "Steaks, Pasta, Burgers — elevated with our signature touch.",
                image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1",
                href: "/menu",
              },
              {
                name: "BBQ & Grills",
                tagline: "Smoky Live Grill Station",
                desc: "Tikka, Seekh, Malai Boti — grilled to perfection.",
                image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1",
                href: "/menu",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.name} animation="scaleUp" delay={i * 0.08}>
                <Link href={item.href} className="group block relative overflow-hidden h-[500px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-12">
                    <p className="text-[#D32F23] uppercase tracking-widest text-xs font-bold mb-3">
                      {item.tagline}
                    </p>
                    <h3 className="text-5xl font-black text-white mb-4">{item.name}</h3>
                    <p className="text-gray-300 text-base max-w-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {item.desc}
                    </p>
                    <div className="w-0 group-hover:w-20 h-0.5 bg-[#D32F23] transition-all duration-500" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          STATS — Full 100vh image with numbers
      ================================================================ */}
      <section className="relative w-full h-screen min-h-[768px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Restaurant Ambiance"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-black text-white">
              Mastara by the Numbers
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center">
            {[
              { number: "15+", label: "Years of Service" },
              { number: "50+", label: "Expert Chefs" },
              { number: "200+", label: "Signature Dishes" },
              { number: "10K+", label: "Happy Guests" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} animation="fadeUp" delay={i * 0.12}>
                <div className="text-[80px] lg:text-[110px] font-black text-[#D32F23] leading-none">
                  {s.number}
                </div>
                <div className="mt-6 text-white uppercase tracking-[0.25em] text-sm font-medium">
                  {s.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          EXPERIENCE SECTION — Text centered, full bg image
      ================================================================ */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row-reverse">
        <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto">
          <Image
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1280&dpr=1"
            alt="Dining Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="w-full lg:w-1/2 bg-black flex items-center">
          <div className="px-16 lg:px-24 xl:px-32 py-24 lg:py-0 max-w-2xl">
            <AnimatedSection animation="fadeRight">
              <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-bold">
                The Experience
              </span>

              <h2 className="mt-8 text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                More Than<br />Just a Meal
              </h2>

              <div className="mt-10 w-20 h-1 bg-[#D32F23]" />

              <p className="mt-10 text-gray-400 text-xl leading-loose">
                At Mastara, we&apos;ve crafted an atmosphere where families gather,
                friends reconnect, and memories are made. Our warm interiors blend
                modern elegance with traditional Pakistani hospitality.
              </p>

              <div className="mt-14 space-y-8">
                {[
                  { icon: "✦", title: "Private Dining", desc: "Exclusive rooms for special occasions" },
                  { icon: "✦", title: "Live BBQ Station", desc: "Watch your tikkas grilled to perfection" },
                  { icon: "✦", title: "100% Halal", desc: "Certified and guaranteed, every time" },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-6">
                    <span className="text-[#D32F23] text-xl mt-1">{f.icon}</span>
                    <div>
                      <div className="text-white font-bold text-lg">{f.title}</div>
                      <div className="text-gray-500 text-base mt-1">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-block mt-14 px-12 py-5 bg-[#D32F23] text-white font-bold uppercase tracking-[0.2em] hover:bg-[#B52419] transition-all duration-300"
              >
                Reserve a Table
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* ================================================================
          TESTIMONIALS — Spacious dark section
      ================================================================ */}
      <section className="w-full bg-[#080808] py-48">
        <div className="max-w-[1500px] mx-auto px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-28">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-bold">
              Testimonials
            </span>
            <h2 className="mt-8 text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
              What Our<br />Guests Say
            </h2>
            <div className="mt-10 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              {
                quote: "Best karahi in the whole of Islamabad. Period.",
                author: "Ayesha Siddiqui",
                role: "Food Blogger",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
              },
              {
                quote: "The ambiance, the food, the service — all absolutely world class.",
                author: "Omar Farooq",
                role: "Regular Guest",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
              },
              {
                quote: "Mastara made our anniversary unforgettable. Will be back!",
                author: "Zara & Ali Malik",
                role: "Anniversary Dinner",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
              },
            ].map((t, i) => (
              <AnimatedSection key={t.author} animation="fadeUp" delay={i * 0.15}>
                <div className="flex flex-col items-center text-center gap-10 py-8">
                  <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#D32F23]/40 flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.author}
                      width={144}
                      height={144}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex gap-2">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-6 h-6 text-[#D32F23]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div>
                    <div className="text-white font-bold text-lg">{t.author}</div>
                    <div className="text-[#D32F23] text-sm uppercase tracking-widest mt-2">{t.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          GALLERY PREVIEW — Masonry style grid, full bleed
      ================================================================ */}
      <section className="w-full bg-black py-40">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-28">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-bold">
              Gallery
            </span>
            <h2 className="mt-8 text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
              See Our<br />World
            </h2>
            <div className="mt-10 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          {/* Big masonry-ish grid */}
          <div className="grid grid-cols-12 gap-5">
            {/* Row 1 */}
            <AnimatedSection animation="scaleUp" delay={0} className="col-span-12 md:col-span-7 relative h-[500px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" alt="Gallery 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
            </AnimatedSection>
            <AnimatedSection animation="scaleUp" delay={0.1} className="col-span-12 md:col-span-5 relative h-[500px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1" alt="Gallery 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
            </AnimatedSection>

            {/* Row 2 */}
            <AnimatedSection animation="scaleUp" delay={0.15} className="col-span-12 md:col-span-4 relative h-[420px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1" alt="Gallery 3" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
            </AnimatedSection>
            <AnimatedSection animation="scaleUp" delay={0.2} className="col-span-12 md:col-span-4 relative h-[420px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1" alt="Gallery 4" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
            </AnimatedSection>
            <AnimatedSection animation="scaleUp" delay={0.25} className="col-span-12 md:col-span-4 relative h-[420px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1" alt="Gallery 5" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
            </AnimatedSection>

            {/* Row 3 */}
            <AnimatedSection animation="scaleUp" delay={0.1} className="col-span-12 md:col-span-5 relative h-[450px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" alt="Gallery 6" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
            </AnimatedSection>
            <AnimatedSection animation="scaleUp" delay={0.18} className="col-span-12 md:col-span-7 relative h-[450px] overflow-hidden group">
              <Image src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" alt="Gallery 7" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" className="text-center mt-20">
            <Link
              href="/gallery"
              className="inline-block px-16 py-6 border border-white/20 text-white text-base font-bold uppercase tracking-[0.2em] hover:border-[#D32F23] hover:text-[#D32F23] transition-all duration-300"
            >
              View Full Gallery
            </Link>
          </AnimatedSection>
        </div>
      </section>


      {/* ================================================================
          FINAL CTA — Full screen bold
      ================================================================ */}
      <section className="relative w-full h-screen min-h-[768px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Final CTA"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[#D32F23]/30" />
        </div>

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <AnimatedSection animation="scaleUp">
            <p className="text-white/70 uppercase tracking-[0.4em] text-sm font-medium mb-10">
              Reservations Open
            </p>
            <h2 className="text-[80px] sm:text-[110px] md:text-[140px] font-black text-white leading-none mb-14">
              Book Your<br />Table Now
            </h2>
            <Link
              href="/contact"
              className="inline-block px-20 py-8 bg-[#D32F23] text-white text-xl font-bold uppercase tracking-[0.2em] hover:bg-[#B52419] transition-all duration-300"
            >
              Reserve Tonight
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </main>
  );
}
