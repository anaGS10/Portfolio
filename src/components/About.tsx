"use client";

import { BadgeCheck, MapPin, Heart } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-shell py-24">
      <SectionHeading
        eyebrow="01. About Me"
        title="Turning ideas into great solutions"
        description="A quick look at who I am, what I care about, and the kind of problems I love to solve."
      />

      <div>
        {/*<Reveal className="mx-auto w-full max-w-sm">
          <div className="glow relative overflow-hidden rounded-2xl border border-border">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={600}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {profile.interests.map((interest) => (
              <span key={interest} className="chip">
                <Heart size={12} className="text-accent" />
                {interest}
              </span>
            ))}
          </div>
        </Reveal>*/}

        <div>
          <Reveal delay={0.05}>
            <div className="space-y-2 text-base leading-relaxed text-muted">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {profile.quickFacts.map((fact) => (
                <div key={fact.label} className="card flex items-center gap-3 px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <MapPin size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-wide text-muted">
                      {fact.label}
                    </p>
                    <p className="truncate text-sm font-semibold">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {profile.whatIdo.map((item) => (
                <div key={item.title} className="card card-hover p-5">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <item.icon size={20} />
                  </span>
                  <h3 className="font-display text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <BadgeCheck size={16} className="text-accent" />
              <span className="text-sm font-medium text-muted">
                months of hands-on full-stack training · former react native developer · always learning
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}