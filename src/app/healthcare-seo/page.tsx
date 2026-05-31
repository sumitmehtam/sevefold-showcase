import type { Metadata } from "next";

import { ServiceLanding } from "@/components/service-landing";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Healthcare SEO",
  description:
    "Healthcare SEO services for clinics, hospitals and healthcare businesses, covering technical SEO, local SEO, content SEO and keyword strategy.",
  path: "/healthcare-seo",
});

export default function HealthcareSEOPage() {
  return <ServiceLanding slug="healthcare-seo" />;
}
