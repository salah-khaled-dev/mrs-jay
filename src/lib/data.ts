import {
  ServiceItem,
  PackageItem,
  DessertItem,
  GalleryItem,
  TestimonialItem,
} from "@/types";

export const BRAND_INFO = {
  name: "Divine & Delight",
  abbreviation: "D&D",
  category: "Meal Prep + Catering",
  tagline: "Luxury Meal Prep & Bespoke Event Catering",
  phone: "(800) 555-0198",
  email: "concierge@divineanddelight.com",
  serviceArea: "Serving Metro Areas & Private Venues Nationwide, USA",
  headquarters: "Available for Travel Across the United States",
  instagram: "@divineanddelight",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM EST",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "dessert-cart-catering",
    slug: "dessert-cart-catering",
    title: "Luxury Dessert Cart Catering",
    tagline: "A boutique mobile cart tailored to your celebration aesthetic",
    shortDescription:
      "Handcrafted mobile dessert carts brought directly to your venue, fully styled with custom florals, signage, and an artisan dessert assortment.",
    longDescription:
      "Our signature mobile dessert carts transform any venue into a high-fashion patisserie. Designed with vintage European accents, warm wood finishes, and bespoke botanical styling, our carts are staffed by professional dessert concierges who serve your guests with white-glove hospitality.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1200&q=80",
    ],
    startingGuests: "30+ guests",
    setupTime: "2 hours prior to guest arrival",
    idealFor: ["Weddings", "Garden parties", "Milestone birthdays", "Product launches"],
    inclusions: [
      "Signature handcrafted mobile cart with parasol or botanical canopy",
      "Curated menu of 4 to 8 artisan dessert selections",
      "On-site dessert concierge for up to 3 hours of active service",
      "Custom framed menu with your event names or monogram",
      "Luxury pedestals, vintage cloches, tongs, and compostable bamboo plates",
      "Complete white-glove setup and post-event strike",
    ],
    highlights: [
      "Mobile & adaptable to indoor ballrooms and open-air lawns",
      "Custom branded signage and floral integration",
      "Temperature-controlled display cases for delicate pastries",
    ],
    faqs: [
      {
        question: "Can the cart fit through standard interior doorways?",
        answer:
          "Yes! Our custom carts are engineered with modular widths to comfortably roll through standard 36-inch ADA doorway frames and commercial elevators.",
      },
      {
        question: "Do you require electrical access for the cart?",
        answer:
          "We offer both fully self-powered carts with silent lithium battery illumination and standard 110V plug-in options depending on your venue setup.",
      },
    ],
  },
  {
    id: "weddings-bridal-showers",
    slug: "weddings-bridal-showers",
    title: "Weddings & Bridal Showers",
    tagline: "Romantic, photo-worthy sweet stations that leave lasting impressions",
    shortDescription:
      "Elevated wedding sweet tables and bridal dessert carts customized to match your wedding color palette, florals, and personal love story.",
    longDescription:
      "Your wedding day deserves a dessert experience as unforgettable as your vows. We collaborate closely with your wedding planner and floral designer to craft a show-stopping sweet installation that doubles as an interactive conversation piece and late-night guest favorite.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    ],
    startingGuests: "50+ guests",
    setupTime: "3 hours prior to guest arrival",
    idealFor: ["Ceremony receptions", "Bridal luncheons", "Rehearsal dinners", "After-parties"],
    inclusions: [
      "Coordinated styling matching your wedding color palette and stationery",
      "Bespoke tiered dessert display or luxury bridal cart",
      "Tasting consultation box delivered to the couple prior to selection",
      "Personalized monogrammed dessert tags and allergen notices",
      "Takeaway favor packaging with custom wax seals (optional add-on)",
      "Late-night dessert replenishment service",
    ],
    highlights: [
      "Seamless coordination with wedding planners and venue coordinators",
      "Gluten-free, vegan, and nut-conscious luxury pairings",
      "Signature dessert cutting ceremony photo opportunities",
    ],
    faqs: [
      {
        question: "How far in advance should we reserve our wedding date?",
        answer:
          "Due to high demand during peak wedding seasons (Spring and Autumn), we recommend inquiring 6 to 9 months in advance. We accept inquiries up to 14 months out.",
      },
      {
        question: "Can we include a small cutting cake alongside the dessert cart?",
        answer:
          "Absolutely! Many couples select an intimate 6-inch artisan cutting cake centered gracefully amidst the dessert cart tiers.",
      },
    ],
  },
  {
    id: "birthday-celebrations",
    slug: "birthday-celebrations",
    title: "Birthday & Milestone Celebrations",
    tagline: "Vibrant, joyous dessert experiences designed for celebration",
    shortDescription:
      "From sweet sixteens and golden jubilees to intimate birthday soirees, our carts add playful luxury and decadent sweets to your milestone.",
    longDescription:
      "Celebrate another year around the sun with unmatched panache. We design vibrant, customized dessert bars featuring personalized cake pops, edible gold-leaf macarons, gourmet cupcakes, and customized treats tailored to the guest of honor's personality.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1200&q=80",
    ],
    startingGuests: "25+ guests",
    setupTime: "1.5 hours prior to event start",
    idealFor: ["21st / 30th / 40th / 50th Birthdays", "Quinceañeras & Sweet 16s", "Kids luxury parties"],
    inclusions: [
      "Handcrafted dessert booth or mobile cart with celebratory garland",
      "Custom number/age accent decor and color-coordinated desserts",
      "Full dessert assortment with 3 pieces per confirmed guest",
      "Sparkler or candle presentation moment for the guest of honor",
      "Self-serve or attended service options",
    ],
    highlights: [
      "Custom color matches for any party theme",
      "Kid-friendly yet elevated gourmet flavor profiles",
      "Interactive dessert styling with toppings and coulis drizzle bars",
    ],
    faqs: [
      {
        question: "Can we customize colors to match our birthday balloons and theme?",
        answer:
          "Yes, we customize macaron shells, icing hues, and floral accents to match your event's exact hexadecimal or pantone palette.",
      },
    ],
  },
  {
    id: "corporate-events",
    slug: "corporate-events",
    title: "Corporate Events & Galas",
    tagline: "Impeccable presentation for brand launches, conferences, and executive galas",
    shortDescription:
      "Professional dessert catering featuring corporate branding, clean lines, seamless logistics, and high-volume attendee throughput.",
    longDescription:
      "Elevate your corporate hospitality with an experiential dessert activation. Whether hosting an annual gala for 500 VIPs, a client appreciation reception, or an international product launch, Divine & Delight delivers flawless timing, branded edible delicacies, and polished staff.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    ],
    startingGuests: "50 to 1,000+ guests",
    setupTime: "2 to 3 hours prior",
    idealFor: ["Brand activations", "Annual corporate galas", "Holiday parties", "Executive retreats"],
    inclusions: [
      "Corporate brand color integration and edible logo prints",
      "Rapid throughput service design for large attendee waves",
      "Full COI (Certificate of Insurance) compliant documentation for premier venues",
      "Uniformed, experienced event attendants",
      "Itemized corporate invoicing and dedicated account manager",
    ],
    highlights: [
      "Custom branded chocolate medallions and macaron prints",
      "Scalable multi-cart setups for large convention halls",
      "Allergen-conscious dietary options clearly signed",
    ],
    faqs: [
      {
        question: "Can you provide a Certificate of Insurance (COI) for our venue?",
        answer:
          "Yes, we provide standard $2M comprehensive general liability COIs naming your venue and organization as additional insureds.",
      },
      {
        question: "Can we print our company logo directly on the desserts?",
        answer:
          "Yes! We use high-resolution FDA-approved edible ink to print sharp company logos onto French macarons, sugar cookies, and chocolate disks.",
      },
    ],
  },
  {
    id: "custom-dessert-displays",
    slug: "custom-dessert-displays",
    title: "Custom Dessert Displays & Buffets",
    tagline: "Architectural sweet tables tailored to your architecture and venue",
    shortDescription:
      "Lavish stationary dessert landscapes built on custom risers, marble platters, and botanical backdrops for high-impact visual drama.",
    longDescription:
      "For events where a stationary focal point is desired, our architectural dessert tables turn your venue's feature wall into an opulent sensory feast. We integrate multi-level glass cloches, brass pedestals, cascading floral garlands, and curated lighting.",
    image:
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    ],
    startingGuests: "40+ guests",
    setupTime: "2.5 hours prior",
    idealFor: ["Museum galas", "Private estate dinners", "Engagement celebrations", "Luxury anniversaries"],
    inclusions: [
      "Custom-scaled table styling up to 16 feet in length",
      "Multi-tiered pedestals, ceramic risers, and gold tableware",
      "Artisan floral or greenery installations styled on-site",
      "Artisan dessert curation with 5 to 10 unique mini-creations",
      "Illuminated votives and discreet display accent lighting",
    ],
    highlights: [
      "Bespoke prop styling matching your venue's interior design",
      "High visual density and breathtaking photography angles",
      "Flawless late-night refresh service",
    ],
    faqs: [
      {
        question: "Do you supply the physical table or do we provide it?",
        answer:
          "We can style directly upon the venue's banquet tables or bring our own specialized vintage timber or marble consoles.",
      },
    ],
  },
  {
    id: "outdoor-sweet-stations",
    slug: "outdoor-sweet-stations",
    title: "Outdoor Dessert Booths & Canopies",
    tagline: "Weather-resilient outdoor sweet pavilions for lawns, vineyards, and terraces",
    shortDescription:
      "Specially engineered outdoor dessert booths equipped with weather shielding, shade canopies, and chill displays for al fresco entertaining.",
    longDescription:
      "Hosting an al fresco celebration under the open sky? Our outdoor dessert booths are crafted specifically for open-air gardens, vineyard estates, rooftop terraces, and beachside lawns. Every element is shielded from the elements while preserving effortless luxury.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    ],
    startingGuests: "35+ guests",
    setupTime: "2 hours prior",
    idealFor: ["Vineyard weddings", "Summer garden parties", "Rooftop cocktail hours", "Estate barbecues"],
    inclusions: [
      "Weather-rated wooden booth structure with striped or cream linen canopy",
      "Passive cooling inserts to protect delicate frostings and chocolate",
      "Protective glass sneezeguards seamlessly integrated into wood framing",
      "Battery-powered warm string lights for evening celebrations",
      "Trained dessert host managing outdoor service",
    ],
    highlights: [
      "Designed specifically for summer temperature resistance",
      "Heavy-duty anchored stability for coastal breezes",
      "Charming European marketplace aesthetic",
    ],
    faqs: [
      {
        question: "How do you handle outdoor heat with chocolate and buttercream?",
        answer:
          "Our outdoor booths feature discreet sub-counter cooling compartments and refrigerated presentation trays that keep all frostings and ganaches firm even in warm weather.",
      },
    ],
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: "the-petite-experience",
    title: "The Petite Experience",
    tagline: "Designed for intimate gatherings and boutique celebrations",
    guestCount: "Up to 40 Guests",
    description:
      "An exquisitely curated mini dessert cart setup perfect for intimate bridal showers, micro-weddings, baby welcomes, and private estate dinners.",
    featured: false,
    idealFor: ["Intimate Baby Showers", "Bridal Brunches", "Micro-Weddings", "Milestone Dinners"],
    inclusions: [
      "Signature Petite Mobile Cart or Vintage Sweet Console",
      "Selection of 4 artisan dessert varieties (3 pieces per guest)",
      "Up to 2 hours of attended concierge service",
      "Classic dessert signage and premium bamboo serviceware",
      "Full delivery, styling setup, and removal within 25 miles",
    ],
    customizations: [
      "Choice of cart canopy styling (Noir Black, Champagne Linen, or Luxury Ivory)",
      "Choice of 4 dessert items from our artisan collection",
      "Custom framed menu card with event title",
    ],
    addOns: [
      "Additional service hour",
      "Gourmet coffee & tea pairing cart",
      "Custom take-home dessert favor boxes with silk ribbons",
    ],
  },
  {
    id: "the-signature-experience",
    title: "The Signature Experience",
    tagline: "Our most popular, beautifully curated celebration package",
    guestCount: "50 to 120 Guests",
    description:
      "The quintessential Divine & Delight experience. Features our flagship artisan cart, expansive floral integration, custom color coordination, and an unforgettable 6-selection sweet menu.",
    featured: true,
    idealFor: ["Weddings", "Milestone 30th/40th/50th Birthdays", "Corporate Galas", "Engagement Parties"],
    inclusions: [
      "Flagship Handcrafted Dessert Cart with custom botanical styling",
      "Selection of 6 artisan dessert varieties (3 to 4 pieces per guest)",
      "Up to 3 hours of professional uniformed dessert concierge service",
      "Personalized menu calligraphy & color-coordinated floral accents",
      "Bespoke pedestals, glass cloches, and luxury gold serving utensils",
      "Complete white-glove setup and late-night strike",
    ],
    customizations: [
      "Full color matching to your event's exact wedding or brand palette",
      "Custom monogrammed macaron stamps or sugar cookie designs",
      "Selection of 6 desserts across all categories including French macarons",
      "Allergen-conscious dietary alternatives (Gluten-Free, Dairy-Free)",
    ],
    addOns: [
      "Artisan 6-inch cutting cake centerpiece",
      "Custom edible cocktail garnishes or dessert shot shooters",
      "Personalized takeaway favor boxes with wax seals",
      "Sparkler or champagne toast coordination",
    ],
  },
  {
    id: "the-grand-experience",
    title: "The Grand Experience",
    tagline: "The pinnacle of luxury sweet hospitality for grand occasions",
    guestCount: "130 to 300+ Guests",
    description:
      "An awe-inspiring, high-capacity dessert extravaganza. Dual cart configuration or expansive 16ft architectural dessert table designed for grand galas, ballroom weddings, and high-profile brand activations.",
    featured: false,
    idealFor: ["Grand Weddings", "High-Volume Corporate Conferences", "Celebrity Galas", "Annual Banquets"],
    inclusions: [
      "Dual Dessert Cart setup OR full 16-foot architectural sweet installation",
      "Selection of 8 artisan dessert varieties (4 pieces per guest)",
      "Up to 4 hours of dedicated multi-attendant service (2 concierges)",
      "Custom branded architectural backdrop or cascading floral arbor",
      "Custom edible logo printing / gold-leaf detailing on premium treats",
      "Complimentary couple/VIP tasting delivery box prior to event",
      "Continuous late-night replenishment and takeaway packaging",
    ],
    customizations: [
      "Unrestricted menu customization with seasonal signature items",
      "Custom 3D acrylic or laser-cut wood brand signage",
      "Full dietary menu breakdown with dedicated allergen stations",
      "VIP lounge dessert cart migration for after-party hours",
    ],
    addOns: [
      "Live dessert torching / flambe station with chef attendant",
      "Bespoke artisan favor boxes with personalized thank-you notes",
      "Late-night savory-sweet slider & dessert hybrid station",
    ],
  },
];

