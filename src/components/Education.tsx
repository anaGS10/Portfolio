"use client";

import { Award, GraduationCap, School } from "lucide-react";
import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const levelIcons: Record<string, typeof GraduationCap> = {
  "B.Tech": GraduationCap,
  "Class XII": School,
  "Class X": School,
};

export default function Education() {
  return (
    <section id="education" className="section-shell py-24">
      <SectionHeading
        eyebrow="03. Education"
        title="My academic background"
        description="From school to degree — a strong academic foundation that backs up my hands-on development skills."
      />

      <div className="mx-auto grid max-w-3xl gap-6">
        {education.map((edu, i) => {
          const Icon = levelIcons[edu.level] ?? GraduationCap;
          return (
            <Reveal key={edu.id} delay={i * 0.08}>
              <div className="card card-hover overflow-hidden">
                <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                    <Icon size={24} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-bold">{edu.degree}</h3>
                      <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
                        {edu.level}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent">{edu.institution}</p>
                    <p className="mt-0.5 text-xs text-muted">
                      {edu.field}
                      {edu.specialization ? ` · Specialization: ${edu.specialization}` : ""}
                    </p>
                  </div>

                  <div className="shrink-0 text-left sm:text-right">
                    <p className="font-mono text-[11px] text-muted">{edu.period}</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent-soft px-3 py-1 font-display text-sm font-bold text-accent">
                      <Award size={14} />
                      {edu.score}
                    </p>
                  </div>
                </div>

                <ul className="space-y-1.5 border-t border-border bg-background-alt/50 px-6 py-4">
                  {edu.highlights.map((point) => (
                    <li key={point.slice(0, 20)} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}