"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HeroHeader } from "./header";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import FadeIn from "./anim/fade-in";
import { HeroBackground } from "./ui/hero-background";

const carouselImages = [
  "/assets/clothing.png",
  "/assets/food.png",
  "/assets/jewelry.png",
  "/assets/restaurants.png",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden max-w-full w-full relative">
        <section className="relative rounded-b-4xl overflow-hidden">
          <HeroBackground />
          <div className="relative py-36">
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* Animated Badge */}
                <FadeIn delay={0.1} direction="down" className="flex justify-center md:justify-start">
                  <div className="group relative inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm ring-1 ring-black/5 transition-all hover:scale-105 duration-300">
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      India&apos;s First Live Discovery Platform
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-800 dark:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </FadeIn>

                {/* Title */}
                <div className="overflow-hidden">
                  <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="max-w-lg text-balance text-4xl font-bold md:text-5xl text-zinc-950 dark:text-white"
                  >
                    Discover What&apos;s{" "}
                    <span className="relative inline-block" style={{ color: "#D73535" }}>
                       Hot & Real
                      <motion.span
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 1, ease: "circOut" }}
                        className="absolute left-0 right-0 bottom-1 h-1 rounded-full"
                        style={{ backgroundColor: "#D73535" }}
                      />
                    </span>{" "}
                    Nearby.
                  </motion.h1>
                </div>
                
                <FadeIn delay={0.4} className="text-zinc-800 dark:text-zinc-200 my-8 max-w-2xl text-balance text-xl font-medium">
                  The only hyper-local app with LIVE vendor ads. See what&apos;s
                  cooking, selling, and happening near you.
                </FadeIn>

                <FadeIn delay={0.6} className="flex justify-center md:justify-start items-center gap-2 sm:gap-4">
                  {/* Google Play Button */}
                  <Link
                    href="#playstore"
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-black rounded-lg border border-zinc-700 hover:bg-zinc-900 transition-colors group"
                  >
                    <motion.div
                       whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                       transition={{ duration: 0.5 }}
                    >
                      <Image
                        src="/playstore.svg"
                        alt="Google Play"
                        width={20}
                        height={20}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="text-white/80 text-[9px] sm:text-[10px] uppercase tracking-wide">
                        Get it on
                      </span>
                      <span className="text-white font-semibold text-xs sm:text-sm -mt-0.5">
                        Google Play
                      </span>
                    </div>
                  </Link>

                  {/* App Store Button */}
                  <Link
                    href="#appstore"
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-black rounded-lg border border-zinc-700 hover:bg-zinc-900 transition-colors group"
                  >
                     <motion.div
                       whileHover={{ rotate: [0, 10, -10, 10, 0] }}
                       transition={{ duration: 0.5 }}
                    >
                      <Image
                        src="/apple.svg"
                        alt="App Store"
                        width={20}
                        height={20}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="text-white/80 text-[9px] sm:text-[10px]">
                        Download on the
                      </span>
                      <span className="text-white font-semibold text-xs sm:text-sm -mt-0.5">
                        App Store
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              </div>

              <div className="flex justify-center mt-12 md:mt-0">
                <div className="relative w-full max-w-sm mx-auto perspective-1000">
                  {/* Card 1: Vendor Posts Ad - Top Left */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute top-0 -left-6 md:-left-20 z-30"
                  >
                    <div className="relative w-fit px-3 py-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-xl shadow-green-500/30">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-white/70 text-[8px] uppercase tracking-wider">Vendor</span>
                          <span className="text-white text-[10px] font-bold whitespace-nowrap">Posts New Ad</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 2: Live Deals Card - Left Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute top-24 -left-4 md:-left-16 z-30"
                  >
                    <div className="relative w-fit px-4 py-3 rounded-2xl bg-gradient-to-br from-red-300 via-red-500 to-red-600 shadow-xl shadow-red-500/30">
                      <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                          <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" style={{ animationDuration: "2s" }} />
                          <div className="absolute inset-1 rounded-full border border-white/30 animate-ping" style={{ animationDuration: "2.5s" }} />
                          <div className="absolute inset-2 rounded-full border border-white/40" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-white shadow-lg shadow-white/50" />
                          </div>
                        </div>
                        <span className="text-white/95 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                          LIVE · Nearby Deals
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 3: Map Card - Right Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute top-40 -right-6 md:-right-16 z-30"
                  >
                    <div className="relative w-32 h-24 overflow-visible">
                      <div className="w-full h-full overflow-hidden rounded-xl border border-border bg-background shadow-xl">
                        <div className="relative h-full w-full">
                          <Image
                            src="/assets/Map.png"
                            alt="Map"
                            width={128}
                            height={96}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 4: User Notification - Bottom Right */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="absolute bottom-12 -right-4 md:-right-16 z-30"
                  >
                    <div className="relative w-fit px-3 py-2.5 rounded-xl bg-gradient-to-br from-purple-300 via-purple-500 to-purple-700 shadow-xl shadow-purple-500/30">
                      <div className="flex items-center gap-2">
                        <div className="relative w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-white/70 text-[8px] uppercase tracking-wider">You Got</span>
                          <span className="text-white text-[10px] font-bold whitespace-nowrap">New Deal Alert!</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* SVG Connecting Lines with Dots - Like reference image */}
                  <svg
                    className="absolute inset-0 z-20 pointer-events-none hidden md:block"
                    style={{ overflow: 'visible' }}
                  >
                    <defs>
                      <linearGradient id="line1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#EF4444" />
                      </linearGradient>
                      <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                      <linearGradient id="line3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>

                    {/* Line 1: Green card to Red card */}
                    <motion.path
                      d="M -45 30 C -50 60, -55 80, -50 115"
                      fill="none"
                      stroke="url(#line1)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    />
                    {/* Dot at Green card */}
                    <motion.circle
                      cx="-45" cy="30" r="5"
                      fill="#10B981"
                      stroke="white"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2, type: "spring" }}
                    />
                    {/* Dot at Red card */}
                    <motion.circle
                      cx="-50" cy="115" r="5"
                      fill="#EF4444"
                      stroke="white"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.5, type: "spring" }}
                    />

                    {/* Line 2: Red card to Blue card (Map) - curves over */}
                    <motion.path
                      d="M -50 115 C 50 100, 200 120, 345 175"
                      fill="none"
                      stroke="url(#line2)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
                    />
                    {/* Dot at Map card */}
                    <motion.circle
                      cx="345" cy="175" r="5"
                      fill="#3B82F6"
                      stroke="white"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.3, type: "spring" }}
                    />

                    {/* Line 3: Blue card (Map) to Purple card */}
                    <motion.path
                      d="M 345 175 C 345 250, 340 350, 335 410"
                      fill="none"
                      stroke="url(#line3)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
                    />
                    {/* Dot at Purple card */}
                    <motion.circle
                      cx="335" cy="410" r="5"
                      fill="#8B5CF6"
                      stroke="white"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.8, type: "spring" }}
                    />
                  </svg>

                  {/* NEW CARD DESIGN */}
                  <div
                      aria-hidden
                      className="relative mx-auto mt-0 max-w-sm"
                  >
                        {/* Background Layer (Back Card) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="bg-background border-border/50 absolute inset-0 mx-auto w-full max-w-[90%] -translate-x-3 -translate-y-6 rounded-[2rem] border p-2 mask-[linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6"
                        >
                            <div className="relative h-96 overflow-hidden rounded-[1.5rem] border border-black/5 dark:border-white/5 p-2 pb-12">
                                <Image
                                  src="mapbg.svg"
                                  alt="Map background"
                                  fill
                                  className="object-cover opacity-50 dark:opacity-40"
                                />
                            </div>
                        </motion.div>

                        {/* Foreground Layer (Main Card) */}
                        <motion.div 
                             initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                             transition={{ duration: 0.8, delay: 0.7 }}
                             className="relative bg-muted/20 dark:bg-background/20 border-border/50 mx-auto w-full max-w-[90%] translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl mask-[linear-gradient(to_bottom,#000_80%,transparent_100%)] sm:translate-x-6 z-10"
                        >
                            <div className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border border-black/5 dark:border-white/10 p-2 shadow-2xl dark:bg-zinc-900/50 dark:shadow-black dark:backdrop-blur-3xl">
                                {/* The Image Content */}
                                <div className="relative h-96 w-full rounded-[1rem] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                   <AnimatePresence mode="wait">
                                     <motion.div
                                       key={currentImageIndex}
                                       initial={{ opacity: 0 }}
                                       animate={{ opacity: 1 }}
                                       exit={{ opacity: 0 }}
                                       transition={{ duration: 0.5, ease: "easeInOut" }}
                                       className="absolute inset-0"
                                     >
                                       <Image
                                          src={carouselImages[currentImageIndex]}
                                          alt="app screen"
                                          fill
                                          className="object-cover object-top"
                                        />
                                     </motion.div>
                                   </AnimatePresence>
                                </div>
                                
                                {/* Deal Action Bar */}
                                <div className="mt-2 flex items-center justify-between gap-2 bg-white dark:bg-zinc-800/80 p-2 pl-3 rounded-xl border border-zinc-200 dark:border-white/10 backdrop-blur-sm">
                                  <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 tracking-wider">Limited Offer</span>
                                    <span className="text-sm font-bold text-zinc-900 dark:text-white">Flat 50% OFF</span>
                                  </div>
                                  <button className="bg-[#DB0917] hover:bg-[#b00712] text-white text-xs font-bold py-2 px-4 rounded-lg shadow-lg shadow-red-500/20 transition-all active:scale-95">
                                    Claim Deal
                                  </button>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Overlay Texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] mix-blend-overlay bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
