import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Srinivasulu R — AI & ML Engineer",
  description: "Cinematic AI/ML engineer crafting immersive prototypes, research stories, and trustworthy evaluations.",
  keywords: ["Srinivasulu R", "AI engineer", "ML portfolio", "Cinematic AI", "Next.js"],
  openGraph: {
    title: "Srinivasulu R — AI & ML Engineer",
    description: "Scroll-driven portfolio showcasing research-grade prototypes and storytelling.",
    url: "https://srinivasulur.com",
    siteName: "Srinivasulu R",
    images: [{ url: "/hero-fallback.svg", width: 1200, height: 630, alt: "Srinivasulu R hero" }]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  metadataBase: new URL("https://srinivasulur.com"),
  alternates: {
    canonical: "https://srinivasulur.com"
  }
};

export const viewport: Viewport = {
  themeColor: "#8d7dca"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${space.variable} font-sans bg-white text-slate-900`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
