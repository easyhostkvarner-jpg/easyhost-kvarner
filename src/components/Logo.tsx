import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-key.jpg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center ${className}`} aria-label="EasyHost Kvarner">
      <img
        src={logo}
        alt="EasyHost Kvarner"
        className="h-16 w-auto object-contain sm:h-20 mix-blend-multiply"
        width={320}
        height={80}
      />
    </Link>
  );
}
