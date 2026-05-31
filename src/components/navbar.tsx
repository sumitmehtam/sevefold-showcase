"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50">
      <nav
        className={cn(
          "section-shell flex h-16 items-center justify-between rounded-lg border px-4 transition-all duration-300",
          scrolled
            ? "glass-panel border-white/70 shadow-[0_16px_50px_rgba(15,23,42,0.12)]"
            : "border-white/50 bg-white/50 backdrop-blur-xl",
        )}
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-normal text-foreground">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-sm text-white shadow-lg shadow-blue-600/20">
            S
          </span>
          SEVENFOLD
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/contact">BOOK FREE CONSULTATION</Link>
          </Button>
        </div>

        <Button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden"
          size="icon"
          variant="ghost"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {open ? (
        <div className="section-shell mt-2 rounded-lg border border-white/70 bg-white/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                BOOK FREE CONSULTATION
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
