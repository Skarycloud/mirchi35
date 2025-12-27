'use client'

import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

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
      <main className="container mx-auto px-6 py-24 max-w-5xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help! Reach out to us for any questions, support, or partnership inquiries.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Email Card */}
            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <a
                    href="mailto:Customer.care@Mirchi35.com"
                    className="text-orange-500 hover:text-orange-600 hover:underline break-all"
                  >
                    Customer.care@Mirchi35.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    Coming Soon
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Bangalore, Karnataka<br />
                    India
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Company Details */}
          <Card className="mt-12">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Company Information</h3>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Company Name</dt>
                      <dd className="font-medium">Mirchi35 Private Limited</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">CIN</dt>
                      <dd className="font-medium">U47912KA2025PTC211865</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Jurisdiction</dt>
                      <dd className="font-medium">Bangalore, Karnataka, India</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Customer Support</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-muted-foreground">
                      Our customer care team is ready to assist you with any questions about the Mirchi35 platform.
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-semibold mb-2">For General Inquiries:</p>
                      <a
                        href="mailto:Customer.care@Mirchi35.com"
                        className="text-orange-500 hover:text-orange-600 hover:underline"
                      >
                        Customer.care@Mirchi35.com
                      </a>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-semibold mb-2">For Privacy & Data Concerns:</p>
                      <a
                        href="mailto:Gopinath.TN@Mirchi35.com"
                        className="text-orange-500 hover:text-orange-600 hover:underline"
                      >
                        Gopinath.TN@Mirchi35.com
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        Subject: "Grievance related to Mirchi 35 Data Privacy"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="text-center space-y-4 py-8">
            <h3 className="text-2xl font-semibold">Ready to get started?</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join thousands of local businesses already using Mirchi35 to reach nearby customers.
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <Button asChild size="lg" className="bg-[#ff6900] hover:bg-[#ff6900]/90 text-white font-semibold border-0">
                <Link href="/">Get Started Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/user-agreement">View User Agreement</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
