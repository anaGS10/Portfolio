"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-shell py-24">
      <SectionHeading
        eyebrow="What People Say"
        title="Kind words from mentors & teammates"
        description="Feedback from the people I've learned from and worked with."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <Reveal key={testimonial.name} delay={i * 0.08}>
            <figure className="card card-hover flex h-full flex-col p-6">
              <Quote size={26} className="mb-4 text-accent/60" />
              <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 font-display text-sm font-bold text-white">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}