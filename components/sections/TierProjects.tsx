import Link from "next/link";
import Image from "next/image";
import { showcaseProjects } from "@/lib/content";

export function TierProjects() {
  return (
    <section id="projects" className="border-t border-slate-200 bg-white px-6 py-16 text-slate-900">
      <div className="mx-auto w-full max-w-5xl space-y-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Projects</p>
          <h2 className="text-2xl font-semibold text-slate-900">Selected work</h2>
          <p className="text-sm text-slate-600">Each project highlights a clear problem, approach, and result.</p>
        </header>
        <div className="space-y-8">
          {showcaseProjects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="relative w-full overflow-hidden rounded-2xl bg-white lg:w-1/3">
                  <Image src={project.cover} alt={`${project.title} preview`} width={640} height={400} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                    <Link href={project.github} className="text-sm font-semibold text-blue-700 underline underline-offset-4" target="_blank" rel="noreferrer">
                      GitHub ↗
                    </Link>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li>
                      <span className="font-semibold text-slate-900">Problem:</span> {project.problem}
                    </li>
                    <li>
                      <span className="font-semibold text-slate-900">Approach:</span> {project.approach}
                    </li>
                    <li>
                      <span className="font-semibold text-slate-900">Tools:</span> {project.tools.join(", ")}
                    </li>
                    <li>
                      <span className="font-semibold text-slate-900">Role:</span> {project.contribution}
                    </li>
                    <li>
                      <span className="font-semibold text-slate-900">Outcome:</span> {project.outcome}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
