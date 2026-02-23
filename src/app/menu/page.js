"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "@/components/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

const menuCategories = {
  desi: {
    name: "Desi",
    tagline: "Authentic Pakistani Flavors",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    items: [
      { name: "Chicken Biryani", description: "Aromatic basmati rice layered with spiced chicken, saffron & fried onions", price: "Rs. 450", image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Mutton Karahi", description: "Tender mutton cooked in traditional karahi with tomatoes, ginger & green chilies", price: "Rs. 1,800", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600", spicy: true, popular: true },
      { name: "Chicken Karahi", description: "Fresh chicken in a wok with aromatic spices & tomatoes", price: "Rs. 1,200", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600", spicy: true },
      { name: "Beef Nihari", description: "Slow-cooked beef shank in rich, spiced gravy — a Lahori specialty", price: "Rs. 650", image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600", chef: true, popular: true },
      { name: "Seekh Kebab", description: "Minced beef kebabs grilled on skewers with traditional spices", price: "Rs. 550", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Chapli Kebab", description: "Peshawar-style flat kebabs with pomegranate seeds & fresh coriander", price: "Rs. 500", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600", spicy: true },
      { name: "Haleem", description: "Slow-cooked wheat & meat stew garnished with ginger & fried onions", price: "Rs. 400", image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Dal Makhani", description: "Black lentils slow-cooked overnight with butter & cream", price: "Rs. 350", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600", vegetarian: true },
      { name: "Chicken Tikka", description: "Boneless chicken marinated in yogurt & spices, grilled to perfection", price: "Rs. 600", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Mutton Pulao", description: "Fragrant rice cooked with tender mutton & whole spices", price: "Rs. 550", image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Paye", description: "Traditional slow-cooked trotters in rich spiced gravy", price: "Rs. 700", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600", chef: true },
      { name: "Paneer Tikka", description: "Cottage cheese marinated & grilled with bell peppers & onions", price: "Rs. 450", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600", vegetarian: true },
    ],
  },
  chinese: {
    name: "Chinese",
    tagline: "Indo-Pak Chinese Fusion",
    image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    items: [
      { name: "Chicken Manchurian", description: "Crispy chicken in tangy, sweet & spicy Manchurian sauce", price: "Rs. 650", image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Beef Chilli Dry", description: "Tender beef strips stir-fried with peppers & green chilies", price: "Rs. 750", image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=600", spicy: true, popular: true },
      { name: "Chicken Fried Rice", description: "Wok-fried rice with chicken, eggs & fresh vegetables", price: "Rs. 450", image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Egg Fried Rice", description: "Classic fried rice with scrambled eggs & spring onions", price: "Rs. 350", image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=600", vegetarian: true },
      { name: "Chicken Chow Mein", description: "Stir-fried noodles with chicken & colorful vegetables", price: "Rs. 500", image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Hot & Sour Soup", description: "Tangy soup with chicken, mushrooms & tofu", price: "Rs. 300", image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=600", spicy: true },
      { name: "Chicken Corn Soup", description: "Creamy soup with shredded chicken & sweet corn", price: "Rs. 280", image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Dragon Chicken", description: "Crispy chicken in fiery dragon sauce with sesame seeds", price: "Rs. 700", image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=600", spicy: true, chef: true },
      { name: "Spring Rolls", description: "Crispy rolls stuffed with vegetables & chicken", price: "Rs. 350", image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
    ],
  },
  continental: {
    name: "Continental",
    tagline: "Western Classics, Local Soul",
    image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    items: [
      { name: "Grilled Chicken Steak", description: "Juicy chicken breast with mushroom sauce & mashed potatoes", price: "Rs. 850", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Beef Steak", description: "Tender beef steak with pepper sauce & seasonal vegetables", price: "Rs. 1,200", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600", chef: true, popular: true },
      { name: "Chicken Pasta", description: "Penne in creamy white sauce with grilled chicken & herbs", price: "Rs. 650", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Mushroom Pasta", description: "Spaghetti with sautéed mushrooms in garlic cream sauce", price: "Rs. 550", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600", vegetarian: true },
      { name: "Club Sandwich", description: "Triple-decker sandwich with chicken, egg, lettuce & fries", price: "Rs. 550", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Chicken Burger", description: "Crispy chicken patty with cheese, lettuce & special sauce", price: "Rs. 500", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Beef Burger", description: "Juicy beef patty with caramelized onions & cheddar cheese", price: "Rs. 600", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Caesar Salad", description: "Romaine lettuce with Caesar dressing, croutons & parmesan", price: "Rs. 450", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600", vegetarian: true },
      { name: "Grilled Fish", description: "Fresh fish fillet grilled with herbs & lemon butter sauce", price: "Rs. 900", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600", chef: true },
    ],
  },
  bbq: {
    name: "BBQ & Grills",
    tagline: "Smoky Live Grill Station",
    image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    items: [
      { name: "Mixed Grill Platter", description: "Assorted kebabs, tikka, malai boti & seekh kebab for two", price: "Rs. 1,500", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600", chef: true, popular: true },
      { name: "Malai Boti", description: "Creamy tender chicken marinated in cream & spices", price: "Rs. 650", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Reshmi Kebab", description: "Silky smooth chicken kebabs with a melt-in-mouth texture", price: "Rs. 600", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Lamb Chops", description: "Tender lamb chops marinated & grilled to perfection", price: "Rs. 1,400", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600", chef: true },
      { name: "Chicken Wings", description: "Crispy grilled wings with choice of dipping sauce", price: "Rs. 500", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Tandoori Chicken", description: "Whole chicken marinated in yogurt & spices, cooked in tandoor", price: "Rs. 1,100", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
      { name: "Fish Tikka", description: "Fresh fish chunks marinated & grilled with special spices", price: "Rs. 800", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Prawns BBQ", description: "Jumbo prawns marinated & grilled with garlic butter", price: "Rs. 1,200", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600", chef: true },
      { name: "Bihari Kebab", description: "Thin beef slices in papaya & traditional spice marinade", price: "Rs. 600", image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600", popular: true },
    ],
  },
};

export default function MenuPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("desi");
  const menuRef = useRef(null);

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

  useEffect(() => {
    if (menuRef.current) {
      const items = menuRef.current.querySelectorAll(".menu-item");
      gsap.fromTo(items, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power3.out" });
    }
  }, [activeCategory]);

  const currentMenu = menuCategories[activeCategory];

  return (
    <main ref={heroRef} className="overflow-hidden bg-black">

      {/* ================================================================
          HERO — Full screen with dynamic background per category
      ================================================================ */}
      <section className="relative w-full h-screen min-h-[768px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={currentMenu.image}
            alt="Menu Hero"
            fill
            className="object-cover object-center transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/95" />
        </div>

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <div ref={titleRef}>
            <p className="text-[#D32F23] uppercase tracking-[0.5em] text-sm font-medium mb-8">
              Culinary Excellence
            </p>
            <h1 className="text-[80px] sm:text-[120px] md:text-[160px] font-black text-white leading-none">
              Our Menu
            </h1>
            <p className="mt-10 text-gray-300 text-2xl max-w-2xl mx-auto leading-relaxed font-light">
              Authentic Pakistani flavors alongside Chinese & Continental delights
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
          STICKY CATEGORY TABS
      ================================================================ */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-24">
          <div className="flex items-center justify-center gap-2 py-6">
            {Object.entries(menuCategories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-10 py-4 text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-[#D32F23] text-white"
                    : "text-white/60 hover:text-white border border-white/10 hover:border-white/30"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* ================================================================
          MENU ITEMS SECTION
      ================================================================ */}
      <section className="w-full bg-[#080808] py-32">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="mb-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
              <div>
                <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
                  {currentMenu.tagline}
                </span>
                <h2 className="mt-4 text-5xl lg:text-6xl xl:text-7xl font-black text-white">
                  {currentMenu.name}
                </h2>
                <div className="mt-6 w-20 h-1 bg-[#D32F23]" />
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="w-4 h-4 bg-[#D32F23] rounded-full" />
                  <span>Spicy</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="w-4 h-4 bg-green-500 rounded-full" />
                  <span>Vegetarian</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full" />
                  <span>Popular</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="w-4 h-4 bg-purple-500 rounded-full" />
                  <span>Chef&apos;s Special</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div ref={menuRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMenu.items.map((item) => (
              <div
                key={item.name}
                className="menu-item group bg-black border border-white/10 overflow-hidden hover:border-[#D32F23]/40 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute top-5 left-5 flex gap-2">
                    {item.spicy && <span className="w-7 h-7 bg-[#D32F23] rounded-full flex items-center justify-center text-white text-xs font-black">🌶</span>}
                    {item.vegetarian && <span className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">V</span>}
                    {item.popular && <span className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">★</span>}
                    {item.chef && <span className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">✦</span>}
                  </div>
                  <div className="absolute bottom-5 right-5">
                    <span className="text-2xl font-black text-[#D32F23]">{item.price}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#D32F23] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          DIETARY INFO — Full background section
      ================================================================ */}
      <section className="relative w-full py-40">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Dietary"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/88" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-12 lg:px-24">
          <AnimatedSection animation="fadeUp" className="text-center mb-24">
            <span className="text-[#D32F23] uppercase tracking-[0.35em] text-xs font-black">
              Good to Know
            </span>
            <h2 className="mt-8 text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none">
              Dietary Options
            </h2>
            <div className="mt-10 w-24 h-1 bg-[#D32F23] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "100% Halal",
                icon: "✓",
                description: "All our meat is 100% Halal certified. We ensure proper Islamic guidelines are followed in every step.",
              },
              {
                title: "Vegetarian",
                icon: "♥",
                description: "Wide selection of vegetarian dishes made with the freshest vegetables and premium paneer.",
              },
              {
                title: "Allergy Friendly",
                icon: "!",
                description: "Please inform our staff about any food allergies. Our chefs will customize your dish with care.",
              },
            ].map((opt, i) => (
              <AnimatedSection key={opt.title} animation="fadeUp" delay={i * 0.12}>
                <div className="group text-center p-14 border border-white/10 hover:border-[#D32F23]/50 hover:bg-[#D32F23]/5 transition-all duration-500">
                  <div className="w-20 h-20 bg-[#D32F23]/20 group-hover:bg-[#D32F23] rounded-full flex items-center justify-center mx-auto mb-10 transition-all duration-300">
                    <span className="text-[#D32F23] group-hover:text-white text-3xl font-black transition-colors duration-300">{opt.icon}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6">{opt.title}</h3>
                  <p className="text-gray-400 leading-loose text-lg">{opt.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          CUSTOM MENU CTA
      ================================================================ */}
      <section className="w-full bg-[#D32F23] py-48">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-24 text-center">
          <AnimatedSection animation="scaleUp">
            <h2 className="text-6xl lg:text-8xl xl:text-[120px] font-black text-white leading-none mb-16">
              Can&apos;t Decide?
            </h2>
            <p className="text-white/80 text-2xl max-w-3xl mx-auto leading-relaxed mb-16">
              Let our expert chefs craft a custom menu for your private event or party.
              Experience the best of Pakistani hospitality.
            </p>
            <a
              href="/contact"
              className="inline-block px-20 py-7 bg-black text-white text-xl font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
            >
              Request Custom Menu
            </a>
          </AnimatedSection>
        </div>
      </section>

    </main>
  );
}
