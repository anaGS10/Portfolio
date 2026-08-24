import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.domain,
  email: profile.email,
  jobTitle: profile.title,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
    addressCountry: "IN",
  },
  sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.twitter],
};

export const metadata: Metadata = {
  metadataBase: new URL(profile.domain),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "full-stack developer",
    "web developer",
    "MERN stack",
    "React developer",
    "Next.js",
    "TypeScript",
    "portfolio",
    "fresher",
    "junior developer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
    url: profile.domain,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.svg",
        width: 600,
        height: 600,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
    images: ["/profile.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}