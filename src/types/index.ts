
export interface MacroInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface MealItem {
  id: string;
  name: string;
  servingInfo: string;
  category: "weekly-special" | "poultry" | "seafood" | "beef" | "pasta" | "catering-platter";
  categoryLabel: string;
  description: string;
  ingredients: string[];
  dietary: string[];
  image: string;
  popular?: boolean;
  isWeeklySpecial?: boolean;
  macros: MacroInfo;
  heatingInstructions?: string;
  allergens?: string[];
  containerType?: string;
}

export interface DessertProduct {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  image: string;
  alt: string;
  category: "cups" | "pastries" | "bites";
}

// Backward-compatible alias
export type DessertItem = DessertProduct | MealItem;

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tagline: string;
  image: string;
  galleryImages: string[];
  idealFor: string[];
  inclusions: string[];
  startingGuests: string;
  setupTime: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
}

export interface PackageItem {
  id: string;
  title: string;
  tagline: string;
  price?: string;
  guestCount: string;
  description: string;
  featured?: boolean;
  badge?: string;
  idealFor: string[];
  inclusions: string[];
  customizations: string[];
  addOns: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "meal-prep" | "catering" | "corporate" | "events";
  categoryLabel: string;
  image: string;
  location: string;
  caption: string;
  guestCount: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  eventType: string;
  quote: string;
  date: string;
  location: string;
  rating?: number;
}

