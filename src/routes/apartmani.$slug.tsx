import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ReservationForm } from "@/components/ReservationForm";
import {
  apartments,
  getApartmentBySlug,
  type Apartment,
} from "@/data/apartments";
import {
  ArrowLeft,
  BedDouble,
  Bath,
  Users,
  MapPin,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/apartmani/$slug")({
  loader: ({ params }) => {
    const apartment = getApartmentBySlug(params.slug);
    if (!apartment) throw notFound();
    return { apartment };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.apartment;
    if (!a) return {};
    return {
      meta: [
        { title: a.seoTitle },
        { name: "description", content: a.seoDescription },
        { property: "og:title", content: a.seoTitle },
        { property: "og:description", content: a.seoDescription },
        { property: "og:image", content: a.mainImage },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: a.mainImage },
      ],
      links: [{ rel: "canonical", href: `https://easyhostkvarner.com/apartmani/${a.slug}` }],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Apartman nije pronađen</h1>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeft size={16} /> Povratak na početnu
        </Link>
      </div>
    </Layout>
  ),
  component: ApartmentPage,
});

function ApartmentPage() {
  const { apartment } = Route.useLoaderData() as { apartment: Apartment };
  const [activeImage, setActiveImage] = useState(apartment.mainImage);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            <ArrowLeft size={14} /> Svi apartmani
          </Link>
        </div>

        <div className="mx-auto mt-6 grid max-w-7xl gap-8 px-4 pb-12 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="relative overflow-hidden rounded-3xl shadow-glow ring-1 ring-white/40">
              <img
                src={activeImage}
                alt={`${apartment.villa} — ${apartment.name}`}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {apartment.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`overflow-hidden rounded-xl ring-2 transition-all ${
                    activeImage === img ? "ring-brand" : "ring-transparent hover:ring-brand/40"
                  }`}
                >
                  <img src={img} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              <Building2 size={12} /> {apartment.villa}
            </span>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
              {apartment.name}
            </h1>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={14} className="text-brand" />
              {apartment.location}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Stat icon={BedDouble} value={apartment.bedrooms} label="spavaće sobe" />
              <Stat icon={Bath} value={apartment.bathrooms} label="kupaone" />
              <Stat icon={Users} value={apartment.capacity} label="kapacitet" />
            </div>

            <p className="mt-6 text-foreground/85">{apartment.shortDescription}</p>

            <div className="mt-6">
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-dark">
                Sadržaji
              </h2>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {apartment.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#rezervacija"
              className="mt-8 inline-flex items-center justify-center rounded-full gradient-cta px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02]"
            >
              Rezerviraj termin
            </a>
          </div>
        </div>
      </section>

      {/* SEO description */}
      <section className="bg-sand/40 py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl">
            O apartmanu
          </h2>
          <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
            {apartment.longDescription.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section id="rezervacija" className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Rezervacija
            </h2>
            <p className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              <span className="gradient-text">Pošaljite upit</span>
            </p>
            <p className="mt-2 text-muted-foreground">
              Javit ćemo Vam se s potvrdom dostupnosti i ponudom u najkraćem roku.
            </p>
          </div>
          <div className="mt-10 rounded-3xl border border-border/70 bg-card p-6 shadow-card sm:p-8">
            <ReservationForm apartmentName={`${apartment.villa} — ${apartment.name}`} />
          </div>
        </div>
      </section>

      {/* Other apartments */}
      <section className="bg-sand/40 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Ostali apartmani
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {apartments
              .filter((a) => a.slug !== apartment.slug)
              .slice(0, 3)
              .map((a) => (
                <Link
                  key={a.slug}
                  to="/apartmani/$slug"
                  params={{ slug: a.slug }}
                  className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={a.mainImage}
                      alt={a.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {a.villa}
                    </p>
                    <h3 className="mt-1 font-display font-bold text-brand-dark">{a.name}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof BedDouble;
  value: string | number;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card p-3 text-center shadow-card">
      <Icon size={18} className="mx-auto text-brand" />
      <div className="mt-1 font-display text-base font-bold text-brand-dark">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
