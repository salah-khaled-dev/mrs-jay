"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { BookingFormData, EventType } from "@/types";
import { PACKAGES } from "@/lib/data";
import {
  Heart,
  Cake,
  Baby,
  Sparkles,
  Building2,
  PartyPopper,
  HelpCircle,
  Calendar,
  Clock,
  Users,
  MapPin,
  Check,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  RotateCcw,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: 1, title: "Event Type" },
  { id: 2, title: "Schedule" },
  { id: 3, title: "Location" },
  { id: 4, title: "Package & Sweets" },
  { id: 5, title: "Contact" },
  { id: 6, title: "Review" },
];

const EVENT_TYPES = [
  {
    id: "wedding",
    title: "Wedding",
    description: "Receptions, after-parties, and ceremony sweet stations.",
    icon: Heart,
  },
  {
    id: "bridal_shower",
    title: "Bridal Shower",
    description: "Intimate luncheons, champagne brunches, and teas.",
    icon: Sparkles,
  },
  {
    id: "birthday",
    title: "Birthday Party",
    description: "Sweet 16s, 21st, 30th, 40th, 50th, and milestone celebrations.",
    icon: Cake,
  },
  {
    id: "baby_shower",
    title: "Baby Shower",
    description: "Pastel sweet carts welcoming new arrivals.",
    icon: Baby,
  },
  {
    id: "corporate",
    title: "Corporate Event",
    description: "Brand galas, product launches, client appreciation, and retreats.",
    icon: Building2,
  },
  {
    id: "private_party",
    title: "Private Soirée",
    description: "Estate dinners, anniversaries, and garden gatherings.",
    icon: PartyPopper,
  },
  {
    id: "other",
    title: "Other Occasion",
    description: "Custom creative event concepts and festivals.",
    icon: HelpCircle,
  },
];

const DESSERT_OPTIONS = [
  "Parisian French Macarons",
  "Artisan Mini Cupcakes",
  "Petite Fruit & Berry Tarts",
  "Valrhona Truffle Brownies",
  "Heirloom Sandwich Cookies",
  "Artisan Cakesicles & Bonbons",
];

const CART_STYLES = [
  { id: "vintage-cream", name: "Vintage Cream & Gold", desc: "Classic ivory cart with brass accents and warm parasol." },
  { id: "blush-botanical", name: "Blush Rose Botanical", desc: "Soft blush canopy with cascading eucalyptus and garden roses." },
  { id: "sage-marketplace", name: "Sage Green Al Fresco", desc: "European farmer market look with light timber and sage linens." },
  { id: "modern-noir", name: "Modern Espresso Noir", desc: "Dark chocolate wood and minimalist linear brass frame." },
];

const OPTIONAL_EXTRAS = [
  "Artisan 6-Inch Ceremonial Cutting Cake",
  "Custom Take-Home Favor Boxes with Wax Seals",
  "Gourmet Espresso & Herbal Tea Cart",
  "Live Chef Torching & Flambé Station",
  "3D Laser-Cut Monogram Acrylic Signage",
  "Additional Attended Service Hours",
];

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

