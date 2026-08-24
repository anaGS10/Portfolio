"use client";

import { ArrowRight, Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const socials = [
    { href: profile.socials.github, label: "GitHub", icon: Github, handle: "@alexmorgan" },
    { href: profile.socials.linkedin, label: "LinkedIn", icon: Linkedin, handle: "in/alexmorgan" },
    { href: profile.socials.twitter, label: "Twitter / X", icon: Twitter, handle: "@alexmorgan" },
    { href: profile.socials.email, label: "Email", icon: Mail, handle: profile.email },
  ];

  return (
    <section id="contact" className="bg-background-alt py-24">
      <div className="section-shell">
        <Reveal>
          <div className="card relative overflow-hidden p-8 text-center sm:p-14">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
                  07. Contact
                </span>
                <span className="h-px w-10 bg-accent" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                Let&apos;s build something <span className="text-gradient">great together</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
                I&apos;m currently open to junior developer roles and internships. Whether you have a
                project in mind, feedback on my work, or just want to say hi — my inbox is always open.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={profile.socials.email} className="btn-primary w-full sm:w-auto">
                  <Send size={16} /> Say Hello
                </a>
                <a href={profile.resume} download className="btn-secondary w-full sm:w-auto">
                  Download Resume <ArrowRight size={16} />
                </a>
              </div>

              <p className="mt-7 inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin size={15} className="text-accent" />
                {profile.location} · {profile.availability}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="card card-hover flex items-center gap-3 p-4 text-left"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">{social.label}</span>
                        <span className="block truncate text-xs text-muted">{social.handle}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}