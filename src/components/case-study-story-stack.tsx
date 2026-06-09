"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
          transformOrigin: "center top",
        });

        if (index > 0) {
          gsap.fromTo(
            card,
            { y: 72 },
            {
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=180",
                end: "top center",
                scrub: 0.55,
              },
            },
          );
        }

        if (index < cards.length - 1) {
          gsap.to(card, {
            filter: "saturate(0.84)",
            opacity: 0.46,
            scale: 0.94,
            ease: "none",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top bottom-=220",
              end: "top top+=140",
              scrub: 0.65,
            },
          });
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="mt-5 space-y-4 md:mt-6 md:space-y-[64vh] md:pb-[20vh]">
      {items.map((item, index) => (
        <article
          key={item.eyebrow}
          className={[
            "case-story-card relative min-h-[20rem] rounded-lg border p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl will-change-transform md:sticky md:min-h-[24rem] md:p-9",
            cardStyles[index % cardStyles.length],
          ].join(" ")}
          style={{ top: `calc(7rem + ${index * 1.1}rem)`, zIndex: index + 1 }}
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
  );
}
