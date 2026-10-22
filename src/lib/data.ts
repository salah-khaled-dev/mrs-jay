import {
  ServiceItem,
  PackageItem,
  MealItem,
  GalleryItem,
  TestimonialItem,
  DessertProduct,
} from "@/types";

export const BRAND_INFO = {
  name: "Divine & Delight",
  abbreviation: "D&D",
  category: "Meal Prep + Catering",
  tagline: "Healthy • Home Made • High Quality",
  subTagline: "Luxury American Meal Preparation & Bespoke Event Catering",
  promoBanner: "Chef-Crafted Weekly Meal Prep",
  promoHighlight: "Artisan Kitchen",
  email: "dnd.cater.events@gmail.com",
  instagram: "@divineanddelight.cater",
  instagramUrl: "https://www.instagram.com/divineanddelight.cater",
};

export const BRAND_PILLARS = [
  {
    icon: "leaf",
    title: "Healthy",
    description:
      "Nutrient-dense, balanced macros with lean proteins, complex grains, and farm-fresh greens. Portion-controlled for peak wellness.",
  },
  {
    icon: "home",
    title: "Home Made",
    description:
      "Handcrafted from scratch every week with authentic culinary recipes, rich slow-simmered sauces, and homestyle love.",
  },
  {
    icon: "chef-hat",
    title: "High Quality",
    description:
      "Only choice beef cuts, wild-caught shrimp, cage-free poultry, and crisp organic produce. Zero artificial preservatives or filler.",
  },
];

