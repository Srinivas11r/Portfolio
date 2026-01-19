import { contactInfo, profile } from "@/lib/content";

export function TierContact() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto w-full max-w-5xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Contact</p>
        <h2 className="text-2xl font-semibold text-slate-900">Let’s discuss internship or entry-level ML roles.</h2>
        <p className="text-sm text-slate-600">I respond within 48 hours.</p>
        <div className="flex flex-col gap-2 text-base text-slate-700">
          <a href={`mailto:${contactInfo.email}`} className="font-semibold text-blue-700 underline underline-offset-4">
            {contactInfo.email}
          </a>
          <a href={contactInfo.linkedin} className="font-semibold text-blue-700 underline underline-offset-4" target="_blank" rel="noreferrer">
            LinkedIn Profile
          </a>
          <p className="text-sm text-slate-500">Currently in {profile.location}</p>
        </div>
      </div>
    </section>
  );
}
