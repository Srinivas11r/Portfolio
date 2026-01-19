import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { SectionShell } from "@/components/ui/section-shell";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SectionShell>
        <div className="space-y-6">
          <p className="section-heading">Case Studies</p>
          <div className="grid gap-6">
            {caseStudies.map((project) => (
              <Link key={project.slug} href={`/case-studies/${project.slug}`} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-primary-400">
                <p className="text-xs uppercase tracking-[0.35em] text-primary-200">Case Study</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{project.title}</h2>
                <p className="text-sm text-slate-400">{project.tldr}</p>
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
