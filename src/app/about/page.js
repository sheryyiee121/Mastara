"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "@/components/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    name: "Usman Malik",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "Food is not just sustenance — it's a story of who we are.",
    bio: "With a vision to bring authentic Pakistani flavors to the world, Usman founded Mastara in 2010. His passion for exceptional food has shaped Mastara into Islamabad's finest rooftop dining destination.",
  },
  {
    name: "Sana Malik",
    role: "Co-Founder & Creative Director",
    image: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "Every detail matters when crafting an unforgettable experience.",
    bio: "Sana's eye for design transformed Mastara into a visually stunning space. Her background in hospitality ensures every guest feels not just welcomed — but celebrated.",
  },
];

const teamMembers = [
  {
    name: "Chef Tariq",
    role: "Head of Desi Cuisine",
    image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "30 years mastering traditional Pakistani recipes",
  },
  {
    name: "Chef Li Wei",
    role: "Head of Chinese Cuisine",
    image: "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Specializing in Indo-Pak Chinese fusion",
  },
  {
    name: "Chef Marco",
    role: "Continental Specialist",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "European-trained with a local twist",
  },
  {
    name: "Chef Bilal",
    role: "BBQ & Grill Master",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Live grill station expert since 2015",
  },
  {
    name: "Ayesha Rauf",
    role: "Pastry Chef",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Award-winning desserts and artistic presentations",
  },
  {
    name: "Omar Shahid",
    role: "Restaurant Manager",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Ensuring world-class hospitality every day",
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

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

  return (
    <main ref={heroRef} className="overflow-hidden bg-black">

      {/* ================================================================
          HERO — Full screen
      ================================================================ */}
      <section className="relative w-full h-screen min-h-[768px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="About Mastara"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <div ref={titleRef}>
            <p className="text-[#D32F23] uppercase tracking-[0.5em] text-sm font-medium mb-8">
              Our Story
            </p>
            <h1 className="text-[70px] sm:text-[100px] md:text-[140px] font-black text-white leading-none font-display uppercase tracking-wide">
              About Us
            </h1>
            <p className="mt-10 text-gray-300 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Mastara was created to redefine rooftop dining in Islamabad. Blending panoramic skyline views with refined flavors.
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
          VISION & MISSION — Full-screen split image section
      ================================================================ */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2 h-[70vh] lg:h-auto">
          <Image
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1280&dpr=1"
            alt="Our Vision"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 lg:p-16 xl:p-20">
            <div className="max-w-md">
              <span className="text-[#D32F23] uppercase tracking-[0.3em] text-xs font-black">
                Est. 2010
              </span>
              <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl font-black text-white leading-tight">
                Islamabad&apos;s<br />Rooftop Table
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#0a0a0a] flex items-center">
          <div className="px-8 sm:px-12 lg:px-20 xl:px-28 py-20 sm:py-28 lg:py-16">
            <AnimatedSection animation="fadeLeft">
              <div className="space-y-24">
                <div>
                  <div className="w-16 h-16 bg-[#D32F23] flex items-center justify-center mb-12">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 sm:mb-7">Our Vision</h3>
                  <div className="w-16 h-1 bg-[#D32F23] mb-8 sm:mb-10" />
                  <p className="text-gray-400 text-lg sm:text-xl leading-relaxed sm:leading-[1.9]">
                    A space where elegance meets warmth. Every sunset, every plate, and every detail 
                    is designed to elevate ordinary evenings into unforgettable experiences.
                  </p>
                </div>

                <div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white flex items-center justify-center mb-10 sm:mb-12">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#D32F23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 sm:mb-7">Our Mission</h3>
                  <div className="w-16 h-1 bg-white mb-8 sm:mb-10" />
                  <p className="text-gray-400 text-lg sm:text-xl leading-relaxed sm:leading-[1.9]">
                    To combine refined cuisine, warm hospitality, and a sophisticated ambiance to create 
                    elevated experiences above the city skyline for every guest who walks through our doors.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* ================================================================
          FOUNDERS — Full-width dark section with big cards
      ================================================================ */}
      <section className="w-full bg-black py-48 md:py-56">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-32 md:mb-40">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
              The Visionaries
            </span>
            <h2 className="mt-10 text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
              Meet the<br />Founders
            </h2>
            <div className="mt-12 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {founders.map((founder, index) => (
              <AnimatedSection key={founder.name} animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"}>
                <div className="group relative overflow-hidden border border-white/10 hover:border-[#D32F23]/40 transition-all duration-500 flex flex-col md:flex-row">
                  <div className="relative w-full md:w-72 lg:w-80 h-72 sm:h-80 md:h-auto shrink-0">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-transparent via-transparent to-black/70" />
                  </div>
                  <div className="p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#D32F23]/40 mb-6 sm:mb-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-300 italic text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10">
                      &ldquo;{founder.quote}&rdquo;
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">{founder.name}</h3>
                    <p className="text-[#D32F23] font-bold uppercase tracking-wider text-xs sm:text-sm mt-2 sm:mt-3 mb-5 sm:mb-7">{founder.role}</p>
                    <p className="text-gray-500 leading-[1.85] text-sm sm:text-base">{founder.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          MILESTONES — Full-screen background with timeline
      ================================================================ */}
      <section className="relative w-full py-48 md:py-56">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Milestones"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-32 md:mb-40">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
              Our Journey
            </span>
            <h2 className="mt-10 text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
              Milestones
            </h2>
            <div className="mt-12 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#D32F23]/50 to-transparent hidden lg:block" />

            {[
              { year: "2010", title: "The Beginning", desc: "Mastara opens its rooftop doors in I-8 Markaz, Islamabad with a vision to redefine Pakistani dining." },
              { year: "2013", title: "First Award", desc: "Received 'Best New Restaurant' from Islamabad Culinary Excellence Awards." },
              { year: "2016", title: "Expansion", desc: "Expanded our space and introduced our signature BBQ & Live Grill station." },
              { year: "2019", title: "Recognition", desc: "Featured in Pakistan's 'Top 50 Restaurants' by leading food publications." },
              { year: "2022", title: "Modernization", desc: "Complete renovation with state-of-the-art kitchen and private dining rooms." },
              { year: "2025", title: "New Chapter", desc: "Launched digital presence and expanded our culinary team to over 50 experts." },
            ].map((item, index) => (
              <AnimatedSection
                key={item.year}
                animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                delay={0.1}
              >
                <div className={`relative flex flex-col lg:flex-row items-center gap-10 mb-20 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-24" : "lg:text-left lg:pl-24"}`}>
                    <div className="bg-black/60 backdrop-blur-sm border border-white/10 hover:border-[#D32F23]/50 transition-colors duration-300 p-10 sm:p-12">
                      <span className="text-6xl font-black text-[#D32F23]">{item.year}</span>
                      <h3 className="text-2xl font-black text-white mt-5 mb-5">{item.title}</h3>
                      <p className="text-gray-400 text-lg leading-[1.85]">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#D32F23] rounded-full border-4 border-black hidden lg:block z-10" />
                  <div className="w-full lg:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          TEAM — Dark section with big portrait cards
      ================================================================ */}
      <section className="w-full bg-[#080808] py-48 md:py-56">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-32 md:mb-40">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
              The Experts
            </span>
            <h2 className="mt-10 text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
              Our Team
            </h2>
            <div className="mt-12 w-24 h-1 bg-[#D32F23] mx-auto" />
            <p className="mt-12 text-gray-500 text-xl max-w-2xl mx-auto leading-[1.85]">
              The passionate professionals who bring their expertise to your plate every single day.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-6">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} animation="scaleUp" delay={index * 0.08}>
                <div className="group relative overflow-hidden">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-95" />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 pb-5 sm:pb-6 lg:pb-8">
                      <h3 className="text-sm sm:text-base font-black text-white">{member.name}</h3>
                      <p className="text-[#D32F23] text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1.5 sm:mt-2">{member.role}</p>
                      <p className="text-gray-400 text-[10px] sm:text-xs mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 leading-relaxed line-clamp-2">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          VALUES — Full-screen dark with image bg
      ================================================================ */}
      <section className="relative w-full py-48 md:py-56">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Our Values"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/88" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-32 md:mb-40">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
              What Drives Us
            </span>
            <h2 className="mt-10 text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
              Our Values
            </h2>
            <div className="mt-12 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: "♥",
                title: "Passion",
                description: "Every dish is crafted with love and dedication to culinary excellence.",
              },
              {
                icon: "✦",
                title: "Quality",
                description: "Only the finest halal-certified ingredients make it to our kitchen.",
              },
              {
                icon: "◎",
                title: "Community",
                description: "Building connections through shared meals and Pakistani hospitality.",
              },
              {
                icon: "⟡",
                title: "Innovation",
                description: "Constantly evolving while deeply respecting culinary traditions.",
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} animation="fadeUp" delay={index * 0.1}>
                <div className="group text-center p-10 sm:p-12 lg:p-14 border border-white/10 hover:border-[#D32F23]/50 hover:bg-[#D32F23]/5 transition-all duration-500">
                  <div className="text-5xl text-[#D32F23] mb-10 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-7">{value.title}</h3>
                  <p className="text-gray-500 leading-[1.85] text-lg">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          FINAL CTA
      ================================================================ */}
      <section className="w-full bg-[#D32F23] py-48 md:py-56">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-24 text-center">
          <AnimatedSection animation="scaleUp">
            <h2 className="text-6xl lg:text-8xl xl:text-[120px] font-black text-white leading-none mb-20">
              Come Dine<br />With Us
            </h2>
            <a
              href="/contact"
              className="inline-block px-20 py-7 bg-black text-white text-xl font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
            >
              Book a Table
            </a>
          </AnimatedSection>
        </div>
      </section>

    </main>
  );
}
