## Plan

### 1. Pretvori `bella0.jpg` u WebP
- `magick src/assets/apartments/bella0.jpg -resize '1600x1600>' -quality 72 src/assets/apartments/bella0.webp`
- Obriši `bella0.jpg`
- Provjeri `rg "bella0\.jpg" src/` i ako se negdje koristi, prebaci import na `bella0.webp`

### 2. SEO — fokus na Kvarner ključne riječi
Cilj: rangirati za "upravljanje apartmanima Kvarner", "izdavanje apartmana Kvarner", "smještaj Kvarner", "apartmani Kvarner", "upravljanje smještajem Kvarner".

**`src/routes/index.tsx` — `head()`:**
- `title`: "Upravljanje apartmanima Kvarner | Izdavanje apartmana i smještaj — EasyHost Kvarner" (~85 znakova; ako je predugo skratit ću na ~60)
- `description`: prirodno ubaciti "upravljanje apartmanima Kvarner", "izdavanje apartmana", "smještaj Kvarner", "Opatija, Istra"
- `og:title` / `og:description`: isto
- Dodati `keywords` meta i JSON-LD `LocalBusiness` schemu sa `areaServed: Kvarner, Istra` za bolju lokalnu relevantnost

**Hero (`<h1>`) u `src/routes/index.tsx`:**
- Promijeniti `<h1>` u: **"Upravljanje apartmanima i izdavanje smještaja na Kvarneru"** s `gradient-text` na "Kvarneru" — H1 je najjači SEO signal, mora sadržavati glavne ključne riječi
- Podnaslov: dotaknuti ključne riječi "izdavanje apartmana", "Opatija, Lovran, Ičići, Mošćenička Draga, Matulji"

**`__root.tsx`:** provjeriti da ne postavlja konkurentni title/description koji prebijaju leaf metu.

### 3. Ukloni Lovable branding
- Sakriti badge na publishanim verzijama putem `publish_settings--set_badge_visibility(hide_badge: true)` — trenutno je vidljiv
- U kodu: nema user-visible "Lovable" stringova. Reference u `vite.config.ts` i `package.json` su build dependencies (`@lovable.dev/vite-tanstack-config`, `lovable-tagger`) — one su nužne za rad projekta i nisu vidljive korisnicima/Googleu. **Ne diram ih** jer bi razbilo build.

### Napomena
Hide-badge zahtijeva Pro plan. Ako plan nije Pro, taj korak će tiho preskočiti i ja ću ti reći.
