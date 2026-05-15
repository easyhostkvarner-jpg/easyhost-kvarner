import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Heart, Shield, Sparkles, ArrowRight } from "lucide-react";
import interiorImg from "@/assets/interior.webp";

export const Route = createFileRoute("/o-nama")({
  head: () => ({
    meta: [
      { title: "O nama — EasyHost Kvarner" },
      { name: "description", content: "Lokalni tim s višegodišnjim iskustvom u turizmu na Kvarneru i Istri. Povjerenje, transparentnost i kvaliteta." },
      { property: "og:title", content: "O nama — EasyHost Kvarner" },
      { property: "og:description", content: "Lokalni tim za upravljanje smještajem na Kvarneru i Istri." },
    ],
    links: [{ rel: "canonical", href: "https://easyhostkvarner.com/o-nama" }],
  }),
  component: ONamaPage,
});

const faqs = [
  { q: "Što je sve uključeno u vaše usluge?", a: "Sve od komunikacije s gostima, prijave u eVisitor, čišćenja i vođenja evidencije, do izdavanja računa." },
  { q: "Moram li biti prisutan kod dolaska gostiju?", a: "Ne, naš tim preuzima cijeli proces check-ina i check-outa." },
  { q: "Mogu li birati koje usluge želim?", a: "Da, svi paketi su fleksibilni i prilagođeni potrebama svakog objekta." },
  { q: "Na kojem području radite?", a: "Pokrivamo cijeli Kvarner i dio Istre (Opatija, Ičići, Lovran, Mošćenička Draga, Matulji…)." },
  { q: "Koliko brzo možete preuzeti novi objekt?", a: "U pravilu unutar 7 dana od dogovora i potpisivanja ugovora." },
];

function ONamaPage() {
  return (
    <Layout>
      <section className="bg-sand/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-dark">O nama</span>
            <h1 className="mt-5 font-display text-4xl font-bold text-brand-dark sm:text-5xl">Lokalni tim koji razumije Kvarner.</h1>
            <p className="mt-5 text-lg text-foreground/80">
              Lokalni smo tim s višegodišnjim iskustvom u turizmu i smještaju.
            </p>
            <p className="mt-3 text-foreground/80">
              Poznajemo svaki kutak Kvarnera i razumijemo što gosti traže, a što vlasnicima znači sigurnost.
            </p>
            <p className="mt-3 text-foreground/80">
              Naša misija je pružiti bezbrižno iskustvo — da svaki vlasnik zna da je njegov objekt u pouzdanim rukama.
            </p>
            <p className="mt-6 font-script text-3xl text-brand">Vi uživajte u prihodima, mi u detaljima.</p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img src={interiorImg} alt="Mediteranski interijer" className="h-full w-full object-cover" width={1280} height={896} loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">Naše vrijednosti</h2>
            <p className="mt-2 font-display text-3xl font-bold text-brand-dark">Što nas pokreće</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Heart, t: "Povjerenje", d: "Vaš smještaj vodimo kao da je naš — s istom pažnjom i odgovornošću." },
              { icon: Shield, t: "Transparentnost", d: "Redoviti izvještaji i potpuni uvid u sve što radimo s vašim objektom." },
              { icon: Sparkles, t: "Kvaliteta", d: "Visoki standardi u svakom detalju — od posteljine do komunikacije s gostima." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-card p-8 text-center shadow-card">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <v.icon size={26} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-dark">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/40 py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-brand-dark sm:text-4xl">Često postavljana pitanja</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card p-6 shadow-card open:shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display font-semibold text-brand-dark">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-cta">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Imate još pitanja? Tu smo.</h2>
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-xl">
            Kontaktirajte nas <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
