import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Cpu,
  Database,
  Eye,
  GitBranch,
  Layout,
  Layers,
  Palette,
  Rocket,
  Smartphone,
  Terminal,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Everything in this file is DUMMY DATA. Replace it with your real details.
// The whole site is driven from here, so no component edits are required.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Ananya H S",
  firstName: "Ananya",
  initials: "A",
  title: "Full-Stack Web Developer",
  tagline:
    "I build fast, accessible, and delightful web apps with clean code and modern JavaScript — from pixel-perfect frontends to scalable backends.",
  roles: ["Full-Stack Web Developer", "MERN Stack Developer", "React Enthusiast", "Problem Solver"],
  email: "alex.morgan@example.com",
  phone: "+91 98765 43210",
  location: "Mysuru, India",
  availability: "Open to junior & entry-level opportunities",
  photo: "/profile.svg",
  resume: "/resume.pdf",
  domain: "https://alexmorgan.dev",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://x.com/",
    email: "mailto:alex.morgan@example.com",
  },
  about: [
    "Hi, I'm Ananya H S — a passionate web developer with 1.5 years of hands-on training in full-stack development and 6 months of professional experience building real-world applications. I love turning ideas into products that people actually enjoy using.",
    "My journey started with HTML and CSS, and quickly grew into React, React Native.",
    "Right now I'm focused on deepening my AI, communication and management skills while looking for my next role where I can contribute, learn fast, and grow with a great team.",
  ],
  quickFacts: [
    { label: "Location", value: "Mysuru, India" },
    { label: "Focus", value: "React JS, React Native" },
    { label: "Experience", value: "5 years professional" },
    { label: "Education", value: "B.E, CSE" },
    { label: "Languages", value: "English, Kannada" },
    { label: "Availability", value: "Open to work" },
  ],
  interests: [
    "Photography",
  ],
  whatIdo: [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Responsive, accessible interfaces with React, Next.js and Tailwind CSS that feel fast and look sharp on any device.",
    },
    {
      icon: Rocket,
      title: "Data Annotation",
      description:
        "Data annotation including RLHF, SFT, image, audio annotaions to train frontier AI models.",
    },
  ],
};

export const stats = [
  { value: 1.5, decimals: 1, suffix: "+", label: "Years of Web Dev Training" },
  { value: 5, decimals: 0, suffix: " yrs", label: "Professional Experience" },
  { value: 12, decimals: 0, suffix: "+", label: "Projects Built" },
  { value: 4, decimals: 0, suffix: "+", label: "Certifications" },
];

