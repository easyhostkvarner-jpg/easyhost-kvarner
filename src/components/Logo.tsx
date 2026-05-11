import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="EasyHost Kvarner">
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="h-11 w-11 shrink-0"
        aria-hidden="true"
      >
        {/* Key bow with stylized "e" */}
        <circle cx="22" cy="20" r="13" fill="none" stroke="var(--brand)" strokeWidth="5" />
        <rect x="14" y="18.5" width="16" height="4" fill="var(--brand)" />
        {/* Key shaft */}
        <rect x="20" y="30" width="5" height="28" rx="1.5" fill="var(--brand)" />
        {/* Teeth */}
        <rect x="25" y="46" width="7" height="4" fill="var(--brand)" />
        <rect x="25" y="53" width="5" height="4" fill="var(--brand)" />
      </svg>
      <div className="leading-tight">
        <div className="font-display text-[1.05rem] font-extrabold tracking-tight text-brand-dark sm:text-lg">
          EasyHost
        </div>
        <div className="font-display text-[1.05rem] font-extrabold tracking-tight text-brand-dark -mt-1 sm:text-lg">
          Kvarner
        </div>
        <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.15em] text-muted-foreground hidden sm:block">
          Jednostavno upravljanje
        </div>
      </div>
    </Link>
  );
}
