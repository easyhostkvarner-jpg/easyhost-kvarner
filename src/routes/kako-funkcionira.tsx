import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Home, Key, TrendingUp, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/kako-funkcionira")({
  head: () => ({
    meta: [
      { title: "Kako funkcionira — EasyHost Kvarner" },
      { name: "description", content: "Tri jednostavna koraka do bezbrižnog iznajmljivanja: upoznavanje, preuzimanje upravljanja i kontinuirana briga." },
      { property: "og:title", content: "Kako funkcionira — EasyHost Kvarner" },
      { property: "og:description", content: "3 koraka do bezbrižnog upravljanja smještajem." },
    ],
    links: [{ rel: "canonical", href: "https://easyhostkvarner.com/kako-funkcionira" }],
  }),
  component: KakoPage,
});

const steps = [
  { icon: Home, n: "1", t: "Upoznavanje i analiza", d: "Pregledavamo vaš smještaj, slušamo vaše ciljeve i predlažemo plan suradnje. Bez obveze i bez stresa.", points: ["Posjet objektu ili online dogovor", "Procjena potencijala", "Prijedlog paketa usluga"] },
  { icon: Key, n: "2", t: "Preuzimanje upravljanja", d: "Preuzimamo komunikaciju s gostima, rezervacije, organizaciju čišćenja, prijavu u eVisitor i sve operativne procese.", points: ["Postavljanje kalendara i cijena", "Onboarding objekta", "Priprema za prvu rezervaciju"] },
  { icon: TrendingUp, n: "3", t: "Kontinuirana briga i rast", d: "Radimo na boljim ocjenama, većoj popunjenosti i zadovoljstvu gostiju — uz redovito izvještavanje.", points: ["Mjesečni izvještaji", "Optimizacija cijena", "Stalna podrška vlasniku"] },
];

function KakoPage() {
  return (
    <Layout>
      <section className="bg-sand/40 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-dark">Kako funkcionira</span>
          <h1 className="mt-5 font-display text-4xl font-bold text-brand-dark sm:text-5xl">Tri koraka do mirnog sna</h1>
          <p className="mt-5 text-lg text-foreground/80">Jednostavno, jasno i transparentno — od prvog razgovora do svakodnevne brige o vašem smještaju.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={s.n} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="rounded-3xl bg-sand/50 p-10 shadow-card">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-cta text-2xl font-bold text-white shadow-soft">{s.n}</div>
                    <s.icon className="text-brand" size={32} />
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-bold text-brand-dark">{s.t}</h2>
                  <p className="mt-3 text-foreground/85">{s.d}</p>
                </div>
                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-card">
                      <span className="h-2 w-2 rounded-full bg-brand" />
                      <span className="text-foreground/90">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-cta">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Krenimo od prvog koraka.</h2>
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-xl">
            Dogovorite razgovor <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
