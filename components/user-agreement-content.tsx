"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UserAgreementContent() {
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
          <h1 className="text-4xl font-bold mb-8">User Agreement v1.01</h1>

          <div className="space-y-8 text-muted-foreground">
            <p className="text-lg italic">
              Below is the FINAL, lawyer-review clean copy of the Mirchi35
              Vendor EULA + Food Safety Compliance Addendum, with the updated
              jurisdiction clause merged.
            </p>

            <hr className="my-8 border-border" />

            {/* DOCUMENT 1 */}
            <div className="bg-muted/50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                DOCUMENT 1
              </h2>
            </div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Mirchi35 Vendor App – End User License Agreement (EULA)
              </h2>
              <p className="italic mb-6">
                (Applicable to Vendors including Food Outlets, Restaurants, Chat
                Shops, and Similar Businesses)
              </p>

              <p className="mb-6">
                This End User License Agreement ("Agreement") governs access to
                and use of the Mirchi35 App ("App"), operated by Mirchi35.com
                ("Mirchi35", "we", "us").
              </p>

              <p className="mb-6 font-semibold text-foreground">
                By downloading, registering, or using the App, you ("Vendor",
                "you") agree to be legally bound by this Agreement.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                1. Nature of Services
              </h3>
              <p className="mb-4">
                The App provides a digital content curation and publishing
                service that enables Vendors to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Create promotional images and related marketing content; and
                </li>
                <li>
                  Publish such content on Mirchi35-managed channels and
                  supported third-party social media platforms.
                </li>
              </ul>
              <p className="mt-4">
                The App functions solely as a facilitation and publishing tool
                and does not involve the sale, preparation, delivery,
                fulfillment, or pricing of any goods or services.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                2. Platform Role & Scope
              </h3>
              <p className="mb-4">
                Mirchi35 operates solely as a technology platform provider.
              </p>
              <p className="mb-4">Mirchi35:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Does not sell, prepare, deliver, or distribute food or other
                  products;
                </li>
                <li>Does not process customer payments;</li>
                <li>
                  Does not act as a merchant, agent, reseller, broker, or
                  representative of any Vendor;
                </li>
                <li>
                  Does not endorse, certify, or guarantee Vendor products,
                  services, pricing, or claims.
                </li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                All sales, food preparation, and customer interactions occur
                independently between the Vendor and its customers.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                3. Eligibility & Business Authorization
              </h3>
              <p className="mb-4">The Vendor represents and warrants that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The business is lawfully established and authorized to
                  operate;
                </li>
                <li>
                  All required trade licenses, business registrations, and
                  statutory approvals are valid and current;
                </li>
                <li>
                  All information, offers, pricing, and representations made
                  through the App are accurate and lawful.
                </li>
              </ul>
              <p className="mt-4">
                Mirchi35 relies on Vendor declarations and does not
                independently verify such authorizations.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                4. Compliance With Laws
              </h3>
              <p className="mb-4">The Vendor agrees to comply with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All applicable central, state, and local laws and regulations;
                </li>
                <li>Consumer protection laws;</li>
                <li>Taxation laws (including GST, where applicable);</li>
                <li>
                  Advertising, content, and platform policies applicable to the
                  App.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                5. Vendor Responsibility & Liability
              </h3>
              <p className="mb-4">The Vendor is solely responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Quality, safety, hygiene, and legality of all products and
                  services;
                </li>
                <li>Pricing, availability, and accuracy of promotions;</li>
                <li>Customer service and resolution of customer complaints.</li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Any illness, injury, dissatisfaction, loss, or damage suffered
                by customers arising from the Vendor's products or services
                shall be the exclusive responsibility of the Vendor.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                6. Vendor Content & Intellectual Property
              </h3>
              <p className="mb-4">
                The Vendor confirms that all content uploaded (including images,
                logos, text, offers, and visuals):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Is owned by the Vendor or lawfully licensed; and</li>
                <li>
                  Does not infringe intellectual property, privacy, or other
                  legal rights of third parties.
                </li>
              </ul>
              <p className="mt-4">
                The Vendor grants Mirchi35 a non-exclusive, royalty-free,
                revocable license to host, format, display, and publish such
                content for platform and promotional purposes.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                7. Content Moderation, Review & Reporting
              </h3>
              <p className="mb-4">
                Mirchi35 may, but is not obligated to, review, scan, monitor, or
                moderate Vendor content through automated systems, manual
                processes, or a combination thereof, to comply with applicable
                laws or platform policies.
              </p>
              <p className="mb-4">Such review or moderation:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Does not constitute approval, endorsement, certification, or
                  validation of the content; and
                </li>
                <li>
                  Does not transfer any responsibility or legal liability to
                  Mirchi35.
                </li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                All legal liability arising out of Vendor-submitted content
                shall rest solely with the Vendor, including claims relating to
                false advertising, misrepresentation, intellectual property
                infringement, consumer harm, or regulatory violations,
                regardless of whether the content was reviewed, moderated,
                approved, or published by Mirchi35.
              </p>
              <p className="mt-4">
                Mirchi35 reserves the right to remove or disable access to any
                content at its discretion.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                8. Prohibited Content & Products
              </h3>
              <p className="mb-4">
                The Vendor shall not upload, publish, or promote:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Illegal, unsafe, misleading, or restricted products or
                  services; or
                </li>
                <li>
                  Content prohibited under applicable law or platform policies.
                </li>
              </ul>
              <p className="mt-4">
                Publication or hosting of such content by Mirchi35 shall not
                imply responsibility or liability. Violations may result in
                suspension or termination.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                9. Third-Party Platforms & Services
              </h3>
              <p className="mb-4">
                Vendor content may be published on third-party platforms such as
                Facebook, Instagram, and WhatsApp, which operate under their own
                terms, policies, and algorithms.
              </p>
              <p>
                Mirchi35 does not control such platforms and shall not be
                responsible for changes in content appearance, reach,
                compression, availability, or performance caused by third-party
                systems.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                10. Health & Safety Disclaimer
              </h3>
              <p className="mb-4">
                The App does not provide medical, nutritional, or health advice.
              </p>
              <p>
                Any food-related or product-related claims are made solely by
                the Vendor and are not verified, endorsed, or certified by
                Mirchi35.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                11. Cybersecurity & System Integrity
              </h3>
              <p className="mb-4">
                Mirchi35 implements reasonable administrative, technical, and
                organizational measures designed to protect the App and its
                systems against unauthorized access, data breaches, and cyber
                security threats.
              </p>
              <p className="mb-4">
                The Vendor acknowledges that no digital platform can be
                completely immune from cyber attacks, hacking attempts, malware,
                or other unforeseen security incidents.
              </p>
              <p className="font-semibold text-foreground">
                Where Vendor content or data is altered, modified, accessed, or
                misused due to such unforeseen cyber incidents beyond the
                reasonable control of Mirchi35, Mirchi35 shall not be
                responsible or liable for any resulting loss, damage, or
                consequences.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                12. Indemnification
              </h3>
              <p className="mb-4">
                The Vendor agrees to indemnify and hold harmless Mirchi35 from
                any claims, damages, penalties, losses, or expenses arising
                from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vendor products or services;</li>
                <li>Regulatory or legal violations;</li>
                <li>Customer complaints or disputes; or</li>
                <li>Vendor-submitted content or representations.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                13. Suspension & Termination
              </h3>
              <p className="mb-4">
                Mirchi35 may suspend or restrict access to the App or remove
                content where required to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comply with legal or regulatory obligations;</li>
                <li>Enforce platform policies; or</li>
                <li>Prevent harm to users or the platform.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                14. Limitation of Liability
              </h3>
              <p className="mb-4">
                To the maximum extent permitted by applicable law, Mirchi35
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including loss of profits,
                business, reputation, or data.
              </p>
              <p className="font-semibold text-foreground">
                Any liability of Mirchi35, if established, shall be strictly
                limited to the amount actually paid by the Vendor to Mirchi35
                under the specific invoice giving rise to such claim, without
                any additional penalty, fee, interest, damages, or other costs
                of any nature whatsoever.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                15. Governing Law & Jurisdiction
              </h3>
              <p className="mb-4">
                This Agreement shall be governed by and construed in accordance
                with the laws of India.
              </p>
              <p className="font-semibold text-foreground">
                Subject to applicable law, the Consumer Courts, Civil Courts,
                and the High Court at Bengaluru (Bangalore), State of Karnataka,
                shall have exclusive jurisdiction over all disputes, claims, or
                proceedings arising out of or in connection with this Agreement.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                16. Acceptance
              </h3>
              <p>
                By clicking "I Agree", the Vendor confirms legal authority to
                bind the business and acceptance of this Agreement.
              </p>
            </section>

            <hr className="my-12 border-border" />

            {/* DOCUMENT 2 */}
            <div className="bg-muted/50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                DOCUMENT 2
              </h2>
            </div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Food Safety Compliance Addendum
              </h2>
              <p className="italic mb-6">
                (Mandatory for Food Outlets, Restaurants & Similar Food
                Businesses)
              </p>

              <p className="mb-6 font-semibold text-foreground">
                This Food Safety Compliance Addendum ("Addendum") forms an
                integral part of the Mirchi35 Vendor App EULA.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                1. Purpose & Allocation of Responsibility
              </h3>
              <p>
                This Addendum contractually allocates food safety
                responsibilities between Mirchi35 and the Vendor and does not
                constitute food safety advice, certification, inspection, or
                approval.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                2. Food Business Responsibility
              </h3>
              <p className="mb-4">
                The Vendor confirms that it is a Food Business Operator, where
                applicable, and is solely responsible for compliance with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Food Safety and Standards Act, 2006; and</li>
                <li>
                  Applicable food safety rules, regulations, standards, and
                  guidelines.
                </li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Mirchi35 is not a Food Business Operator.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                3. Consumer Health & Liability
              </h3>
              <p className="font-semibold text-foreground">
                Any food-related illness, food poisoning, allergic reaction,
                injury, or adverse health impact arising from preparation,
                storage, sale, or consumption of Vendor food products shall be
                the sole responsibility of the Vendor.
              </p>
              <p className="mt-4">
                Mirchi35 bears no liability for such incidents.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                4. Inspections, Notices & Penalties
              </h3>
              <p className="mb-4">
                All inspections, notices, penalties, prosecutions, or
                proceedings initiated by food safety or regulatory authorities
                shall be handled solely by the Vendor.
              </p>
              <p>
                Mirchi35 may suspend or restrict access upon receipt of such
                notice without independent verification.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                5. Unsafe or Prohibited Food
              </h3>
              <p>
                The Vendor shall not promote or sell food that is unsafe,
                adulterated, misbranded, expired, or prohibited under applicable
                law or regulatory directive.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                6. Indemnification
              </h3>
              <p>
                The Vendor agrees to indemnify Mirchi35 against all claims,
                penalties, losses, or expenses arising from food safety
                violations or consumer harm.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                7. Acknowledgment
              </h3>
              <p>
                Acceptance of this Addendum does not imply endorsement,
                inspection, certification, or approval of Vendor food products
                by Mirchi35.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
