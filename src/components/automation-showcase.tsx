"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { automationSteps, liveActivity } from "@/lib/data";

export function AutomationShowcase() {
  return (
    <section className="dark-mesh overflow-hidden py-24 text-white">
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl">
              AI Automation That Feels Like an Operating System
            </h2>
            <p className="text-pretty text-base leading-7 text-blue-100 sm:text-lg">
              Patient inquiries, reminders, WhatsApp follow-up and review requests move through one measurable workflow.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="relative min-h-[560px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur">
              <svg className="absolute inset-0 h-full w-full opacity-50" aria-hidden="true">
                <path
                  className="workflow-line"
                  d="M80 120 C260 40, 460 140, 620 70 S900 150, 980 80"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                />
                <path
                  className="workflow-line"
                  d="M90 430 C260 520, 420 370, 600 470 S880 390, 980 480"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                />
              </svg>

              <div className="relative grid gap-4 md:grid-cols-2">
                {automationSteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-md bg-white/[0.12] text-blue-200">
                        <step.icon className="size-5" />
                      </div>
                      <Badge variant={index === 1 ? "success" : "outline"}>{index + 1}</Badge>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{step.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {index === 1
                        ? "Rules, routing and context-aware follow-up are coordinated in the background."
                        : "Every step is logged, measured and visible to your front desk team."}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-xl border border-blue-200/15 bg-slate-950/80 p-5 text-white shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-white">Live Activity Feed</p>
                  <p className="mt-1 text-sm text-blue-100">Automation health and patient actions</p>
                </div>
                <span className="rounded-md border border-emerald-300/20 bg-emerald-400/15 px-2 py-1 text-xs font-semibold text-emerald-100">
                  Active
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {liveActivity.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="rounded-lg border border-blue-200/15 bg-white/[0.10] p-4 shadow-lg shadow-black/10"
                    animate={{ opacity: [0.72, 1, 0.72] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      delay: index * 0.35,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-md bg-blue-500/25 text-blue-100">
                        <item.icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.label}</p>
                        <p className="text-xs text-blue-100/85">{item.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-white p-5 text-slate-900">
                <p className="text-sm font-semibold">Today’s automation impact</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    ["42", "Leads routed"],
                    ["31", "Reminders sent"],
                    ["17", "Reviews requested"],
                    ["8", "Bookings recovered"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-md bg-secondary p-3">
                      <p className="text-2xl font-semibold">{value}</p>
                      <p className="text-xs text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
