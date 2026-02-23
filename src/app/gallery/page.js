"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "@/components/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

const tourSpaces = [
  {
    src: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1",
    title: "Main Dining Hall",
    description: "Elegant seating for 200 guests in a grand ambiance",
  },
  {
    src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1",
    title: "Private Dining",
    description: "Intimate spaces perfect for special celebrations",
  },
  {
    src: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1",
    title: "Live BBQ Station",
    description: "Watch our chefs grill tikkas to perfection",
  },
  {
    src: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1",
    title: "Outdoor Terrace",
    description: "Al-fresco dining under the Lahore sky",
  },
];

const reels = [
  { thumbnail: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Karahi Special", views: "125K" },
  { thumbnail: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Chef's Stir Fry", views: "89K" },
  { thumbnail: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Fresh Ingredients", views: "156K" },
  { thumbnail: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600", title: "BBQ Night", views: "203K" },
  { thumbnail: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Plating Art", views: "178K" },
  { thumbnail: "https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Behind Scenes", views: "92K" },
];

const galleryImages = [
  { src: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=900", category: "food" },
  { src: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=900", category: "food" },
  { src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=900", category: "food" },
  { src: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=900", category: "bbq" },
  { src: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=900", category: "food" },
  { src: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=900", category: "interior" },
  { src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=900", category: "interior" },
  { src: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=900", category: "interior" },
  { src: "https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=900", category: "food" },
  { src: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=900", category: "food" },
  { src: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=900", category: "interior" },
  { src: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=900", category: "bbq" },
];

export default function GalleryPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power4.out", delay: 0.3 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const filteredImages = activeFilter === "all" ? galleryImages : galleryImages.filter((i) => i.category === activeFilter);

  return (
    <main ref={heroRef} className="overflow-hidden bg-black">

      {/* ================================================================
          HERO
      ================================================================ */}
      <section className="relative w-full h-screen min-h-[768px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Gallery Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <div ref={titleRef}>
            <p className="text-[#D32F23] uppercase tracking-[0.5em] text-sm font-medium mb-8">
              Visual Experience
            </p>
            <h1 className="text-[80px] sm:text-[120px] md:text-[160px] font-black text-white leading-none">
              Gallery
            </h1>
            <p className="mt-10 text-gray-300 text-2xl max-w-2xl mx-auto leading-relaxed font-light">
              Explore Mastara through curated moments of food, ambiance, and life
            </p>
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
          RESTAURANT TOUR — Big 2x2 grid with tall cards
      ================================================================ */}
      <section className="w-full bg-black py-40">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-28">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
              Explore Our Space
            </span>
            <h2 className="mt-8 text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
              Restaurant<br />Tour
            </h2>
            <div className="mt-10 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourSpaces.map((space, index) => (
              <AnimatedSection key={space.title} animation="scaleUp" delay={index * 0.1}>
                <div
                  className="group relative overflow-hidden cursor-pointer h-[500px]"
                  onClick={() => setLightboxImage(space.src)}
                >
                  <Image
                    src={space.src}
                    alt={space.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-12">
                    <h3 className="text-3xl font-black text-white mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {space.title}
                    </h3>
                    <p className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {space.description}
                    </p>
                    <div className="mt-6 w-0 group-hover:w-20 h-0.5 bg-[#D32F23] transition-all duration-500" />
                  </div>
                  <div className="absolute top-6 right-6 w-14 h-14 bg-[#D32F23] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          AMBIANCE — Full-screen image section with masonry grid
      ================================================================ */}
      <section className="relative w-full py-40">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Ambiance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/88" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-28">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
              The Atmosphere
            </span>
            <h2 className="mt-8 text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
              Ambiance
            </h2>
            <div className="mt-10 w-24 h-1 bg-[#D32F23] mx-auto" />
            <p className="mt-10 text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Immerse yourself in the warm, inviting atmosphere that makes Mastara truly special
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-12 gap-5">
            <AnimatedSection animation="scaleUp" delay={0} className="col-span-12 md:col-span-8 relative h-[520px] overflow-hidden group cursor-pointer" onClick={() => setLightboxImage("https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg")}>
              <Image src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&dpr=1" alt="Ambiance 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#D32F23] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scaleUp" delay={0.1} className="col-span-12 md:col-span-4 relative h-[520px] overflow-hidden group cursor-pointer" onClick={() => setLightboxImage("https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg")}>
              <Image src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1" alt="Ambiance 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#D32F23] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
              </div>
            </AnimatedSection>
            {[
              "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1",
              "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1",
              "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1",
              "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1",
            ].map((src, i) => (
              <AnimatedSection key={i} animation="scaleUp" delay={i * 0.08 + 0.1} className="col-span-6 md:col-span-3 relative h-[320px] overflow-hidden group cursor-pointer" onClick={() => setLightboxImage(src)}>
                <Image src={src} alt={`Ambiance ${i + 3}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#D32F23] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          REELS — Tall portrait cards
      ================================================================ */}
      <section className="w-full bg-[#080808] py-40">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-28">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
              Trending Content
            </span>
            <h2 className="mt-8 text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
              Reels
            </h2>
            <div className="mt-10 w-24 h-1 bg-[#D32F23] mx-auto" />
            <p className="mt-10 text-gray-400 text-xl max-w-2xl mx-auto">
              Our latest culinary creations and behind-the-scenes moments
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {reels.map((reel, index) => (
              <AnimatedSection key={reel.title} animation="fadeUp" delay={index * 0.08}>
                <div className="group relative cursor-pointer">
                  <div className="aspect-[9/16] relative overflow-hidden">
                    <Image
                      src={reel.thumbnail}
                      alt={reel.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#D32F23] transition-all duration-300">
                        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white text-sm font-bold">{reel.title}</p>
                      <p className="text-gray-400 text-xs mt-1">{reel.views} views</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          PHOTO GALLERY — Filterable grid
      ================================================================ */}
      <section className="w-full bg-black py-40">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-20">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
              Captured Moments
            </span>
            <h2 className="mt-8 text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
              Photo<br />Gallery
            </h2>
            <div className="mt-10 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-5 mb-16">
            {["all", "food", "bbq", "interior"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-10 py-4 uppercase tracking-[0.2em] text-sm font-black transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#D32F23] text-white"
                    : "border border-white/20 text-white hover:border-[#D32F23] hover:text-[#D32F23]"
                }`}
              >
                {filter === "all" ? "All Photos" : filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredImages.map((image, index) => (
              <AnimatedSection
                key={`${image.src}-${index}`}
                animation="scaleUp"
                delay={(index % 4) * 0.08}
              >
                <div
                  className="group relative overflow-hidden cursor-pointer aspect-square"
                  onClick={() => setLightboxImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#D32F23] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-8 right-8 w-14 h-14 bg-white/10 flex items-center justify-center hover:bg-[#D32F23] transition-colors duration-300"
            onClick={() => setLightboxImage(null)}
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Lightbox"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
}
