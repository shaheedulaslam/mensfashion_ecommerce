/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Truck,
  Shield,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Leaf,
  Award,
  Ruler,
  Play,
  Pause,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import Footer from "@/components/Footer";

const PRODUCTS = [
  // ... (your existing products array remains the same)
  {
    id: "p1",
    title: "Premium Linen Shirt Sky Blue",
    price: 1899,
    img: "/images/men1.jpg",
    tags: ["shirt", "formal", "sky blue", "cotton"],
  },
  {
    id: "p2",
    title: "Premium Linen Shirt Black",
    price: 2199,
    img: "/images/men4.jpg",
    tags: ["shirt", "formal", "black", "slim fit"],
  },
  {
    id: "p3",
    title: "Premium Linen Shirt Brown",
    price: 2799,
    img: "/images/men3.jpg",
    tags: ["shirt", "formal", "brown", "linen"],
  },
  {
    id: "p4",
    title: "Premium Linen Dress Shirt Pink",
    price: 3299,
    img: "/images/men5.jpg",
    tags: ["shirt", "formal", "pink", "linen"],
  },
  {
    id: "p5",
    title: "Premium Linen Dress Shirt Piste Green",
    price: 1999,
    img: "/images/men6.jpg",
    tags: ["shirt", "formal", "piste green", "linen"],
  },
  {
    id: "p6",
    title: "Premium Linen Dress Shirt Coffee Brown",
    price: 2499,
    img: "/images/men2.jpg",
    tags: ["shirt", "formal", "coffee brown", "linen"],
  },

  // Formal Pants
  {
    id: "p7",
    title: "Classic Fit Dress Trousers",
    price: 2899,
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=80",
    tags: ["pants", "formal", "trousers", "classic fit"],
  },
  {
    id: "p8",
    title: "Slim Fit Formal Pants",
    price: 2699,
    img: "https://images.unsplash.com/photo-1584370848018-ea1c6f323c6e?w=500&auto=format&fit=crop&q=80",
    tags: ["pants", "formal", "slim fit", "office wear"],
  },
  {
    id: "p9",
    title: "Wool Blend Dress Pants",
    price: 4499,
    img: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500&auto=format&fit=crop&q=80",
    tags: ["pants", "formal", "wool", "premium"],
  },
  {
    id: "p10",
    title: "Pleated Formal Trousers",
    price: 3199,
    img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=500&auto=format&fit=crop&q=80",
    tags: ["pants", "formal", "pleated", "vintage"],
  },
  {
    id: "p11",
    title: "Tailored Fit Dress Pants",
    price: 3599,
    img: "https://images.unsplash.com/photo-1506629905607-e48b0e67d879?w=500&auto=format&fit=crop&q=80",
    tags: ["pants", "formal", "tailored", "custom fit"],
  },
  {
    id: "p12",
    title: "Stretch Comfort Trousers",
    price: 2399,
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=80",
    tags: ["pants", "formal", "stretch", "comfort"],
  },

  // Casual Shirts
  {
    id: "p13",
    title: "Casual Linen Shirt",
    price: 1799,
    img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&auto=format&fit=crop&q=80",
    tags: ["shirt", "casual", "linen", "summer"],
  },
  {
    id: "p14",
    title: "Denim Button-Down Shirt",
    price: 2299,
    img: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&auto=format&fit=crop&q=80",
    tags: ["shirt", "casual", "denim", "button-down"],
  },
  {
    id: "p15",
    title: "Oxford Cloth Casual Shirt",
    price: 1999,
    img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&auto=format&fit=crop&q=80",
    tags: ["shirt", "casual", "oxford", "versatile"],
  },

  // Casual Pants
  {
    id: "p16",
    title: "Chino Casual Pants",
    price: 1899,
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=80",
    tags: ["pants", "casual", "chino", "everyday"],
  },
  {
    id: "p17",
    title: "Cargo Casual Trousers",
    price: 2199,
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=80",
    tags: ["pants", "casual", "cargo", "utility"],
  },
  {
    id: "p18",
    title: "Linen Blend Casual Pants",
    price: 2499,
    img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=500&auto=format&fit=crop&q=80",
    tags: ["pants", "casual", "linen", "summer"],
  },
];

