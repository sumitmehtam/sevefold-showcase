import Link from "next/link";
import { Linkedin, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-foreground">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-sm text-white">
              S
            </span>
            SEVENFOLD
          </Link>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Digital growth partner for doctors, clinics and healthcare businesses.
          </p>
          <div className="flex gap-2">
            <Button size="icon" variant="outline" aria-label="LinkedIn">
              <Linkedin />
            </Button>
            <Button size="icon" variant="outline" aria-label="Email">
              <Mail />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold">Services</h3>
          {services.slice(0, 5).map((service) => (
            <Link
              key={service.slug}
              className="text-sm text-muted-foreground hover:text-primary"
              href={`/${service.slug}`}
            >
              {service.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold">Company</h3>
          {[
            ["Case Studies", "/case-studies"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link key={href} className="text-sm text-muted-foreground hover:text-primary" href={href}>
              {label}
            </Link>
          ))}
        </div>

        <form className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold">Newsletter</h3>
          <p className="text-sm leading-6 text-muted-foreground">
            Monthly notes on healthcare SEO, automation and clinic growth systems.
          </p>
          <div className="flex gap-2">
            <Input aria-label="Email" placeholder="you@clinic.com" type="email" />
            <Button aria-label="Subscribe" size="icon">
              <Send />
            </Button>
          </div>
        </form>
      </div>
      <div className="section-shell flex flex-col justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} SEVENFOLD. All rights reserved.</p>
        <p>Built for healthcare growth teams.</p>
      </div>
    </footer>
  );
}
