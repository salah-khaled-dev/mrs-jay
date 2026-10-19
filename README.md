# Divine & Delight (D&D) — Luxury Meal Prep & Bespoke Catering 👑✨

An ultra-premium, luxury meal preparation and bespoke event catering platform built with **Next.js 16 (App Router)**, **Turbopack**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Designed specifically for luxury weddings, private chef dining, milestone celebrations, and high-profile corporate galas operating across the United States.

---

## 🎨 Official Brand Identity & Palette

Extracted directly from the official Divine & Delight crowned monogram logo:

* **Primary Metallic Gold (`#DCA548`):** Official logo core gold, primary accents, active states.
* **Highlight Gold (`#F9D685` / `#FFE4A3`):** Radiant metallic reflections and subtle glows.
* **Deep Gold / Bronze (`#99631B` / `#603807`):** High-contrast accessible gold for light surfaces and shadow depth.
* **Champagne Accent (`#E1C078`):** Refined secondary metallic elements.
* **Luxury Obsidian (`#08080A`):** Deep black matching the official logo backdrop.
* **Ivory Warm White (`#FAF8F5`):** Clean, prestigious light-mode surface.

### 🌗 Light & Dark Mode
Fully functional, hydration-safe theme switching via `next-themes`:
* **Dark Theme:** Deep obsidian background (`#08080A`), dark charcoal cards (`#121215`), radiant logo gold accents (`#DCA548`), high readability.
* **Light Theme:** Refined warm ivory (`#FAF8F5`), pure white surfaces (`#FFFFFF`), deep metallic gold CTAs (`#99631B`, WCAG AA compliant).

---

## 🚀 Key Features & Pages

* **Editorial Homepage (`/`):**
  * Layered high-fashion hero composition with direct booking cues.
  * *The Art of Sweet Celebrations* brand introduction.
  * 6 bespoke service preview cards.
  * 3 signature tiered packages (Petite, Signature, Grand).
  * 4-step *How It Works* interactive timeline.
  * Filterable patisserie showcase (Macarons, Cupcakes, Tarts, Brownies, Cookies).
  * Masonry-inspired event gallery preview.
  * Sample client impressions and luxury final CTA.
* **Services Overview (`/services`) & Detail Routes (`/services/[slug]`):**
  * Dynamic static params routes for each catering format.
  * Setup times, guest capacities, inclusions, and format-specific FAQs.
* **Signature Packages (`/packages`):**
  * Side-by-side comparison with guest capacities and inclusions.
  * 6 bespoke enhancements (Cutting cakes, Wax-sealed favors, Espresso cart, Live torching station).
* **Artisan Dessert Menu (`/dessert-menu`):**
  * Filterable collection with dietary badges (`Gluten-Free`, `Vegetarian`).
  * Flavor profile lists and event wishlist saving.
* **Event Gallery (`/gallery`):**
  * Responsive masonry grid with category filters (Weddings, Birthdays, Corporate, Outdoor).
  * Interactive image lightbox modal with keyboard `Escape` support.
* **Weddings & Bridal (`/weddings`):**
  * Dedicated landing page for couples and planners.
  * Floral palette matching and courier-delivered tasting boxes.
* **Corporate Galas (`/corporate-events`):**
  * High-volume attendee throughput (up to 1,000+).
  * Edible corporate logo printing and $2M COI venue documentation.
* **6-Step Event Booking Wizard (`/book`):**
  * **Step 1:** Event occasion selection.
  * **Step 2:** Date, time, duration, and guest count.
  * **Step 3:** US venue location details & indoor/outdoor environment.
  * **Step 4:** Package, dessert varieties, and cart canopy styling.
  * **Step 5:** Contact information with client-side validation.
  * **Step 6:** Review summary and honest demo proposal state.
* **About Us (`/about`):** Heritage, European technique, and four guiding promises.
* **Contact (`/contact`):** Client-side validated inquiry form and headquarters details.
* **FAQ (`/faq`):** Accessible interactive accordion covering booking, dietary, and logistics.

---

## 🛠 Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server Components by default)
* **Bundler:** **Turbopack** (Native high-speed build & dev bundler)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with CSS theme variables
* **Icons:** [Lucide React](https://lucide.dev/)
* **Typography:** Playfair Display (Headings) & DM Sans (Body) via Google Fonts
* **Theming:** `next-themes` (Light, Dark, and System modes)
* **Animation:** Smooth CSS transitions & subtle micro-interactions

---

## 💻 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/salah-khaled-dev/mrs-jay.git
cd mrs-jay
npm install
```

### 2. Run Turbopack Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production with Turbopack
```bash
npm run build
```

---

## 📄 License

Private project developed for event catering operations. All rights reserved.
