"use client";

import { motion } from "motion/react";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Base Gradient Layer */}
      <div className="absolute inset-0 bg-zinc-50 dark:bg-black" />
      
      {/* Solid Color Background */}
      <div className="absolute inset-0 bg-[#FFA240]/20 dark:hidden" />
      
      {/* Optional: Subtle gradient overlay for depth using palette colors if desired, 
          but keeping it simple/flat as per "remove gradient" request, 
          maybe just a very subtle vignette or texture. 
          I'll stick to just the solid color and the noise overlay. 
      */}

       {/* Static Noise Overlay - Performance Optimized */}
       <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
            style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '128px 128px'
            }}
        />
    </div>
  );
}

