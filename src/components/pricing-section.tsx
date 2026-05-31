"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="bg-white py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            title="Plans for Every Stage of Practice Growth"
            description="Start with managed website care, then expand into SEO, automation and reputation systems."
          />
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={cn("text-sm font-semibold", !annual && "text-primary")}>Monthly</span>
          <Switch checked={annual} onCheckedChange={setAnnual} aria-label="Toggle annual billing" />
          <span className={cn("text-sm font-semibold", annual && "text-primary")}>Annual</span>
          <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
            Save 18%
          </span>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.05}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-lg border bg-white p-6 shadow-sm",
                  plan.highlighted
                    ? "border-blue-300 shadow-[0_26px_80px_rgba(37,99,235,0.22)]"
                    : "border-border",
                )}
              >
                {plan.highlighted ? (
                  <span className="absolute right-5 top-5 rounded-md bg-primary px-2 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-muted-foreground">{plan.description}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-semibold">${annual ? plan.annual : plan.monthly}</span>
                  <span className="pb-1 text-sm text-muted-foreground">/mo</span>
                </div>
                <Button className="mt-6" variant={plan.highlighted ? "default" : "outline"}>
                  BOOK FREE CONSULTATION
                </Button>
                <div className="mt-6 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="size-4 text-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
