import type { Metadata } from "next";

import { ServiceLanding } from "@/components/service-landing";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Reputation Management",
  description:
    "Reputation management for healthcare businesses, including Google reviews, patient feedback workflows and review request automation.",
  path: "/reputation-management",
});

export default function ReputationManagementPage() {
  return <ServiceLanding slug="reputation-management" />;
}
