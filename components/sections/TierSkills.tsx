import { skillGroups } from "@/lib/content";

export function TierSkills() {
  return (
    <section id="skills" className="border-t border-slate-200 bg-white px-6 py-16 text-slate-900">
      <div className="mx-auto w-full max-w-5xl space-y-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Skills</p>
          <h2 className="text-2xl font-semibold text-slate-900">Role-focused stack</h2>
          <p className="text-sm text-slate-600">Grouped by how I use them day to day.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{group.title}</p>
              <ul className="mt-4 space-y-2 text-base text-slate-700">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
