"use client";

import { Award, BadgeCheck, BookOpen, Clock, ExternalLink, GraduationCap, Trophy } from "lucide-react";
import { training } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Training() {
  const { featured, certifications } = training;

  return (
    <section id="training" className="bg-background-alt py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="04. Training & Certifications"
          title="Where I leveled up"
          description="1.5 years of structured full-stack training plus certifications that validate my fundamentals."
        />

        <Reveal>
          <div className="card card-hover relative overflow-hidden p-7 sm:p-9">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                  <GraduationCap size={24} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{featured.title}</h3>
                  <p className="text-sm font-medium text-accent">{featured.provider}</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <BadgeCheck size={13} /> Verified
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} /> {featured.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen size={13} /> {featured.period}
                </span>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                {featured.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featured.topics.map((topic) => (
                  <span key={topic} className="chip text-[11px]">
                    {topic}
                  </span>
                ))}
              </div>

              <p className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-soft px-4 py-2.5 text-sm font-semibold text-accent">
                <Trophy size={16} /> {featured.outcome}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.credential} delay={i * 0.06}>
              <div className="card card-hover group flex h-full flex-col p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Award size={19} />
                  </span>
                  <ExternalLink
                    size={15}
                    className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <h3 className="font-display text-sm font-bold leading-snug">{cert.title}</h3>
                <p className="mt-1 text-xs font-medium text-accent">{cert.issuer}</p>
                <p className="mt-0.5 text-xs text-muted">{cert.date}</p>
                <p className="mt-3 text-[11px] leading-relaxed text-muted">{cert.skill}</p>
                <p className="mt-auto pt-3 font-mono text-[10px] text-muted/70">{cert.credential}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}