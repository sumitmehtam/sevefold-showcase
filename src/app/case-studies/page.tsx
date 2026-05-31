import type { Metadata } from "next";

import { CaseStudiesSection } from "@/components/case-studies-section";
import { ContactSection } from "@/components/contact-section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies",
  description: "Healthcare growth case studies across SEO, website maintenance, automation and reputation systems.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <div className="pt-12">
      <CaseStudiesSection />
      <ContactSection />
    </div>
  );
}
