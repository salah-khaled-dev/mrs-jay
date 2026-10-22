"use client";

import * as React from "react";
import { Mail, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const OFFICIAL_EMAIL = "dnd.cater.events@gmail.com";
const OFFICIAL_INSTAGRAM = "https://www.instagram.com/divineanddelight.cater";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "Meal Prep",
    message: "",
  });

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [showGuidance, setShowGuidance] = React.useState(false);
  const [copiedMessage, setCopiedMessage] = React.useState(false);
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please enter your message or inquiry";
    }
    return errs;
  };

  const buildEmailBody = () => {
    return [
      `Customer Name: ${formData.fullName.trim()}`,
      `Customer Email: ${formData.email.trim()}`,
      formData.phone.trim() ? `Phone Number: ${formData.phone.trim()}` : null,
      formData.inquiryType ? `Inquiry Type: ${formData.inquiryType}` : null,
      "",
      "Customer Message:",
      formData.message.trim(),
      "",
      "---",
      "Sent via Divine & Delight Contact Form",
    ]
      .filter((line) => line !== null)
      .join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const subject = "New Inquiry — Divine & Delight";
    const body = buildEmailBody();
    const mailtoUrl = `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open user's default email composer
    window.location.href = mailtoUrl;

    // Display fallback guidance without claiming message delivered
    setShowGuidance(true);
  };

  const handleCopyMessage = async () => {
    const fullText = `To: ${OFFICIAL_EMAIL}\nSubject: New Inquiry — Divine & Delight\n\n${buildEmailBody()}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 3000);
    } catch {
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 3000);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    }
  };

  return (
    <div className="py-8 sm:py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Compact, Refined Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-primary/25 text-primary text-[11px] uppercase tracking-[0.2em] font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Get in Touch
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Have questions regarding weekly meal prep, bespoke catering, or artisanal desserts? Send us an inquiry below or reach out directly.
          </p>
        </div>

        {/* Verified Quick Contact Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto">
          {/* Email Channel */}
          <a
            href={`mailto:${OFFICIAL_EMAIL}?subject=Inquiry%20%E2%80%94%20Divine%20%26%20Delight`}
            className="p-4 rounded-2xl bg-card border border-border hover:border-primary/40 shadow-2xs hover:shadow-sm transition-all flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary block">
                Official Email
              </span>
              <span className="text-xs sm:text-sm text-foreground font-medium block truncate">
                {OFFICIAL_EMAIL}
              </span>
            </div>
          </a>

          {/* Instagram Channel */}
          <a
            href={OFFICIAL_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-card border border-border hover:border-primary/40 shadow-2xs hover:shadow-sm transition-all flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary block">
                Instagram Direct
              </span>
              <span className="text-xs sm:text-sm text-foreground font-medium block truncate">
                @divineanddelight.cater
              </span>
            </div>
          </a>
        </div>

        {/* Compact, Clean Contact Form */}
        <div className="p-5 sm:p-8 rounded-3xl bg-card border border-border shadow-xs max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">
                  Your Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Charlotte Hayes"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-xl bg-background border text-foreground text-sm focus:outline-none transition-colors",
                    errors.fullName ? "border-red-500" : "border-border focus:border-primary"
                  )}
                />
                {errors.fullName && (
                  <span className="text-[11px] text-red-500 block">
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">
                  Your Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  placeholder="charlotte@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-xl bg-background border text-foreground text-sm focus:outline-none transition-colors",
                    errors.email ? "border-red-500" : "border-border focus:border-primary"
                  )}
                />
                {errors.email && (
                  <span className="text-[11px] text-red-500 block">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Phone Number (Optional) */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">
                  Phone Number <span className="text-muted-foreground text-[10px] font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
              </div>

              {/* Inquiry Type */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">
                  Inquiry Type <span className="text-muted-foreground text-[10px] font-normal">(Optional)</span>
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiryType: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option value="Meal Prep">Meal Prep</option>
                  <option value="Event Catering">Event Catering</option>
                  <option value="Artisanal Desserts">Artisanal Desserts</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your weekly meal prep goals, event date, guest count, or questions..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={cn(
                  "w-full px-3.5 py-2.5 rounded-xl bg-background border text-foreground text-sm focus:outline-none transition-colors",
                  errors.message ? "border-red-500" : "border-border focus:border-primary"
                )}
              />
              {errors.message && (
                <span className="text-[11px] text-red-500 block">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Send Message Button (Large, accessible, touch-friendly) */}
            <button
              type="submit"
              className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs uppercase tracking-wider font-semibold shadow-md transition-all active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send Message</span>
            </button>

            {/* Fallback & Guidance Box (Honest status, no fake confirmation) */}
            {showGuidance && (
              <div className="mt-4 p-4 rounded-2xl bg-secondary/80 border border-primary/30 space-y-3 text-left text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-primary font-semibold text-xs">
                    <Mail className="w-4 h-4" />
                    <span>Email Application Launched</span>
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    Your inquiry has been formatted into your default email app. Review the details and click <strong>Send</strong>.
                  </p>
                </div>

                <div className="pt-2 border-t border-border space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground">Official Recipient:</span>
                    <span className="font-mono text-foreground font-medium select-all">
                      {OFFICIAL_EMAIL}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-border hover:bg-muted text-foreground text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-primary" />
                          <span>Message Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                          <span>Copy Complete Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-border hover:bg-muted text-foreground text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-primary" />
                          <span>Email Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                          <span>Copy Official Email</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
