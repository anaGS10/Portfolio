"use client";

import { ArrowUpRight, Github, Target, Wrench, TrendingUp } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectPreview({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div className="relative flex h-full min-h-56 items-center justify-center overflow-hidden rounded-t-2xl border-b border-border bg-background-alt">
      <div className="absolute inset-0 bg-gradient-to-br opacity-20 dark:opacity-25" />
      <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 rounded-md bg-border/50 px-3 py-0.5 font-mono text-[10px] text-muted">
          {project.category}
        </span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className={cn("flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg", project.gradient)}>
          <Icon size={30} />
        </span>
        <span className="font-mono text-xs text-muted">{project.id}.app</span>
      </div>
    </div>
  );
}

function CaseStudy({ problem, solution, result }: Pick<Project, "problem" | "solution" | "result">) {
  const rows = [
    { icon: Target, label: "Problem", text: problem },
    { icon: Wrench, label: "Solution", text: solution },
    { icon: TrendingUp, label: "Result", text: result },
  ];
  return (
    <div className="space-y-3">
      {rows.map((row) => (
        <div key={row.label} className="flex gap-3">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <row.icon size={14} />
          </span>
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-accent">
              {row.label}
            </p>
            <p className="text-sm leading-relaxed text-muted">{row.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <a
        href={project.links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} source code on GitHub`}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent"
      >
        <Github size={16} />
      </a>
      <a
        href={project.links.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} live demo`}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent"
      >
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-shell py-24">
      <SectionHeading
        eyebrow="05. Projects"
        title="Things I've built"
        description="Selected work — each one shows the problem I was solving, how I solved it, and the result."
      />

      <div className="space-y-10">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.06}>
            <article className="card card-hover grid overflow-hidden lg:grid-cols-2">
              <div className={cn("bg-gradient-to-br", project.gradient)}>
                <ProjectPreview project={project} />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  <ProjectLinks project={project} />
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
                <div className="mt-5">
                  <CaseStudy problem={project.problem} solution={project.solution} result={project.result} />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <Reveal>
          <h3 className="mb-6 font-display text-lg font-bold text-muted">Other notable work</h3>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <article className="card card-hover group flex h-full flex-col overflow-hidden">
                <div className={cn("bg-gradient-to-br", project.gradient)}>
                  <ProjectPreview project={project} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-display text-base font-bold">{project.title}</h4>
                    <ProjectLinks project={project} />
                  </div>
                  <p className="mt-1.5 text-sm text-muted">{project.tagline}</p>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-muted">
                    {project.problem}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="chip text-[10px]">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 ? (
                      <span className="chip text-[10px]">+{project.tech.length - 4}</span>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}