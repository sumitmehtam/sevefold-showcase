import type { Metadata } from "next";

import { ServiceLanding } from "@/components/service-landing";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Doctor Website Maintenance",
  description:
    "Managed website maintenance for doctors and clinics, including updates, security, backups, monitoring and speed optimization.",
  path: "/doctor-website-maintenance",
});

export default function DoctorWebsiteMaintenancePage() {
  return <ServiceLanding slug="doctor-website-maintenance" />;
}
