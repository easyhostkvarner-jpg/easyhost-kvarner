import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-key.jpg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center ${className}`} aria-label="EasyHost Kvarner">
      <img
        src={logo}
        alt="EasyHost Kvarner"
        className="h-12 w-auto object-contain sm:h-14"
        width={220}
        height={56}
      />
    </Link>
  );
}
