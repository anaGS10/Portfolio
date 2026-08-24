"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label="Go to top"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 font-display text-sm font-bold text-white">
            {profile.initials}
          </span>
          <span className="hidden font-display text-base font-semibold tracking-tight sm:inline">
            {profile.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={profile.resume}
            download
            className="hidden rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent md:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="section-shell flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      active === link.id
                        ? "bg-accent-soft text-accent"
                        : "text-muted hover:bg-card-hover hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * navLinks.length }}
                className="mt-2"
              >
                <a
                  href={profile.resume}
                  download
                  onClick={() => setOpen(false)}
                  className="btn-secondary w-full"
                >
                  Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}