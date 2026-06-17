/* ============================================================
   Zentrale Inhalts-Quelle — Mechanische Werkstatt Blickensdörfer
   Quelle: WEBSITE-INHALT.md (Scrape von blicke-mechanik.de)
   ============================================================ */

export const site = {
  name: "Mechanische Werkstatt Blickensdörfer",
  shortName: "Blickensdörfer",
  owner: "Mark Blickensdörfer",
  legalName: "Mechanische Werkstatt Mark Blickensdörfer",
  url: "https://blicke-mechanik.de",
  founded: 1986,
  employees: 4,

  contact: {
    street: "Maintaler Straße 20",
    zip: "63452",
    city: "Hanau",
    phone: "06181 86470",
    phoneHref: "+49618186470",
    fax: "06181 81620",
    email: "info@blicke-mechanik.de",
    ustId: "DE112758498",
  },

  directions:
    "A66 Ausfahrt Hanau-Nord. An der 1. Ampel rechts, dann nach 200 m auf das Gelände der Aral-Tankstelle. Unsere Werkstatt befindet sich im Gebäude hinter der Tankstelle.",

  metaDescription:
    "Mechanische Werkstatt Blickensdörfer in Hanau: Präzisionsdreh- und Frästeile in Klein- und Mittelserien für Feinwerktechnik, Mess- und Labortechnik. CNC-Drehen, Fräsen, Kunststoffzerspanung, Vorrichtungs- und Prototypenbau – seit 1986.",

  keywords: [
    "Präzisionsdrehteile",
    "Frästeile",
    "CNC-Drehen",
    "CNC-Fräsen",
    "Lohnfertigung",
    "Kunststoffzerspanung",
    "Vorrichtungsbau",
    "Prototypen",
    "Sondermaschinenbau",
    "Feinwerktechnik",
    "Mikromechanik",
    "Mechanische Werkstatt Hanau",
  ],

  // Hero
  hero: {
    eyebrow: "Mechanische Werkstatt · Hanau seit 1986",
    titleLead: "Aus Zeichnung wird",
    titleAccent: "Präzision.",
    sub: "Präzisionsdreh- und Frästeile in Klein- und Mittelserien – gefertigt für Feinwerktechnik, Mess- und Labortechnik. Mit der Sorgfalt von vier Generationen Werkstatt-Erfahrung.",
  },

  ticker: [
    "CNC-Drehen",
    "CNC-Fräsen",
    "Kunststoffzerspanung",
    "Hartbearbeitung",
    "Vorrichtungsbau",
    "Prototypen",
    "Baugruppenmontage",
    "Losgrößen 1–5.000",
    "5-Achs-Bearbeitung",
    "Feinwerktechnik",
  ],

  // Leistungen (Produkt-Detailseiten)
  services: [
    {
      slug: "drehen",
      title: "CNC-Drehen",
      teaser:
        "Präzisionsdrehteile von Ø 0,5 bis 200 mm – mit angetriebenen Werkzeugen, C-Achse und Stangenvorschub für die komplette Bearbeitung in einer Aufspannung.",
      img: "/img/drehen.jpg",
      icon: "lathe",
      points: [
        "Futterteile bis Ø 200 mm, Spannzangen 0,5–25 mm",
        "Angetriebene Werkzeuge & vollwertige C-Achse",
        "Präzisionsspindel bis 40.000 U/min",
        "Hartbearbeitung dank hoher Steifheit & Dämpfung",
      ],
      body: [
        "Auf unseren Schaublin-125-CNC-Drehmaschinen fertigen wir Präzisionsdrehteile in Klein- und Mittelserien. Durch angetriebene Werkzeuge und eine vollwertige C-Achse entstehen komplexe Teile inklusive Quer- und Längsbohrungen in einer einzigen Aufspannung.",
        "Eine zusätzliche Präzisionsspindel bis 40.000 U/min erlaubt feinste Bohr- und Fräsoperationen direkt am Drehteil. Die hohe Steifheit und Dämpfung unserer Maschinen macht zudem anspruchsvolle Hartbearbeitung möglich.",
      ],
    },
    {
      slug: "fraesen",
      title: "CNC-Fräsen",
      teaser:
        "3-, 4- und 5-Achs-Bearbeitung für anspruchsvolle Frästeile und Maschinenelemente – von der Einzelteil-Vorrichtung bis zur wiederkehrenden Serie.",
      img: "/img/fraesen.jpg",
      icon: "mill",
      points: [
        "5-Achs-Zentrum Willemin Macodell",
        "4-Achs-Zentrum Kitamura µ-Center",
        "3-Achs-Zentrum Brother TC215",
        "Verfahrwege bis 700 × 350 × 600 mm",
      ],
      body: [
        "Unser Fräspark deckt vom kompakten 3-Achs-Zentrum bis zur simultanen 5-Achs-Bearbeitung das gesamte Spektrum ab. So entstehen komplexe Geometrien, Schrägbohrungen und Freiformflächen prozesssicher und wiederholgenau.",
        "Ob Prototyp, Vorrichtungsbauteil oder Serienteil – wir wählen die passende Maschine für Werkstoff, Toleranz und Stückzahl.",
      ],
    },
    {
      slug: "kunststoffzerspanung",
      title: "Kunststoffzerspanung",
      teaser:
        "Ein Spezialgebiet seit über zehn Jahren: die spanende Bearbeitung technischer Kunststoffe – von PEEK über PTFE bis PA.",
      img: "/img/kunststoff.jpg",
      icon: "polymer",
      points: [
        "Über 10 Jahre Erfahrung im Kunststoff",
        "Alle gängigen technischen Kunststoffe",
        "Maßhaltig trotz geringer Steifigkeit",
        "Grat- und spannungsarme Bearbeitung",
      ],
      body: [
        "Technische Kunststoffe stellen eigene Anforderungen an Werkzeug, Schnittwerte und Spannung. In über zehn Jahren haben wir hier umfangreiche Erfahrung gesammelt und fertigen maßhaltige Dreh- und Frästeile aus nahezu allen zerspanbaren Kunststoffen.",
        "Auf Wunsch beraten wir Sie zur automatengerechten Konstruktion Ihrer Serienteile – das senkt häufig die Stückkosten spürbar.",
      ],
    },
    {
      slug: "vorrichtungen-prototypen",
      title: "Vorrichtungen & Prototypen",
      teaser:
        "Vorrichtungen, Prototypen und Sondermaschinen nach Zeichnung oder Pflichtenheft – inklusive mechatronischer Lösungen mit Partnerbetrieb.",
      img: "/img/prototypen.jpg",
      icon: "gear",
      points: [
        "Konstruktion nach Pflichtenheft",
        "Sondermaschinen- & Vorrichtungsbau",
        "Mechatronik inkl. Hard- & Software (Partner)",
        "Über 35 Jahre mechanische Erfahrung",
      ],
      body: [
        "Wir fertigen Prototypen, Vorrichtungen und Sondermaschinen nach Ihren Zeichnungen – und konstruieren auf Wunsch auch komplett nach Pflichtenheft. Unsere Lösungen sind oft erstaunlich einfach und effizient, weil in ihnen Jahrzehnte Werkstatt-Erfahrung stecken.",
        "In Zusammenarbeit mit einem Partnerbetrieb realisieren wir auch mechatronische Lösungen inklusive Hard- und Software.",
      ],
    },
  ],

  // weitere Services (Grid auf Startseite)
  capabilities: [
    {
      title: "Baugruppenmontage",
      icon: "assembly",
      text: "Montage kompletter Baugruppen und Geräte – seit dem Jahr 2000 fester Bestandteil unseres Angebots.",
    },
    {
      title: "Oberflächenbehandlung",
      icon: "coating",
      text: "Härten, Brünieren, Vernickeln, Vergolden, Eloxieren – über zuverlässige, langjährige Partner.",
    },
    {
      title: "Fertigung nach Muster",
      icon: "draft",
      text: "Wir fertigen nach Skizze, Muster oder Zeichnung – auch ohne fertige CAD-Daten.",
    },
    {
      title: "Werkzeugbau",
      icon: "tool",
      text: "Eigene Werkzeugschleifmaschinen für Sonderfräser und Stichel für besondere Geometrien.",
    },
    {
      title: "Konstruktionsberatung",
      icon: "advice",
      text: "Beratung zur automatengerechten Konstruktion von Serienteilen – für spürbar geringere Stückkosten.",
    },
    {
      title: "Endkontrolle & Messtechnik",
      icon: "measure",
      text: "Feinmessmittel, Messstifte in 1/100-mm-Stufung und Messmikroskop für die Endkontrolle.",
    },
  ],

  stats: [
    { value: 1986, suffix: "", label: "gegründet in Hanau" },
    { value: 5000, prefix: "1–", label: "Stück Losgröße" },
    { value: 40000, suffix: "", label: "U/min Präzisionsspindel" },
    { value: 100, suffix: "%", label: "Fertigung in Deutschland" },
  ],

  machines: {
    drehen: [
      "2 × Schaublin 125 CNC – Futterteile bis Ø 200 mm, Spannzangen 0,5–25 mm",
      "1 × Schaublin 125 CNC mit pneumatischem Stangenvorschub",
      "1 × Schaublin 125 CNC – Stangenvorschub, angetriebene Werkzeuge, C-Achse, Präzisionsspindel bis 40.000 U/min",
      "2 × Zug- & Leitspindel-Drehbänke (Cazeneuve HBX 360, Schaublin 125)",
      "2 × Mechaniker-Drehbänke für 2.-Seite-Operationen (Schaublin 102, See)",
    ],
    fraesen: [
      "1 × 4-Achs-CNC-Zentrum Kitamura µ-Center 1 (550 × 350 × 450)",
      "1 × 5-Achs-CNC-Zentrum Willemin Macodell (300 × 190 × 300)",
      "1 × 3-Achs-CNC-Zentrum Brother TC215 (300 × 200 × 300)",
      "1 × CNC-Fräsmaschine First (600 × 350 × 600)",
      "1 × Fräsmaschine Schaublin 53 (700 × 300 × 500)",
      "1 × Fräsmaschine Deckel FP 1",
    ],
    weiteres: [
      "Werkzeugschleifmaschinen für Sonderwerkzeuge (Fräser, Stichel)",
      "Fliehkrafttellerschleifmaschine",
      "Diverse Bohrmaschinen",
    ],
    messen: [
      "Übliche Feinmessmittel",
      "Messstifte in 1/100-mm-Stufung",
      "Messmikroskop",
    ],
  },

  // Branchen (Vertrauen)
  industries: [
    "Mess- und Labortechnik",
    "Armaturenindustrie",
    "Feinwerktechnik",
    "Mikromechanik",
    "Sondermaschinenbau",
  ],

  about: {
    lead: "Eine kleine Werkstatt mit großer Liebe zur Präzision.",
    story: [
      "„Stahlgebäck“ nannten wir als Kinder die Kugeln, Tonnen, Walzen und Nadeln, die wir aus alten Kugellagern ausbauten und in einer Keksdose sammelten. Die makellose, spiegelblanke Oberfläche und die exakte Form begeisterten uns.",
      "Heute, nach über 35 Jahren in der mechanischen Fertigung, faszinieren mich eine perfekte Geometrie, eine feinstgeschlichtete Fläche oder eine ingeniös erdachte Kurvensteuerung noch immer.",
    ],
    storyAuthor: "Mark Blickensdörfer",
    history: [
      {
        year: "1986",
        text: "Gründung als 1-Mann-Betrieb – Zulieferer für die Armaturen- und Messgeräteindustrie sowie Vorrichtungs- und Sondermaschinenbau.",
      },
      {
        year: "1991",
        text: "Erste CNC-Fräsmaschine. Seitdem Schwerpunkt auf Klein- und Mittelserien von Präzisionsdreh- und Frästeilen.",
      },
      {
        year: "2000",
        text: "Erweiterung um die Montage kompletter Baugruppen und Geräte.",
      },
      {
        year: "Heute",
        text: "Ein eingespieltes Team von vier Mitarbeitern, spezialisiert auf Dreh-Frästeile für Feinwerktechnik und Mikromechanik.",
      },
    ],
  },

  partners: ["Mess- & Labortechnik", "Armaturenbau", "Feinwerktechnik", "Mikromechanik", "Sondermaschinen"],

  nav: [
    { label: "Start", href: "/" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Maschinenpark", href: "/maschinenpark" },
    { label: "Unternehmen", href: "/unternehmen" },
    { label: "Kontakt", href: "/kontakt" },
  ],

  get jsonLd() {
    return {
      "@context": "https://schema.org",
      "@type": "MachineShop",
      name: this.legalName,
      description: this.metaDescription,
      url: this.url,
      telephone: "+49 6181 86470",
      foundingDate: "1986",
      address: {
        "@type": "PostalAddress",
        streetAddress: this.contact.street,
        postalCode: this.contact.zip,
        addressLocality: this.contact.city,
        addressCountry: "DE",
      },
      email: this.contact.email,
      areaServed: "DE",
      knowsAbout: this.keywords,
    };
  },
};

export type Service = (typeof site.services)[number];
