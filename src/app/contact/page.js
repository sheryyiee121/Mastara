"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "@/components/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power4.out", delay: 0.3 }
      );
      if (formRef.current) {
        gsap.fromTo(
          formRef.current.querySelectorAll(".form-field"),
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: formRef.current, start: "top 80%", toggleActions: "play none none none" },
          }
        );
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", guests: "", date: "", time: "", message: "" });
  };

  return (
    <main ref={heroRef} className="overflow-hidden bg-black">

      {/* ================================================================
          HERO — Full screen
      ================================================================ */}
      <section className="relative w-full h-screen min-h-[768px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Contact Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <div ref={titleRef}>
            <p className="text-[#D32F23] uppercase tracking-[0.5em] text-md font-medium mb-8">
              Rooftop · Islamabad
            </p>
            <h1 className="text-[70px] sm:text-[100px] md:text-[140px] font-black text-white leading-none font-display uppercase tracking-wide" style={{ marginTop: "20px" }}>
              Visit Us
            </h1>
            <p className="mt-10 text-gray-300 text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed font-light" style={{ marginTop: "30px" }}>
              Reserve your table for an elevated dining experience above the Islamabad skyline
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
          CONTACT INFO + FORM — Side by side, wide
      ================================================================ */}
      <section className="w-full bg-black py-48 md:py-56">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-24" style={{ marginTop: "50px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-32">

            {/* LEFT — Info */}
            <AnimatedSection animation="fadeLeft">
              <div className="space-y-16" style={{ marginLeft: "30px"}}>
                <div >
                  <span className="text-[#D32F23] uppercase tracking-[0.35em] text-sm font-black text-center">
                    Contact Information
                  </span>
                  <h2 className="mt-8 text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                    Come Find Us
                  </h2>
       
                  <p className="mt-12 text-gray-400 text-xl leading-[1.9]">
                    Enjoy a one-of-a-kind rooftop dining experience in the heart of I-8 Markaz, Islamabad.
                    Whether it&apos;s a family dinner or a special celebration, Mastara is your destination.
                  </p>
                </div>

                <div className="space-y-12" style={{ marginTop: "30px" }}>
                  {[
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      label: "Address",
                      value: "Rooftop, I-8 Markaz\nIslamabad, Pakistan",
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      label: "Phone",
                      value: "+92 51 1234 5678\n+92 300 1234567",
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      label: "Email",
                      value: "info@mastara.pk\nreservations@mastara.pk",
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      label: "Opening Hours",
                      value: "Mon – Thu: 12 PM – 12 AM\nFri – Sun: 12 PM – 1 AM",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-7 sm:gap-8 group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-[#D32F23]/15 flex items-center justify-center shrink-0 text-[#D32F23] group-hover:bg-[#D32F23] group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[#D32F23] text-xs font-black uppercase tracking-wider mb-3">{item.label}</div>
                        <p className="text-gray-300 text-lg leading-[1.8] whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-5 pt-6" style={{ marginTop: "30px" }}>
                  {[
                    { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                    { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                    { label: "WhatsApp", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
                  ].map((s) => (
                    <a key={s.label} href="#" className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#D32F23] hover:border-[#D32F23] hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT — Form */}
            <AnimatedSection animation="fadeRight">
              <div className="bg-[#0a0a0a] border border-white/10 p-6 sm:p-10 lg:p-12 xl:p-16">
               <h3 className="text-center text-2xl sm:text-3xl font-black text-white mb-8 sm:mb-10 lg:mb-12">
                Make a Reservation </h3>
                {submitted ? (
                  <div className="text-center py-24">
                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-10">
                      <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-3xl font-black text-white mb-5">Thank You!</h4>
                    <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                      Your reservation has been submitted. We&apos;ll confirm shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-10 py-5 bg-[#D32F23] text-white font-black uppercase tracking-wider hover:bg-[#B52419] transition-colors duration-300"
                    >
                      New Reservation
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
                    <div className="" style={{marginTop: "30px", marginLeft: "10px", marginRight: "10px"}}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{marginTop: "10px"}}>
                      <div className="form-field">
                        <label className="block text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required
                          className="w-full px-6 py-5 bg-black border border-white/15 text-white text-lg placeholder-gray-600 focus:border-[#D32F23] focus:outline-none transition-colors"
                          placeholder="Your name" />
                      </div>
                      <div className="form-field">
                        <label className="block text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                          className="w-full px-6 py-5 bg-black border border-white/15 text-white text-lg placeholder-gray-600 focus:border-[#D32F23] focus:outline-none transition-colors"
                          placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{marginTop: "10px"}}>
                      <div className="form-field">
                        <label className="block text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Phone *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                          className="w-full px-6 py-5 bg-black border border-white/15 text-white text-lg placeholder-gray-600 focus:border-[#D32F23] focus:outline-none transition-colors"
                          placeholder="+92 300 1234567" />
                      </div>
                      <div className="form-field">
                        <label className="block text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Guests *</label>
                        <select name="guests" value={formData.guests} onChange={handleChange} required
                          className="w-full px-6 py-5 bg-black border border-white/15 text-white text-lg focus:border-[#D32F23] focus:outline-none transition-colors">
                          <option value="">Select guests</option>
                          {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                          ))}
                          <option value="10+">10+ Guests</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{marginTop: "10px"}}>
                      <div className="form-field">
                        <label className="block text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Date *</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required
                          className="w-full px-6 py-5 bg-black border border-white/15 text-white text-lg focus:border-[#D32F23] focus:outline-none transition-colors" />
                      </div>
                      <div className="form-field">
                        <label className="block text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Time *</label>
                        <select name="time" value={formData.time} onChange={handleChange} required
                          className="w-full px-6 py-5 bg-black border border-white/15 text-white text-lg focus:border-[#D32F23] focus:outline-none transition-colors">
                          <option value="">Select time</option>
                          {["12:00 PM","1:00 PM","2:00 PM","3:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM"].map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-field" style={{marginTop: "10px"}}>
                      <label className="block text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Special Requests</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                        className="w-full px-6 py-5 bg-black border border-white/15 text-white text-lg placeholder-gray-600 focus:border-[#D32F23] focus:outline-none transition-colors resize-none"
                        placeholder="Dietary requirements, occasion, seating preference..." />
                    </div>

                    <button type="submit" disabled={isSubmitting}
                      className="w-full py-6 bg-[#D32F23] text-white text-lg font-black uppercase tracking-[0.2em] hover:bg-[#B52419] transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-3" style={{marginTop: "20px"}}>
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </>
                      ) : "Submit Reservation"}
                    </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* ================================================================
          MAP — Full-width wide
      ================================================================ */}
      <section className="w-full bg-[#080808] py-48 md:py-56">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-24 md:mb-28" style={{ marginTop: "30px" }}>
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-sm font-black">Find Us</span>
            <h2 className="mt-10 text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none" style={{ marginTop: "20px" }}>
              Our Location
            </h2>
       
          </AnimatedSection>

          <AnimatedSection animation="scaleUp">
            <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden border border-white/10" style={{ marginTop: "20px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.0!2d73.0879!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6789f3d5d8b33b08!2sI-8%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-black/95 border border-white/10 p-5 sm:p-6 lg:p-8 max-w-xs sm:max-w-sm">
                <div className="text-[#D32F23] text-[10px] sm:text-xs font-black uppercase tracking-widest mb-3 sm:mb-4">Mastara Restaurant</div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 sm:mb-3">Rooftop, I-8 Markaz</h3>
                <p className="text-gray-400 text-sm sm:text-base">Islamabad, Pakistan</p>
                <a
                  href="https://maps.google.com/?q=I-8+Markaz+Islamabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-[#D32F23] font-bold text-sm sm:text-base hover:text-[#E54A3F] transition-colors"
                >
                  Get Directions
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ================================================================
          FAQ — Wide spacious grid
      ================================================================ */}
      <section className="w-full bg-black py-48 md:py-56">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-28 md:mb-32" style={{ marginTop: "30px" }}>
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-lg font-black">FAQ</span>
            <h2 className="mt-10 text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none" style={{ marginTop: "20px" }}>
              Common Questions
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" style={{ marginTop: "30px", marginLeft: "10px", marginRight: "10px" }}>
            {[
              { q: "Do you accept walk-ins?", a: "Yes! Walk-ins are welcome on our rooftop. However, reservations are recommended on weekends and holidays for guaranteed seating." },
              { q: "Is parking available?", a: "Yes, complimentary valet parking is available at the I-8 Markaz entrance. Self-parking is also available nearby." },
              { q: "Do you host private events?", a: "Absolutely! Our rooftop can be reserved for birthday parties, corporate dinners, and family gatherings. Contact us for custom packages." },
              { q: "Is your food Halal?", a: "100% Halal certified. Every ingredient and preparation step follows proper Islamic guidelines." },
              { q: "Is it a rooftop only?", a: "Yes — Mastara is a full rooftop dining experience with open-air seating and a breathtaking view of Islamabad." },
              { q: "Do you offer home delivery?", a: "Yes, we deliver through popular apps. Online ordering directly from our website will be available soon." },
            ].map((faq, index) => (
              <AnimatedSection key={faq.q} animation="fadeUp" delay={index * 0.08}>
                <div className="bg-[#0a0a0a] border border-[#D32F23]/40 p-8 sm:p-10 lg:p-12 hover:border-[#D32F23] transition-colors duration-300 h-full">
                  <h3 className="text-xl font-black text-white mb-6" style={{ marginLeft: "24px" }}>{faq.q}</h3>
                  <p className="text-gray-400 leading-[1.85] text-lg" style={{ marginLeft: "24px" }}>{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          FINAL CTA
      ================================================================ */}
      <section className="relative w-full py-48 md:py-56">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="CTA"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#D32F23]/80" />
        </div>
        <div className="relative z-10 text-center px-8">
          <AnimatedSection animation="scaleUp" style={{ marginTop: "60px" }}>
            <h2 className="text-5xl lg:text-7xl xl:text-[100px] font-black text-white leading-none mb-20">
              See You on the Rooftop
            </h2>
            <a
              href="tel:+925112345678"
              className="inline-block px-16 sm:px-20 py-7 bg-black text-white text-lg sm:text-xl font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
              style={{ marginTop: "40px" }}>
              Call Now
            </a>
          </AnimatedSection>
        </div>
      </section>

    </main>
  );
}
