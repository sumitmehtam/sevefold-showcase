import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScroll } from "@/components/smooth-scroll";
import { organizationSchema, siteConfig } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SEVENFOLD | Healthcare SEO, Website Maintenance and AI Automation",
    template: "%s | SEVENFOLD",
  },
  description: siteConfig.description,
  applicationName: "SEVENFOLD",
  authors: [{ name: "SEVENFOLD" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SEVENFOLD | Digital Growth Partner for Healthcare Businesses",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "SEVENFOLD",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEVENFOLD | Digital Growth Partner for Healthcare Businesses",
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
