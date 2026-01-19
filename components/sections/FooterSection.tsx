export function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-slate-500">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.3em] sm:flex-row">
        <p>© {new Date().getFullYear()} Srinivasulu R</p>
        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
