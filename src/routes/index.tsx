import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Calendar, Users, MessageCircle, Sparkles, BedDouble, ShieldCheck, FileText, Wrench, BarChart3, KeyRound, CheckCircle2, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import towelsImg from "@/assets/towels.jpg";
import interiorImg from "@/assets/interior.jpg";
import keysImg from "@/assets/keys.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Upravljanje apartmanima Kvarner | EasyHost Kvarner" },
      { name: "description", content: "Profesionalno upravljanje apartmanima i kućama za odmor na Kvarneru i u Istri. Bez stresa, više gostiju i bolje ocjene." },
      { property: "og:title", content: "EasyHost Kvarner — Vaš dom, naša briga." },
      { property: "og:description", content: "Profesionalno upravljanje apartmanima i kućama za odmor na Kvarneru i Istri." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Calendar, title: "Upravljanje rezervacijama", text: "i kalendarom" },
  { icon: Users, title: "Check-in i check-out", text: "doček i ispraćaj gostiju" },
  { icon: MessageCircle, title: "Komunikacija s gostima", text: "(HR / EN / više jezika)" },
  { icon: Sparkles, title: "Profesionalno čišćenje", text: "i održavanje objekta" },
  { icon: BedDouble, title: "Posteljina i ručnici", text: "pranje, zamjena, priprema" },
  { icon: ShieldCheck, title: "Dezinfekcija ozonom", text: "pri svakoj izmjeni gostiju" },
  { icon: KeyRound, title: "Prijava gostiju", text: "u sustav eVisitor" },
  { icon: FileText, title: "Izdavanje računa", text: "i vođenje evidencije" },
  { icon: Wrench, title: "Održavanje objekta", text: "i koordinacija popravaka" },
  { icon: BarChart3, title: "Redovito izvještavanje", text: "i potpuna transparentnost" },
];

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Mediteranski apartman s pogledom na Kvarner" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-dark">
              Kvarner & Istra
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-brand-dark sm:text-5xl lg:text-6xl">
              Jednostavno upravljanje smještajem na Kvarneru
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              Brinemo o vašim apartmanima i kućama za odmor – od prijave gostiju, prijave u eVisitor, čišćenja i posteljine – vi uživate, a mi radimo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full gradient-cta px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105">
                Zatražite ponudu <ArrowRight size={16} />
              </Link>
              <Link to="/usluge" className="inline-flex items-center rounded-full border-2 border-brand-dark/20 bg-white/80 px-7 py-3.5 text-sm font-semibold text-brand-dark backdrop-blur transition-colors hover:bg-white">
                Saznajte više
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ŠTO RADIMO */}
      <section className="bg-sand/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <KeyRound className="text-brand" />
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-dark">Što radimo</h2>
            </div>
            <p className="mt-6 text-lg text-foreground/85">
              Brinemo o svakom detalju vašeg apartmana ili kuće za odmor — od rezervacija i prijava gostiju do čišćenja i administracije.
            </p>
            <p className="mt-4 font-semibold text-brand-dark">Naš cilj je jednostavan:</p>
            <p className="text-foreground/85">bezbrižno iznajmljivanje za vlasnike i vrhunsko iskustvo za goste.</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img src={towelsImg} alt="Svježa posteljina i ručnici" className="h-full w-full object-cover" width={1280} height={896} loading="lazy" />
          </div>
        </div>
      </section>

      {/* USLUGE */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">Naše usluge</h2>
            <p className="mt-3 font-display text-3xl font-bold text-brand-dark sm:text-4xl">Sve na jednom mjestu</p>
            <p className="mt-2 text-muted-foreground">Jednostavno, pouzdano i profesionalno.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-soft">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-tight text-brand-dark">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZAŠTO ODABRATI NAS */}
      <section className="bg-sand/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-3 lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-dark">Zašto odabrati nas</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Visoki standardi čistoće i organizacije",
                "Brza i profesionalna komunikacija s gostima",
                "Više ocjene i bolje recenzije",
                "Veća popunjenost smještaja",
                "Potpuna briga bez stresa za vlasnika",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={20} />
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft lg:col-span-1">
            <img src={interiorImg} alt="Mediteranski interijer" className="h-full w-full object-cover" width={1280} height={896} loading="lazy" />
          </div>
          <div className="text-center lg:text-left">
            <p className="font-script text-3xl leading-tight text-brand-dark sm:text-4xl">
              „Vaš smještaj vodimo kao da je naš."
            </p>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand lg:mx-0" />
          </div>
        </div>
      </section>

      {/* KAKO FUNKCIONIRA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">Kako funkcionira suradnja</h2>
            <p className="mt-3 font-display text-3xl font-bold text-brand-dark sm:text-4xl">Tri jednostavna koraka</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Upoznavanje i analiza", d: "Pregledavamo vaš smještaj i dogovaramo ciljeve suradnje." },
              { n: "2", t: "Preuzimanje upravljanja", d: "Preuzimamo komunikaciju, rezervacije, organizaciju i operativni dio." },
              { n: "3", t: "Kontinuirana briga i rast", d: "Radimo na boljim ocjenama, većoj popunjenosti i zadovoljstvu gostiju." },
            ].map((s) => (
              <div key={s.n} className="relative rounded-2xl border border-border bg-card p-8 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-cta text-lg font-bold text-white shadow-soft">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-dark">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground">Vi imate potpun uvid — bez svakodnevnih obaveza.</p>
        </div>
      </section>

      {/* ZA KOGA JE */}
      <section className="bg-sand/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img src={keysImg} alt="Ključ apartmana" className="h-[420px] w-full object-cover" width={1024} height={1280} loading="lazy" />
          </div>
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-dark">Za koga je naša usluga</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Za vlasnike koji nemaju vremena za svakodnevno vođenje smještaja",
                "Za vlasnike koji ne žive u Hrvatskoj",
                "Za vlasnike koji žele povećati prihode i ocjene",
                "Za sve koji žele profesionalan pristup bez brige",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={20} />
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden gradient-cta">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Želite bezbrižno iznajmljivanje i bolje rezultate?
            </h2>
            <p className="mt-2 text-white/85">Prepustite upravljanje profesionalcima.</p>
          </div>
          <Link to="/kontakt" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-dark shadow-xl transition-transform hover:scale-105">
            Zatražite ponudu <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
