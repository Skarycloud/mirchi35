"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/logo";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQs", href: "/#faqs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const HeroHeader = () => {
  const { theme, setTheme } = useTheme();
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-20 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 dark:bg-background/75 border-b border-black/5 backdrop-blur-lg"
            : "bg-transparent"
        )}
        style={!isScrolled ? { fontFamily: 'Inter, system-ui, sans-serif' } : {}}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0">
            <div className="flex w-full justify-between gap-6 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <div className="flex items-center gap-4 lg:hidden">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                  className={cn("relative flex items-center justify-center", !isScrolled && "text-zinc-900 dark:text-white")}
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </button>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className={cn("relative z-20 -m-2.5 block cursor-pointer p-2.5", !isScrolled && "text-zinc-900 dark:text-white")}
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
              <ul className="flex gap-1">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={item.href} className={cn("text-base", !isScrolled && "text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-white/80")}>
                        <span>{item.name}</span>
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-center sm:items-start">
                <Link
                  href="#playstore"
                  className="flex items-center gap-2 px-4 py-2 bg-white/40 hover:bg-white/60 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md rounded-lg border border-zinc-900/20 dark:border-white/20 transition-all shadow-lg hover:shadow-xl w-fit"
                >
                  <Image
                    src="/playstore.svg"
                    alt="Google Play"
                    width={20}
                    height={20}
                    className="w-5 h-5 dark:invert"
                  />
                  <span className="text-zinc-900 dark:text-white font-semibold text-sm">
                    Install App
                  </span>
                </Link>

                <div className="hidden lg:flex items-center gap-3 pl-3 border-l border-border ml-3">
                  <button
                    className={cn(
                      "cursor-pointer pt-2 hover:text-primary transition-colors",
                      !isScrolled && "text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-white/80"
                    )}
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    aria-label="Toggle theme"
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 -mt-[1.2rem]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
