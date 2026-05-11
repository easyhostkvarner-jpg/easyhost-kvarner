import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-key.jpg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center ${className}`} aria-label="EasyHost Kvarner">
      <img
        src={logo}
        alt="EasyHost Kvarner"
        className="h-20 w-auto object-contain sm:h-28 mix-blend-multiply"
        width={420}
        height={112}
      />
    </Link>
  );
}
