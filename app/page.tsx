import HeroSection from "@/components/hero-section-one";
import LogoCloud from "@/components/logo-cloud";
import WhyMirchi from "@/components/why-mirchi";
import HowItWorks from "@/components/how-it-works";
import Foundation from "@/components/foundation";
import ForVendors from "@/components/for-vendors";
import UseCase from "@/components/use-case";
import VendorEcosystem from "@/components/vendor-ecosystem";
import Pricing from "@/components/pricing";
import CallToAction from "@/components/call-to-action";
import FAQs from "@/components/faqs";
import FooterSection from "@/components/footer-two";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <WhyMirchi />
      <HowItWorks />
      <Foundation />
      <ForVendors />
      <UseCase />
      <VendorEcosystem />
      <Pricing />
      <CallToAction />
      <FAQs />
      <FooterSection />
    </>
  );
}
