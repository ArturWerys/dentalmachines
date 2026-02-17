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
      heading: "Większa precyzja, mniejsze obciążenie, zdrowsza postawa",
      text: "W stomatologii to detale decydują o jakości leczenia. Dobrze dopasowane lupy pozwalają widzieć więcej bez nadmiernego pochylania głowy, co przekłada się na większą powtarzalność ruchów, lepszą kontrolę pola zabiegowego i wyraźnie wyższy komfort podczas długich procedur.",
      tiles: [
        "Maksymalna kontrola pola zabiegowego",
        "Wyraźne granice i lepsza ocena detali",
        "Odciążenie odcinka szyjnego i lędźwiowego",
        "Spokojna, stabilna praca w powiększeniu",
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
          desc: "Elastyczność i regulacja. Idealne jako pierwsze lupy i do pracy mieszanej.",
          href: "/products/flipUp",
          img: "/FlipUp2.png",
        },
        {
          title: "Oświetlenie LED",
          desc: "Równomierne światło w osi widzenia - mniej cieni w polu pracy.",
          href: "/products/led",
          img: "/led1.jpg",
        },
        {
          title: "Akcesoria",
          desc: "Oprawy, paski stabilizujące, etui, osłony i elementy wyposażenia.",

          href: "/products/accessories",
        },
      ],
    },

    compare: {
      heading:
        "Lupy TTL czy Flip-Up? Dobierz rozwiązanie dopasowane do Twojego stylu pracy",
      rows: [
        {
          left: "Maksymalna stabilność i stała geometria obrazu",
          right: "TTL",
        },
        { left: "Możliwość regulacji i odchylania optyki", right: "Flip-Up" },
        { left: "Pełna personalizacja parametrów", right: "TTL" },
        {
          left: "Elastyczny start i praca w trybie mieszanym",
          right: "Flip-Up",
        },
      ],

      note: "Nie wiesz, który system wybrać? Podczas krótkiej konsultacji pomożemy dobrać lupy dopasowane do Twojej specjalizacji i ergonomii pracy.",
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
          q: "TTL czy Flip-Up - które rozwiązanie będzie lepsze?",
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
