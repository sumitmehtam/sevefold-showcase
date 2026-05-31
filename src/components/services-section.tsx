import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            title="Digital Growth Systems for Modern Healthcare Teams"
            description="Every service is built around patient acquisition, operational reliability and measurable clinic growth."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <Link href={`/${service.slug}`}>
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_60px_rgba(37,99,235,0.12)]">
                  <CardHeader>
                    <div className="mb-4 flex size-11 items-center justify-center rounded-md bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <service.icon className="size-5" />
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle>{service.title}</CardTitle>
                      <ArrowUpRight className="size-5 text-slate-300 transition-colors group-hover:text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
                    <div className="mt-6 flex flex-col gap-3">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                          <Check className="size-4 text-emerald-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
