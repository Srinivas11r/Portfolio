import { certificationList } from "@/lib/content";

export function TierCertifications() {
  if (!certificationList.length) return null;
  return (
    <section id="certifications" className="border-t border-slate-200 bg-white px-6 py-16 text-slate-900">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Certifications</p>
          <h2 className="text-2xl font-semibold text-slate-900">Brief list</h2>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {certificationList.map((cert) => (
            <article key={cert.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">{cert.title}</h3>
              <p className="text-sm text-slate-600">{cert.issuer}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-700">{cert.year}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
