import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900">
          Srinivasulu R
        </Link>
        <nav className="hidden items-center gap-5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>
        <Link href={navItems[4].href} className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 md:hidden">
          Contact
        </Link>
      </div>
    </header>
  );
}
