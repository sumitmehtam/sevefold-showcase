import type { Metadata } from "next";

import { ServiceLanding } from "@/components/service-landing";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Google Business Profile Optimization",
  description:
    "Google Business Profile optimization for clinics and healthcare practices that need better maps ranking and local visibility.",
  path: "/google-business-profile",
});

export default function GoogleBusinessProfilePage() {
  return <ServiceLanding slug="google-business-profile" />;
}
