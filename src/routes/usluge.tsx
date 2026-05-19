import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Calendar, Users, MessageCircle, Sparkles, BedDouble, ShieldCheck, FileText, Wrench, BarChart3, KeyRound, ArrowRight, Waves, Package2, RefreshCw} from "lucide-react";

export const Route = createFileRoute("/usluge")({
  head: () => ({
    meta: [
      { title: "Usluge — EasyHost Kvarner" },
      { name: "description", content: "Sve usluge upravljanja apartmanima: rezervacije, check-in, čišćenje, eVisitor, posteljina, dezinfekcija ozonom i izvještavanje." },
      { property: "og:title", content: "Usluge — EasyHost Kvarner" },
      { property: "og:description", content: "Sve na jednom mjestu — od prijave gosta do čiste posteljine." },
    ],
    links: [{ rel: "canonical", href: "https://easyhostkvarner.com/usluge" }],
  }),
  component: UslugePage,
});

const items = [
  { icon: Calendar, t: "Upravljanje rezervacijama i kalendarom", d: "Sinkronizacija termina, blokiranje, optimizacija cijena i popunjenosti tijekom cijele sezone." },
  { icon: Users, t: "Check-in i check-out", d: "Doček i ispraćaj gostiju, predaja ključeva, kratko upoznavanje s objektom." },
  { icon: MessageCircle, t: "Komunikacija s gostima", d: "Brza i profesionalna komunikacija na hrvatskom i engleskom jeziku — po dogovoru i na drugim jezicima." },
  { icon: Sparkles, t: "Profesionalno čišćenje", d: "Visoki standardi čistoće između svake rezervacije, kontrola kvalitete." },
  { icon: BedDouble, t: "Posteljina i ručnici", d: "Pranje, zamjena i priprema kompletne posteljine i ručnika za svakog gosta." },
  { icon: ShieldCheck, t: "Dezinfekcija ozonom", d: "Profesionalna ozonska dezinfekcija pri svakoj izmjeni gostiju." },
  { icon: KeyRound, t: "Prijava u eVisitor", d: "Pravovremena prijava i odjava svih gostiju u službeni sustav." },
  { icon: FileText, t: "Izdavanje računa i evidencija", d: "Knjiga gostiju, računi, sva administracija — vođena uredno i transparentno." },
  { icon: Wrench, t: "Održavanje i sitni popravci", d: "Koordinacija servisa i majstora, briga o opremi i interijeru." },
  { icon: BarChart3, t: "Redovito izvještavanje", d: "Mjesečni izvještaji o popunjenosti, prihodu i stanju objekta — potpuna transparentnost." },
    {icon: Waves, t: "Čišćenje i održavanje bazena", d: "redovno čišćenje i kontrola kvalitete vode"},
  { icon: Package2, t: "Priprema za sezonu", d: "uređenje i kompletna priprema objekta prije početka sezone"},
   { icon:  RefreshCw, t: "Mjesečno održavanje", d: "redovna briga i održavanje objekta tijekom cijelog mjeseca"},

];

function UslugePage() {
  return (
    <Layout>
      <section className="bg-sand/40 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-dark">Naše usluge</span>
          <h1 className="mt-5 font-display text-4xl font-bold text-brand-dark sm:text-5xl">Sve što treba — na jednom mjestu</h1>
          <p className="mt-5 text-lg text-foreground/80">
            Brinemo o svakom detalju vašeg apartmana ili kuće za odmor — od prve poruke gosta do uredne knjige gostiju.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-4 px-4 lg:px-8">
          {items.map((it, i) => (
            <div key={it.t} className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-soft sm:flex-row sm:items-center sm:gap-6 sm:p-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <it.icon size={26} />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xs font-bold text-brand/60">0{i + 1}</span>
                  <h3 className="font-display text-lg font-bold text-brand-dark sm:text-xl">{it.t}</h3>
                </div>
                <p className="mt-1 text-muted-foreground">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gradient-cta">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Spremni za bezbrižno iznajmljivanje?</h2>
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-xl">
            Zatražite ponudu <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
