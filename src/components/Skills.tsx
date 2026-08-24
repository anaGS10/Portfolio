"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-border/60">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-background-alt py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="06. Skills"
          title="My tech stack"
          description="The tools I reach for daily — and the ones I'm actively getting better at."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skills.groups.map((group, gi) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={gi * 0.08}>
                <div className="card card-hover h-full p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon size={19} />
                    </span>
                    <h3 className="font-display text-base font-bold">{group.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {group.items.map((skill, si) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={gi * 0.1 + si * 0.04}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="card mt-6 flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
              <Sparkles size={20} />
            </span>
            <div>
              <h3 className="font-display text-base font-bold">Currently leveling up</h3>
              <p className="text-sm text-muted">
                Continuous learning is part of the job &mdash; here&rsquo;s what&rsquo;s on my list
                right now.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:ml-auto">
              {skills.currentlyLearning.map((topic) => (
                <span key={topic} className="chip">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}