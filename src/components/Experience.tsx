"use client";

import { Briefcase, Building2, CalendarDays, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-background-alt py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="02. Experience"
          title="Where I've worked"
          description="My professional journey so far — focused on shipping real features, learning fast, and improving quality wherever I go."
        />

        <div className="relative mx-auto max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:left-5"
          />
          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.08}>
                <div className="relative pl-12 sm:pl-16">
                  <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-card text-accent sm:h-11 sm:w-11">
                    <Briefcase size={17} />
                  </span>
                  <div className="card card-hover p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg font-bold">{job.role}</h3>
                        <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-accent">
                          <Building2 size={14} />
                          {job.company}
                          <span className="font-normal text-muted">· {job.type}</span>
                        </p>
                      </div>
                      {/*<span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs font-medium text-muted">
                        {job.period}
                      </span>*/}
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                      {/*<span className="inline-flex items-center gap-1">
                        <CalendarDays size={13} /> {job.duration}
                      </span>*/}
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={13} /> {job.location}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>

                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((point) => (
                        <li key={point.slice(0, 20)} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span key={tech} className="chip text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}