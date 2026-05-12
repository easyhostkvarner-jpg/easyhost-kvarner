import villaAlternus1 from "@/assets/apartments/villa-alternus-1.jpg";
import villaAlternus2 from "@/assets/apartments/villa-alternus-2.jpg";
import villaOleandarPool from "@/assets/apartments/villa-oleandar-pool.jpg";
import interiorLiving from "@/assets/apartments/interior-living.jpg";
import opatijaSeaView from "@/assets/apartments/opatija-sea-view.jpg";
import towels from "@/assets/towels.jpg";
import interior from "@/assets/interior.jpg";
import keys from "@/assets/keys.jpg";
import doraBazen from  "@/assets/apartments/villa-alternus-app-dora-bazen.jpeg";
import doraBazen1 from  "@/assets/apartments/villa-alternus-app-dora-bazen1.jpeg";
import doraBalkon from  "@/assets/apartments/villa-alternus-app-dora-balkon.jpeg";
import doraBazen2 from  "@/assets/apartments/villa-alternus-app-dora-bazen2.jpeg";
import doraBazen3 from  "@/assets/apartments/villa-alternus-app-dora-bazen3.jpeg";
import doraDnevni from  "@/assets/apartments/villa-alternus-app-dora-dnevni.jpeg";
import doraDnevni1 from  "@/assets/apartments/villa-alternus-app-dora-dnevni1.jpeg";
import doraKuhinja from  "@/assets/apartments/villa-alternus-app-dora-kuhinja.jpeg";
import doraSoba1 from  "@/assets/apartments/villa-alternus-app-dora-soba1.jpeg";
import doraSoba2 from  "@/assets/apartments/villa-alternus-app-dora-soba2.jpeg";
import doraSoba3 from  "@/assets/apartments/villa-alternus-app-dora-soba3.jpeg";
import doraSoba4 from  "@/assets/apartments/villa-alternus-app-dora-soba4.jpeg";
import doraStol from  "@/assets/apartments/villa-alternus-app-dora-stol.jpeg";
import doraWc from  "@/assets/apartments/villa-alternus-app-dora-wc.jpeg";
import doraWc from  "@/assets/apartments/villa-alternus-app-dora-wc1.jpeg";




export type Apartment = {
  slug: string;
  name: string;
  villa: string;
  location: string;
  shortDescription: string;
  bedrooms: number;
  bathrooms: number;
  capacity: string;
  floor?: string;
  features: string[];
  mainImage: string;
  gallery: string[];
  seoTitle: string;
  seoDescription: string;
  longDescription: string[];
};

