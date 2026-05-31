import type { Metadata } from "next";

import { ServiceLanding } from "@/components/service-landing";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Clinic AI Automation",
  description:
    "AI automation services for clinics, including WhatsApp automation, appointment reminders, lead qualification and review request workflows.",
  path: "/clinic-ai-automation",
});

export default function ClinicAIAutomationPage() {
  return <ServiceLanding slug="clinic-ai-automation" />;
}
