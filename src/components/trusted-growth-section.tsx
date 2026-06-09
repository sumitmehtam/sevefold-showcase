import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const markets = ["US", "UK", "CA", "AU", "UAE", "SG"];

function ArrowCorner({ href, label }: { href: string; label: string }) {
  return (
    <div className="absolute -right-1 -top-1 rounded-bl-[28px] bg-white pb-4 pl-4">
      <Button asChild variant="dark" size="icon" className="size-16 rounded-[20px] [&_svg]:size-7">
        <Link href={href} aria-label={label}>
          <ArrowUpRight className="size-7" />
        </Link>
      </Button>
    </div>
  );
}

export function TrustedGrowthSection() {
  return (
    <section id="trusted-growth" className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <h2 className="mx-auto max-w-5xl text-balance text-center text-3xl font-medium leading-tight tracking-normal text-foreground sm:text-4xl lg:text-[46px]">
            SevenFold: The Digital Growth Engine for Ambitious Clinics
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.45fr_0.96fr_0.8fr] lg:grid-rows-[minmax(215px,auto)_minmax(215px,auto)]">
          <Reveal className="lg:row-span-2">
            <div className="relative flex h-full min-h-[560px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_48%_13%,rgba(255,255,255,0.52),transparent_19rem),linear-gradient(135deg,#fbbf24_0%,#fde047_46%,#f59e0b_100%)] p-7 text-slate-950 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_82%,rgba(255,255,255,0.24),transparent_15rem)]" />

              <div className="relative flex max-w-2xl flex-col">
                <h3 className="max-w-[13ch] text-balance text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-[46px]">
                  Trusted Digital Growth Partner for Clinics
                </h3>

                <div className="mt-8 space-y-5 text-base font-medium leading-8 text-slate-950/85">
                  <p>
                    We help healthcare brands grow sustainably through ethical, data-backed and
                    conversion-oriented digital growth strategies.
                  </p>
                  <p>
                    With healthcare SEO, website care, reputation management and clinic AI
                    automation, SevenFold gives teams a dependable partner for long-term patient
                    acquisition.
                  </p>
                  <p>
                    SevenFold has established itself as a trusted digital growth partner for
                    clinics and healthcare businesses.
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    href="/case-studies"
                    className="inline-flex h-11 items-center justify-center rounded-full border-[2px] px-6 text-sm font-semibold text-slate-950 [border-color:#0f172a] transition-colors hover:bg-white/30"
                    style={{ borderColor: "#0f172a" }}
                  >
                    Discover More
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 rounded-tl-[28px] bg-white pl-4 pt-4">
                <Button asChild variant="dark" size="icon" className="size-16 rounded-[20px] [&_svg]:size-7">
                  <Link href="/case-studies" aria-label="View case studies">
                    <ArrowUpRight className="size-7" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-start-2">
            <div className="relative h-full min-h-[215px] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#bdefff_0%,#eef8fb_50%,#ffd8c9_100%)] p-7 text-slate-950 sm:p-8">
              <ArrowUpRight className="absolute right-7 top-7 size-6 text-slate-400/45" />
              <p className="text-5xl font-semibold leading-none tracking-normal lg:text-[58px]">100+</p>
              <p className="mt-4 max-w-md text-base font-medium leading-7 text-slate-950/80">
                Healthcare growth systems delivered across SEO, website care, reputation and AI
                automation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-start-2">
            <div className="relative h-full min-h-[215px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_55%_0%,rgba(255,244,188,0.78),transparent_11rem),linear-gradient(135deg,#ec4899_0%,#f97316_62%,#f43f5e_100%)] p-7 text-white sm:p-8">
              <div className="pointer-events-none absolute -left-12 top-16 size-40 rounded-full bg-rose-700/18" />
              <div className="pointer-events-none absolute -bottom-12 right-10 size-48 rounded-full bg-rose-700/12" />
              <ArrowUpRight className="absolute right-7 top-7 size-6 text-white/55" />
              <div className="relative">
                <p className="text-5xl font-semibold leading-none tracking-normal lg:text-[58px]">75M+</p>
                <p className="mt-4 max-w-md text-base font-medium leading-7 text-white/90">
                  Views generated through consistent strategy, transparent processes and
                  long-term execution.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="lg:col-start-3 lg:row-span-2 lg:row-start-1">
            <div className="relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-[28px] bg-[#e3e3e3] p-7 text-slate-950 sm:p-10">
              <ArrowCorner href="/contact" label="Book a free consultation" />

              <div className="mt-20 flex -space-x-2">
                {markets.map((market) => (
                  <span
                    key={market}
                    className="flex size-12 items-center justify-center rounded-full border-2 border-white bg-white text-xs font-bold text-slate-700 shadow-sm"
                  >
                    {market}
                  </span>
                ))}
              </div>

              <h3 className="mt-10 text-balance text-4xl font-semibold leading-tight tracking-normal lg:text-[42px]">
                Trusted by Healthcare Teams Worldwide
              </h3>
              <p className="mt-8 text-base font-medium leading-8 text-slate-950/78">
                Trusted by clinics and healthcare businesses worldwide for sustainable digital
                growth, clearer reporting and consistent execution across competitive markets.
              </p>

              <div className="mt-auto pt-8">
                <Link
                  href="#testimonials"
                  className="inline-flex h-11 items-center justify-center rounded-full border-[2px] px-6 text-sm font-semibold text-slate-950 [border-color:#0f172a] transition-colors hover:bg-white/40"
                  style={{ borderColor: "#0f172a" }}
                >
                  Our Reviews
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
