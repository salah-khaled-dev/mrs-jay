export type EventType =
  | "wedding"
  | "birthday"
  | "baby_shower"
  | "bridal_shower"
  | "corporate"
  | "private_party"
  | "other";

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
  guestCount: string;
  description: string;
  featured?: boolean;
  idealFor: string[];
  inclusions: string[];
  customizations: string[];
  addOns: string[];
}

export interface DessertItem {
  id: string;
  name: string;
  category: "mini-desserts" | "cupcakes" | "cookies" | "brownies" | "macarons" | "custom-treats";
  categoryLabel: string;
  description: string;
  dietary: string[];
  image: string;
  popular?: boolean;
  flavors: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "weddings" | "birthdays" | "corporate" | "outdoor";
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
}

export interface BookingFormData {
  eventType: EventType | "";
  otherEventType?: string;
  eventDate: string;
  startTime: string;
  eventDuration: string;
  estimatedGuests: number | string;
  state: string;
  city: string;
  zipCode: string;
  venueName: string;
  venueAddress: string;
  locationType: "indoor" | "outdoor" | "both";
  selectedPackage: string;
  dessertCategories: string[];
  boothStyle: string;
  eventTheme: string;
  colorPalette: string;
  additionalNotes: string;
  optionalExtras: string[];
  fullName: string;
  email: string;
  phone: string;
  contactMethod: "email" | "phone" | "text";
}
