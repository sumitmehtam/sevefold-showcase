import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseStudyStoryStack } from "@/components/case-study-story-stack";
import { ContactSection } from "@/components/contact-section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/assets";
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
      <section className="relative overflow-hidden pb-20 pt-36">
        <Image
          alt={study.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src={assetPath(study.image)}
        />
        <div className="absolute inset-0 bg-slate-950/[0.68]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/[0.36] via-transparent to-slate-950/[0.82]" />

        <div className="section-shell relative z-10">
          <Reveal>
            <Badge className="border-white/[0.24] bg-white/[0.16] text-white backdrop-blur-md" variant="secondary">
              {study.industry}
            </Badge>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              {study.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.78]">
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
                <div className="rounded-lg border border-white/[0.2] bg-white/[0.14] p-6 text-white shadow-sm backdrop-blur-xl">
                  <p className="text-sm font-semibold text-white/[0.68]">{label}</p>
                  <p className="mt-3 text-4xl font-semibold text-white">+{value}%</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px]">
          <Reveal className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-normal text-muted-foreground">
              Case Study Detail
            </p>
            <CaseStudyStoryStack
              items={[
                {
                  eyebrow: "About the clinic",
                  title: `About ${study.client}`,
                  copy: study.aboutClient,
                },
                {
                  eyebrow: "Challenge",
                  title: "The challenge they faced",
                  copy: study.challenge,
                },
                {
                  eyebrow: "Solution",
                  title: "The solution we provided",
                  copy: study.solution,
                },
              ]}
            />
          </Reveal>

          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <aside className="rounded-lg bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] md:p-7">
              <p className="text-sm font-semibold uppercase tracking-normal text-white/[0.62]">Results</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-normal">
                Growth we measured after launch
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/[0.72]">{study.results}</p>

              <div className="mt-7 grid gap-3">
                {[
                  ["Traffic Growth", study.trafficGrowth],
                  ["Keyword Growth", study.keywordGrowth],
                  ["Lead Growth", study.leadGrowth],
                ].map(([label, value]) => (
                  <div
                    key={label as string}
                    className="flex items-center justify-between gap-4 rounded-md border border-white/[0.12] bg-white/[0.08] p-4"
                  >
                    <span className="text-sm text-white/[0.68]">{label}</span>
                    <span className="text-2xl font-semibold">+{value}%</span>
                  </div>
                ))}
              </div>

              <Button asChild className="mt-7 w-full bg-white text-slate-950 hover:bg-blue-50" variant="outline">
                <Link href="/contact">
                  Build a Similar Plan
                  <ArrowRight />
                </Link>
              </Button>
            </aside>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
