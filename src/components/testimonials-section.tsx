import { Quote, Star } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const items = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="mesh-bg overflow-hidden py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            title="Trusted by Doctors, Clinics and Healthcare Operators"
            description="A quieter, sharper growth partner for teams who need execution more than noise."
          />
        </Reveal>
      </div>
      <div className="mt-12 flex overflow-hidden">
        <div className="testimonial-marquee flex min-w-full shrink-0 gap-5 px-5">
          {items.map((testimonial, index) => (
            <figure
              key={`${testimonial.name}-${index}`}
              className="glass-panel w-[360px] shrink-0 rounded-lg p-6"
            >
              <Quote className="size-6 text-primary" />
              <div className="mt-4 flex text-amber-400">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-6 text-slate-700">
                “{testimonial.review}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.designation}, {testimonial.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
