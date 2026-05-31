import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";

export function CaseStudiesSection() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            title="Case Studies Built Around Growth, Not Vanity Metrics"
            description="Database-ready stories showing challenge, solution and result for healthcare businesses."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.05}>
              <article className="group h-full overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]">
                <div className="relative h-48 overflow-hidden" style={{ background: study.image }}>
                  <div className="absolute inset-5 rounded-lg border border-white/80 bg-white/40 shadow-inner transition-transform duration-500 group-hover:scale-105">
                    <div className="grid h-full grid-cols-3 gap-2 p-4">
                      {[study.trafficGrowth, study.keywordGrowth, study.leadGrowth].map((value, statIndex) => (
                        <div
                          key={value}
                          className="self-end rounded-md bg-white/[0.85] p-3 shadow-sm"
                          style={{ height: `${46 + statIndex * 18}%` }}
                        >
                          <p className="text-xs text-muted-foreground">+{value}%</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex h-[calc(100%-12rem)] flex-col p-6">
                  <Badge variant="secondary">{study.industry}</Badge>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-foreground">{study.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{study.challenge}</p>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <Metric label="Traffic" value={study.trafficGrowth} />
                    <Metric label="Keywords" value={study.keywordGrowth} />
                    <Metric label="Leads" value={study.leadGrowth} />
                  </div>
                  <Button asChild className="mt-6 w-full" variant="outline">
                    <Link href={`/case-studies/${study.slug}`}>
                      View Case Study
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md bg-secondary p-3">
      <p className="text-lg font-semibold text-foreground">+{value}%</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