export function BookingWizard() {
  const searchParams = useSearchParams();
  const preselectedPackage = searchParams.get("package") || "";
  const preselectedEventType = searchParams.get("eventType") || "";

  const [currentStep, setCurrentStep] = React.useState(1);
  const [isDemoSubmitted, setIsDemoSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const [formData, setFormData] = React.useState<BookingFormData>({
    eventType: (preselectedEventType as EventType) || "wedding",
    otherEventType: "",
    eventDate: "",
    startTime: "16:00",
    eventDuration: "3 Hours",
    estimatedGuests: "75",
    state: "CA",
    city: "",
    zipCode: "",
    venueName: "",
    venueAddress: "",
    locationType: "indoor",
    selectedPackage: preselectedPackage || "the-signature-experience",
    dessertCategories: ["Parisian French Macarons", "Petite Fruit & Berry Tarts"],
    boothStyle: "vintage-cream",
    eventTheme: "",
    colorPalette: "Blush, Cream & Gold",
    additionalNotes: "",
    optionalExtras: [],
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "email",
  });

  // Validation per step
  const validateStep = (step: number) => {
    const errs: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.eventType) errs.eventType = "Please select an event type";
    }

    if (step === 2) {
      if (!formData.eventDate) errs.eventDate = "Please choose a desired event date";
      if (!formData.estimatedGuests) errs.estimatedGuests = "Please estimate your guest count";
    }

    if (step === 3) {
      if (!formData.city.trim()) errs.city = "City is required";
      if (!formData.zipCode.trim()) {
        errs.zipCode = "ZIP code is required";
      } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode.trim())) {
        errs.zipCode = "Please enter a valid 5-digit US ZIP code";
      }
    }

    if (step === 4) {
      if (!formData.selectedPackage) errs.selectedPackage = "Please select a preferred package";
      if (formData.dessertCategories.length === 0)
        errs.dessertCategories = "Please select at least one dessert category";
    }

    if (step === 5) {
      if (!formData.fullName.trim()) errs.fullName = "Full name is required";
      if (!formData.email.trim()) {
        errs.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = "Please enter a valid email address";
      }
      if (!formData.phone.trim()) {
        errs.phone = "Phone number is required for quote verification";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(5)) {
      setIsDemoSubmitted(true);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const toggleDessertCategory = (category: string) => {
    setFormData((prev) => {
      const exists = prev.dessertCategories.includes(category);
      return {
        ...prev,
        dessertCategories: exists
          ? prev.dessertCategories.filter((c) => c !== category)
          : [...prev.dessertCategories, category],
      };
    });
  };

  const toggleOptionalExtra = (extra: string) => {
    setFormData((prev) => {
      const exists = prev.optionalExtras.includes(extra);
      return {
        ...prev,
        optionalExtras: exists
          ? prev.optionalExtras.filter((e) => e !== extra)
          : [...prev.optionalExtras, extra],
      };
    });
  };

  // If successfully submitted in demo mode:
  if (isDemoSubmitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border shadow-xl space-y-8 text-center animate-in zoom-in-95 duration-250">
        <div className="w-20 h-20 rounded-full bg-sage/20 text-foreground mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>

        <div className="space-y-3 max-w-lg mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            Frontend Booking Flow Complete
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            Quote Request Validated
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. Your full booking inquiry has been formatted and validated according to production data contracts.
          </p>
        </div>

        {/* Honest Demo State Callout */}
        <div className="p-6 rounded-2xl bg-secondary/80 border border-border text-left max-w-xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <Info className="w-4 h-4" />
            <span>Phase 1 Architecture Notice</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            As requested for this frontend foundation phase, backend database dispatch (Supabase) is disconnected. No fake reservation confirmation has been generated. The state above is preserved in local memory and ready to attach to the future booking queue API.
          </p>
          <div className="pt-2 text-xs text-foreground font-mono bg-card/60 p-3 rounded-lg border border-border/60">
            <div><strong>Event:</strong> {formData.eventType} ({formData.eventDate || "Date TBD"})</div>
            <div><strong>Location:</strong> {formData.city}, {formData.state} {formData.zipCode}</div>
            <div><strong>Package:</strong> {formData.selectedPackage}</div>
            <div><strong>Contact:</strong> {formData.email}</div>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setIsDemoSubmitted(false);
              setCurrentStep(1);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted text-xs font-semibold uppercase tracking-wider text-foreground transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Start Another Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Step Progress Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            Step {currentStep} of 6: {STEPS[currentStep - 1].title}
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            {Math.round((currentStep / 6) * 100)}% Completed
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          />
        </div>

        {/* Step Indicator Circles */}
        <div className="grid grid-cols-6 gap-1 pt-6 text-center">
          {STEPS.map((s) => (
            <div key={s.id} className="flex flex-col items-center">
              <div
                className={cn(
                  "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                  s.id === currentStep
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : s.id < currentStep
                    ? "bg-sage/40 text-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {s.id < currentStep ? <Check className="w-3.5 h-3.5" /> : s.id}
              </div>
              <span className="text-[10px] hidden sm:block mt-1.5 text-muted-foreground truncate max-w-[80px]">
                {s.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Wizard Step Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border shadow-md">
        {/* ================= STEP 1: EVENT TYPE ================= */}
        {currentStep === 1 && (
          <div className="space-y-8">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                What Type of Celebration Are You Hosting?
              </h2>
              <p className="text-xs text-muted-foreground">
                Select the format that best describes your upcoming gathering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EVENT_TYPES.map((type) => {
                const Icon = type.icon;
                const isSelected = formData.eventType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, eventType: type.id as EventType });
                      setErrors({});
                    }}
                    className={cn(
                      "p-6 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer space-y-3",
                      isSelected
                        ? "border-primary bg-accent/20 dark:bg-accent/10 shadow-xs ring-2 ring-primary/40"
                        : "border-border bg-card/80 hover:bg-muted/60"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-foreground"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-base text-foreground">
                        {type.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-snug">
                        {type.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {formData.eventType === "other" && (
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-semibold text-foreground">
                  Please describe your event occasion:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gallery Exhibition Opening"
                  value={formData.otherEventType}
                  onChange={(e) =>
                    setFormData({ ...formData, otherEventType: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
              </div>
            )}

            {errors.eventType && (
              <p className="text-xs text-red-500">{errors.eventType}</p>
            )}
          </div>
        )}

        {/* ================= STEP 2: EVENT DETAILS ================= */}
        {currentStep === 2 && (
          <div className="space-y-8">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                Date, Timing & Guest Count
              </h2>
              <p className="text-xs text-muted-foreground">
                Tell us when and for how many guests you anticipate sweet catering.
              </p>
            </div>

            {/* Disclaimer regarding availability */}
            <div className="p-4 rounded-xl bg-secondary/80 border border-border text-xs text-muted-foreground flex items-start gap-2.5">
              <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                Note: Selecting a date submits a calendar inquiry. Actual reservation confirmation requires custom proposal agreement and deposit.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Event Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>Desired Event Date *</span>
                </label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) =>
                    setFormData({ ...formData, eventDate: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
                {errors.eventDate && (
                  <span className="text-[11px] text-red-500 block">
                    {errors.eventDate}
                  </span>
                )}
              </div>

              {/* Start Time */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Estimated Guest Arrival / Service Start</span>
                </label>
                <input
                  type="time"
                  value={formData.startTime}
                  onChange={(e) =>
                    setFormData({ ...formData, startTime: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
              </div>

              {/* Event Duration */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Desired Attended Service Duration
                </label>
                <select
                  value={formData.eventDuration}
                  onChange={(e) =>
                    setFormData({ ...formData, eventDuration: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                >
                  <option value="2 Hours">2 Hours (Standard Petite)</option>
                  <option value="3 Hours">3 Hours (Signature Standard)</option>
                  <option value="4 Hours">4 Hours (Grand Reception)</option>
                  <option value="5+ Hours">5+ Hours (Full Evening / Gala)</option>
                </select>
              </div>

              {/* Estimated Guests */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  <span>Estimated Guest Count *</span>
                </label>
                <input
                  type="number"
                  min={10}
                  max={2000}
                  placeholder="e.g. 85"
                  value={formData.estimatedGuests}
                  onChange={(e) =>
                    setFormData({ ...formData, estimatedGuests: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
                {errors.estimatedGuests && (
                  <span className="text-[11px] text-red-500 block">
                    {errors.estimatedGuests}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 3: LOCATION ================= */}
        {currentStep === 3 && (
          <div className="space-y-8">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                Venue & Location Details
              </h2>
              <p className="text-xs text-muted-foreground">
                Provide venue information for travel calculation and access logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Venue Name */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-foreground">
                  Venue Name or Private Estate
                </label>
                <input
                  type="text"
                  placeholder="e.g. Meadowood Estate or Private Residence"
                  value={formData.venueName}
                  onChange={(e) =>
                    setFormData({ ...formData, venueName: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
              </div>

              {/* Street Address */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-foreground">
                  Street Address (Optional if not yet finalized)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 900 Silverado Trail"
                  value={formData.venueAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, venueAddress: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
              </div>

              {/* City */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  City *
                </label>
                <input
                  type="text"
                  placeholder="e.g. St. Helena"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
                {errors.city && (
                  <span className="text-[11px] text-red-500 block">
                    {errors.city}
                  </span>
                )}
              </div>

              {/* State & Zip */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    State (US) *
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                  >
                    {US_STATES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    placeholder="94574"
                    value={formData.zipCode}
                    onChange={(e) =>
                      setFormData({ ...formData, zipCode: e.target.value })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                  />
                  {errors.zipCode && (
                    <span className="text-[11px] text-red-500 block">
                      {errors.zipCode}
                    </span>
                  )}
                </div>
              </div>

              {/* Location Type */}
              <div className="space-y-1.5 sm:col-span-2 pt-2">
                <label className="text-xs font-semibold text-foreground block">
                  Location Environment Setting
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "indoor", label: "Indoor Ballroom / Hall" },
                    { id: "outdoor", label: "Outdoor Garden / Lawn" },
                    { id: "both", label: "Covered Patio / Hybrid" },
                  ].map((env) => (
                    <button
                      key={env.id}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          locationType: env.id as "indoor" | "outdoor" | "both",
                        })
                      }
                      className={cn(
                        "p-3 rounded-xl border text-xs font-medium text-center transition-colors cursor-pointer",
                        formData.locationType === env.id
                          ? "border-primary bg-primary text-primary-foreground font-semibold"
                          : "border-border bg-background hover:bg-muted text-foreground"
                      )}
                    >
                      {env.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 4: PACKAGE & DESSERTS ================= */}
        {currentStep === 4 && (
          <div className="space-y-8">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                Package, Pastries & Aesthetic Styling
              </h2>
              <p className="text-xs text-muted-foreground">
                Customize your cart visual style, desired pastry varieties, and optional add-ons.
              </p>
            </div>

            {/* Select Preferred Package */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-primary block">
                1. Select Preferred Base Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PACKAGES.map((pkg) => {
                  const isSelected = formData.selectedPackage === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, selectedPackage: pkg.id })
                      }
                      className={cn(
                        "p-5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer space-y-2",
                        isSelected
                          ? "border-primary bg-accent/20 dark:bg-accent/10 shadow-xs ring-2 ring-primary/40"
                          : "border-border bg-card/70 hover:bg-muted/60"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-primary">
                          {pkg.guestCount}
                        </span>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </div>
                      <h3 className="font-serif font-bold text-base text-foreground">
                        {pkg.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground line-clamp-2">
                        {pkg.tagline}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dessert Varieties Selection */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-primary block">
                2. Preferred Dessert Categories (Select all that entice you)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {DESSERT_OPTIONS.map((dessert) => {
                  const isChecked = formData.dessertCategories.includes(dessert);
                  return (
                    <button
                      key={dessert}
                      type="button"
                      onClick={() => toggleDessertCategory(dessert)}
                      className={cn(
                        "p-3 rounded-xl border text-xs font-medium flex items-center justify-between transition-colors cursor-pointer",
                        isChecked
                          ? "border-primary bg-primary/10 text-foreground font-semibold"
                          : "border-border bg-background hover:bg-muted text-muted-foreground"
                      )}
                    >
                      <span>{dessert}</span>
                      <div
                        className={cn(
                          "w-4 h-4 rounded-md flex items-center justify-center border",
                          isChecked
                            ? "bg-primary border-primary text-white"
                            : "border-border bg-card"
                        )}
                      >
                        {isChecked && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.dessertCategories && (
                <span className="text-[11px] text-red-500 block">
                  {errors.dessertCategories}
                </span>
              )}
            </div>

            {/* Cart Aesthetic Styling */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-primary block">
                3. Preferred Mobile Cart Canopy / Styling
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CART_STYLES.map((style) => {
                  const isSelected = formData.boothStyle === style.id;
                  return (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, boothStyle: style.id })
                      }
                      className={cn(
                        "p-4 rounded-xl border text-left transition-colors cursor-pointer",
                        isSelected
                          ? "border-primary bg-accent/20 dark:bg-accent/10"
                          : "border-border bg-background hover:bg-muted"
                      )}
                    >
                      <span className="text-xs font-bold text-foreground block">
                        {style.name}
                      </span>
                      <span className="text-[11px] text-muted-foreground block mt-0.5">
                        {style.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Palette & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Event Color Palette / Floral Vision
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sage Green, Terracotta & Ivory"
                  value={formData.colorPalette}
                  onChange={(e) =>
                    setFormData({ ...formData, colorPalette: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Event Theme / Monogram Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Black Tie French Garden"
                  value={formData.eventTheme}
                  onChange={(e) =>
                    setFormData({ ...formData, eventTheme: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Optional Enhancements */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-primary block">
                4. Optional Add-On Enhancements
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {OPTIONAL_EXTRAS.map((extra) => {
                  const isChecked = formData.optionalExtras.includes(extra);
                  return (
                    <button
                      key={extra}
                      type="button"
                      onClick={() => toggleOptionalExtra(extra)}
                      className={cn(
                        "p-3 rounded-xl border text-xs font-medium flex items-center justify-between transition-colors cursor-pointer text-left",
                        isChecked
                          ? "border-primary bg-primary/10 text-foreground font-semibold"
                          : "border-border bg-background hover:bg-muted text-muted-foreground"
                      )}
                    >
                      <span>{extra}</span>
                      <div
                        className={cn(
                          "w-4 h-4 rounded-md flex items-center justify-center border shrink-0 ml-2",
                          isChecked
                            ? "bg-primary border-primary text-white"
                            : "border-border bg-card"
                        )}
                      >
                        {isChecked && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 5: CONTACT INFO ================= */}
        {currentStep === 5 && (
          <div className="space-y-8">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                Your Contact Information
              </h2>
              <p className="text-xs text-muted-foreground">
                Where should we send your itemized proposal and date confirmation?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-foreground">
                  Primary Contact Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Victoria Sterling"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
                {errors.fullName && (
                  <span className="text-[11px] text-red-500 block">
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="victoria@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
                {errors.email && (
                  <span className="text-[11px] text-red-500 block">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  US Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="(555) 234-5678"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
                {errors.phone && (
                  <span className="text-[11px] text-red-500 block">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-1.5 sm:col-span-2 pt-2">
                <label className="text-xs font-semibold text-foreground block">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "email", label: "Email" },
                    { id: "phone", label: "Phone Call" },
                    { id: "text", label: "Text Message" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          contactMethod: m.id as "email" | "phone" | "text",
                        })
                      }
                      className={cn(
                        "p-2.5 rounded-xl border text-xs font-medium text-center transition-colors cursor-pointer",
                        formData.contactMethod === m.id
                          ? "border-primary bg-primary text-primary-foreground font-semibold"
                          : "border-border bg-background hover:bg-muted text-foreground"
                      )}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-1.5 sm:col-span-2 pt-2">
                <label className="text-xs font-semibold text-foreground">
                  Additional Notes, Special Requests, or Dietary Needs:
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any special guest dietary restrictions, wedding planner details, or arrival notes..."
                  value={formData.additionalNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalNotes: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 6: REVIEW & SUBMIT ================= */}
        {currentStep === 6 && (
          <div className="space-y-8">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                Review Your Event Proposal Specifications
              </h2>
              <p className="text-xs text-muted-foreground">
                Please verify your details below before generating your custom catering quote.
              </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event Details Card */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-3">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-primary">
                    1. Event Schedule
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-[11px] text-primary hover:underline cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div><strong>Occasion:</strong> <span className="capitalize">{formData.eventType}</span></div>
                  <div><strong>Date:</strong> {formData.eventDate || "Date TBD"}</div>
                  <div><strong>Service Start:</strong> {formData.startTime} ({formData.eventDuration})</div>
                  <div><strong>Guest Count:</strong> {formData.estimatedGuests} guests</div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-3">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-primary">
                    2. Location
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="text-[11px] text-primary hover:underline cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div><strong>Venue:</strong> {formData.venueName || "To be confirmed"}</div>
                  <div><strong>Address:</strong> {formData.venueAddress || "Address provided later"}</div>
                  <div><strong>City/State:</strong> {formData.city}, {formData.state} {formData.zipCode}</div>
                  <div><strong>Environment:</strong> <span className="capitalize">{formData.locationType}</span></div>
                </div>
              </div>

              {/* Selections Card */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-3">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-primary">
                    3. Catering Package & Sweets
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="text-[11px] text-primary hover:underline cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div><strong>Package:</strong> {formData.selectedPackage}</div>
                  <div><strong>Cart Aesthetic:</strong> {formData.boothStyle}</div>
                  <div>
                    <strong>Pastries:</strong>{" "}
                    {formData.dessertCategories.join(", ") || "None selected"}
                  </div>
                  {formData.optionalExtras.length > 0 && (
                    <div>
                      <strong>Add-Ons:</strong> {formData.optionalExtras.join(", ")}
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Card */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-3">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-primary">
                    4. Contact Details
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(5)}
                    className="text-[11px] text-primary hover:underline cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div><strong>Name:</strong> {formData.fullName}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Method:</strong> <span className="capitalize">{formData.contactMethod}</span></div>
                </div>
              </div>
            </div>

            {/* Submission Disclaimer */}
            <div className="p-4 rounded-xl bg-secondary text-xs text-muted-foreground flex items-start gap-2.5">
              <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                Submitting this inquiry will demonstrate frontend validation and review states. In this Phase 1, reservations are not finalized until contract signing.
              </span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleFinalSubmit}
                className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground font-semibold uppercase tracking-wider text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Your Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Navigation Buttons (Prev / Next) */}
        <div className="pt-8 mt-8 border-t border-border flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-5 py-2.5 rounded-full border border-border hover:bg-muted text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Step</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 6 && (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
