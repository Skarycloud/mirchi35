'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function DeleteAccountContent() {
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
          <h1 className="text-4xl font-bold mb-8">Delete Account &amp; Data Request</h1>

          <div className="space-y-6 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">Effective Date: 10 January 2026</p>
              <p className="font-semibold text-foreground">Last Updated: 10 January 2026</p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Entity: Mirchi35 Private Limited</p>
              <p className="font-semibold text-foreground">CIN: U47912KA2025PTC211865</p>
            </div>

            <p>
              This account and data deletion policy applies to all mobile applications and services operated by Mirchi35 Private Limited, including but not limited to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Mirchi35 Studio (Vendor / Business App)</li>
              <li>Mirchi35 Pulse (Customer / User App)</li>
            </ul>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Who Can Request Deletion</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Customers using Mirchi35 Pulse</li>
                <li>Vendors, merchants, and creators using Mirchi35 Studio</li>
                <li>Business partners with registered Mirchi35 accounts</li>
                <li>Parents or legal guardians may request deletion of accounts or data belonging to minors (under 18 years of age) who may have accessed or registered on the Mirchi35 platform inadvertently or without authorization</li>
              </ul>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">How to Request Account Deletion</h2>
              <p className="mb-4">
                You may request deletion of your Mirchi35 account at any time, even if the app has been uninstalled.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Steps</h3>
              <p className="mb-4"><strong>Email:</strong> support@mirchi35.com</p>
              <p className="mb-4"><strong>Subject line:</strong> &quot;Delete My Mirchi35 Account&quot;</p>
              
              <p className="mb-4">Include in the email:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Registered email address or mobile number</li>
                <li>App name (Mirchi35 Studio or Mirchi35 Pulse)</li>
                <li>Account type (Customer / Vendor / Partner)</li>
                <li>Business name (required for Vendors)</li>
              </ul>

              <p className="mt-4">
                Requests without sufficient details may be delayed for verification purposes.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Additional Requirements for Minor Deletion Requests</h3>
              <p className="mb-4">
                If the deletion request is submitted on behalf of a minor (under 18 years of age), the parent or legal guardian must additionally include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Parent or legal guardian full name</li>
                <li>Relationship to the minor</li>
                <li>Contact email address and/or phone number</li>
                <li>Verification ID (any one of the following, with sensitive numbers partially masked):
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Government-issued ID of parent or guardian (e.g., Aadhaar / Passport / Driving License), or</li>
                    <li>Any official document reasonably establishing guardianship</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4">
                Mirchi35 will use this information solely for verification purposes and will not retain identification documents beyond what is legally required.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Verification &amp; Processing</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mirchi35 may request additional information solely to verify identity or guardianship</li>
                <li>Verified deletion requests are processed within 7–30 days</li>
                <li>All minor-related personal data, once identified, will be permanently deleted or anonymized</li>
                <li>Mirchi35 does not knowingly collect personal data from individuals under 18 years of age</li>
              </ul>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data That Will Be Deleted</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Mirchi35 Pulse (Customer App)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal profile information</li>
                <li>App usage and interaction data</li>
                <li>Order, activity, and engagement history</li>
                <li>Device identifiers linked to the account</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Mirchi35 Studio (Vendor App)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vendor account and login credentials</li>
                <li>Business listing details and promotional content</li>
                <li>Uploaded images, offers, and marketing material</li>
                <li>Performance metrics, ratings, and analytics</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Business Partners</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Partner identifiers and integration data</li>
                <li>Operational and support-related records</li>
              </ul>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Retention &amp; Exceptions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deletion requests are completed within 7-30 days</li>
                <li>Certain records may be retained temporarily to comply with:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Indian legal, taxation, or regulatory requirements</li>
                    <li>Fraud prevention or dispute resolution</li>
                    <li>Enforcement of contractual obligations</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4">
                Any retained data is securely stored and deleted after the mandatory retention period.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Important Notes</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account deletion is permanent and irreversible</li>
                <li>Deleted accounts cannot be restored</li>
                <li>Vendors remain responsible for obligations incurred prior to deletion</li>
                <li>Deletion may result in loss of access to all Mirchi35 services</li>
              </ul>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Grievance Officer (Data Privacy)</h2>
              <div className="space-y-2">
                <p><strong>Name:</strong> Gopinath TN</p>
                <p><strong>Designation:</strong> Head – Technology / Cloud Services</p>
                <p><strong>Email:</strong> gopinath.tn@mirchi35.com</p>
                <p><strong>Subject:</strong> Grievance related to Mirchi35 Data Privacy</p>
              </div>
              <p className="mt-4">
                Grievances will be acknowledged and resolved within statutory timelines.
              </p>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Storage &amp; Jurisdiction</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All data is stored and processed within India.</li>
                <li>Governing law: India</li>
                <li>Jurisdiction: Bengaluru, Karnataka</li>
              </ul>
            </section>

            <hr className="my-8 border-border" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Related Policies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/user-agreement" className="text-primary hover:underline">
                    User Agreement
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