const HERO_SLIDES = [
  // ... (your existing hero slides array remains the same)
  {
    id: 1,
    title: "Elevate Your Style",
    subtitle: "Premium Men's Fashion",
    description:
      "Discover curated collections that blend modern trends with timeless elegance",
    image:"/images/men1.jpg",
    cta: "Shop Now",
    bgGradient: "from-blue-50 to-indigo-100",
  },
  {
    id: 2,
    title: "Formal Excellence",
    subtitle: "Business & Formal Wear",
    description:
      "Perfect suits, shirts and trousers for the modern professional",
    image:
      "/images/men2.jpg",
    cta: "Explore Formal",
    bgGradient: "from-gray-50 to-slate-100",
  },
  {
    id: 3,
    title: "Casual Sophistication",
    subtitle: "Weekend & Casual Wear",
    description:
      "Comfort meets style in our casual shirts and pants collections",
    image:
      "/images/men3.jpg",
    cta: "Browse Casual",
    bgGradient: "from-emerald-50 to-teal-100",
  },
];

// Video Showcase Component
const VideoShowcase = () => {
  const [isVideoPlaying1, setIsVideoPlaying1] = useState(true);
  const [isVideoPlaying2, setIsVideoPlaying2] = useState(true);
  const videoRef1 = useRef<HTMLVideoElement>(null as unknown as HTMLVideoElement);
  const videoRef2 = useRef<HTMLVideoElement>(null as unknown as HTMLVideoElement);

  const togglePlayPause = (videoRef: React.RefObject<HTMLVideoElement>, setState: any, isPlaying: boolean) => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              See Our Collection<br />
              <span className="text-blue-600">In Motion</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Watch how our premium fabrics move and flow with natural elegance.
              Experience the perfect drape and comfort that only quality craftsmanship can provide.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Ruler className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium">Perfect fit for every movement</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-medium">Premium sustainable fabrics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-600" />
                </div>
                <span className="font-medium">Crafted for comfort and style</span>
              </div>
            </div>
          </motion.div>

          {/* Videos Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 flex flex-col sm:flex-row justify-center gap-8"
          >
            {/* Video 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black w-full max-w-[280px] mx-auto">
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <video
                  ref={videoRef1}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  onPlay={() => setIsVideoPlaying1(true)}
                  onPause={() => setIsVideoPlaying1(false)}
                >
                  <source src="/images/mens.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer bg-black/20"
                  onClick={() => togglePlayPause(videoRef1, setIsVideoPlaying1, isVideoPlaying1)}
                >
                  <div className="bg-white/90 rounded-full p-3 backdrop-blur-sm transform hover:scale-110 transition-transform">
                    {isVideoPlaying1 ? (
                      <Pause className="w-6 h-6 text-black" />
                    ) : (
                      <Play className="w-6 h-6 text-black ml-1" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black w-full max-w-[280px] mx-auto">
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <video
                  ref={videoRef2}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  onPlay={() => setIsVideoPlaying2(true)}
                  onPause={() => setIsVideoPlaying2(false)}
                >
                  <source src="/images/mens1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer bg-black/20"
                  onClick={() => togglePlayPause(videoRef2, setIsVideoPlaying2, isVideoPlaying2)}
                >
                  <div className="bg-white/90 rounded-full p-3 backdrop-blur-sm transform hover:scale-110 transition-transform">
                    {isVideoPlaying2 ? (
                      <Pause className="w-6 h-6 text-black" />
                    ) : (
                      <Play className="w-6 h-6 text-black ml-1" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Background gradient decoration */}
            <div className="absolute -inset-4 -z-10 bg-gradient-to-b from-purple-100/50 to-pink-100/50 rounded-3xl blur-xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


// Category Grid Component
const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      title: "Formal Shirts",
      description: "Premium dress shirts for the modern professional",
      image: "/images/shirts.jpg",
      href: "/collections/formal-shirts",
      count: "24 Items",
      featured: true
    },
    {
      id: 2,
      title: "Casual T-Shirts",
      description: "Comfortable and stylish everyday tees",
      image: "/images/tshirts.jpg",
      href: "/collections/t-shirts",
      count: "18 Items",
      featured: false
    },
    {
      id: 3,
      title: "Formal Pants",
      description: "Tailored trousers for business and occasions",
      image: "/images/pants.jpg",
      href: "/collections/formal-pants",
      count: "16 Items",
      featured: false
    },
    {
      id: 4,
      title: "Casual Pants",
      description: "Relaxed fit pants for weekend wear",
      image: "/images/casualpants.jpg",
      href: "/collections/casual-pants",
      count: "12 Items",
      featured: false
    },
    {
      id: 5,
      title: "Track Pants",
      description: "Comfortable Track Pants for all-day support",
      image: "/images/track-pants.jpg",
      href: "/collections/track-pants",
      count: "8 Items",
      featured: false
    },
    {
      id: 6,
      title: "Accessories",
      description: "Complete your look with our accessories",
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&auto=format&fit=crop&q=80",
      href: "/collections/accessories",
      count: "15 Items",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Shop By Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections designed for every occasion and style
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Featured Badge */}
                {category.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}

                {/* Item Count */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-sm font-medium">
                    {category.count}
                  </span>
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {category.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-black py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 hover:bg-gray-100"
                    onClick={() => window.location.href = category.href}
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>

              {/* Default Content (Visible always) */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count}</span>
                  <button 
                    onClick={() => window.location.href = category.href}
                    className="text-black hover:text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Explore
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Brand Story Component (your existing component)
const BrandStory = () => (
  <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Crafting Excellence Since 2010</h2>
          <p className="text-lg text-gray-600">
            From a small tailoring workshop to a premium menswear brand, 
            our journey has always been about perfect fits and timeless style.
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">14+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50K+</div>
              <div className="text-sm text-gray-500">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-500">Quality Promise</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
            alt="Our workshop"
            width={500}
            height={400}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

// Style Quiz Component (your existing component)
const StyleQuiz = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Find Your Perfect Style</h2>
      <p className="text-gray-600 mb-12">
        Take our 30-second quiz to discover outfits that match your personality and lifestyle
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: '💼', title: 'Office Professional', desc: 'Sharp formal wear' },
          { icon: '☕', title: 'Smart Casual', desc: 'Weekend elegance' },
          { icon: '🎉', title: 'Event Ready', desc: 'Special occasions' }
        ].map((style, index) => (
          <div key={index} className="p-6 border-2 border-gray-100 rounded-2xl hover:border-blue-500 transition-all">
            <div className="text-4xl mb-4">{style.icon}</div>
            <h3 className="font-semibold mb-2">{style.title}</h3>
            <p className="text-sm text-gray-500">{style.desc}</p>
          </div>
        ))}
      </div>
      
      <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all">
        Start Style Quiz →
      </button>
    </div>
  </section>
);

