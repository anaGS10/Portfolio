"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Twitter } from "lucide-react";
import Image from "next/image";
import { profile, stats } from "@/lib/data";
import Typewriter from "./Typewriter";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-24 pb-16"
    >
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-[128px] animate-blob" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/15 blur-[128px] animate-blob" />

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={reduce ? undefined : container}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "show"}
          >
            <motion.div variants={item} className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.p variants={item} className="mb-3 font-mono text-sm text-accent">
              Hi, my name is
            </motion.p>

            <motion.h1 variants={item} className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {profile.name.split(" ")[0]}{" "}
              <span className="text-gradient">{profile.name.split(" ")[1]}{" "}</span>
              <span className="text-gradient">{profile.name.split(" ")[2]}</span>
            </motion.h1>

            <motion.div variants={item} className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-2xl font-semibold text-muted sm:text-3xl">I&apos;m a</span>
              <span className="text-2xl sm:text-3xl">
                <Typewriter words={profile.roles} />
              </span>
            </motion.div>

            <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg text-balance">
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </a>
              <a href={profile.resume} download className="btn-secondary">
                <Download size={16} /> Download Resume
              </a>
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </motion.div>

            {/*<motion.div variants={item} className="mt-9 flex items-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Twitter size={18} />
              </a>
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </motion.div>*/}
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-fit"
          >
            <div className="animate-float">
              <div className="glow relative overflow-hidden rounded-[12rem] border border-border">
                <Image
                  src={profile.photo}
                  alt={`Portrait`}
                  width={600}
                  height={600}
                  priority
                  className="h-80 w-80 object-cover sm:h-96 sm:w-96"
                />
              </div>
            </div>

            {/*<div className="card absolute -left-8 top-8 hidden items-center gap-2.5 px-4 py-2.5 sm:flex animate-float-delayed">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Sparkles size={15} />
              </span>
              <div>
                <p className="text-xs font-semibold leading-tight">React & Next.js</p>
                <p className="text-[11px] text-muted">Frontend-first</p>
              </div>
            </div>

            <div className="card absolute -bottom-6 -right-6 hidden items-center gap-2.5 px-4 py-2.5 sm:flex animate-float">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Sparkles size={15} />
              </span>
              <div>
                <p className="text-xs font-semibold leading-tight">MERN Stack</p>
                <p className="text-[11px] text-muted">End-to-end apps</p>
              </div>
            </div>*/}
          </motion.div>
        </div>

        {/*<motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="card card-hover px-5 py-4 text-center">
              <p className="font-display text-2xl font-bold text-accent sm:text-3xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-xs font-medium text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>*/}
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent md:block"
      >
        <ArrowDown size={22} className="animate-float" />
      </a>
    </section>
  );
}