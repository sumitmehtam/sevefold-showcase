import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactSection } from "@/components/contact-section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {};
  }

  return pageMetadata({
    title: study.title,
    description: study.results,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <section className="mesh-bg pb-20 pt-36">
        <div className="section-shell">
          <Reveal>
            <Badge variant="secondary">{study.industry}</Badge>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              {study.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              {study.client}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              ["Traffic Growth", study.trafficGrowth],
              ["Keyword Growth", study.keywordGrowth],
              ["Lead Growth", study.leadGrowth],
            ].map(([label, value]) => (
              <Reveal key={label as string}>
                <div className="rounded-lg border border-white/80 bg-white/[0.85] p-6 shadow-sm">
                  <p className="text-sm font-semibold text-muted-foreground">{label}</p>
                  <p className="mt-3 text-4xl font-semibold text-foreground">+{value}%</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          {[
            ["Challenge", study.challenge],
            ["Solution", study.solution],
            ["Results", study.results],
          ].map(([label, copy]) => (
            <Reveal key={label}>
              <article className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold">{label}</h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
