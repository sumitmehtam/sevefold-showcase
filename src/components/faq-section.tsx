import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading
            align="left"
            title="Questions Clinics Ask Before Working With Us"
            description="Short answers on healthcare SEO, website maintenance and AI automation."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <Accordion type="single" collapsible defaultValue="item-0" className="rounded-lg border border-border px-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
