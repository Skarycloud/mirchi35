"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HeroHeader } from "./header";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
      <main className="overflow-hidden">
        <section className="bg-[#FDF2E7] dark:bg-transparent rounded-b-[20px]">
          <div className="relative py-36">
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* Animated Badge */}
                <div className="flex justify-center md:justify-start">
                  <div className="shimmer-border inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-zinc-50 dark:bg-zinc-900">
                    <span className="text-sm text-muted-foreground">
                      India&apos;s First Live Discovery Platform
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Title */}
                <h1 className="max-w-lg text-balance text-5xl font-bold md:text-6xl">
                  Discover What&apos;s{" "}
                  <span className="relative" style={{ color: "#DB0917" }}>
                    Hot & Real
                    <span
                      className="absolute left-0 right-0 bottom-1 h-1 rounded-full"
                      style={{ backgroundColor: "#DB0917" }}
                    />
                  </span>{" "}
                  Nearby.
                </h1>
                <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">
                  The only hyper-local app with LIVE vendor ads. See what's
                  cooking, selling, and happening near you.
                </p>

                <div className="flex justify-center md:justify-start items-center gap-2 sm:gap-4">
                  {/* Google Play Button */}
                  <Link
                    href="#playstore"
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-black rounded-lg border border-zinc-700 hover:bg-zinc-900 transition-colors"
                  >
                    <Image
                      src="/playstore.svg"
                      alt="Google Play"
                      width={20}
                      height={20}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
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
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-black rounded-lg border border-zinc-700 hover:bg-zinc-900 transition-colors"
                  >
                    <Image
                      src="/apple.svg"
                      alt="App Store"
                      width={20}
                      height={20}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <div className="flex flex-col">
                      <span className="text-white/80 text-[9px] sm:text-[10px]">
                        Download on the
                      </span>
                      <span className="text-white font-semibold text-xs sm:text-sm -mt-0.5">
                        App Store
                      </span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex justify-center mt-12 md:mt-0">
                <div className="relative h-110 w-64">
                  {/* Back Shadow Card */}
                  <div className="absolute inset-0 translate-y-4 -translate-x-4 rounded-3xl border border-zinc-200 bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 skew-x-6 shadow-sm" />

                  {/* Main Card */}
                  <div className="absolute inset-0 -translate-y-4 translate-x-4 overflow-hidden rounded-3xl border border-border bg-background shadow-2xl skew-x-6">
                    <Image
                      key={currentImageIndex}
                      src={carouselImages[currentImageIndex]}
                      alt="app screen"
                      width={256}
                      height={440}
                      className="h-full w-full object-cover object-top-left animate-in fade-in duration-500"
                    />
                  </div>

                  {/* Live Deals Card - Top Left */}
                  <div className="absolute -top-10 -left-6 md:-left-24 w-44 p-3 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 shadow-xl skew-x-6 animate-in slide-in-from-top-4 duration-700">
                    {/* Hyper Discovery Radar Illustration */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="relative w-8 h-8">
                        {/* Radar rings */}
                        <div
                          className="absolute inset-0 rounded-full border border-white/20 animate-ping"
                          style={{ animationDuration: "2s" }}
                        />
                        <div
                          className="absolute inset-1 rounded-full border border-white/30 animate-ping"
                          style={{ animationDuration: "2.5s" }}
                        />
                        <div className="absolute inset-2 rounded-full border border-white/40" />
                        {/* Center dot */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-white shadow-lg shadow-white/50" />
                        </div>
                        {/* Discovery points */}
                        <div className="absolute top-0.5 right-0 w-1 h-1 rounded-full bg-yellow-300 animate-pulse" />
                        <div
                          className="absolute bottom-1.5 left-0 w-1 h-1 rounded-full bg-green-300 animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        />
                      </div>
                      <span className="text-white/90 text-[9px] font-medium uppercase tracking-wider">
                        Live
                      </span>
                    </div>

                    <p className="text-white text-[11px] font-semibold mb-0.5">
                      Check what&apos;s hot around you
                    </p>
                    <p className="text-white/80 text-[9px] leading-tight">
                      Live deals happening near you right now
                    </p>
                  </div>

                  {/* Floating Map Card */}
                  <div className="absolute -bottom-8 -right-6 md:-right-20 w-36 h-26 overflow-hidden rounded-2xl border border-border bg-background shadow-xl skew-x-6 animate-in slide-in-from-bottom-4 duration-700">
                    <Image
                      src="/assets/Map.png"
                      alt="Map"
                      width={144}
                      height={104}
                      className="h-full w-full object-cover"
                    />
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
