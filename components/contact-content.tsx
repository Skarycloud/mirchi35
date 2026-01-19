"use client";

import {
  Mail,
  MapPin,
  Phone,
  Building2,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer-two";

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-6 pt-24 md:pt-32 pb-16 md:pb-24 space-y-12 md:space-y-24">
        {/* Contact Methods (Cards) */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Email Card */}
          <Card className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all group">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="w-14 h-14 bg-[#DB0917]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="h-7 w-7 text-[#DB0917]" />
              </div>
              <h3 className="font-bold text-xl mb-3">Email Us</h3>
              <a
                href="mailto:customer.care@mirchi35.com"
                className="text-muted-foreground hover:text-[#DB0917] font-medium transition-colors break-all block"
              >
                customer.care@mirchi35.com
              </a>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all group">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="w-14 h-14 bg-[#DB0917]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="h-7 w-7 text-[#DB0917]" />
              </div>
              <h3 className="font-bold text-xl mb-3">Contact Us</h3>
              <p className="text-muted-foreground font-medium">+91 9986033010</p>
            </CardContent>
          </Card>

          {/* Location Card */}
          <Card className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all group">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="w-14 h-14 bg-[#DB0917]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-7 w-7 text-[#DB0917]" />
              </div>
              <h3 className="font-bold text-xl mb-3">Visit Us</h3>
              <address className="not-italic text-muted-foreground text-sm leading-relaxed space-y-1">
                <div className="font-medium">11, New Diagonal Rd,</div>
                <div>Jaya Nagar 1st Block,</div>
                <div>Jayanagar 3rd Block East,</div>
                <div>Jayanagar, Bengaluru,</div>
                <div className="font-medium pt-1">Karnataka 560011</div>
              </address>
            </CardContent>
          </Card>
        </div>

        {/* Company Information Section (The "Form") */}
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-6 md:p-12 border border-zinc-200 dark:border-zinc-800">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#DB0917] rounded-lg flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold truncate">Company Information</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white dark:bg-black/20 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">
                    Company Name
                  </p>
                  <p className="font-semibold text-base md:text-lg">
                    Mirchi35 Private Limited
                  </p>
                </div>
                <div className="bg-white dark:bg-black/20 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">CIN</p>
                  <p className="font-semibold text-base md:text-lg break-all">U47912KA2025PTC211865</p>
                </div>
                <div className="bg-white dark:bg-black/20 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">
                    Jurisdiction
                  </p>
                  <p className="font-semibold text-base md:text-lg">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#DB0917] rounded-lg flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold truncate">Customer Support</h2>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our customer care team is ready to assist you with any questions
                about the Mirchi35 platform.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-[#DB0917] pl-4 md:pl-6 py-2">
                  <p className="text-[10px] md:text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1 md:mb-2">
                    For General Inquiries
                  </p>
                  <a
                    href="mailto:customer.care@mirchi35.com"
                    className="text-[#DB0917] hover:text-[#DB0917]/80 text-base md:text-xl font-normal hover:underline break-all block"
                  >
                    customer.care@mirchi35.com
                  </a>
                </div>
                <div className="border-l-4 border-zinc-400 dark:border-zinc-600 pl-4 md:pl-6 py-2">
                  <p className="text-[10px] md:text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1 md:mb-2">
                    For Privacy & Data Concerns
                  </p>
                  <a
                    href="mailto:gopinath.tn@mirchi35.com"
                    className="text-foreground hover:text-[#DB0917] text-base md:text-xl font-normal hover:underline block mb-1 md:mb-2 transition-colors break-all"
                  >
                    gopinath.tn@mirchi35.com
                  </a>
                  <p className="text-[10px] md:text-sm text-muted-foreground italic">
                    Subject: &quot;Grievance related to Mirchi 35 Data
                    Privacy&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 py-12 border-t border-border">
          <h3 className="text-3xl font-bold">Ready to Get Started?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of local businesses already using Mirchi35 to reach
            nearby customers and grow their presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-zinc-800 text-white font-semibold rounded-full px-8 h-12 text-base border border-zinc-700"
            >
              <Link href="/">Get Started Free</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 text-base"
            >
              <Link href="/user-agreement">View User Agreement</Link>
            </Button>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
