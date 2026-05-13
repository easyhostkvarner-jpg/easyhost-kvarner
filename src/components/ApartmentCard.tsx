import { Link } from "@tanstack/react-router";
import { BedDouble, Bath, MapPin, ArrowRight, Users, CalendarCheck } from "lucide-react";
import type { Apartment } from "@/data/apartments";

export function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-card transition-all hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-glow">
      {/* Full-card click target */}
      <Link
        to="/apartmani/$slug"
        params={{ slug: apartment.slug }}
        aria-label={`Otvori ${apartment.villa} — ${apartment.name}`}
        className="absolute inset-0 z-10"
      />

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={apartment.mainImage}
          alt={`${apartment.villa} — ${apartment.name}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-dark backdrop-blur-sm">
          {apartment.villa}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-brand-dark">{apartment.name}</h3>
        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin size={12} className="text-brand" />
          {apartment.location}
        </p>
        <p className="mt-3 text-sm text-foreground/80">{apartment.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <BedDouble size={14} className="text-brand" /> {apartment.bedrooms} sobe
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath size={14} className="text-brand" /> {apartment.bathrooms} kupaone
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users size={14} className="text-brand" /> {apartment.capacity}
          </span>
        </div>

        <div className="relative z-20 mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            to="/apartmani/$slug"
            params={{ slug: apartment.slug }}
            className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand/30 bg-white px-4 py-2.5 text-sm font-semibold text-brand-dark transition-all hover:scale-[1.02] hover:bg-brand/5"
          >
            Pogledaj više
            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
          <Link
            to="/apartmani/$slug"
            params={{ slug: apartment.slug }}
            hash="rezervacija"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full gradient-cta px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:scale-[1.02]"
          >
            <CalendarCheck size={14} /> Rezerviraj sada
          </Link>
        </div>
      </div>
    </article>
  );
}
