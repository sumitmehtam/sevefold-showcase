import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Book a free consultation with SevenFold for healthcare SEO, website maintenance and AI automation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-12">
      <ContactSection />
    </div>
  );
}
