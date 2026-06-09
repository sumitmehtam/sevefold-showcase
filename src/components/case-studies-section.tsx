"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode, useRef } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/assets";
import { caseStudies } from "@/lib/data";

export function CaseStudiesSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  function moveCards(direction: "previous" | "next") {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.scrollBy({
      left: (direction === "next" ? 1 : -1) * Math.min(track.clientWidth * 0.78, 560),
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[min(100%-2rem,1500px)]">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              align="left"
              className="mx-0 max-w-3xl"
              title="Clinic Case Studies"
              description="Real healthcare growth stories showing the clinic, the challenge, the system we built and the measurable result."
            />

            <div className="flex items-center gap-3">
              <CarouselButton label="Previous case studies" onClick={() => moveCards("previous")}>
                <ArrowLeft />
              </CarouselButton>
              <CarouselButton label="Next case studies" onClick={() => moveCards("next")}>
                <ArrowRight />
              </CarouselButton>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-12">
          <CarouselButton
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 lg:inline-flex"
            label="Previous case studies"
            onClick={() => moveCards("previous")}
          >
            <ArrowLeft />
          </CarouselButton>

          <div
            ref={trackRef}
            className="scrollbar-hide flex snap-x gap-5 overflow-x-auto scroll-smooth pb-4"
          >
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} className="shrink-0 snap-start" delay={index * 0.05}>
                <article className="group relative h-[32rem] w-[min(82vw,25rem)] overflow-hidden rounded-lg bg-slate-950 shadow-sm md:w-[28rem] xl:w-[31rem]">
                  <Image
                    alt={study.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    priority={index < 3}
                    sizes="(min-width: 1280px) 31rem, (min-width: 768px) 28rem, 82vw"
                    src={assetPath(study.image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/[0.88] via-slate-950/[0.32] to-slate-950/[0.04]" />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-5">
                    <span className="rounded-full border border-white/35 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-white backdrop-blur-md">
                      {study.industry}
                    </span>
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-950">
                      +{study.leadGrowth}% Leads
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                    <p className="text-sm font-semibold text-white/[0.76]">{study.client}</p>
                    <h3 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-normal md:text-3xl">
                      {study.title}
                    </h3>
                    <p className="mt-4 min-h-[4.5rem] text-sm leading-6 text-white/[0.76]">
                      {study.challenge}
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <Metric label="Traffic" value={study.trafficGrowth} />
                      <Metric label="Keywords" value={study.keywordGrowth} />
                      <Metric label="Leads" value={study.leadGrowth} />
                    </div>

                    <Button
                      asChild
                      className="mt-6 w-full border-white/[0.65] bg-white/[0.92] text-slate-950 hover:bg-white"
                      variant="outline"
                    >
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

          <CarouselButton
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:inline-flex"
            label="Next case studies"
            onClick={() => moveCards("next")}
          >
            <ArrowRight />
          </CarouselButton>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  children,
  className,
  label,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      aria-label={label}
      className={[
        "inline-flex size-12 items-center justify-center rounded-lg bg-slate-950 text-white shadow-[0_18px_40px_rgba(15,23,42,0.22)] transition-all hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-white/[0.18] bg-white/[0.16] p-3 backdrop-blur-md">
      <p className="text-lg font-semibold leading-none text-white">+{value}%</p>
      <p className="mt-1 text-xs text-white/[0.68]">{label}</p>
    </div>
  );
}
