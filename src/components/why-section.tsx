import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { benefits } from "@/lib/data";

export function WhySection() {
  return (
    <section className="mesh-bg py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="relative min-h-[520px] overflow-hidden rounded-xl border border-white/80 bg-white shadow-2xl shadow-blue-900/10">
            <Image
              src="/images/hero-doctor.png"
              alt="Healthcare professional reviewing patient growth systems"
              fill
              className="object-cover object-center"
              priority
              sizes="(min-width: 1024px) 520px, 90vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/85 to-transparent p-6 pt-28">
              <div className="rounded-lg border border-blue-100 bg-white/[0.88] p-5 backdrop-blur">
                <p className="text-sm font-semibold text-foreground">Monthly Growth Brief</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ["98%", "Health"],
                    ["+150%", "SEO"],
                    ["24/7", "Monitor"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-md bg-secondary p-3 text-center">
                      <p className="text-lg font-semibold text-foreground">{value}</p>
                      <p className="text-xs text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading
            align="left"
            title="Why Clinics Choose SevenFold"
            description="We combine healthcare-specific growth strategy with the execution discipline of a SaaS product team."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-md bg-white/75 p-4 shadow-sm">
                <CheckCircle2 className="size-5 text-emerald-500" />
                <span className="text-sm font-semibold text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
