"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  Heart,
  Instagram,
  Lightbulb,
  MessageCircle,
  MoreVertical,
  Play,
  Send,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/assets";

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

  const headlineLines = [
    "Manage Your Clinic's Digital Presence",
    "While You Focus On Patients",
  ];

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width);
        mouseY.set((event.clientY - rect.top) / rect.height);
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_24%_24%,rgba(37,99,235,0.13),transparent_28rem),radial-gradient(circle_at_78%_16%,rgba(16,185,129,0.1),transparent_24rem)]" />

      <div className="section-shell relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="max-w-[1180px] text-balance text-center text-4xl font-semibold leading-[1.04] tracking-normal text-foreground sm:text-5xl lg:text-[52px] xl:text-[60px]">
            {headlineLines.map((line) => (
              <span key={line} className="block xl:whitespace-nowrap">
                {line.split(" ").map((word, index) => (
                  <span key={`${word}-${index}`} className="hero-word inline-block overflow-hidden">
                    {word}
                    {index < line.split(" ").length - 1 ? "\u00a0" : ""}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            Website Maintenance, Healthcare SEO and AI Automation for Modern Clinics, Hospitals
            and Healthcare Practices.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
          className="relative mx-auto mt-6 max-w-[1180px] pb-16 perspective-[1200px] lg:min-h-[640px]"
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <div className="absolute left-1/2 top-28 hidden h-[28rem] w-[36rem] -translate-x-1/2 rounded-lg bg-blue-500/10 blur-3xl lg:block" />

          <div className="grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-[0.72fr_0.95fr_1.25fr_1.8fr] xl:gap-6">
            <div className="order-2 space-y-4 xl:order-none xl:pt-28">
              <div className="hero-float-card rounded-lg border border-blue-100 bg-white p-4 shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
                <div className="flex size-12 items-center justify-center rounded-md bg-amber-400 text-xl font-bold text-white">
                  G
                </div>
                <div className="mt-8">
                  <h2 className="text-xl font-bold leading-tight text-foreground">Google Ads</h2>
                  <p className="mt-1 text-base font-medium leading-6 text-slate-500">
                    High-converting leads
                  </p>
                </div>
                <div className="relative mt-4 aspect-[1.55] overflow-hidden rounded-md bg-secondary">
                  <Image
                    src={assetPath("/images/hero-doctor.png")}
                    alt="Healthcare advertising campaign visual"
                    fill
                    className="object-cover object-[50%_22%]"
                    priority
                    sizes="(min-width: 1024px) 180px, 45vw"
                  />
                </div>
                <div className="mt-4 rounded-md bg-slate-950 px-1 py-2 text-center text-xs font-bold leading-4 text-white">
                  Built for Healthcare Growth
                </div>
              </div>
            </div>

            <div className="order-3 space-y-4 xl:order-none xl:mt-16">
              <div className="hero-float-card rounded-lg border border-blue-100 bg-white p-2.5 shadow-[0_22px_70px_rgba(15,23,42,0.09)]">
                <div className="flex items-center gap-2 px-1.5 pb-2">
                  <span className="flex size-7 items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-500 via-orange-400 to-amber-300 text-white">
                    <Instagram className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold leading-4 text-foreground">@healthclinic</p>
                    <p className="truncate text-xs font-medium text-slate-500">Healthcare Marketing</p>
                  </div>
                  <MoreVertical className="size-5 text-slate-600" />
                </div>

                <div className="relative aspect-[0.76] overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src={assetPath("/images/hero-doctor.png")}
                    alt="Short-form healthcare growth reel"
                    fill
                    className="object-cover object-[50%_18%]"
                    priority
                    sizes="(min-width: 1024px) 240px, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-slate-950/55 px-2 py-1 text-xs font-bold text-white backdrop-blur">
                    <Play className="size-3 fill-current" />
                    Reel
                  </span>
                  <div className="absolute bottom-3 left-3 right-12">
                    <p className="text-sm font-bold text-white">@healthclinic</p>
                    <p className="text-xs font-medium text-white/85">Instagram Growth Strategy</p>
                  </div>
                  <div className="absolute bottom-4 right-3 grid gap-3 text-white">
                    <Heart className="size-5 fill-current" />
                    <MessageCircle className="size-5" />
                    <Send className="size-5" />
                  </div>
                </div>

                <div className="flex items-center justify-between px-2 pt-3">
                  <div className="flex items-center gap-3 text-slate-950">
                    <Heart className="size-5 fill-rose-500 text-rose-500" />
                    <MessageCircle className="size-5" />
                    <Send className="size-5" />
                  </div>
                  <p className="text-sm font-bold text-slate-950">127,432 likes</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="hero-float-card rounded-lg bg-indigo-100 p-4">
                  <p className="text-sm font-bold text-indigo-600">↑ ₹50Cr+</p>
                  <p className="mt-2 text-sm font-medium leading-5 text-slate-600">Revenue Driven</p>
                </div>
                <div className="hero-float-card rounded-lg bg-orange-100 p-4">
                  <p className="text-sm font-bold text-orange-600">↑ 3X</p>
                  <p className="mt-2 text-sm font-medium leading-5 text-slate-600">ROI</p>
                </div>
              </div>
            </div>

            <div className="hero-float-card order-1 relative overflow-hidden rounded-lg bg-slate-200 shadow-[0_24px_80px_rgba(15,23,42,0.14)] sm:col-span-2 xl:order-none xl:col-span-1">
              <div className="relative h-[520px] w-full sm:h-[560px]">
                <Image
                  src={assetPath("/images/hero-doctor.png")}
                  alt="Clinic growth expert"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(min-width: 1024px) 330px, 90vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                <p className="absolute bottom-5 left-4 right-4 text-center text-lg font-bold leading-tight text-white sm:text-xl xl:text-lg">
                  Clinic Growth Expert
                </p>
              </div>
            </div>

            <div className="order-4 grid gap-5 sm:grid-cols-2 xl:order-none xl:flex xl:items-start xl:gap-6">
              <div className="grid gap-5 xl:w-[188px]">
                <div className="hero-float-card rounded-lg bg-indigo-100 p-5">
                  <p className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600">
                    <ArrowUpRight className="size-4" />
                    Our Services
                  </p>
                  <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-950">
                    All-in-one Healthcare Agency
                  </h2>
                  <p className="mt-4 text-xs font-medium leading-5 text-slate-600">
                    Ads, leads & growth system
                  </p>
                </div>

                <div className="hero-float-card rounded-lg bg-violet-100 p-5">
                  <div className="flex gap-3 text-violet-600">
                    <Lightbulb className="size-5" />
                    <Zap className="size-5 fill-current" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold leading-tight text-slate-950">
                    AI-Powered Marketing
                  </h2>
                  <p className="mt-4 text-xs font-medium leading-5 text-slate-600">
                    Automation & Follow-ups
                  </p>
                </div>

                <div className="hero-float-card rounded-lg bg-sky-100 p-5">
                  <span className="flex size-11 items-center justify-center rounded-md bg-sky-200 text-sky-700">
                    <Eye className="size-5" />
                  </span>
                  <p className="mt-8 text-5xl font-bold leading-none text-slate-950">75M+</p>
                  <p className="mt-3 text-lg font-bold leading-6 text-sky-700">Views Generated</p>
                </div>
              </div>

              <div className="xl:w-[190px] xl:pt-28">
                <div className="hero-float-card rounded-lg bg-orange-100 p-5">
                  <span className="flex size-11 items-center justify-center rounded-md bg-orange-200 text-orange-600">
                    <Users className="size-5" />
                  </span>
                  <p className="mt-8 text-5xl font-bold leading-none text-slate-950">100+</p>
                  <p className="mt-3 text-lg font-bold leading-6 text-slate-950">Brands Served</p>
                  <p className="mt-1 text-base font-medium leading-6 text-slate-600">
                    Trusted by growing businesses
                  </p>
                  <div className="mt-5 flex gap-1.5">
                    {["bg-orange-600", "bg-orange-500", "bg-orange-400", "bg-orange-300", "bg-orange-200"].map(
                      (color) => (
                        <span key={color} className={`size-2 rounded-full ${color}`} />
                      ),
                    )}
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