export const skills = {
  groups: [
    {
      title: "Frontend",
      icon: Palette,
      items: [
        { name: "HTML5 / CSS3", level: 92 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React", level: 84 },
        { name: "Tailwind CSS", level: 88 },
        { name: "TypeScript", level: 72 },
        { name: "Next.js", level: 74 },
        { name: "Responsive Design", level: 90 },
        { name: "Redux / Context API", level: 68 },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      items: [
        { name: "Node.js", level: 78 },
        { name: "Express.js", level: 76 },
        { name: "RESTful APIs", level: 80 },
        { name: "MongoDB / Mongoose", level: 75 },
        { name: "SQL / MySQL", level: 66 },
        { name: "JWT & Auth", level: 74 },
        { name: "Firebase", level: 68 },
        { name: "Socket.IO", level: 58 },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: GitBranch,
      items: [
        { name: "Git & GitHub", level: 86 },
        { name: "VS Code", level: 92 },
        { name: "Postman", level: 80 },
        { name: "Vercel / Netlify", level: 84 },
        { name: "Figma", level: 70 },
        { name: "npm / Yarn", level: 85 },
        { name: "Agile / Scrum", level: 65 },
        { name: "Testing (Jest)", level: 55 },
      ],
    },
  ],
  currentlyLearning: [
    "Agentic AI",
    "AI tools and automation",
    "System Design basics",
  ],
};

export const experience = [
  {
    id: "junior-dev",
    role: "Junior Web Developer",
    company: "TechNova Solutions",
    location: "Bengaluru (Hybrid)",
    type: "Full-time",
    period: "Jan 2026 — Jun 2026",
    duration: "6 months",
    summary:
      "Worked on client-facing web applications as part of a 6-person product team, shipping features end-to-end.",
    highlights: [
      "Built and shipped 4 responsive dashboards using React, TypeScript and Tailwind CSS, used by 50+ internal users daily.",
      "Improved average Lighthouse performance score from 62 to 90 by optimizing bundles, lazy-loading routes and auditing assets.",
      "Collaborated in daily Agile standups, participated in code reviews and pair programming, cutting bug turnaround by ~30%.",
      "Fixed 40+ cross-browser and accessibility issues, helping the team pass WCAG 2.1 AA checks on two major projects.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Git"],
  },
  {
    id: "intern",
    role: "Web Development Intern",
    company: "PixelForge Studio",
    location: "Remote",
    type: "Internship",
    period: "Jul 2025 — Dec 2025",
    duration: "6 months",
    summary:
      "Joined a small studio building marketing sites and small business apps for local clients.",
    highlights: [
      "Converted Figma designs into pixel-perfect, mobile-first pages for 6 client projects using HTML, CSS and JavaScript.",
      "Built a reusable component library (18 components) with vanilla JS + SCSS that cut new-page build time by half.",
      "Integrated REST APIs and forms, and wrote documentation so clients could manage their own content.",
      "Received consistent mentor feedback for code clarity, naming conventions and attention to detail.",
    ],
    tech: ["HTML5", "SCSS", "JavaScript", "REST APIs", "Figma", "Git"],
  },
];

export const education = [
  {
    id: "btech",
    level: "B.Tech",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    specialization: "Web Development",
    institution: "Global Institute of Technology, Bengaluru",
    period: "2021 — 2025",
    score: "CGPA 8.4 / 10",
    scoreType: "marks",
    highlights: [
      "Built a college event portal used by 1,200+ students as the final year capstone project.",
      "Coursework: Data Structures, DBMS, Computer Networks, Operating Systems, Web Technologies.",
      "Led a 4-member team in Smart India Hackathon (internal round) — reached college finals.",
    ],
  },
  {
    id: "12th",
    level: "Class XII",
    degree: "Senior Secondary (PCM)",
    field: "Science — Physics, Chemistry, Maths",
    specialization: "Mathematics & Computer Science",
    institution: "Greenfield Public School, Bengaluru",
    period: "2020 — 2021",
    score: "88.5%",
    scoreType: "marks",
    highlights: [
      "School topper in Computer Science (94/100).",
      "Member of the coding club; organized a school-wide tech quiz.",
    ],
  },
  {
    id: "10th",
    level: "Class X",
    degree: "Secondary School",
    field: "All Subjects",
    specialization: "Science stream preparation",
    institution: "Greenfield Public School, Bengaluru",
    period: "2018 — 2019",
    score: "91.0%",
    scoreType: "marks",
    highlights: [
      "Consistently ranked in the top 5 of the class.",
      "Represented school in inter-school science exhibitions (won 2nd prize).",
    ],
  },
];

export const training = {
  featured: {
    title: "Full-Stack Web Development Program",
    provider: "CodeCraft Academy",
    period: "2024 — 2025",
    duration: "1.5 years",
    description:
      "An intensive, project-based program covering the complete MERN stack plus Next.js, with 20+ guided projects and a capstone. This is where I went from writing my first lines of HTML to shipping full-stack applications.",
    topics: [
      "HTML, CSS & JavaScript fundamentals",
      "React & modern state management",
      "Node.js, Express & REST APIs",
      "MongoDB & database design",
      "Next.js, SSR & deployment",
      "Git, GitHub & CI workflow",
    ],
    outcome: "Graduated with a 'Distinction' grade and a portfolio of 12+ public projects.",
    verified: true,
  },
  certifications: [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "May 2025",
      credential: "FreeCodeCamp-RWD-2025",
      skill: "HTML, CSS, Flexbox, Grid",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "Aug 2025",
      credential: "FreeCodeCamp-JS-2025",
      skill: "JS, ES6, Algorithms",
    },
    {
      title: "Node.js & Express — Backend Bootcamp",
      issuer: "Coursera (IBM)",
      date: "Nov 2025",
      credential: "Coursera-Node-2025",
      skill: "Node.js, Express, REST",
    },
    {
      title: "Git & GitHub Essentials",
      issuer: "Udemy",
      date: "Dec 2024",
      credential: "Udemy-Git-2024",
      skill: "Version control, workflows",
    },
  ],
};

export type Project = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  result: string;
  icon: LucideIcon;
  gradient: string;
  tech: string[];
  links: { github: string; live: string };
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    category: "SaaS · Project Management",
    tagline: "A collaborative project management board for small teams.",
    problem:
      "Small teams juggle Trello, spreadsheets and chat threads, making task ownership unclear and deadlines missed.",
    solution:
      "Built a kanban-style board with drag-and-drop tasks, team workspaces, real-time updates and role-based access using the MERN stack.",
    result:
      "Cut onboarding time to 5 minutes and handled 1,000+ tasks with 40 concurrent users during internal beta.",
    icon: Layers,
    gradient: "from-indigo-500 via-violet-500 to-purple-500",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS"],
    links: { github: "https://github.com/", live: "https://example.com" },
    featured: true,
  },
  {
    id: "devconnect",
    title: "DevConnect",
    category: "Social Platform",
    tagline: "A community hub where developers share projects and feedback.",
    problem:
      "Developers had no simple, focused place to showcase side projects and get structured, kind feedback.",
    solution:
      "Created a social feed with project showcase cards, comments, likes, and a developer profile system with JWT authentication.",
    result:
      "120+ users joined during launch week; average session time of 6 minutes demonstrates real engagement.",
    icon: Code2,
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    tech: ["Next.js", "MongoDB", "JWT", "Tailwind CSS", "Cloudinary"],
    links: { github: "https://github.com/", live: "https://example.com" },
    featured: true,
  },
  {
    id: "shopsphere",
    title: "ShopSphere",
    category: "E-Commerce",
    tagline: "A full-featured storefront with cart, checkout and admin panel.",
    problem:
      "Generic e-commerce templates are bloated, slow and impossible to customize for small retailers.",
    solution:
      "Built a lightweight storefront with product search/filtering, cart state, payment flow (Stripe test mode) and a simple admin dashboard.",
    result:
      "Lighthouse performance 95+ on mobile; add-to-cart to checkout works in 3 clicks.",
    icon: Smartphone,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    links: { github: "https://github.com/", live: "https://example.com" },
    featured: false,
  },
  {
    id: "budgetbuddy",
    title: "BudgetBuddy",
    category: "Fintech · Dashboard",
    tagline: "A personal finance tracker with charts and smart insights.",
    problem:
      "Budgeting apps hide the numbers behind subscriptions; users wanted a free, visual, no-nonsense tracker.",
    solution:
      "Developed a dashboard with category-wise expense tracking, monthly budgets, CSV import and interactive charts.",
    result:
      "Users report spending 20% less after a month of consistent tracking (small user study).",
    icon: Brain,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    tech: ["React", "Recharts", "Node.js", "MongoDB"],
    links: { github: "https://github.com/", live: "https://example.com" },
    featured: false,
  },
  {
    id: "weathernow",
    title: "WeatherNow",
    category: "PWA · Utility",
    tagline: "A progressive web app for hyperlocal weather at a glance.",
    problem: "Weather apps bury the info people need behind ads and heavy payloads.",
    solution:
      "Built a lightweight PWA with geolocation, offline caching, hourly forecasts and a clean minimal UI.",
    result: "95 Lighthouse PWA score; installable on mobile with full offline support.",
    icon: Cpu,
    gradient: "from-amber-500 via-orange-500 to-red-500",
    tech: ["React", "PWA", "OpenWeather API", "Workbox"],
    links: { github: "https://github.com/", live: "https://example.com" },
    featured: false,
  },
  {
    id: "blogcms",
    title: "InkPress",
    category: "CMS · Blog Platform",
    tagline: "A minimal Markdown-powered blogging engine.",
    problem:
      "Starting a blog today means heavy CMSs or lock-in — writers wanted a simple, fast, Markdown-first option.",
    solution:
      "Engineered a Markdown-based CMS with syntax highlighting, drafts, categories and RSS feeds.",
    result: "Full-page load in under 1s on a free tier; SEO-friendly with SSR and meta tags.",
    icon: Eye,
    gradient: "from-slate-500 via-slate-600 to-zinc-600",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    links: { github: "https://github.com/", live: "https://example.com" },
    featured: false,
  },
];

export const testimonials = [
  {
    quote:
      "Alex consistently delivered clean, well-thought-out code ahead of schedule. For a junior developer, the level of ownership they showed on production features was genuinely impressive.",
    name: "Priya Sharma",
    role: "Senior Software Engineer, TechNova Solutions",
    initials: "PS",
  },
  {
    quote:
      "One of the most curious and disciplined students I've taught. Alex doesn't just complete an assignment — they dig into why it works and then improve it beyond the requirement.",
    name: "Dr. Ramesh Iyer",
    role: "Professor of CSE, Global Institute of Technology",
    initials: "RI",
  },
  {
    quote:
      "From Figma to a working site, Alex delivered pixel-perfect pages that our clients loved. Reliable, quick to learn, and a pleasure to collaborate with in a remote team.",
    name: "Sara Khan",
    role: "Design Lead, PixelForge Studio",
    initials: "SK",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "training", label: "Training" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];