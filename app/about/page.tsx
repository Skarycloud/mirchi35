'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Zap, Users, Target, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple header with back arrow only */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-lg border-b border-black/5">
        <div className="container mx-auto px-6 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="space-y-12">
          {/* Header with Visual */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">About Mirchi35</h1>
              <p className="text-xl text-muted-foreground">
                60-Second Founder Pitch
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Floating Cards Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl transform rotate-6 flex items-center justify-center">
                      <Zap className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-br from-[#ff6900] to-orange-600 rounded-2xl shadow-xl transform -rotate-6 flex items-center justify-center">
                      <Target className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-linear-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl flex items-center justify-center">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <p className="text-2xl leading-relaxed font-semibold">
                  Mirchi35 is a live discovery platform for local commerce.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  We help people see what&apos;s cooking, what&apos;s on sale, and what&apos;s happening around them right now, in their neighborhood.
                </p>
              </div>

              {/* Value Props Cards */}
              <div className="grid md:grid-cols-3 gap-6 not-prose">
                <div className="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Live Discovery</h3>
                  <p className="text-sm text-muted-foreground">Real-time updates from your neighborhood</p>
                </div>

                <div className="bg-linear-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-[#ff6900] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Hyper Local</h3>
                  <p className="text-sm text-muted-foreground">Focus on what&apos;s relevant near you</p>
                </div>

                <div className="bg-linear-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Community First</h3>
                  <p className="text-sm text-muted-foreground">Built for local vendors and consumers</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#ff6900] pl-6 space-y-4">
              <p className="text-lg font-semibold">
                We&apos;re not a delivery app. We&apos;re not a discount engine.
              </p>
              <p className="text-lg">
                Local commerce in India isn&apos;t broken local discovery is.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                People already trust kiranas, darshinis, street vendors, and local services.
                What&apos;s missing is a simple way to discover what&apos;s available nearby without discounts or delivery pressure.
              </p>

              <p className="text-lg leading-relaxed">
                We don&apos;t touch pricing, inventory, or fulfillment.
                We focus on relevance, not speed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-muted rounded-2xl p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our First User is the Vendor</h2>
                <p className="text-lg leading-relaxed">
                  Vendors already advertise visually through WhatsApp statuses and photos.
                  We organize that behavior into a clean local discovery layer.
                  Consumers follow organically.
                </p>
              </div>
              <div className="relative">
                <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                  <Image
                    src="/assets/vendor-ecosystem.png"
                    className="rounded-[15px] shadow-lg"
                    alt="Vendor ecosystem"
                    width={600}
                    height={462}
                  />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-linear-to-br from-[#ff6900]/5 to-orange-500/5 rounded-3xl p-8 border-2 border-[#ff6900]/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6900]/5 rounded-full blur-3xl"></div>
              <div className="relative space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff6900] rounded-full flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed">
                      We never charge for presence.
                      We monetize later through optional control and amplification.
                    </p>

                    <p className="text-xl font-bold text-[#ff6900]">
                      Mirchi35 is the infrastructure layer for local commerce. Built to last, not to burn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why the Name Section */}
            <div className="mt-16 pt-12 border-t-2 border-border">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Why <span className="text-[#ff6900]">Mirchi</span><span className="text-blue-500">35</span>?
                </h2>
                <p className="text-lg text-muted-foreground">The story behind our name</p>
              </div>

              <div className="space-y-16">
                {/* Mirchi Section - Redesigned */}
                <div className="relative">
                  <div className="bg-linear-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-yellow-950/20 rounded-3xl p-8 md:p-12 overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6900]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>

                    <div className="relative grid md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className="inline-block">
                          <h3 className="text-5xl md:text-6xl font-black text-[#ff6900] mb-2">
                            MIRCHI
                          </h3>
                          <div className="h-2 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"></div>
                        </div>
                        <div className="space-y-4">
                          <p className="text-xl font-semibold">Live. Sensory. Discovery.</p>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            Like the spice that awakens your senses, Mirchi represents what&apos;s <span className="font-bold text-foreground">fresh</span>,
                            <span className="font-bold text-foreground"> hot</span>, and <span className="font-bold text-foreground">happening right now</span> in your neighborhood.
                          </p>
                          <div className="flex gap-3 flex-wrap">
                            <span className="px-4 py-2 bg-red-500/20 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">Fresh</span>
                            <span className="px-4 py-2 bg-orange-500/20 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">Hot</span>
                            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium">Now</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="relative w-64 h-64">
                          {/* Chili pepper illustration representation */}
                          <div className="absolute inset-0 bg-linear-to-br from-red-500 to-[#ff6900] rounded-[3rem] transform rotate-12 shadow-2xl"></div>
                          <div className="absolute inset-4 bg-linear-to-br from-orange-400 to-red-500 rounded-[2.5rem] transform -rotate-6"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Zap className="w-32 h-32 text-white drop-shadow-2xl animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 35 Section - Completely Redesigned */}
                <div className="relative">
                  <div className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 rounded-3xl p-8 md:p-12 overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

                    <div className="relative">
                      <div className="text-center mb-12">
                        <h3 className="text-5xl md:text-6xl font-black text-blue-600 mb-4">35</h3>
                        <p className="text-xl font-semibold mb-2">The Science of Local Living</p>
                        <p className="text-muted-foreground">Human-scale stability meets urban reality</p>
                      </div>

                      {/* Visual representation of 3-5 concept */}
                      <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* Radius */}
                        <div className="group">
                          <div className="relative mb-6">
                            <div className="w-full aspect-square max-w-50 mx-auto relative">
                              {/* Concentric circles representing radius */}
                              <div className="absolute inset-0 border-4 border-blue-300 rounded-full opacity-30"></div>
                              <div className="absolute inset-[15%] border-4 border-blue-400 rounded-full opacity-50"></div>
                              <div className="absolute inset-[30%] border-4 border-blue-500 rounded-full opacity-70"></div>
                              <div className="absolute inset-[45%] bg-blue-600 rounded-full flex items-center justify-center">
                              </div>
                            </div>
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="font-bold text-lg">3 to 5 Kilometers</h4>
                            <p className="text-sm text-muted-foreground">Your functional neighborhood radius</p>
                          </div>
                        </div>

                        {/* Choices */}
                        <div className="group">
                          <div className="relative mb-6">
                            <div className="w-full aspect-square max-w-50 mx-auto flex items-center justify-center">
                              <div className="grid grid-cols-2 gap-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <div
                                    key={i}
                                    className={`w-16 h-16 rounded-xl bg-linear-to-br from-[#ff6900] to-orange-600 shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 ${
                                      i === 5 ? 'col-span-2' : ''
                                    }`}
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                  >
                                    <span className="text-white font-bold text-xl">{i}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="font-bold text-lg">3 to 5 Choices</h4>
                            <p className="text-sm text-muted-foreground">Before your brain says &quot;too much&quot;</p>
                          </div>
                        </div>

                        {/* Substitutes */}
                        <div className="group">
                          <div className="relative mb-6">
                            <div className="w-full aspect-square max-w-50 mx-auto relative flex items-center justify-center">
                              <div className="space-y-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <div
                                    key={i}
                                    className="h-8 bg-linear-to-r from-green-500 to-emerald-600 rounded-lg shadow-md transition-all group-hover:translate-x-2"
                                    style={{
                                      width: `${180 - i * 20}px`,
                                      animationDelay: `${i * 0.1}s`
                                    }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="font-bold text-lg">3 to 5 Substitutes</h4>
                            <p className="text-sm text-muted-foreground">Viable options in your supply chain</p>
                          </div>
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="text-center max-w-3xl mx-auto bg-background/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                        <p className="text-lg leading-relaxed">
                          <span className="font-bold text-[#ff6900]">35</span> isn&apos;t just a number.
                          It&apos;s the sweet spot where <span className="font-semibold">human behavior</span>,
                          <span className="font-semibold"> urban geography</span>, and
                          <span className="font-semibold"> cognitive psychology</span> align perfectly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final message */}
                <div className="text-center bg-linear-to-r from-[#ff6900]/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12">
                  <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-4">
                    <span className="text-[#ff6900]">Mirchi35</span> =
                    <span className="text-red-500"> Live</span> +
                    <span className="text-blue-500"> Local</span> +
                    <span className="text-purple-500"> Human</span>
                  </p>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Neutral, grounded, and expandable across categories.
                    Built around how people actually live and discover locally.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center space-y-6 py-12 border-t border-border">
            <h3 className="text-2xl font-semibold">Ready to discover what&apos;s near you?</h3>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-[#ff6900] hover:bg-[#ff6900]/90 text-white font-semibold border-0">
                <Link href="/">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
