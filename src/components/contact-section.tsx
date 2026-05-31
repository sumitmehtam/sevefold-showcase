"use client";

import { Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const services = [
  "Website Maintenance",
  "Healthcare SEO",
  "Local SEO",
  "Google Business Profile Optimization",
  "AI Automations",
  "WhatsApp Automation",
  "Appointment Reminder Systems",
  "Lead Follow-Up Automation",
  "Reputation Management",
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [service, setService] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("service", service);

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!apiBase) {
        await new Promise((resolve) => setTimeout(resolve, 700));
        setStatus("success");
        setMessage("Thanks. Your consultation request is ready to send once the PHP API URL is configured.");
        form.reset();
        setService("");
        return;
      }

      const response = await fetch(`${apiBase.replace(/\/$/, "")}/leads.php`, {
        method: "POST",
        body: data,
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit lead.");
      }

      setStatus("success");
      setMessage(result.message || "Thanks. We will contact you shortly.");
      form.reset();
      setService("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit lead.");
    }
  }

  return (
    <section id="contact" className="mesh-bg py-24">
      <div className="section-shell grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading
            align="left"
            title="Book a Free Clinic Growth Consultation"
            description="Tell us what you need help with. We’ll review your clinic’s website, search presence and follow-up systems before your free consultation."
          />
          <div className="mt-8 rounded-lg border border-blue-100 bg-white/75 p-5 shadow-sm">
            <p className="text-sm font-semibold text-foreground">What happens next</p>
            <ol className="mt-4 flex flex-col gap-3 text-sm leading-6 text-muted-foreground">
              <li>1. We review your website, Google profile and follow-up path.</li>
              <li>2. You get a practical growth plan for the next 30 days.</li>
              <li>3. We recommend a service path only if it fits your clinic.</li>
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="glass-panel rounded-xl p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <Input name="name" required placeholder="Dr. Maya Sen" />
              </Field>
              <Field label="Clinic Name">
                <Input name="clinic_name" required placeholder="Northline Medical Group" />
              </Field>
              <Field label="Email">
                <Input name="email" required type="email" placeholder="doctor@clinic.com" />
              </Field>
              <Field label="Phone">
                <Input name="phone" required type="tel" placeholder="+1 555 012 4567" />
              </Field>
              <Field label="Service" className="sm:col-span-2">
                <Select value={service} onValueChange={setService} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {services.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Message" className="sm:col-span-2">
                <Textarea name="message" required placeholder="Tell us about your clinic growth goals." />
              </Field>
            </div>

            {message ? (
              <p
                className={
                  status === "error"
                    ? "mt-4 rounded-md bg-red-50 p-3 text-sm text-red-700"
                    : "mt-4 rounded-md bg-emerald-50 p-3 text-sm text-emerald-700"
                }
              >
                {message}
              </p>
            ) : null}

            <Button className="mt-5 w-full" disabled={status === "loading"} size="lg">
              {status === "loading" ? <Loader2 className="animate-spin" /> : <Send />}
              BOOK FREE CONSULTATION
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className || ""}`}>
      <span className="text-sm font-semibold text-foreground">{label}</span>
      {children}
    </label>
  );
}
