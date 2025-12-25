'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PrivacyPolicyContent() {
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
      <main className="container mx-auto px-6 py-24 max-w-4xl">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">Effective Date: 10 January 2026</p>
              <p className="font-semibold text-foreground">Last Updated: 10 January 2026</p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Entity Name: Mirchi35 Private Limited</p>
              <p className="font-semibold text-foreground">CIN: U47912KA2025PTC211865</p>
            </div>

            <p>
              Mirchi35 Private Limited ("Mirchi35", "we", "our", "us") respects your privacy and is committed to protecting personal, transactional, vendor, and business partner data shared on the Mirchi35 platform.
            </p>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. SCOPE OF THIS POLICY</h2>
              <p className="mb-4">This Privacy Policy applies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Customers using the Mirchi35 platform</li>
                <li>Vendors / merchants listed on Mirchi35</li>
                <li>Business partners integrated with or supporting Mirchi35 services</li>
                <li>All services, features, and transactions conducted within the Mirchi35 ecosystem</li>
              </ul>
              <p className="mt-4">
                This policy does not apply to external third-party websites or services not controlled by Mirchi35.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. INFORMATION WE COLLECT</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">2.1 User Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, mobile number, email address</li>
                <li>Device and app information</li>
                <li>Location data (only with user permission)</li>
                <li>Platform usage data</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">2.2 Transaction Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Order details and transaction history</li>
                <li>Payment mode (no card or bank credentials stored)</li>
                <li>Order fulfillment status</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">2.3 Vendor Service Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Business and listing details</li>
                <li>Pricing, availability, and performance metrics</li>
                <li>Ratings, feedback, and dispute records</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">2.4 Business Partner Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Partner identifiers and contact details</li>
                <li>Service integration and operational data</li>
                <li>Compliance and support-related information</li>
              </ul>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. PURPOSE OF DATA USE</h2>
              <p className="mb-4">Data is used strictly within the Mirchi35 platform to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enable discovery, orders, and transactions</li>
                <li>Provide customer, vendor, and partner support</li>
                <li>Improve platform security and performance</li>
                <li>Generate analytics and insights for value-based services</li>
                <li>Enhance user experience and service optimization</li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Mirchi35 does not sell or license personal or business data.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. DATA SHARING & DISCLOSURE</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">4.1 Internal Platform Sharing</h3>
              <p>
                Limited data may be shared between users, vendors, and business partners solely to enable platform services.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">4.2 Business Partners</h3>
              <p className="mb-4">Data may be shared with verified business partners who:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Are contractually bound by confidentiality and data protection obligations</li>
                <li>Use data only to provide services to Mirchi35</li>
                <li>Are prohibited from selling or misusing data</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">4.3 Legal Requirements</h3>
              <p>
                Data may be disclosed if required by law or government authorities.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. CYBERSECURITY & DATA PROTECTION</h2>
              <p className="mb-4">Mirchi35 implements:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encrypted data transmission</li>
                <li>Secure access controls</li>
                <li>Continuous monitoring and audits</li>
              </ul>
              <p className="mt-4">
                Despite best efforts, no system is completely secure. Mirchi35 is not liable for breaches caused by force majeure, advanced cyber attacks, or user negligence.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. DATA RETENTION</h2>
              <p>
                Data is retained only as long as necessary for operations, compliance, or dispute resolution, after which it may be anonymized or deleted.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. DATA LOCALIZATION POLICY</h2>
              <p className="mb-4">
                All personal data, transactional data, vendor data, and business partner data collected by Mirchi35 are stored and processed on cloud data centers operating within the geographical jurisdiction of the Republic of India.
              </p>
              <p>
                Mirchi35 does not transfer or store such data outside Indian territory, except where expressly permitted or required under applicable Indian law.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. RIGHTS OF USERS, VENDORS & PARTNERS</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and correct your data</li>
                <li>Withdraw consent for optional processing</li>
                <li>Request deletion subject to legal obligations</li>
              </ul>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. GRIEVANCE REDRESSAL OFFICER</h2>
              <p className="mb-4">
                In accordance with applicable Indian data protection laws, Mirchi35 has appointed a Grievance Officer for data privacy-related concerns.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold text-foreground">Name: Gopinath TN</p>
                <p className="font-semibold text-foreground">Designation: Head – Technology / Cloud Services</p>
                <p className="font-semibold text-foreground">Email ID: Gopinath.TN@Mirchi35.com</p>
                <p className="font-semibold text-foreground">Subject Line to be used: "Grievance related to Mirchi 35 Data Privacy"</p>
              </div>
              <p className="mt-4">
                Mirchi35 shall acknowledge and address grievances within timelines prescribed under applicable law.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. COOKIES & ANALYTICS</h2>
              <p>
                Mirchi35 may use cookies or similar technologies to improve platform functionality and analytics.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. CHILDREN'S PRIVACY</h2>
              <p>
                Mirchi35 does not knowingly collect data from individuals under 18 years of age.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. POLICY UPDATES</h2>
              <p>
                This Privacy Policy may be updated periodically. Continued use of the platform constitutes acceptance of the updated policy.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">13. CONTACT & JURISDICTION</h2>
              <p className="font-semibold text-foreground">General Contact Email: support@Mirchi35.com</p>
              <p className="font-semibold text-foreground">Jurisdiction: Bangalore, Karnataka, India</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