export const DESSERT_ITEMS: DessertItem[] = [
  {
    id: "macaron-tasting-flight",
    name: "Parisian French Macarons",
    category: "macarons",
    categoryLabel: "French Macarons",
    description:
      "Crisp almond meringue shells with decadent French ganache, infused fruit curds, and delicate buttercream centers.",
    dietary: ["Gluten-Free", "Vegetarian"],
    image:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    flavors: [
      "Rose & Raspberry Ganache",
      "Tahitian Vanilla Bean",
      "Salted Caramel Fleur de Sel",
      "Pistachio Praliné",
      "Lavender Honey",
      "Dark Chocolate 70%",
    ],
  },
  {
    id: "gourmet-mini-cupcakes",
    name: "Artisan Mini Cupcakes",
    category: "cupcakes",
    categoryLabel: "Cupcakes",
    description:
      "Moist, two-bite sponge cakes crowned with whipped Swiss meringue buttercream, gold dust, and fresh edible blossoms.",
    dietary: ["Vegetarian"],
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    flavors: [
      "Champagne Strawberry",
      "Earl Grey & Meyer Lemon",
      "Red Velvet & Bourbon Cream Cheese",
      "Belgian Chocolate Espresso",
    ],
  },
  {
    id: "mini-fruit-tarts",
    name: "Petite Fruit & Curd Tarts",
    category: "mini-desserts",
    categoryLabel: "Mini Desserts",
    description:
      "Hand-rolled buttery sablé shells filled with silky Madagascar vanilla bean pastry cream and crowned with glistening seasonal berries.",
    dietary: ["Vegetarian"],
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    flavors: [
      "Fresh Blackberry & Mint",
      "Passion Fruit Curd & Kiwi",
      "Raspberry Rose Sablé",
      "Meyer Lemon Meringue",
    ],
  },
  {
    id: "belgian-truffle-brownies",
    name: "Gourmet Fudge Truffle Brownies",
    category: "brownies",
    categoryLabel: "Brownies",
    description:
      "Ultra-dense Valrhona dark chocolate squares drizzled with salted caramel, toasted hazelnuts, and flakes of Maldon sea salt.",
    dietary: ["Vegetarian"],
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
    popular: false,
    flavors: [
      "Sea Salt & Caramel Drizzle",
      "Espresso Hazelnut Praline",
      "Raspberry Swirl Valrhona",
      "Toasted Walnut Fudge",
    ],
  },
  {
    id: "signature-sandwich-cookies",
    name: "Heirloom Sandwich Cookies",
    category: "cookies",
    categoryLabel: "Cookies",
    description:
      "Golden brown butter shortbreads and chewy spiced cookies sandwiched with velvety ganache and seasonal fruit compote.",
    dietary: ["Vegetarian"],
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    flavors: [
      "Brown Butter Pecan Shortbread",
      "Dark Chocolate Fleur de Sel",
      "Iced Lemon Cardamom Shortbread",
      "Vanilla Bean Crinkle",
    ],
  },
  {
    id: "custom-cakesicles-treats",
    name: "Artisan Cakesicles & Bonbons",
    category: "custom-treats",
    categoryLabel: "Custom Treats",
    description:
      "Sculpted gourmet cake pops and lustrous hand-painted geometric bonbons crafted in your celebration’s exact colors.",
    dietary: ["Vegetarian"],
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    flavors: [
      "White Chocolate Almond Blossom",
      "Rosemary Caramel Bonbon",
      "Funfetti Birthday Cake Truffle",
      "Ruby Chocolate Pistachio",
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Al Fresco Vineyard Wedding",
    category: "weddings",
    categoryLabel: "Weddings",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    location: "Napa Valley, CA",
    caption:
      "An elegant ivory & champagne dessert cart nestled beneath olive trees with macaron towers and gold leaf accents.",
    guestCount: "160 Guests",
  },
  {
    id: "gal-2",
    title: "Editorial Botanical Bridal Shower",
    category: "weddings",
    categoryLabel: "Weddings",
    image:
      "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=80",
    location: "Hamptons, NY",
    caption:
      "Petite cart styling adorned with garden roses, golden pedestals, and champagne-infused mini cupcakes.",
    guestCount: "45 Guests",
  },
  {
    id: "gal-3",
    title: "Metropolitan Gala Reception",
    category: "corporate",
    categoryLabel: "Corporate Events",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    location: "Chicago, IL",
    caption:
      "Sleek architectural dessert installation featuring edible corporate brand crests and Valrhona truffle brownies.",
    guestCount: "450 Guests",
  },
  {
    id: "gal-4",
    title: "Sunlit Garden 40th Birthday Soirée",
    category: "birthdays",
    categoryLabel: "Birthdays",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    location: "Austin, TX",
    caption:
      "Sophisticated luxury celebration cart with champagne gold accents and multi-tiered artisan pastries.",
    guestCount: "65 Guests",
  },
  {
    id: "gal-5",
    title: "Coastal Terrace Sweet Station",
    category: "outdoor",
    categoryLabel: "Outdoor Events",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
    location: "Miami, FL",
    caption:
      "Weather-shielded sweet station keeping fresh berries and fruit tarts perfectly chilled overlooking the ocean.",
    guestCount: "110 Guests",
  },
  {
    id: "gal-6",
    title: "Lawn Cocktail Party Dessert Booth",
    category: "outdoor",
    categoryLabel: "Outdoor Events",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    location: "Charleston, SC",
    caption:
      "Vintage ivory & gold cart serving French macarons and iced shortbreads under illuminated market lights.",
    guestCount: "90 Guests",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Claire & Julian Vance",
    role: "Bride & Groom",
    eventType: "Napa Valley Estate Wedding",
    quote:
      "Divine & Delight was unquestionably the highlight of our reception. Guests took hundreds of photos around the cart before even taking a bite! The lavender honey macarons and mini tarts were extraordinary.",
    date: "September 2025",
    location: "St. Helena, California",
  },
  {
    id: "test-2",
    clientName: "Eleanor Sterling",
    role: "Director of Brand Partnerships, Vesper Media",
    eventType: "Annual Corporate Gala",
    quote:
      "From seamless COI coordination to immaculate staff presentation, Divine & Delight operated with utmost corporate professionalism. Our clients were stunned by the edible branded macarons.",
    date: "November 2025",
    location: "New York, New York",
  },
  {
    id: "test-3",
    clientName: "Sophia Montgomery",
    role: "Host & Event Planner",
    eventType: "30th Birthday Garden Party",
    quote:
      "The booking process was effortless and the on-site concierge made our guests feel like royalty. The cart aesthetic matched our black tie and champagne gold design flawlessly.",
    date: "June 2025",
    location: "Atlanta, Georgia",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Choose Your Experience",
    description:
      "Select your ideal format—from our mobile artisan carts to architectural sweet tables or outdoor booths—and explore our curated dessert collections.",
  },
  {
    step: "02",
    title: "Share Your Event Details",
    description:
      "Use our intuitive booking wizard to submit your date, venue location, guest count, aesthetic vision, and preferred dessert flavors.",
  },
  {
    step: "03",
    title: "Receive Your Custom Quote",
    description:
      "Our catering concierge crafts an itemized design proposal and menu plan tailored precisely to your schedule, dietary preferences, and venue guidelines.",
  },
  {
    step: "04",
    title: "Celebrate With Us",
    description:
      "Relax and savor your celebration. We arrive early, handle full white-glove setup and styling, and provide gracious on-site dessert hospitality.",
  },
];

export const FAQS = [
  {
    category: "Booking & Availability",
    question: "How far in advance should I book my dessert cart or booth?",
    answer:
      "We recommend reserving 3 to 6 months in advance for private celebrations, and 6 to 12 months for peak wedding and holiday seasons. However, we always welcome inquiries for upcoming dates when our calendar allows.",
  },
  {
    category: "Booking & Availability",
    question: "How does the quote and deposit process work?",
    answer:
      "After submitting your event details through our booking form, our catering director prepares a personalized proposal. To secure your date on our calendar, a 50% deposit and signed catering agreement are required, with the remaining balance due 14 days prior to your event.",
  },
  {
    category: "Event Logistics",
    question: "What are the venue requirements for the mobile cart?",
    answer:
      "Our carts require a flat, level surface and a minimum doorway clearance of 36 inches width. For outdoor setups, we require firm turf, paving, or decking. We provide our own silent battery lighting or can connect to standard 110V power.",
  },
  {
    category: "Menu & Dietary",
    question: "Can you accommodate gluten-free, vegan, or nut-free guests?",
    answer:
      "Yes, absolutely. Our French macarons are naturally gluten-free (almond flour based), and we offer dedicated vegan sponge cupcakes, nut-free shortbreads, and dairy-free fruit curds. All items are clearly labeled with allergen signage.",
  },
  {
    category: "Service & Staffing",
    question: "Do your packages include on-site staff during the event?",
    answer:
      "Yes! All of our packages include professional, uniformed dessert concierges who restock displays, assist guests with flavor selections, maintain pristine presentation, and oversee seamless cleanup.",
  },
  {
    category: "Customization & Branding",
    question: "Can you match our event colors or print corporate logos?",
    answer:
      "Yes. We specialize in custom color matching for macaron shells and frostings, as well as high-resolution FDA-approved edible logo printing on macarons and sugar cookies for corporate sponsors and monogrammed weddings.",
  },
];
