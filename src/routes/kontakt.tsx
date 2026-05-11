import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const EMAILJS_SERVICE_ID = "service_wuhszld";
const EMAILJS_TEMPLATE_ID = "template_k6rxb2i";
const EMAILJS_PUBLIC_KEY = "W5lNlLq03FAmz8UbI";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — EasyHost Kvarner" },
      { name: "description", content: "Javite nam se za ponudu ili kratki razgovor — bez obveze. Pokrivamo Kvarner i Istru." },
      { property: "og:title", content: "Kontakt — EasyHost Kvarner" },
      { property: "og:description", content: "Javite nam se za ponudu — bez obveze." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <Layout>
      <section className="bg-sand/40 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-dark">Kontakt</span>
          <h1 className="mt-5 font-display text-4xl font-bold text-brand-dark sm:text-5xl">Razgovarajmo o vašem smještaju.</h1>
          <p className="mt-5 text-lg text-foreground/80">Javite nam se za ponudu ili kratki razgovor — bez obveze.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, t: "Telefon", v: "+385 99 123 4567", href: "tel:+385991234567" },
              { icon: Mail, t: "Email", v: "easyhost.kvarner@gmail.com", href: "mailto:selmanajna@gmail.com" },
              { icon: MapPin, t: "Lokacija", v: "Kvarner & Istra" },
            ].map((c) => {
              const Inner = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <c.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.t}</div>
                    <div className="mt-0.5 font-display font-semibold text-brand-dark">{c.v}</div>
                  </div>
                </>
              );
              return c.href ? (
                <a key={c.t} href={c.href} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-soft">{Inner}</a>
              ) : (
                <div key={c.t} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">{Inner}</div>
              );
            })}
            <div className="rounded-2xl bg-sand/60 p-6">
              <p className="font-script text-2xl text-brand-dark">Vaš dom, naša briga.</p>
              <p className="mt-2 text-sm text-muted-foreground">Odgovaramo unutar 24 sata, radnim danima u pravilu odmah.</p>
            </div>
          </div>

          <form
            ref={formRef}
            className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 shadow-card"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!formRef.current) return;
              setSending(true);
              setError(null);
              try {
                await emailjs.sendForm(
                  EMAILJS_SERVICE_ID,
                  EMAILJS_TEMPLATE_ID,
                  formRef.current,
                  { publicKey: EMAILJS_PUBLIC_KEY },
                );
                setSent(true);
              } catch (err) {
                console.error(err);
                setError("Slanje nije uspjelo. Pokušajte ponovno ili nas kontaktirajte direktno.");
              } finally {
                setSending(false);
              }
            }}
          >
            <h2 className="font-display text-2xl font-bold text-brand-dark">Pošaljite upit</h2>
            <p className="mt-1 text-sm text-muted-foreground">Odgovorit ćemo s prijedlogom suradnje.</p>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-brand/10 p-6 text-center">
                <div className="font-display text-xl font-bold text-brand-dark">Hvala vam!</div>
                <p className="mt-2 text-sm text-muted-foreground">Vaša poruka je zaprimljena. Javljamo se uskoro.</p>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Ime i prezime" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Telefon" name="phone" />
                  <Field label="Lokacija objekta" name="location" placeholder="npr. Opatija" />
                </div>
                <div>
                  <label className="text-sm font-medium text-brand-dark">Poruka</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                    placeholder="Opišite ukratko vaš smještaj i što vas zanima..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-cta px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.01] disabled:opacity-60"
                >
                  {sending ? "Šaljem..." : <>Pošalji upit <Send size={16} /></>}
                </button>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <p className="text-xs text-muted-foreground">Šaljući obrazac slažete se s obradom podataka u svrhu odgovora na upit.</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-brand-dark">{label}{required && " *"}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
      />
    </div>
  );
}
