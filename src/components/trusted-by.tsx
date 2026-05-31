import { Stethoscope } from "lucide-react";

import { trustLogos } from "@/lib/data";

export function TrustedBy() {
  const logos = [...trustLogos, ...trustLogos];

  return (
    <section className="overflow-hidden border-y border-border bg-white py-6">
      <div className="section-shell">
        <div className="flex items-center gap-8">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
            Trusted by
          </p>
          <div className="scrollbar-hide flex flex-1 overflow-hidden">
            <div className="logo-marquee flex min-w-full shrink-0 items-center gap-8">
              {logos.map((label, index) => (
                <div
                  key={`${label}-${index}`}
                  className="flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-500"
                >
                  <Stethoscope className="size-4 text-primary" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
