import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/content";
import { SectionShell } from "@/components/ui/section-shell";
import { Navbar } from "@/components/sections/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

interface CaseStudyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return { title: "Case Study" };
  return {
    title: `${study.title} — Case Study`,
    description: study.tldr
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) {
    notFound();
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <SectionShell>
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="section-heading">Case Study Narrative</p>
            <h1 className="text-4xl font-semibold text-white">{study.title}</h1>
            <p className="paragraph-muted">{study.tldr}</p>
          </div>
          <div className="grid gap-10">
            <CaseStudyBlock title="Problem" description={study.problem} />
            <CaseStudyBlock title="Role" description={study.role} />
            <CaseStudyBlock title="Approach & Architecture" description={`${study.approach}\n\n${study.architecture}`} />
            <CaseStudyBlock title="Tech Stack" description={study.tech.join(" • ")} />
            <CaseStudyBlock title="Results" description={study.results} />
            <CaseStudyBlock title="Key Learnings" list={study.learnings} />
            <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.35em] text-primary-200">
              <a href={study.demo} className="underline">
                Launch demo
              </a>
              <a href={study.github} className="underline">
                View GitHub repo
              </a>
            </div>
          </div>
        </div>
      </SectionShell>
      <FooterSection />
    </div>
  );
}

function CaseStudyBlock({ title, description, list }: { title: string; description?: string; list?: string[] }) {
  const items = list ?? [];
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-xs uppercase tracking-[0.35em] text-primary-200">{title}</p>
      {items.length ? (
        <ul className="mt-4 space-y-2 text-slate-200">
          {items.map((line) => (
            <li key={line}>• {line}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 whitespace-pre-wrap text-slate-200">{description}</p>
      )}
    </div>
  );
}