export const MEAL_ITEMS: MealItem[] = [
  {
    id: "lasagna-vegetables",
    name: "Lasagna",
    servingInfo: "With Vegetables Only",
    category: "weekly-special",
    categoryLabel: "Weekly Special • Italian Classic",
    description:
      "Generous portion of golden-baked homestyle lasagna layered with slow-simmered beef ragù, creamy ricotta, rich San Marzano marinara, and a bubbling browned mozzarella crust. Sprinkled with chopped herbs and served alongside freshly steamed vibrant broccoli florets.",
    ingredients: [
      "Semolina pasta sheets",
      "Slow-simmered prime beef ragù",
      "San Marzano tomato marinara",
      "Whole milk ricotta & mozzarella",
      "Fresh garden herbs & parsley",
      "Fresh steamed tender broccoli florets",
    ],
    dietary: ["High Protein", "Comfort Classic", "Fresh Steamed Greens"],
    image: "/images/meals/lasagna.webp",
    popular: true,
    isWeeklySpecial: true,
    macros: {
      calories: 590,
      protein: 42,
      carbs: 48,
      fat: 22,
    },
    heatingInstructions:
      "Microwave: Vent corner of lid and heat on high for 2.5 minutes. Oven: Transfer to oven-safe container and bake at 350°F (175°C) for 15 minutes.",
    allergens: ["Wheat / Gluten", "Dairy"],
    containerType: "BPA-Free Microwave & Freezer Safe Black 2-Compartment Tray",
  },
  {
    id: "chicken-kabobs-salad",
    name: "Chicken Kabobs",
    servingInfo: "With Rice & Broccoli",
    category: "weekly-special",
    categoryLabel: "Weekly Special • Mediterranean",
    description:
      "Flame-grilled marinated chicken breast skewers with appetizing char marks and Mediterranean herb seasoning. Served over fluffy seasoned steamed white rice with vibrant fresh steamed broccoli florets and charred sweet peppers.",
    ingredients: [
      "Marinated grilled chicken breast skewers",
      "Charred sweet bell peppers",
      "Fluffy seasoned steamed white rice",
      "Tender steamed fresh broccoli florets",
      "Mediterranean lemon-herb rub",
      "House vinaigrette seasoning",
    ],
    dietary: ["High Protein", "Clean Fuel", "Gluten-Conscious", "Gym Ready"],
    image: "/images/meals/chicken-kabobs.webp",
    popular: true,
    isWeeklySpecial: true,
    macros: {
      calories: 490,
      protein: 48,
      carbs: 38,
      fat: 14,
    },
    heatingInstructions:
      "Microwave: Vent corner of lid and microwave on high for 2 minutes. Ready to enjoy immediately.",
    allergens: ["None"],
    containerType: "BPA-Free Microwave & Freezer Safe Black Multi-Compartment Tray",
  },
  {
    id: "shrimp-cajun-rice-veg",
    name: "Shrimp Cajun",
    servingInfo: "With Rice and Vegetables",
    category: "weekly-special",
    categoryLabel: "Weekly Special • Southern Gulf Flavors",
    description:
      "Plump, wild-caught jumbo shrimp seared in zesty Louisiana Cajun seasoning, smoked paprika, garlic herb butter, and scallions. Served alongside fluffy seasoned long-grain rice, steamed tender broccoli florets, and roasted sweet yellow squash & corn.",
    ingredients: [
      "Wild-caught jumbo shrimp",
      "House Cajun Creole spice rub",
      "Garlic herb butter sauce",
      "Seasoned long-grain rice",
      "Steamed broccoli florets",
      "Roasted yellow summer squash",
      "Charred sweet corn & red onion",
    ],
    dietary: ["High Protein", "Pescatarian", "Gluten-Conscious", "Omega-3 Rich"],
    image: "/images/meals/shrimp-cajun.webp",
    popular: true,
    isWeeklySpecial: true,
    macros: {
      calories: 440,
      protein: 38,
      carbs: 42,
      fat: 12,
    },
    heatingInstructions:
      "Microwave: Vent lid and heat gently on medium-high for 1.5 to 2 minutes until shrimp is hot and tender.",
    allergens: ["Crustacean Shellfish", "Dairy (butter)"],
    containerType: "BPA-Free Microwave & Freezer Safe Black 3-Compartment Tray",
  },
  {
    id: "meat-della-casa-rice-veg",
    name: "Meat Della Casa",
    servingInfo: "With Rice and Vegetables",
    category: "weekly-special",
    categoryLabel: "Weekly Special • Chef's Signature Beef",
    description:
      "Chef's proprietary house specialty: succulent, tender strips of choice beef steak simmered in a rich, savory pan demi-glace with caramelized onions and sliced sweet red and green bell peppers. Served with fluffy seasoned rice and crisp steamed broccoli florets.",
    ingredients: [
      "Choice beef steak strips",
      "House Della Casa savory pan demi-glace",
      "Sweet red & green bell peppers",
      "Caramelized yellow onions",
      "Seasoned long-grain herb rice",
      "Steamed fresh broccoli florets",
    ],
    dietary: ["High Protein", "Iron-Rich", "Chef Signature", "Hearty & Wholesome"],
    image: "/images/meals/meat-della-casa.webp",
    popular: true,
    isWeeklySpecial: true,
    macros: {
      calories: 520,
      protein: 44,
      carbs: 40,
      fat: 18,
    },
    heatingInstructions:
      "Microwave: Vent lid and heat on high for 2 to 2.5 minutes. Stir beef in gravy halfway through for maximum flavor.",
    allergens: ["Soy", "Wheat (in demi-glace)"],
    containerType: "BPA-Free Microwave & Freezer Safe Black 3-Compartment Tray",
  },
  {
    id: "carne-mushroom-rice-veg",
    name: "Carne Mushroom in White Sauce",
    servingInfo: "With Rice & Broccoli",
    category: "weekly-special",
    categoryLabel: "Weekly Special • Creamy Mushroom Beef",
    description:
      "Tender sautéed choice beef steak strips generously smothered in a rich, velvety creamy white mushroom sauce with sliced button mushrooms, garlic, and fresh herbs. Served alongside a fluffy portion of seasoned white rice and fresh steamed broccoli florets.",
    ingredients: [
      "Choice beef steak strips",
      "Creamy white mushroom demi-glace",
      "Sliced sautéed button mushrooms",
      "Fresh minced garlic & chopped herbs",
      "Fluffy seasoned white rice",
      "Tender steamed fresh broccoli florets",
    ],
    dietary: ["High Protein", "Chef Specialty", "Comfort Gourmet"],
    image: "/images/meals/carne-mushroom.webp",
    popular: true,
    isWeeklySpecial: true,
    macros: {
      calories: 560,
      protein: 46,
      carbs: 42,
      fat: 20,
    },
    heatingInstructions:
      "Microwave: Vent corner of lid and microwave on high for 2 to 2.5 minutes. Stir beef in cream sauce halfway through.",
    allergens: ["Dairy (cream, butter)", "Soy"],
    containerType: "BPA-Free Microwave & Freezer Safe Black Multi-Compartment Tray",
  },
  {
    id: "tilapia-lemon-rice-veg",
    name: "Tilapia Lemon",
    servingInfo: "With Rice & Broccoli",
    category: "weekly-special",
    categoryLabel: "Weekly Special • Citrus Seared Seafood",
    description:
      "Delicate, tender tilapia fillet pan-seared to a golden finish with cracked black pepper, sea salt, garlic, and fresh herbs, topped with zesty fresh lemon slices. Served over fluffy seasoned long-grain rice with vibrant steamed broccoli florets.",
    ingredients: [
      "Pan-seared tender tilapia fillet",
      "Fresh lemon slices & citrus herb butter",
      "Cracked black pepper & sea salt crust",
      "Fluffy seasoned long-grain rice",
      "Vibrant steamed broccoli florets",
    ],
    dietary: ["High Protein", "Pescatarian", "Low Fat", "Omega-3 Rich"],
    image: "/images/meals/tilapia-lemon.webp",
    popular: true,
    isWeeklySpecial: true,
    macros: {
      calories: 420,
      protein: 42,
      carbs: 38,
      fat: 10,
    },
    heatingInstructions:
      "Microwave: Vent corner of lid and heat gently on medium-high for 1.5 to 2 minutes until hot.",
    allergens: ["Fish (Tilapia)", "Dairy (citrus butter)"],
    containerType: "BPA-Free Microwave & Freezer Safe Black Multi-Compartment Tray",
  },
  {
    id: "catering-buffet-spread",
    name: "Divine & Delight Grand Catering Buffet",
    servingInfo: "Buffet Style for 20+ Guests",
    category: "catering-platter",
    categoryLabel: "Event Catering • Full Buffet Setup",
    description:
      "Full luxury hot chafing spread including Meat Della Casa, Cajun Shrimp, Flame-Grilled Chicken Skewers, Baked Lasagna, Seasoned Herb Rice, and Farm-Fresh Vegetable Platters. Polished gold chafing units and complete styling included.",
    ingredients: [
      "Assortment of all 4 signature hot entrées",
      "Two artisan side grain options",
      "Two fresh market salad bowls",
      "Warm garlic herb focaccia rolls",
    ],
    dietary: ["Gluten-Conscious Options", "Pescatarian Options", "High Protein"],
    image: "/images/meals/catering-buffet.webp",
    popular: true,
    macros: {
      calories: 650,
      protein: 52,
      carbs: 55,
      fat: 24,
    },
    allergens: ["Dairy", "Wheat", "Shellfish"],
    containerType: "Stainless & Gold Chafing Warmers with Sterno heating",
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: "the-weekly-5-meal-prep",
    title: "Weekly Meal Prep Routine",
    price: "",
    tagline: "Our Chef-Prepared Fresh Weekly Meals",
    guestCount: "Chef-Prepared Meals",
    description:
      "The ultimate lifestyle upgrade. Freshly cooked, nutrient-dense gourmet meals prepared for your week. Choose any mix of our signature dishes.",
    featured: true,
    badge: "Most Popular",
    idealFor: [
      "Busy Professionals",
      "Fitness & Macro Tracking",
      "Clean Healthy Living",
      "Zero Cooking & Zero Dishes",
    ],
    inclusions: [
      "5 Individual gourmet meals in BPA-free microwave & freezer-safe black containers",
      "Your custom mix of Lasagna, Chicken Kabobs, Shrimp Cajun, and Meat Della Casa",
      "Complete nutritional breakdown and macro tracking info on every meal",
      "Chilled insulated tote delivery right to your door",
      "Reheat in just 2 minutes for instant restaurant-quality dining",
    ],
    customizations: [
      "Select any quantity combination of the 4 weekly confirmed dishes",
      "Add extra protein or low-carb vegetable substitutions",
      "Choice of Sunday or Wednesday delivery drops",
    ],
    addOns: [
      "Extra additional meal add-ons",
      "Artisan cold-pressed immunity juices",
      "Fresh family-style salad bowl",
    ],
  },
  {
    id: "the-family-performance-10",
    title: "Family & Performance Plan",
    price: "",
    tagline: "Double your weekly convenience — 10 Meals with Free Split Delivery",
    guestCount: "10 Complete Meals",
    description:
      "Designed for active couples, fitness enthusiasts, and busy families who want effortless gourmet dinners every weekday evening.",
    featured: false,
    idealFor: [
      "Athletic Training & High Protein",
      "Couples & Small Families",
      "Full Mon-Fri Lunch & Dinner",
    ],
    inclusions: [
      "10 Individual gourmet meals of your choice",
      "Option for 2 fresh delivery drops (5 on Sunday, 5 on Wednesday) for maximum freshness",
      "Complimentary chef's garden salad bowl or fresh-baked rolls",
      "Priority delivery time slot selection",
    ],
    customizations: [
      "Full flexibility across all weekly signature dishes",
      "Dietary preference tagging (Keto, High Protein, Pescatarian)",
    ],
    addOns: [
      "Pre-workout cold pressed shots",
      "Family-style half pan lasagna upgrade",
      "Healthy snack & fruit boxes",
    ],
  },
  {
    id: "luxury-event-catering",
    title: "Bespoke Event & Corporate Catering",
    price: "Custom Quote",
    tagline: "Turn celebrations and corporate gatherings into unforgettable dining experiences",
    guestCount: "20 to 300+ Guests",
    description:
      "Full-service hot chafing buffet, executive boxed meal programs, or plated luxury dining for weddings, corporate summits, milestone birthdays, and private galas.",
    featured: false,
    idealFor: [
      "Corporate Luncheons & Executive Meetings",
      "Weddings & Rehearsal Dinners",
      "Milestone Birthdays & Anniversaries",
      "Holiday Parties & Private Galas",
    ],
    inclusions: [
      "Deluxe hot chafing dish presentation with polished gold/stainless accents",
      "Buffet or individually packaged executive warm meal boxes",
      "Generous protein spreads: Meat Della Casa, Cajun Shrimp, Chicken Skewers, Lasagna",
      "Seasoned grain bars, fresh salads, dressings, and artisan breads",
      "Full delivery, on-site setup, chafing fuel, and serving ware",
      "Optional on-site professional uniform catering attendants",
    ],
    customizations: [
      "Tailored menus matching specific dietary guidelines and attendee demographics",
      "Custom branded packaging for corporate client impressions",
      "Plated table service or elegant self-serve stations",
    ],
    addOns: [
      "Live carving station or chef attendant",
      "Gourmet dessert shooter & macaron display",
      "Infused hydration & cold beverage stations",
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "weekly-meal-prep",
    slug: "weekly-meal-prep",
    title: "Weekly Meal Prep Delivery",
    tagline: "Chef-prepared, wholesome meals delivered fresh to your door every week",
    shortDescription:
      "Effortless clean eating with our weekly meal selections. Freshly prepared with lean meats, wild seafood, and fresh market produce.",
    longDescription:
      "Say goodbye to grocery shopping, prepping, and hours standing over a hot stove. Divine & Delight crafts scratch-made, wholesome meals packaged in premium microwave-safe black containers. Our meals give you time back while elevating your daily nutrition.",
    image: "/images/meals/hero-spread.webp",
    galleryImages: [
      "/images/meals/lasagna.webp",
      "/images/meals/chicken-kabobs.webp",
      "/images/meals/shrimp-cajun.webp",
      "/images/meals/meat-della-casa.webp",
    ],
    startingGuests: "Individual & Family Servings",
    setupTime: "Ready to Heat in 2 Mins",
    idealFor: [
      "Busy Executives & Professionals",
      "Fitness Enthusiasts & Macro Trackers",
      "Health-Conscious Couples",
      "College Students & Parents",
    ],
    inclusions: [
      "Weekly signature chef-prepared meal selections",
      "BPA-free airtight recyclable meal prep containers",
      "Detailed calorie, protein, carbohydrate, and fat counts on every dish",
      "Insulated thermal delivery packaging with gel ice packs",
      "Direct text message updates when your meals arrive",
    ],
    highlights: [
      "Unbeatable chef-quality culinary craftsmanship",
      "Zero cooking, zero cleanup, ready in 120 seconds",
      "Flexible weekly subscription or one-time orders",
    ],
    faqs: [
      {
        question: "How long do the meals stay fresh in my refrigerator?",
        answer:
          "Our meals are freshly cooked and vacuum-sealed or airtight-capped to stay restaurant-fresh for 5 to 7 days in your refrigerator. You can also freeze them for up to 60 days.",
      },
      {
        question: "How do I reheat the meals?",
        answer:
          "Simply loosen the container lid and microwave on high for 2 to 2.5 minutes. For oven reheating, transfer the food to an oven-safe dish and bake at 350°F for 12 to 15 minutes.",
      },
    ],
  },
  {
    id: "corporate-office-catering",
    slug: "corporate-office-catering",
    title: "Corporate & Office Catering",
    tagline: "Fuel high-performance teams with nourishing, restaurant-caliber catering",
    shortDescription:
      "Elevate your office lunches, board meetings, and corporate summits with individually sealed hot meal boxes or magnificent hot buffet spreads.",
    longDescription:
      "Boost team productivity and impress visiting clients with corporate catering that feels like a private chef experience. Divine & Delight provides punctual, beautifully labeled hot meal setups with clear dietary tagging (Gluten-Free, Dairy-Free, Low-Carb) so every employee feels valued.",
    image: "/images/meals/corporate-catering.webp",
    galleryImages: [
      "/images/meals/corporate-catering.webp",
      "/images/meals/chicken-kabobs.webp",
      "/images/meals/meat-della-casa.webp",
    ],
    startingGuests: "15 to 300+ Attendees",
    setupTime: "Setup completed 30 minutes prior to scheduled lunch",
    idealFor: [
      "Executive Board Meetings",
      "Company-Wide All Hands & Town Halls",
      "Client Appreciation Luncheons",
      "Conferences & Multi-Day Summits",
    ],
    inclusions: [
      "Choice of individually labeled executive boxes or hot buffet line",
      "Assortment of premium proteins: Beef Della Casa, Cajun Shrimp, Grilled Kabobs",
      "Full complement of serving utensils, plates, napkins, and cutlery",
      "Tax invoices and corporate invoicing options available",
    ],
    highlights: [
      "Individual dietary labeling prevents cross-contamination",
      "Always hot, on-time delivery guaranteed",
      "Corporate accounts and recurring weekly contracts available",
    ],
    faqs: [
      {
        question: "Can you accommodate multiple dietary restrictions simultaneously?",
        answer:
          "Yes! We clearly label all boxed meals with full allergen disclosures and custom dietary badges (e.g. Gluten-Free, Dairy-Free, Nut-Free, Keto).",
      },
    ],
  },
  {
    id: "wedding-celebration-catering",
    slug: "wedding-celebration-catering",
    title: "Weddings & Private Celebrations",
    tagline: "Exquisite culinary hospitality tailored to your most meaningful moments",
    shortDescription:
      "From intimate garden rehearsal dinners to lavish 250-guest wedding receptions, we deliver unforgettable dining and polished hospitality.",
    longDescription:
      "Your wedding or milestone celebration should have food that guests rave about for years. Our culinary team brings together rich Italian baked favorites, vibrant Mediterranean skewers, succulent Cajun seafood, and house-marinated beef specialties served in glowing gold chafing displays.",
    image: "/images/meals/wedding-catering.webp",
    galleryImages: [
      "/images/meals/wedding-catering.webp",
      "/images/meals/catering-buffet.webp",
      "/images/meals/shrimp-cajun.webp",
      "/images/meals/lasagna.webp",
    ],
    startingGuests: "30+ Guests",
    setupTime: "2 to 3 hours prior to guest arrival",
    idealFor: [
      "Weddings & Receptions",
      "Rehearsal Dinners & Bridal Brunches",
      "Milestone 30th / 40th / 50th Birthdays",
      "Anniversary Celebrations & Estate Dinners",
    ],
    inclusions: [
      "Luxury buffet line or family-style table platters",
      "Deluxe gold & stainless chafing units with floral styling coordination",
      "Tasting consultation session prior to final menu selection",
      "Dedicated on-site catering captain and serving staff",
    ],
    highlights: [
      "Customizable menus tailored to the couple's favorite culinary traditions",
      "Seamless coordination with event planners and venues",
      "Late-night bite options and takeaway boxes for guests",
    ],
    faqs: [
      {
        question: "How far in advance should we reserve our wedding date?",
        answer:
          "We recommend booking 3 to 6 months in advance for peak wedding season, though we will do our best to accommodate dates with shorter notice when available.",
      },
    ],
  },
  {
    id: "private-chef-custom-prep",
    slug: "private-chef-custom-prep",
    title: "Custom Diet & Athletic Meal Prep",
    tagline: "Tailored macros and custom portioning engineered for your fitness goals",
    shortDescription:
      "High-protein, low-carb, keto, or bodybuilder macro-coached meal plans crafted with precision weighing and clean wholesome ingredients.",
    longDescription:
      "Whether you are cutting for competition, building lean muscle, or managing a physician-recommended wellness program, Divine & Delight formulates your meals down to the gram without sacrificing an ounce of flavor.",
    image: "/images/meals/hero-spread.webp",
    galleryImages: [
      "/images/meals/meat-della-casa.webp",
      "/images/meals/chicken-kabobs.webp",
      "/images/meals/shrimp-cajun.webp",
    ],
    startingGuests: "Individual or Couple Subscriptions",
    setupTime: "Delivered Weekly on Schedule",
    idealFor: [
      "Bodybuilders & Fitness Competitors",
      "Marathon Runners & Endurance Athletes",
      "Weight-Loss & Medical Wellness Journeys",
    ],
    inclusions: [
      "Gram-accurate macro tracking on protein, carbohydrates, and fats",
      "Custom substitutions (double broccoli instead of rice, extra 6oz protein)",
      "Zero added refined sugars, zero artificial chemicals, healthy cooking oils",
    ],
    highlights: [
      "Precision nutrition designed for real results",
      "Variety of bold seasonings so healthy food never tastes bland",
    ],
    faqs: [
      {
        question: "Can I customize the sides or request extra protein?",
        answer:
          "Yes! We offer double-protein upgrades and customizable vegetable/grain pairings upon request when discussing your inquiry.",
      },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Lasagna with Steamed Vegetables",
    category: "meal-prep",
    categoryLabel: "Weekly Meal Prep",
    image: "/images/meals/lasagna.webp",
    location: "Signature Prep Kitchen",
    caption: "Golden bubbly cheese crust with rich beef ragù and fresh steamed broccoli.",
    guestCount: "Individual Meal",
  },
  {
    id: "gal-2",
    title: "Flame-Grilled Chicken Kabobs & Greek Salad",
    category: "meal-prep",
    categoryLabel: "Weekly Meal Prep",
    image: "/images/meals/chicken-kabobs.webp",
    location: "Doorstep Delivery Batch",
    caption: "Juicy chicken skewers over seasoned herb rice with crisp feta salad.",
    guestCount: "Individual Meal",
  },
  {
    id: "gal-3",
    title: "Spicy Cajun Shrimp & Herb Rice",
    category: "meal-prep",
    categoryLabel: "Weekly Meal Prep",
    image: "/images/meals/shrimp-cajun.webp",
    location: "Chef Station",
    caption: "Jumbo Gulf shrimp in Louisiana seasoning with broccoli & roasted squash.",
    guestCount: "Individual Meal",
  },
  {
    id: "gal-4",
    title: "Meat Della Casa with Sautéed Peppers",
    category: "meal-prep",
    categoryLabel: "Weekly Meal Prep",
    image: "/images/meals/meat-della-casa.webp",
    location: "Weekly Specials Batch",
    caption: "Tender beef steak strips in savory demi-glace with peppers and rice.",
    guestCount: "Individual Meal",
  },
  {
    id: "gal-5",
    title: "Artisanal Meal Prep Lineup",
    category: "meal-prep",
    categoryLabel: "Weekly Routine",
    image: "/images/meals/hero-spread.webp",
    location: "Kitchen Studio",
    caption: "Four confirmed signature recipes lined up in sleek black luxury containers.",
    guestCount: "Weekly Bundle",
  },
  {
    id: "gal-6",
    title: "Luxury Hot Chafing Event Buffet",
    category: "catering",
    categoryLabel: "Event Catering",
    image: "/images/meals/catering-buffet.webp",
    location: "Grand Ballroom Gala",
    caption: "Gold chafing dish setup featuring Meat Della Casa, Cajun Shrimp, and Lasagna.",
    guestCount: "150 Guests",
  },
  {
    id: "gal-7",
    title: "Executive Boardroom Luncheon Catering",
    category: "corporate",
    categoryLabel: "Corporate Catering",
    image: "/images/meals/corporate-catering.webp",
    location: "High-Rise Executive Suite",
    caption: "Individually sealed hot meal boxes and chafing buffet for board meetings and summits.",
    guestCount: "35 Attendees",
  },
  {
    id: "gal-8",
    title: "Romantic Luxury Wedding Reception",
    category: "events",
    categoryLabel: "Wedding Catering",
    image: "/images/meals/wedding-catering.webp",
    location: "Estate Tent Reception",
    caption: "Candlelit plated dinner with prime steak, grilled cajun shrimp, and fine wine pairings.",
    guestCount: "200 Guests",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Marcus Sterling",
    role: "CrossFit Coach & Athlete",
    eventType: "Weekly Meal Prep Customer",
    quote:
      "The meal prep quality is an absolute standout. The Meat Della Casa and Cajun Shrimp taste like meals you'd order at a $40 steakhouse. My nutrition is effortless and I haven't cooked in two months.",
    date: "October 2026",
    location: "Atlanta, GA",
    rating: 5,
  },
  {
    id: "test-2",
    clientName: "Elena Rostova",
    role: "VP of People Operations",
    eventType: "Corporate Luncheon Catering",
    quote:
      "Divine & Delight catered our 120-person quarterly summit. The hot chafing presentation was breathtaking, and having both the Lasagna and the Chicken Kabobs meant every dietary need was satisfied. Our CEO specifically asked for their contact info.",
    date: "September 2026",
    location: "Charlotte, NC",
    rating: 5,
  },
  {
    id: "test-3",
    clientName: "David & Sarah Jenkins",
    role: "Newlyweds",
    eventType: "Wedding Reception Catering",
    quote:
      "We didn't want standard, bland wedding food. Divine & Delight brought their signature Southern & Mediterranean warmth with the Cajun Shrimp and Beef Della Casa. Guests were going back for seconds and thirds!",
    date: "August 2026",
    location: "Savannah, GA",
    rating: 5,
  },
  {
    id: "test-4",
    clientName: "Dr. Amanda Chen",
    role: "Pediatrician & Mother of Two",
    eventType: "Family Meal Prep",
    quote:
      "As a working mom, dinner was my biggest stress. Having 5 nutritious, home-cooked meals ready in 2 minutes changed our family evenings. The kids devour the Lasagna with broccoli, and the Chicken Kabobs are so fresh.",
    date: "October 2026",
    location: "Nashville, TN",
    rating: 5,
  },
];

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "How does the weekly meal prep service work?",
    category: "Meal Prep",
    answer:
      "Every week, our chefs prepare a curated menu of confirmed signature meals: Lasagna, Chicken Kabobs, Shrimp Cajun, Meat Della Casa, Carne Mushroom in White Sauce, and Tilapia Lemon. Contact us directly to discuss your preferred selections and availability.",
  },
  {
    question: "When are meal prep orders placed and delivered?",
    category: "Delivery & Schedule",
    answer:
      "Orders for the upcoming week should be placed by Friday at 11:59 PM EST. We offer fresh delivery drops twice a week: Sunday afternoon/evening (for Mon–Wed meals) and Wednesday afternoon/evening (for Thu–Sun meals). You can also receive all 5 meals in one insulated delivery on Sunday.",
  },
  {
    question: "How are the meals packaged, and are the containers safe?",
    category: "Packaging & Safety",
    answer:
      "All meals are individually portioned in heavy-duty, BPA-free, leak-resistant black containers. They are 100% microwave-safe, dishwasher-safe, freezer-safe, and recyclable. Each container features separate compartments so your proteins, grains, and greens stay perfectly separated.",
  },
  {
    question: "How long do the meals last, and how do I reheat them?",
    category: "Reheating & Freshness",
    answer:
      "Our meals stay peak-fresh in your refrigerator for 5 to 7 days. If you prefer to freeze them, they maintain quality for up to 60 days. To reheat, simply vent the corner of the lid and microwave for 2 to 2.5 minutes. (If having the Chicken Kabobs with cold salad, simply remove the salad portion first).",
  },
  {
    question: "Do you offer full-service catering for weddings and corporate events?",
    category: "Event Catering",
    answer:
      "Yes! Divine & Delight offers comprehensive event catering ranging from 20 to 300+ guests. We provide polished gold and stainless chafing equipment, hot buffet stations, individually boxed hot executive lunches, carving stations, and uniformed service staff.",
  },
  {
    question: "Can I customize ingredients or accommodate specific allergies?",
    category: "Dietary & Allergies",
    answer:
      "Absolutely. In our order and booking forms, you can note dietary restrictions such as gluten allergies, dairy-free requirements, or shellfish sensitivities. We cook in dedicated, sanitized batches to prevent cross-contamination.",
  },
];

