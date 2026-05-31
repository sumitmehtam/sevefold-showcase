import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="dark-mesh py-24 text-white">
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
              Ready To Grow Your Practice Online?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Bring your website, search visibility, follow-up automation and reputation systems into one growth plan.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/contact">
                BOOK FREE CONSULTATION
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
