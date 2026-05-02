import logo from "@/assets/logo.jpeg";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <img src={logo} alt="EasyHost Kvarner" className="h-12 w-12 rounded-md object-cover" width={48} height={48} />
      <div className="leading-tight">
        <div className="font-display text-lg font-bold text-brand-dark">EasyHost</div>
        <div className="font-display text-lg font-bold text-brand-dark -mt-1">Kvarner</div>
      </div>
    </Link>
  );
}
