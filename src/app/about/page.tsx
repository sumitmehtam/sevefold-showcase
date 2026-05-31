import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { benefits } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "SevenFold is a digital growth partner for doctors, clinics and healthcare businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="mesh-bg pb-20 pt-36">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              title="A Healthcare Growth Team Built Like a Product Company"
              description="SevenFold brings together search strategy, website care, automation architecture and reporting for healthcare businesses that want dependable growth systems."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Reveal key={benefit}>
                <div className="rounded-lg border border-white/80 bg-white/80 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold">{benefit}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Practical execution, clear communication and a growth stack designed around patient acquisition.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
