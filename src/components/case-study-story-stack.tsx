"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

type StoryStackItem = {
  eyebrow: string;
  title: string;
  copy: string;
};

const cardStyles = [
  "border-blue-100 bg-blue-50/90",
  "border-amber-100 bg-amber-50/90",
  "border-emerald-100 bg-emerald-50/90",
];

export function CaseStudyStoryStack({ items }: { items: StoryStackItem[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (
      !root ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 767px)").matches
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".case-story-card");

      cards.forEach((card, index) => {
        gsap.set(card, {
          filter: "saturate(1)",
          opacity: 1,
          scale: 1,
          transformOrigin: "center top",
          y: index * 18,
          yPercent: index === 0 ? 0 : 112,
          zIndex: index + 1,
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top+=112",
          end: "bottom bottom-=160",
          scrub: 0.65,
        },
      });

      cards.slice(1).forEach((card, index) => {
        const previousCard = cards[index];

        timeline
          .to(
            card,
            {
              yPercent: 0,
              ease: "none",
              duration: 1,
            },
            index,
          )
          .to(
            previousCard,
            {
              filter: "saturate(0.84)",
              opacity: 0.5,
              scale: 0.94,
              ease: "none",
              duration: 1,
            },
            index,
          );
      });
    }, root);

    return () => ctx.revert();
  }, [items.length]);

  return (
    <div
      ref={rootRef}
      className="mt-5 md:mt-6 md:min-h-[var(--stack-scroll-height)]"
      style={{ "--stack-scroll-height": `${Math.max(items.length, 1) * 78}vh` } as CSSProperties}
    >
      <div className="space-y-4 md:sticky md:top-28 md:min-h-[28rem] md:space-y-0">
        <div className="relative md:h-[28rem]">
          {items.map((item, index) => (
            <article
              key={item.eyebrow}
              className={[
                "case-story-card relative min-h-[20rem] rounded-lg border p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl will-change-transform md:absolute md:inset-0 md:min-h-0 md:p-9",
                cardStyles[index % cardStyles.length],
              ].join(" ")}
              style={{ zIndex: index + 1 }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-slate-600">
                  {item.eyebrow}
                </span>
                <span className="text-5xl font-semibold leading-none text-slate-950/[0.08]">
                  0{index + 1}
                </span>
              </div>

              <h2 className="mt-10 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-normal text-slate-950 md:text-4xl">
                {item.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