export default function LandingPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<null | (typeof PRODUCTS)[number]>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const { addToCart } = useCart();

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Defensive filtering
  const filtered = PRODUCTS.filter(Boolean).filter((p) =>
    ((p.title ?? "") + (p.tags ?? []).join(" "))
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  // Show only first 6 products initially, or all if showAllProducts is true
  const displayedProducts = showAllProducts ? filtered : filtered.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900 antialiased">
      {/* NAV */}
      <Navbar />

      {/* ENHANCED HERO SECTION */}
      <section className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`bg-gradient-to-br ${HERO_SLIDES[currentSlide].bgGradient} py-20`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="space-y-6"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-zinc-600"
                  >
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    Premium Men's Fashion
                  </motion.div>

                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-5xl lg:text-7xl font-bold leading-tight"
                  >
                    {HERO_SLIDES[currentSlide].title}
                    <span className="block text-3xl lg:text-5xl text-zinc-600 mt-2">
                      {HERO_SLIDES[currentSlide].subtitle}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl text-zinc-600 leading-relaxed"
                  >
                    {HERO_SLIDES[currentSlide].description}
                  </motion.p>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <button className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-black text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      {HERO_SLIDES[currentSlide].cta}
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </button>
                    <button className="inline-flex items-center gap-3 rounded-full px-8 py-4 border-2 border-zinc-300 font-medium hover:border-black transition-all duration-300">
                      View Collection
                    </button>
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="grid grid-cols-3 gap-4 pt-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Truck className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Free Shipping</div>
                        <div className="text-xs text-zinc-500">Over ₹1999</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <RefreshCw className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Easy Returns</div>
                        <div className="text-xs text-zinc-500">30 Days</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Shield className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Secure Payment</div>
                        <div className="text-xs text-zinc-500">100% Safe</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={HERO_SLIDES[currentSlide].image}
                      alt={HERO_SLIDES[currentSlide].title}
                      width={600}
                      height={600}
                      className="w-full h-[500px] object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                  >
                    <div className="text-2xl font-bold text-blue-600">New</div>
                    <div className="text-xs text-zinc-500">Collection</div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute -bottom-4 -right-4 bg-black text-white rounded-2xl p-4 shadow-xl"
                  >
                    <div className="text-sm font-semibold">Trending</div>
                    <div className="text-xs text-zinc-300">2024</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-black scale-125" : "bg-zinc-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white/30 pointer-events-none" />
      </section>

      {/* VIDEO SHOWCASE SECTION - Added right below hero */}
      <VideoShowcase />

       {/* CATEGORY GRID SECTION - ADDED HERE */}
      <CategoryGrid />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* BRAND STORY */}
        <BrandStory />

        {/* STYLE QUIZ */}
        <StyleQuiz />

        {/* PRODUCTS SECTION */}
        <section id="collections" className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Picks</h2>
            <div className="text-sm text-zinc-500">
              Showing {displayedProducts.length} of {filtered.length} items
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.map((p) =>
              p ? (
                <motion.article
                  key={p.id}
                  whileHover={{ translateY: -6 }}
                  className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden"
                >
                  <div className="relative w-full h-64">
                    {p.img ? (
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-100" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{p.title}</h3>
                    <p className="text-sm text-zinc-500 mt-1">
                      {(p.tags ?? []).join(" • ")}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="font-semibold">₹{p.price}</div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelected(p)}
                          className="px-3 py-2 rounded-full border border-zinc-200 text-sm"
                        >
                          Quick view
                        </button>
                        <button
                          onClick={() => addToCart(p)}
                          className="px-3 py-2 rounded-full bg-black text-white text-sm"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ) : null
            )}
          </div>

          {/* View More / View Less Button */}
          {filtered.length > 6 && (
            <div className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllProducts(!showAllProducts)}
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-zinc-300 hover:border-black transition-all duration-300 font-medium"
              >
                {showAllProducts ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    View Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    View More ({filtered.length - 6} more items)
                  </>
                )}
              </motion.button>
            </div>
          )}
        </section>

        {/* ABOUT / TRENDING */}
        <section
          id="about"
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
        >
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold">Our Vibe</h3>
            <p className="mt-3 text-zinc-600">
              We craft garments that celebrate modern masculinity with timeless
              elegance. We focus on sustainable fabrics, perfect fits, and
              inclusive sizing. Our drops are limited — follow us to never miss
              a release.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="px-4 py-2 rounded-full border">
                Instagram
              </a>
              <a href="#" className="px-4 py-2 rounded-full border">
                TikTok
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6">
            <h4 className="font-semibold">Limited Drop</h4>
            <p className="text-sm text-zinc-500 mt-2">
              Sign up and get early access to drops + discounts.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                placeholder="Email address"
                className="px-3 py-2 rounded-md border border-zinc-100 w-full"
              />
              <button className="px-4 py-2 rounded-md bg-black text-white">
                Join
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </main>

      {/* PRODUCT MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-start justify-between p-4 border-b">
                <h4 className="font-semibold">
                  {selected?.title ?? "Product"}
                </h4>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-md hover:bg-zinc-100"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full h-72 relative">
                  {selected?.img ? (
                    <Image
                      src={selected.img}
                      alt={selected.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-100 rounded-md" />
                  )}
                </div>
                <div>
                  <p className="text-zinc-600">
                    {(selected?.tags ?? []).join(" • ")}
                  </p>
                  <div className="mt-4 font-bold text-2xl">
                    ₹{selected?.price ?? "--"}
                  </div>
                  <p className="mt-4 text-sm text-zinc-500">
                    Limited stock. Free returns within 30 days.
                  </p>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => {
                        addToCart(selected);
                        setSelected(null);
                      }}
                      className="px-4 py-2 rounded-md bg-black text-white"
                    >
                      Add to cart
                    </button>
                    <button className="px-4 py-2 rounded-md border">
                      Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}