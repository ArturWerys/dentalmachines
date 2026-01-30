const content = {
  nav: [
    { href: "/products/ttl", label: "Lupy TTL" },
    { href: "/products/flipUp", label: "Lupy Flip-Up" },
    { href: "/products/led", label: "Oświetlenie LED" },
    { href: "/products/accessories", label: "Akcesoria" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Kontakt" },
  ],

  home: {
    hero: {
      points: [
        { title: "Ergonomia", desc: "Naturalna pozycja głowy i pleców" },
        { title: "Precyzja", desc: "Więcej detalu, pewniejszy ruch" },
        { title: "Dopasowanie", desc: "Dobór pod specjalizację i styl pracy" },
      ],
      ctaPrimary: { label: "Umów dobór lup", href: "/contact" },
      ctaSecondary: { label: "Zobacz modele", href: "/products" },
    },

    why: {
      heading: "Mniej zmęczenia. Więcej kontroli. Lepsza postawa.",
      text: "W stomatologii detale decydują o jakości. Lupy pomagają widzieć więcej bez pochylania głowy, dzięki czemu łatwiej utrzymać powtarzalność i komfort w długich zabiegach.",
      tiles: [
        "Dokładniejsza preparacja i kontrola pola",
        "Lepsza widoczność granic i detali",
        "Mniej napięć karku i pleców",
        "Stabilniejsza praca w powiększeniu",
      ],
    },

    products: {
      heading: "Produkty EYE OPTIC - wybierz rozwiązanie dla siebie",
      tiles: [
        {
          title: "Lupy TTL",
          desc: "Maksymalna stabilność i precyzja obrazu.",
          href: "/products/ttl",
        },
        {
          title: "Lupy Flip-Up",
          desc: "Elastyczność i regulacja. Idealne do pracy mieszanej lub jako pierwsze lupy.",
          href: "/products/flipUp",
        },
        {
          title: "Oświetlenie LED",
          desc: "Równomierne światło w osi widzenia. Mniej cieni w polu pracy.",
          href: "/products/led",
        },
        {
          title: "Akcesoria",
          desc: "Oprawy, paski stabilizujące, etui, osłony i elementy dopasowania.",
          href: "/products/accessories",
        },
      ],
    },

    compare: {
      heading: "Lupy TTL czy Flip-Up? Wybierz idealne rozwiązanie.",
      rows: [
        { left: "Stabilność obrazu", right: "TTL" },
        { left: "Regulacja i odchylanie optyki", right: "Flip-Up" },
        { left: "Personalizacja", right: "TTL" },
        { left: "Start i praca “mix”", right: "Flip-Up" },
      ],
      note: "Jeśli nie wiesz, co wybrać — zrobimy szybki dobór na podstawie specjalizacji, wzrostu i pozycji pracy.",
    },

    steps: {
      heading: "Dobór EYE OPTIC w 3 krokach",
      items: [
        "Rozmowa (5-10 min) - specjalizacja, nawyki, oczekiwania",
        "Pomiary - PD, odległość robocza, preferowana pozycja",
        "Konfiguracja - powiększenie, oprawa, LED, ewentualna korekcja",
      ],
      cta: { label: "Umów dobór", href: "/fitting" },
    },

    faqPreview: {
      heading: "FAQ",
      items: [
        {
          q: "Czy lupy mogą być w wersji z korekcją wzroku?",
          a: "Tak — w zależności od konfiguracji dobieramy rozwiązanie pod okulary/korekcję.",
        },
        {
          q: "Ile trwa adaptacja do pracy w lupach?",
          a: "Zwykle kilka dni regularnej pracy. Najszybciej adaptują się osoby, które mają dobrze dobraną odległość roboczą i kąt pracy.",
        },
        {
          q: "TTL czy Flip-Up — co będzie lepsze?",
          a: "TTL charakteryzuje się maksymalną stabilnością i precyzją. Flip-Up elastycznością i regulacją, idealna do pracy typu “mix” i na start.",
        },
      ],
      moreHref: "/faq",
      moreLabel: "Zobacz pełne FAQ",
    },

    contact: {
      heading: "Umów dobór lup EYE OPTIC",
      fields: {
        interests: ["TTL", "Flip-Up", "LED", "Inne"],
        specializations: [
          "Stomatologia ogólna",
          "Endodoncja",
          "Protetyka / estetyka",
          "Chirurgia / perio",
          "Inne",
        ],
      },
    },
  },
};

export default content;
