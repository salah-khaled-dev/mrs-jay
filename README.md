# Mrs Jay (Mrs. Jay) — Luxury Dessert Catering & Outdoor Carts 🍰✨

An ultra-premium, boutique dessert catering and mobile dessert booth booking platform built with **Next.js 16 (App Router)**, **Turbopack**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Designed specifically for luxury weddings, milestone celebrations, and high-profile corporate galas operating across the United States.

---

## 🎨 Official Brand Identity & Palette

Crafted with an editorial luxury aesthetic combining French patisserie elegance and warm American hospitality.

* **Cream (`#FFF8F2`):** Primary light background surface.
* **Blush Pink (`#EFC9C5`):** Soft decorative backgrounds and accent elements.
* **Berry Rose (`#A85D6E`):** Primary brand color, interactive CTAs, and focal accents.
* **Sage Green (`#A8B89A`):** Botanical and organic decorative accents.
* **Chocolate Brown (`#4B352F`):** Editorial headings, typography, and dark accents.

### 🌗 Light & Dark Mode
Fully functional, hydration-safe theme switching via `next-themes`:
* **Light Theme:** Cream surfaces (`#FFF8F2`), Berry Rose CTAs (`#A85D6E`), Chocolate typography (`#4B352F`).
* **Dark Theme:** Decadent chocolate and berry dark mode (`#1C1719` background, `#30262A` card surface, `#E3A9B8` primary, `#FFF0E9` text).

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
