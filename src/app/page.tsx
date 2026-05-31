import { AutomationShowcase } from "@/components/automation-showcase";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { FinalCTA } from "@/components/final-cta";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustedBy } from "@/components/trusted-by";
import { WhySection } from "@/components/why-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <WhySection />
      <CaseStudiesSection />
      <AutomationShowcase />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
