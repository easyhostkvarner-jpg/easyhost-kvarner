import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="rounded-xl bg-white/95 p-3 inline-block">
            <Logo />
          </div>
          <p className="mt-4 font-script text-xl text-white/90">Vaš dom, naša briga.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">Kontakt</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Phone size={16} /> +385 99 123 4567</li>
            <li className="flex items-center gap-3"><Mail size={16} /> <a href="easyhost.kvarner@gmail.com" className="hover:text-white/80">easyhost.kvarner@gmail.com</a></li>
            <li className="flex items-center gap-3"><MapPin size={16} /> Kvarner & Istra</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">Stranice</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/usluge" className="hover:text-white/80">Usluge</Link></li>
            <li><Link to="/kako-funkcionira" className="hover:text-white/80">Kako funkcionira</Link></li>
            <li><Link to="/o-nama" className="hover:text-white/80">O nama</Link></li>
            <li><Link to="/kontakt" className="hover:text-white/80">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">Pratite nas</h4>
          <div className="mt-4 flex gap-3">
            <a href="https://www.instagram.com/easyhost.kvarner?igsh=MXNhZGFvN2hsN2Rvag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-3 hover:bg-white/20"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/share/18aMG9Fix5/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-3 hover:bg-white/20"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/60 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} EasyHost Kvarner. Sva prava pridržana.</span>
          <span>Obrt za usluge · OIB: 12345678901</span>
        </div>
      </div>
    </footer>
  );
}
