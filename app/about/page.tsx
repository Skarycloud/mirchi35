"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Target, TrendingUp } from "lucide-react";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer-two";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      {/* Hero Section - Styled like Home Hero */}
      <section className="bg-[#FDF2E7] dark:bg-transparent rounded-b-4xl">
        <div className="relative py-36">
          <div className="relative z-10 mx-auto w-full max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-balance">
                About{" "}
                <span className="relative" style={{ color: "#DB0917" }}>
                  Mirchi35
                  <span
                    className="absolute left-0 right-0 bottom-1 h-1 rounded-full"
                    style={{ backgroundColor: "#DB0917" }}
                  />
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Mirchi35 is a live discovery platform for local commerce. We
                help people see what&apos;s cooking, what&apos;s on sale, and
                what&apos;s happening around them right now.
              </p>
            </div>

            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Floating Cards Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl transform rotate-6 flex items-center justify-center animate-float-slow border border-zinc-200 dark:border-zinc-800">
                      <Zap className="w-16 h-16 text-[#DB0917]" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-zinc-900 dark:bg-zinc-800 rounded-2xl shadow-xl transform -rotate-6 flex items-center justify-center animate-float-slower">
                      <Target className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#DB0917] rounded-2xl shadow-2xl flex items-center justify-center animate-float">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-6 py-24 space-y-24">
        {/* Value Props Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
            <CardContent className="p-6 text-center pt-8">
              <div className="w-16 h-16 bg-[#DB0917]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-[#DB0917]" />
              </div>
              <h3 className="font-bold text-xl mb-2">Live Discovery</h3>
              <p className="text-muted-foreground">
                Real-time updates from your neighborhood
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
            <CardContent className="p-6 text-center pt-8">
              <div className="w-16 h-16 bg-[#DB0917]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-[#DB0917]" />
              </div>
              <h3 className="font-bold text-xl mb-2">Hyper Local</h3>
              <p className="text-muted-foreground">
                Focus on what&apos;s relevant near you
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
            <CardContent className="p-6 text-center pt-8">
              <div className="w-16 h-16 bg-[#DB0917]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#DB0917]" />
              </div>
              <h3 className="font-bold text-xl mb-2">Community First</h3>
              <p className="text-muted-foreground">
                Built for local vendors and consumers
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              We&apos;re not a delivery app. We&apos;re not a discount engine.
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Local commerce in India isn&apos;t broken local discovery is.
              </p>
              <p>
                People already trust kiranas, darshinis, street vendors, and
                local services. What&apos;s missing is a simple way to discover
                what&apos;s available nearby without discounts or delivery
                pressure.
              </p>
              <p>
                We don&apos;t touch pricing, inventory, or fulfillment. We focus
                on relevance, not speed.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-linear-to-b aspect-video relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <div className="absolute inset-0 bg-muted/50 rounded-[15px] flex items-center justify-center">
                <Image
                  src="/assets/about-vendor.webp"
                  className="rounded-[15px] shadow-lg object-cover"
                  alt="Vendor ecosystem"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Ecosystem Card */}
        <div className="relative overflow-hidden bg-[#FDF2E7] dark:bg-zinc-900 rounded-3xl p-8 md:p-12 border border-[#DB0917]/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#DB0917]/5 rounded-full blur-3xl"></div>
          <div className="relative flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 bg-[#DB0917] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#DB0917]/20">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Our First User is the Vendor
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vendors already advertise visually through WhatsApp statuses and
                photos. We organize that behavior into a clean local discovery
                layer. Consumers follow organically.
              </p>
              <div className="pt-4 border-t border-[#DB0917]/20">
                <p className="text-lg font-medium text-[#DB0917]">
                  Mirchi35 is the infrastructure layer for local commerce. Built
                  to last, not to burn.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why the Name Section */}
        <div className="space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span style={{ color: "#DB0917" }}>Mirchi35</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              The story behind our name
            </p>
          </div>

          <div className="space-y-12">
            {/* Mirchi Section */}
            <div className="relative">
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#DB0917]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#DB0917]/5 rounded-full blur-3xl"></div>

                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h3 className="text-5xl md:text-6xl font-black text-[#DB0917] mb-2">
                        MIRCHI
                      </h3>
                      <div className="h-2 bg-[#DB0917] rounded-full w-24"></div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xl font-semibold">
                        Live. Sensory. Discovery.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Like the spice that awakens your senses, Mirchi
                        represents what&apos;s{" "}
                        <span className="font-bold text-foreground">fresh</span>
                        ,<span className="font-bold text-foreground"> hot</span>
                        , and{" "}
                        <span className="font-bold text-foreground">
                          happening right now
                        </span>{" "}
                        in your neighborhood.
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        <span className="px-4 py-2 bg-[#DB0917]/10 text-[#DB0917] rounded-full text-sm font-medium border border-[#DB0917]/20">
                          Fresh
                        </span>
                        <span className="px-4 py-2 bg-[#DB0917]/10 text-[#DB0917] rounded-full text-sm font-medium border border-[#DB0917]/20">
                          Hot
                        </span>
                        <span className="px-4 py-2 bg-[#DB0917]/10 text-[#DB0917] rounded-full text-sm font-medium border border-[#DB0917]/20">
                          Now
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 bg-[#DB0917] rounded-[3rem] transform rotate-12 shadow-2xl opacity-90"></div>
                      <div className="absolute inset-4 bg-zinc-900 rounded-[2.5rem] transform -rotate-6 shadow-lg"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Zap className="w-32 h-32 text-white drop-shadow-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 35 Section */}
            <div className="relative">
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <div className="absolute top-0 left-0 w-72 h-72 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full blur-3xl"></div>

                <div className="relative">
                  <div className="text-center mb-12">
                    <h3 className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white mb-4">
                      35
                    </h3>
                    <p className="text-xl font-semibold mb-2">
                      The Science of Local Living
                    </p>
                    <p className="text-muted-foreground">
                      Human-scale stability meets urban reality
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Radius */}
                    <div className="group bg-white dark:bg-black/40 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all">
                      <div className="relative mb-6">
                        <div className="w-full aspect-square max-w-30 mx-auto relative">
                          <div className="absolute inset-0 border-4 border-zinc-200 dark:border-zinc-700 rounded-full opacity-30"></div>
                          <div className="absolute inset-[15%] border-4 border-zinc-300 dark:border-zinc-600 rounded-full opacity-50"></div>
                          <div className="absolute inset-[30%] border-4 border-zinc-400 dark:border-zinc-500 rounded-full opacity-70"></div>
                          <div className="absolute inset-[45%] bg-[#DB0917] rounded-full flex items-center justify-center"></div>
                        </div>
                      </div>
                      <div className="text-center space-y-2">
                        <h4 className="font-bold text-lg">3 to 5 Kilometers</h4>
                        <p className="text-sm text-muted-foreground">
                          Your functional neighborhood radius
                        </p>
                      </div>
                    </div>

                    {/* Choices */}
                    <div className="group bg-white dark:bg-black/40 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all">
                      <div className="relative mb-6">
                        <div className="w-full aspect-square max-w-30 mx-auto flex items-center justify-center">
                          <div className="grid grid-cols-2 gap-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div
                                key={i}
                                className={`w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 shadow-sm flex items-center justify-center ${
                                  i === 5 ? "col-span-2 w-full" : ""
                                }`}
                              >
                                <span className="text-zinc-900 dark:text-white font-bold text-xs">
                                  {i}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-center space-y-2">
                        <h4 className="font-bold text-lg">3 to 5 Choices</h4>
                        <p className="text-sm text-muted-foreground">
                          Before your brain says &quot;too much&quot;
                        </p>
                      </div>
                    </div>

                    {/* Substitutes */}
                    <div className="group bg-white dark:bg-black/40 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all">
                      <div className="relative mb-6">
                        <div className="w-full aspect-square max-w-30 mx-auto relative flex flex-col items-center justify-center gap-2">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded-full shadow-sm w-full"
                              style={{
                                width: `${100 - i * 10}%`,
                                opacity: 1 - i * 0.1,
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="text-center space-y-2">
                        <h4 className="font-bold text-lg">
                          3 to 5 Substitutes
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Viable options in your supply chain
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center max-w-3xl mx-auto bg-white/60 dark:bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
                    <p className="text-lg leading-relaxed">
                      <span className="font-bold text-[#DB0917]">35</span>{" "}
                      isn&apos;t just a number. It&apos;s the sweet spot where{" "}
                      <span className="font-semibold">human behavior</span>,
                      <span className="font-semibold"> urban geography</span>,
                      and
                      <span className="font-semibold">
                        {" "}
                        cognitive psychology
                      </span>{" "}
                      align perfectly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final message */}
            <div className="text-center bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-12 border border-zinc-200 dark:border-zinc-800">
              <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-4">
                <span style={{ color: "#DB0917" }}>Mirchi35</span> =
                <span className="text-zinc-900 dark:text-white"> Live</span> +
                <span className="text-zinc-900 dark:text-white"> Local</span> +
                <span className="text-zinc-900 dark:text-white"> Human</span>
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Neutral, grounded, and expandable across categories. Built
                around how people actually live and discover locally.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 py-12 border-t border-border">
          <h3 className="text-3xl font-bold">
            Ready to discover what&apos;s near you?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-zinc-800 text-white font-semibold rounded-full px-8 h-12 text-base border border-zinc-700"
            >
              <Link href="/">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 text-base"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
