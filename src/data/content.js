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
      heading: "Mniej zmęczenia, więcej kontroli, lepsza postawa",
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
          img: "/TTLA3_1.jpg",
        },
        {
          title: "Lupy Flip-Up",
          desc: "Elastyczność i regulacja. Idealne do pracy mieszanej lub jako pierwsze lupy.",
          href: "/products/flipUp",
          img: "/FlipUp2.png",
        },
        {
          title: "Oświetlenie LED",
          desc: "Równomierne światło w osi widzenia. Mniej cieni w polu pracy.",
          href: "/products/led",
          img: "/led1.jpg",
        },
        {
          title: "Akcesoria",
          desc: "Oprawy, paski stabilizujące, etui, osłony i elementy dopasowania.",
          href: "/products/accessories",
        },
      ],
    },

    compare: {
      heading: "Lupy TTL czy Flip-Up? Wybierz idealne rozwiązanie dla siebie",
      rows: [
        { left: "Stabilność obrazu", right: "TTL" },
        { left: "Regulacja i odchylanie optyki", right: "Flip-Up" },
        { left: "Personalizacja", right: "TTL" },
        { left: "Start i praca “mix”", right: "Flip-Up" },
      ],
      note: "Jeśli nie wiesz, który typ lupy będzie najlepszy, skontakuj sie z nami! Pomożemy z doborem na podstawie Twojej specjalizacji, wzrostu i  preferowanej pozycji pracy.",
    },

    faqPreview: {
      heading: "FAQ",
      items: [
        {
          q: "Czy lupy mogą uwzględniać korekcję wzroku?",
          a: "Tak. Konfigurację dobieramy indywidualnie. Lupy mogą być wykonane z korekcją dopasowaną do Twojej wady wzroku lub współpracować z używaną korekcją okularową.",
        },
        {
          q: "Jak długo trwa adaptacja do pracy w lupach?",
          a: "Najczęściej wystarcza kilka dni regularnej pracy. Kluczowe znaczenie ma prawidłowo dobrana odległość robocza i kąt obserwacji, dzięki temu adaptacja przebiega szybko i naturalnie.",
        },
        {
          q: "TTL czy Flip-Up — które rozwiązanie będzie lepsze?",
          a: "Lupy TTL zapewniają najwyższą stabilność obrazu, mniejszą wagę i maksymalną precyzję. Flip-Up oferują większą elastyczność regulacji, dlatego dobrze sprawdzają się na początku pracy z powiększeniem lub przy pracy mieszanej.",
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
