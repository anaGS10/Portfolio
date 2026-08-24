import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  const socials = [
    { href: profile.socials.github, label: "GitHub", icon: Github },
    { href: profile.socials.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: profile.socials.twitter, label: "Twitter / X", icon: Twitter },
    { href: profile.socials.email, label: "Email", icon: Mail },
  ];

  return (
    <footer className="border-t border-border">
      <div className="section-shell flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 font-display text-xs font-bold text-white">
            {profile.initials}
          </span>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      <p className="border-t border-border py-4 text-center text-xs text-muted">
        Designed &amp; built with <Heart size={11} className="inline text-accent" /> using Next.js,
        Tailwind CSS &amp; Framer Motion · Deploy-ready for Vercel
      </p>
    </footer>
  );
}