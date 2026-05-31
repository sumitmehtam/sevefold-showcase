"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/assets";
import { dashboardStats } from "@/lib/data";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 22 });
  const rotateX = useTransform(smoothY, [0, 1], [5, -5]);
  const rotateY = useTransform(smoothX, [0, 1], [-7, 7]);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        y: 32,
        opacity: 0,
        duration: 0.72,
        stagger: 0.035,
        ease: "power3.out",
      });

      gsap.to(".hero-float-card", {
        y: -10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const headline = "Manage Your Clinic's Digital Presence While You Focus On Patients";

  return (
    <section
      ref={rootRef}
      className="mesh-bg relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36 lg:min-h-[780px] lg:pb-28"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width);
        mouseY.set((event.clientY - rect.top) / rect.height);
      }}
    >
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10 flex flex-col items-start">
          <div className="mb-5 inline-flex items-center gap-3 rounded-md border border-blue-100 bg-white/80 px-3 py-2 shadow-sm backdrop-blur">
            <span className="flex text-amber-400" aria-label="Five star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-semibold text-foreground">4.9 Rating</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="hidden text-sm text-muted-foreground sm:inline">
              Trusted by Healthcare Businesses
            </span>
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-normal text-foreground sm:text-5xl lg:text-[72px]">
            {headline.split(" ").map((word, index) => (
              <span key={`${word}-${index}`} className="hero-word inline-block overflow-hidden">
                {word}
                {index < headline.split(" ").length - 1 ? "\u00a0" : ""}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            Website Maintenance, Healthcare SEO and AI Automation for Modern Clinics, Hospitals
            and Healthcare Practices.
          </p>

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
        </div>

        <motion.div
          className="relative min-h-[520px] perspective-[1200px]"
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <div className="absolute inset-x-8 bottom-0 top-12 rounded-[2rem] bg-blue-600/10 blur-3xl" />
          <div className="glass-panel relative h-full min-h-[520px] overflow-hidden rounded-xl p-4 sm:p-5">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-50 to-transparent" />
            <div className="relative grid h-full grid-cols-[0.9fr_1.1fr] gap-4">
              <div className="flex flex-col justify-between gap-4">
                <div className="rounded-lg border border-white/80 bg-white/[0.85] p-4 shadow-xl shadow-slate-900/5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase text-muted-foreground">
                      Live Clinic OS
                    </p>
                    <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                      <span className="size-2 rounded-full bg-emerald-500" />
                      Online
                    </span>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {dashboardStats.slice(0, 3).map((stat) => (
                      <div key={stat.label} className="hero-float-card rounded-md bg-secondary p-3">
                        <div className="flex items-center gap-2">
                          <stat.icon className="size-4 text-primary" />
                          <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                        </div>
                        <p className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hero-float-card rounded-lg border border-blue-100 bg-white/90 p-4 shadow-xl shadow-blue-900/5">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-emerald-500" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Appointment Reminder Sent</p>
                      <p className="text-xs text-muted-foreground">WhatsApp sequence delivered</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-blue-50 to-white">
                <Image
                  src={assetPath("/images/hero-doctor.png")}
                  alt="Professional doctor using digital clinic growth dashboard"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(min-width: 1024px) 520px, 80vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/75 to-transparent" />
                <div className="hero-float-card absolute bottom-4 left-4 right-4 rounded-lg border border-white/80 bg-white/[0.88] p-4 shadow-2xl backdrop-blur-xl">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Lead Captured</p>
                      <p className="text-lg font-semibold text-foreground">New Patient</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Review Request Sent</p>
                      <p className="text-lg font-semibold text-emerald-600">Ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
