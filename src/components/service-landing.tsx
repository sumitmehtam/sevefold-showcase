import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { servicePageContent } from "@/lib/data";

type ServiceSlug = keyof typeof servicePageContent;

export function ServiceLanding({ slug }: { slug: ServiceSlug }) {
  const service = servicePageContent[slug];

  return (
    <>
      <section className="mesh-bg pb-20 pt-32 sm:pt-40">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="flex size-12 items-center justify-center rounded-md bg-primary text-white shadow-xl shadow-blue-600/25">
              <service.icon className="size-6" />
            </div>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              {service.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{service.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  BOOK FREE CONSULTATION
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/case-studies">VIEW CASE STUDIES</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-xl p-5">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-muted-foreground">Growth plan</p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">{service.title}</h2>
                <div className="mt-6 flex flex-col gap-4">
                  {service.outcomes.map((outcome, index) => (
                    <div key={outcome} className="flex items-center gap-3 rounded-md bg-secondary p-4">
                      <span className="flex size-8 items-center justify-center rounded-md bg-white text-primary">
                        {index + 1}
                      </span>
                      <span className="text-sm font-semibold text-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          {[
            ["Strategy", "A healthcare-specific plan built around local demand, service lines and patient intent."],
            ["Execution", "Implementation sprints for pages, profiles, automation logic, reporting and maintenance."],
            ["Measurement", "Clear monthly reporting on rankings, leads, site health and operational follow-up."],
          ].map(([title, copy]) => (
            <Reveal key={title}>
              <div className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
                <CheckCircle2 className="size-6 text-emerald-500" />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FAQSection />
      <ContactSection />
    </>
  );
}