export const FAQ_ITEMS = FAQS;

export const DESSERT_ITEMS: DessertProduct[] = [
  {
    id: "divine-mini-tiramisu",
    name: "Divine Mini Tiramisu",
    slug: "divine-mini-tiramisu",
    shortDescription:
      "Espresso-soaked ladyfingers layered with rich mascarpone and dark Dutch cocoa in a crystal cube.",
    image: "/images/desserts/mini-tiramisu.webp",
    alt: "Divine Mini Tiramisu in crystal cube cup",
    category: "cups",
  },
  {
    id: "delight-dubai-eclair",
    name: "Delight Dubai Chocolate Eclairs",
    slug: "delight-dubai-eclair",
    shortDescription:
      "Petite choux eclairs with dark chocolate glaze, pistachio cream drizzle, and delicate gold shimmer.",
    image: "/images/desserts/dubai-eclair.webp",
    alt: "Delight Dubai Chocolate Eclairs with pistachio drizzle",
    category: "pastries",
  },
  {
    id: "dnd-velvet-mousse-dome",
    name: "D&D Velvet Mousse Dome",
    slug: "dnd-velvet-mousse-dome",
    shortDescription:
      "Velvety cocoa-dusted cream mousse dome on spiced biscuit crumble with a petite wooden tasting spoon.",
    image: "/images/desserts/velvet-mousse-dome.webp",
    alt: "D&D Velvet Mousse Dome with wooden tasting spoon",
    category: "cups",
  },
  {
    id: "divine-lotus-speculoos",
    name: "Divine Lotus Speculoos Squares",
    slug: "divine-lotus-speculoos",
    shortDescription:
      "Layered spiced biscuit crumble and whipped caramel cream in an individual acrylic tasting cube.",
    image: "/images/desserts/lotus-speculoos.webp",
    alt: "Divine Lotus Speculoos Squares layered cup",
    category: "cups",
  },
  {
    id: "delight-chocolate-drizzle",
    name: "Delight Chocolate Drizzle Bites",
    slug: "delight-chocolate-drizzle",
    shortDescription:
      "Artisan choux pastry bites topped with rich dark cocoa glaze and fine ivory vanilla ribbons.",
    image: "/images/desserts/chocolate-drizzle-bites.webp",
    alt: "Delight Chocolate Drizzle Bites on crystal platter",
    category: "bites",
  },
  {
    id: "dnd-golden-ganache-cups",
    name: "D&D Golden Ganache Cups",
    slug: "dnd-golden-ganache-cups",
    shortDescription:
      "Decadent dark chocolate fudge ganache cubes topped with cocoa dusting and delicate gold leaf.",
    image: "/images/desserts/golden-ganache-cups.webp",
    alt: "D&D Golden Ganache Cups with gold leaf",
    category: "cups",
  },
];

