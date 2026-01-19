import { experienceItems } from "@/lib/content";

export function TierExperience() {
  return (
    <section id="experience" className="border-t border-slate-200 bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Experience & Academic Work</p>
          <h2 className="text-2xl font-semibold text-slate-900">Hands-on practice</h2>
        </header>
        <div className="space-y-6">
          {experienceItems.map((item) => (
            <article key={`${item.org}-${item.role}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">{item.label}</p>
                  <h3 className="text-lg font-semibold text-slate-900">{item.org}</h3>
                  <p className="text-sm text-slate-700">{item.role}</p>
                </div>
                <p className="text-sm text-slate-500">{item.period}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {item.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