export const apartments: Apartment[] = [
  {
    slug: "villa-alternus-apartman-dora",
    name: "Apartman Dora",
    villa: "Villa Alternus",
    location: "Vlašići 3C, Veprinac",
    shortDescription:
      "Prostran apartman s 2 spavaće sobe, 3 kupaone i terasom s pogledom na more.",
    bedrooms: 2,
    bathrooms: 3,
    capacity: "do 6 osoba",
    features: [
      "2 spavaće sobe",
      "Dnevni boravak",
      "3 kupaone",
      "Terasa s pogledom na more",
      "Dijeljeni bazen (3 apartmana)",
      "Parking",
    ],
    mainImage: villaAlternus1,
    gallery: [villaAlternus1, villaAlternus2,doraBalkon],
    seoTitle:
      "Apartman Dora — Villa Alternus, Veprinac | Bazen i pogled na more",
    seoDescription:
      "Apartman Dora u Villi Alternus (Veprinac, Opatija) — 2 spavaće sobe, 3 kupaone, terasa s pogledom na Kvarnerski zaljev i dijeljeni bazen. Idealno za obitelji i grupe do 6 osoba.",
    longDescription: [
      "Apartman Dora smješten je u Villi Alternus na adresi Vlašići 3C u Veprincu, mirnom mjestu iznad Opatije s prekrasnim pogledom na Kvarnerski zaljev. Apartman nudi savršenu kombinaciju mira, prirode i blizine svih sadržaja koje pruža Opatijska rivijera.",
      "Unutarnji prostor uključuje dvije komforne spavaće sobe, prostran dnevni boravak s kuhinjom i blagovaonicom te čak tri kupaone — što omogućuje neometan boravak za više osoba ili obitelji. Velika terasa s pogledom na more idealna je za jutarnju kavu ili opuštene večeri uz zalazak sunca.",
      "Gosti imaju na raspolaganju dijeljeni bazen koji se koristi s još 2 apartmana, kao i parking unutar objekta. Veprinac je odlična baza za istraživanje Učke, Opatije, Lovrana i cijelog Kvarnera.",
    ],
  },
  {
    slug: "villa-alternus-apartman-a",
    name: "Apartman A",
    villa: "Villa Alternus",
    location: "Vlašići 3C, Veprinac",
    shortDescription:
      "Prostrani apartman na 2. katu s 3 spavaće sobe, opremljenom kuhinjom i terasom.",
    bedrooms: 3,
    bathrooms: 3,
    capacity: "do 8 osoba",
    floor: "2. kat",
    features: [
      "3 spavaće sobe",
      "Potpuno opremljena kuhinja",
      "Dnevni boravak",
      "3 kupaone",
      "Terasa",
      "Dijeljeni bazen",
      "Parking",
    ],
    mainImage: villaAlternus2,
    gallery: [villaAlternus2, villaAlternus1, doraBazen, doraBazen1, doraBalkon,
             doraBazen2, doraBazen3, doraDnevni, doraDnevni1, doraKuhinja, doraSoba1, doraSoba2, doraSoba3, doraSoba4, doraStol, doraWc, doraWc1],
    seoTitle:
      "Apartman A — Villa Alternus, Veprinac | 3 spavaće sobe i bazen",
    seoDescription:
      "Apartman A u Villi Alternus (Veprinac) — 3 spavaće sobe, 3 kupaone, opremljena kuhinja, dnevni boravak, terasa i dijeljeni bazen. Smještaj na 2. katu, idealan za veće obitelji i grupe.",
    longDescription: [
      "Apartman A nalazi se na 2. katu Ville Alternus u Veprincu (Vlašići 3C) — savršen je izbor za veće obitelji i grupe prijatelja koje žele uživati u miru iznad Opatije.",
      "Apartman raspolaže s tri spavaće sobe, tri kupaone, prostranim dnevnim boravkom i potpuno opremljenom kuhinjom. Vanjska terasa pruža prostor za opuštanje i objedovanje na svježem zraku.",
      "Gosti dijele bazen s ostalim apartmanima u objektu. Lokacija u Veprincu nudi izvrstan balans mira i blizine plaža, restorana i sadržaja Opatije, Ičića i Lovrana.",
    ],
  },
  {
    slug: "villa-oleandar-apartman-aria",
    name: "Apartman Aria",
    villa: "Villa Oleandar",
    location: "Veprinac, okolica Opatije",
    shortDescription:
      "Apartman s 2 spavaće sobe, terasom s pogledom na more i dijeljenim bazenom.",
    bedrooms: 2,
    bathrooms: 2,
    capacity: "do 5 osoba",
    floor: "2. kat",
    features: [
      "2 spavaće sobe",
      "Kupaona + gostinjski WC",
      "Terasa s pogledom na more",
      "Parking",
      "Dijeljeni bazen (3 apartmana)",
      "Dječje igralište",
    ],
    mainImage: villaOleandarPool,
    gallery: [villaOleandarPool, villaAlternus1, interiorLiving, opatijaSeaView],
    seoTitle:
      "Apartman Aria — Villa Oleandar | Bazen, igralište i pogled na more",
    seoDescription:
      "Apartman Aria u Villi Oleandar — 2 spavaće sobe, kupaona i gostinjski WC, terasa s pogledom na more, parking, dijeljeni bazen i dječje igralište. Savršeno za obiteljski odmor.",
    longDescription: [
      "Apartman Aria smješten je na 2. katu Ville Oleandar i nudi udoban smještaj za obitelji koje traže miran odmor s pogledom na more.",
      "U apartmanu se nalaze dvije spavaće sobe, kupaona i poseban gostinjski WC, dnevni boravak s kuhinjom te terasa s otvorenim pogledom na Kvarnerski zaljev.",
      "Posebna prednost objekta je vanjski bazen koji se dijeli s još dva apartmana, dječje igralište te parking — sve što obitelj s djecom treba za bezbrižan odmor.",
    ],
  },
  {
    slug: "villa-oleandar-apartman-lea",
    name: "Apartman Lea",
    villa: "Villa Oleandar",
    location: "Veprinac, okolica Opatije",
    shortDescription:
      "Komforan apartman s 2 spavaće sobe, terasom s pogledom i pristupom bazenu.",
    bedrooms: 2,
    bathrooms: 2,
    capacity: "do 5 osoba",
    features: [
      "2 spavaće sobe",
      "Kupaona + gostinjski WC",
      "Terasa s pogledom",
      "Parking",
      "Dijeljeni bazen (3 apartmana)",
      "Dječje igralište",
    ],
    mainImage: villaOleandarPool,
    gallery: [villaOleandarPool, villaAlternus2, interiorLiving, opatijaSeaView],
    seoTitle:
      "Apartman Lea — Villa Oleandar | Bazen i obiteljski smještaj",
    seoDescription:
      "Apartman Lea u Villi Oleandar — 2 spavaće sobe, kupaona i gostinjski WC, terasa s pogledom, parking, dijeljeni bazen i dječje igralište. Idealno za obiteljski odmor u okolici Opatije.",
    longDescription: [
      "Apartman Lea u Villi Oleandar nudi mirno utočište iznad Opatije, pogodno za obitelji i parove koji žele kombinaciju opuštanja i blizine mora.",
      "Raspoređen je u dvije spavaće sobe, dnevni boravak s kuhinjom, kupaonu te dodatni gostinjski WC. Terasa pruža ugodan pogled i prostor za opuštanje.",
      "Gosti koriste dijeljeni bazen s još dva apartmana, dječje igralište te parking unutar objekta — sve uvjete za bezbrižan obiteljski odmor.",
    ],
  },
  {
    slug: "villa-oleandar-apartman-bella",
    name: "Apartman Bella",
    villa: "Villa Oleandar",
    location: "Veprinac, okolica Opatije",
    shortDescription:
      "Ugodan apartman u sklopu Ville Oleandar s pristupom bazenu i mirnom okolicom.",
    bedrooms: 2,
    bathrooms: 1,
    capacity: "do 4 osobe",
    features: [
      "Spavaće sobe",
      "Dnevni boravak s kuhinjom",
      "Kupaona",
      "Dijeljeni bazen",
      "Parking",
      "Mirna lokacija",
    ],
    mainImage: interior,
    gallery: [interior, villaOleandarPool, towels, keys],
    seoTitle:
      "Apartman Bella — Villa Oleandar | Mirna oaza iznad Opatije",
    seoDescription:
      "Apartman Bella u Villi Oleandar — udoban smještaj u mirnoj okolici Opatije, s pristupom dijeljenom bazenu i parkingom. Savršeno za obitelji i parove.",
    longDescription: [
      "Apartman Bella dio je Ville Oleandar i nudi ugodan smještaj u mirnoj okolici iznad Opatije. Idealan je za goste koji žele bijeg od gradske vreve, uz zadržanu blizinu svih sadržaja Opatijske rivijere.",
      "Apartman je opremljen svim potrebnim za udoban boravak — kuhinja, dnevni boravak, spavaće sobe i kupaona.",
      "Gosti imaju na raspolaganju dijeljeni bazen u sklopu Ville Oleandar te parking — sve što treba za opuštajući odmor.",
    ],
  },
  {
    slug: "opatija-apartman-pogled-more",
    name: "Apartman Opatija — pogled na more",
    villa: "Opatija",
    location: "Opatija, centar",
    shortDescription:
      "Apartman 2+1 na 2. katu s prekrasnom terasom i pogledom na more.",
    bedrooms: 1,
    bathrooms: 1,
    capacity: "2+1 osobe",
    floor: "2. kat",
    features: [
      "1 spavaća soba",
      "Dnevni boravak",
      "Kupaona",
      "Terasa s pogledom na more",
      "Blizina centra Opatije",
    ],
    mainImage: opatijaSeaView,
    gallery: [opatijaSeaView, interiorLiving, towels, keys],
    seoTitle:
      "Apartman Opatija 2+1 s pogledom na more | Smještaj u centru",
    seoDescription:
      "Šarmantan apartman u Opatiji (2+1) na 2. katu s terasom i prekrasnim pogledom na Kvarnerski zaljev. Idealno za parove i kraće odmore u srcu Opatije.",
    longDescription: [
      "Apartman u Opatiji smješten je na 2. katu zgrade u centru grada i nudi nezaboravan pogled na Kvarnerski zaljev s vlastite terase.",
      "Apartman raspolaže s jednom spavaćom sobom, dnevnim boravkom s mogućnošću dodatnog ležaja (kapacitet 2+1), kupaonom te terasom s pogledom na more.",
      "Lokacija je idealna za istraživanje Opatije pješice — Lungomare, plaže, restorani i kulturne znamenitosti udaljeni su samo nekoliko minuta hoda. Napomena: objekt nema vlastiti parking.",
    ],
  },
];

export const getApartmentBySlug = (slug: string) =>
  apartments.find((a) => a.slug === slug);
