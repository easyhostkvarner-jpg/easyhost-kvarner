import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// TODO: Zamijenite svojim EmailJS podacima
const EMAILJS_SERVICE_ID = "service_lbpea5o";
const EMAILJS_TEMPLATE_ID = "template_jvbbuu7";
const EMAILJS_PUBLIC_KEY = "W5lNlLq03FAmz8UbI";

type Status = "idle" | "sending" | "success" | "error";

export function ReservationForm({ apartmentName }: { apartmentName: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Slanje nije uspjelo. Pokušajte ponovo.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="apartman" value={apartmentName} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-dark">
            Ime i prezime *
          </label>
          <input
            required
            name="ime"
            type="text"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-dark">
            Email *
          </label>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-dark">
            Telefon
          </label>
          <input
            name="telefon"
            type="tel"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-dark">
            Broj osoba
          </label>
          <input
            name="osobe"
            type="number"
            min={1}
            defaultValue={2}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-dark">
            Datum dolaska *
          </label>
          <input
            required
            name="dolazak"
            type="date"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-dark">
            Datum odlaska *
          </label>
          <input
            required
            name="odlazak"
            type="date"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-dark">
          Poruka
        </label>
        <textarea
          name="poruka"
          rows={4}
          placeholder="Posebne želje, pitanja…"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-cta px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02] disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Slanje…
          </>
        ) : (
          "Pošalji upit za rezervaciju"
        )}
      </button>

      {status === "success" && (
        <div className="flex items-start gap-2 rounded-xl bg-brand/10 p-4 text-sm text-brand-dark">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
          Hvala! Vaš upit je poslan. Javit ćemo Vam se u najkraćem roku.
        </div>
      )}
      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          {errorMsg || "Slanje nije uspjelo. Pokušajte ponovo."}
        </div>
      )}
    </form>
  );
}
