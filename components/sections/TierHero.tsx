"use client";

import { profile } from "@/lib/content";
import Link from "next/link";

export function TierHero() {
  return (
    <section id="about" className="bg-slate-50 px-6 py-20 text-slate-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">About</p>
          <h1 className="text-4xl font-semibold text-slate-900">{profile.name}</h1>
          <p className="text-xl font-medium text-slate-700">{profile.role}</p>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-base text-slate-700">{profile.summary}</p>
          <ul className="space-y-2 text-base text-slate-700">
            {profile.aboutLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link
              href={profile.github}
              className="rounded-full border border-slate-200 px-5 py-2 text-slate-900 transition hover:border-blue-600 hover:text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              href={profile.linkedin}
              className="rounded-full border border-slate-200 px-5 py-2 text-slate-900 transition hover:border-blue-600 hover:text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href={profile.resume}
              className="rounded-full border border-blue-700 bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`} className="font-semibold text-blue-700 underline underline-offset-4">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
