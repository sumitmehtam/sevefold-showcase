import type { Metadata } from "next";

export const siteConfig = {
  name: "SEVENFOLD",
  url: "https://sevenfold.health",
  description:
    "Website maintenance, healthcare SEO, Google Business Profile optimization and AI automation for doctors, clinics and healthcare businesses.",
  phone: "+1-000-000-0000",
  email: "hello@sevenfold.health",
};

export function pageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} healthcare growth partner`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    serviceType: [
      "Healthcare SEO",
      "Website Maintenance",
      "AI Automation",
      "Google Business Profile Optimization",
      "Reputation Management",
    ],
    areaServed: "United States",
    audience: {
      "@type": "Audience",
      audienceType: "Doctors, clinics, hospitals and healthcare practices",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "sales",
    },
  };
}
