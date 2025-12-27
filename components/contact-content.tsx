'use client'

import { ArrowLeft, Mail, MapPin, Phone, Send } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ContactContent() {
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
        <div className="space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;re here to help! Reach out to us for any questions, support, or partnership inquiries.
            </p>
          </div>

          {/* Contact Methods - Enhanced Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="relative overflow-hidden bg-linear-to-br from-orange-50 via-orange-50 to-orange-100 dark:from-orange-950/20 dark:via-orange-950/20 dark:to-orange-900/20 rounded-2xl p-8 hover:scale-105 transition-transform border-2 border-[#ff6900]/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6900]/10 rounded-full blur-3xl"></div>
              <div className="relative space-y-4">
                <div className="w-14 h-14 bg-[#ff6900] rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-3">Email Us</h3>
                  <a
                    href="mailto:customer.care@mirchi35.com"
                    className="text-[#ff6900] hover:text-[#ff6900]/80 font-medium hover:underline break-all block"
                  >
                    customer.care@mirchi35.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="relative overflow-hidden bg-linear-to-br from-blue-50 via-blue-50 to-blue-100 dark:from-blue-950/20 dark:via-blue-950/20 dark:to-blue-900/20 rounded-2xl p-8 hover:scale-105 transition-transform border-2 border-blue-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative space-y-4">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-3">Call Us</h3>
                  <p className="text-muted-foreground font-medium">
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="relative overflow-hidden bg-linear-to-br from-green-50 via-green-50 to-green-100 dark:from-green-950/20 dark:via-green-950/20 dark:to-green-900/20 rounded-2xl p-8 hover:scale-105 transition-transform border-2 border-green-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
              <div className="relative space-y-4">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-3">Visit Us</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    No. 220, 4th Main,<br />
                    Chamarajpet,<br />
                    Bangalore - 560018
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Information Section */}
          <div className="relative overflow-hidden bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950/50 dark:to-zinc-900/50 rounded-3xl p-8 md:p-12 border border-border">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff6900]/5 rounded-full blur-3xl"></div>
            <div className="relative grid md:grid-cols-2 gap-12">
              {/* Company Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#ff6900] rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Company Information</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Company Name</p>
                    <p className="font-semibold text-lg">Mirchi35 Private Limited</p>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">CIN</p>
                    <p className="font-semibold text-lg">U47912KA2025PTC211865</p>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Jurisdiction</p>
                    <p className="font-semibold text-lg">Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Customer Support */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Customer Support</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our customer care team is ready to assist you with any questions about the Mirchi35 platform.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#ff6900] pl-6 py-2">
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">For General Inquiries</p>
                    <a
                      href="mailto:customer.care@mirchi35.com"
                      className="text-[#ff6900] hover:text-[#ff6900]/80 text-xl font-normal hover:underline"
                    >
                      customer.care@mirchi35.com
                    </a>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">For Privacy & Data Concerns</p>
                    <a
                      href="mailto:gopinath.tn@mirchi35.com"
                      className="text-blue-500 hover:text-blue-600 text-xl font-normal hover:underline block mb-2"
                    >
                      gopinath.tn@mirchi35.com
                    </a>
                    <p className="text-sm text-muted-foreground italic">
                      Subject: &quot;Grievance related to Mirchi 35 Data Privacy&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden bg-linear-to-r from-[#ff6900]/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 border-2 border-[#ff6900]/20 text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6900]/5 rounded-full blur-3xl"></div>
            <div className="relative space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of local businesses already using Mirchi35 to reach nearby customers and grow their presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button asChild size="lg" className="bg-[#ff6900] hover:bg-[#ff6900]/90 text-white font-semibold border-0 px-8">
                  <Link href="/">Get Started Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link href="/user-agreement">View User Agreement</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
