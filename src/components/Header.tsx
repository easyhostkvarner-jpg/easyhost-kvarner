import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Naslovna", hash: undefined as string | undefined },
  { to: "/", label: "Apartmani", hash: "apartmani" },
  { to: "/usluge", label: "Usluge", hash: undefined as string | undefined },
  { to: "/kako-funkcionira", label: "Kako funkcionira", hash: undefined as string | undefined },
  { to: "/o-nama", label: "O nama", hash: undefined as string | undefined },
  { to: "/kontakt", label: "Kontakt", hash: undefined as string | undefined },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
              activeProps={{ className: "text-brand font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="rounded-full gradient-cta px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
          >
            Zatražite ponudu
          </Link>
        </nav>
        <button
          className="lg:hidden text-brand-dark"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <nav className="flex flex-col px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-muted-foreground"
                activeProps={{ className: "text-brand font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full gradient-cta px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Zatražite ponudu
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
