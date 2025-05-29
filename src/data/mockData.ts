
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  applications: string[];
  industries: string[];
  specifications: {
    purity?: string;
    packaging: string[];
    origin?: string;
  };
  image: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  products: string[];
}

export const industries: Industry[] = [
  {
    id: "restaurants",
    name: "Restaurante",
    description: "Soluții complete de sare pentru industria HoReCa - de la sarea de masă fino până la sarea pentru conservare și procesare alimentară.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    products: ["sare-fina-masa", "sare-marina", "sare-cu-calciu", "sare-cu-iod"]
  },
  {
    id: "grocery",
    name: "Bacanii",
    description: "Produse diverse de sare pentru retail, inclusiv sare iodată, sare cu calciu și săruri specializate pentru consumatori finali.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    products: ["sare-cu-iod", "sare-cu-calciu", "sare-fina-masa", "sare-marina", "sare-roz-himalaya"]
  },
  {
    id: "butchery",
    name: "Măcelării",
    description: "Sare specializată pentru procesarea cărnii, conservare și prepararea produselor din carne.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    products: ["sare-conservare", "sare-cu-nitrit", "sare-marinare", "sare-afumare"]
  },
  {
    id: "farms",
    name: "Ferme de Animale",
    description: "Sare pentru nutriția animalelor, suplimente minerale și soluții pentru industria zootehnica.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
    products: ["sare-animale", "sare-cu-minerale", "sare-bloc", "sare-lichida"]
  },
  {
    id: "bakery",
    name: "Brutării",
    description: "Sare specializată pentru panificație, patiserie și industria alimentară de procesare.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    products: ["sare-panificatie", "sare-fina-masa", "sare-cu-iod"]
  },
  {
    id: "food-processing",
    name: "Panificație",
    description: "Soluții complete pentru industria de procesare alimentară și producția la scară largă.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    products: ["sare-panificatie", "sare-conservare", "sare-cu-nitrit", "sare-industriala"]
  }
];

export const products: Product[] = [
  {
    id: "sare-cu-iod",
    name: "Sare Iodată",
    category: "Sare pentru Consum",
    description: "Sare de masă îmbogățită cu iod, esențială pentru sănătatea tiroidei. Ideală pentru uz casnic și comercial.",
    applications: ["Gătit zilnic", "Condimentare", "Procesare alimentară"],
    industries: ["restaurants", "grocery", "bakery"],
    specifications: {
      purity: "99.5%",
      packaging: ["saci 25kg", "saci 50kg", "ambalaje 1kg"],
      origin: "România"
    },
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc"
  },
  {
    id: "sare-fina-masa",
    name: "Sare Fină de Masă",
    category: "Sare pentru Consum",
    description: "Sare extra fină, perfect măcinată pentru folosința la masă și în bucătării profesionale.",
    applications: ["Condimentare finală", "Patiserie", "Preparate delicate"],
    industries: ["restaurants", "grocery", "bakery"],
    specifications: {
      purity: "99.8%",
      packaging: ["saci 25kg", "ambalaje 1kg", "dispensere"],
      origin: "România"
    },
    image: "https://images.unsplash.com/photo-1506664309500-76d3b3894cdc"
  },
  {
    id: "sare-cu-calciu",
    name: "Sare cu Calciu",
    category: "Sare Fortificată",
    description: "Sare îmbogățită cu calciu, oferind beneficii nutriționale suplimentare pentru oase și dinți.",
    applications: ["Gătit sănătos", "Produse pentru copii", "Alimentație echilibrată"],
    industries: ["restaurants", "grocery"],
    specifications: {
      purity: "99.2%",
      packaging: ["saci 25kg", "ambalaje 1kg", "ambalaje 500g"],
      origin: "România"
    },
    image: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a"
  },
  {
    id: "sare-marina",
    name: "Sare Marină",
    category: "Sare Naturală",
    description: "Sare obținută prin evaporarea apei de mare, bogată în minerale naturale și cu gust distinct.",
    applications: ["Bucătărie gourmet", "Finishing salt", "Preparate premium"],
    industries: ["restaurants", "grocery"],
    specifications: {
      purity: "98.5%",
      packaging: ["saci 25kg", "ambalaje 1kg", "ambalaje premium 250g"],
      origin: "Marea Neagră"
    },
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
  },
  {
    id: "sare-conservare",
    name: "Sare pentru Conservare",
    category: "Sare Industrială",
    description: "Sare cu granulație specială pentru conservarea cărnii, peștelui și legumelor.",
    applications: ["Sărarea cărnii", "Conserve", "Murături"],
    industries: ["butchery", "food-processing"],
    specifications: {
      purity: "99.0%",
      packaging: ["saci 25kg", "saci 50kg", "big bags 1000kg"],
      origin: "România"
    },
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65"
  },
  {
    id: "sare-cu-nitrit",
    name: "Sare cu Nitrit",
    category: "Sare Specializată",
    description: "Sare cu nitrit de sodiu pentru prepararea salamurilor, șunculițelor și altor produse de charcuterie.",
    applications: ["Charcuterie", "Salam", "Produse afumate"],
    industries: ["butchery", "food-processing"],
    specifications: {
      purity: "99.0%",
      packaging: ["saci 25kg"],
      origin: "Germania"
    },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b"
  },
  {
    id: "sare-animale",
    name: "Sare pentru Animale",
    category: "Sare Zootehnica",
    description: "Sare specială pentru nutriția animalelor domestice și de fermă, esențială pentru sănătatea lor.",
    applications: ["Nutriție bovine", "Nutriție ovine", "Animale de fermă"],
    industries: ["farms"],
    specifications: {
      purity: "98.0%",
      packaging: ["saci 25kg", "saci 50kg", "big bags 1000kg"],
      origin: "România"
    },
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b"
  },
  {
    id: "sare-cu-minerale",
    name: "Sare cu Minerale pentru Animale",
    category: "Sare Zootehnica",
    description: "Sare îmbogățită cu minerale esențiale pentru dezvoltarea optimă a animalelor.",
    applications: ["Suplimente nutritive", "Dezvoltare animale", "Sănătate animale"],
    industries: ["farms"],
    specifications: {
      purity: "97.5%",
      packaging: ["saci 25kg", "saci 50kg"],
      origin: "România"
    },
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19"
  },
  {
    id: "sare-panificatie",
    name: "Sare pentru Panificație",
    category: "Sare Industrială",
    description: "Sare cu granulație controlată, special dezvoltată pentru industria de panificație și patiserie.",
    applications: ["Pâine", "Produse de patiserie", "Aluaturi"],
    industries: ["bakery", "food-processing"],
    specifications: {
      purity: "99.5%",
      packaging: ["saci 25kg", "saci 50kg"],
      origin: "România"
    },
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
  },
  {
    id: "sare-roz-himalaya",
    name: "Sare Roz din Himalaya",
    category: "Sare Premium",
    description: "Sare cristalină roz din minele Himalaya, bogată în minerale și cu proprietăți terapeutice.",
    applications: ["Bucătărie gourmet", "Terapie", "Relaxare"],
    industries: ["restaurants", "grocery"],
    specifications: {
      purity: "98.0%",
      packaging: ["ambalaje 250g", "ambalaje 500g", "ambalaje 1kg"],
      origin: "Pakistan"
    },
    image: "https://images.unsplash.com/photo-1533919028403-e4eaec59dffe"
  }
];
