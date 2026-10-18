"use client";

import * as React from "react";
import Link from "next/link";
import { BRAND_INFO } from "@/lib/data";
import { Sparkles, Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "Wedding",
    approximateDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Please tell us a little about your inquiry";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Connect With Us</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Direct Inquiries & Questions
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Have general questions regarding our carts, venue travel, or dietary capabilities? Send us a message or schedule a direct consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-card border border-border shadow-xs space-y-6">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Catering Headquarters
              </h2>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Service Area:</strong>
                    <span>{BRAND_INFO.serviceArea}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Telephone:</strong>
                    <span>{BRAND_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Inquiries:</strong>
                    <span>{BRAND_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Office Hours:</strong>
                    <span>{BRAND_INFO.hours}</span>
                  </div>
                </div>
              </div>

              {/* Full Booking Wizard Prompt */}
              <div className="pt-6 border-t border-border space-y-2">
                <span className="text-xs uppercase tracking-wider text-primary font-bold block">
                  Looking For A Date Reservation?
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  For date availability checks and detailed custom catering proposals, we suggest using our multi-step booking wizard.
                </p>
                <div className="pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary-hover"
                  >
                    <span>Launch Booking Wizard</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-md">
              {submitted ? (
                <div className="space-y-6 text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl font-bold text-foreground">
                      Form Validated & Received (Demo State)
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.fullName}</strong>. During this frontend foundation phase, backend database dispatch is not yet connected. Your input has been validated locally.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary text-xs text-muted-foreground max-w-md mx-auto flex items-start gap-2 text-left">
                    <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      Frontend form state preserved successfully. When Supabase integration is activated in the next phase, submissions will route directly to the catering queue.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        eventType: "Wedding",
                        approximateDate: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full border border-border hover:bg-muted text-xs font-semibold uppercase tracking-wider text-foreground transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Send a Message
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Our concierge team will respond within 24 business hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Charlotte Hayes"
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
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="charlotte@example.com"
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                      />
                    </div>

                    {/* Event Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) =>
                          setFormData({ ...formData, eventType: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                      >
                        <option value="Wedding">Wedding</option>
                        <option value="Bridal Shower">Bridal / Baby Shower</option>
                        <option value="Birthday">Birthday Celebration</option>
                        <option value="Corporate">Corporate Gala</option>
                        <option value="Private Dinner">Private Estate Dinner</option>
                        <option value="Other">Other Occasion</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Your Message or Questions <span className="text-primary">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details about your event, venue location, or questions..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-500 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground text-xs uppercase tracking-wider font-semibold shadow-md transition-all cursor-pointer"
                  >
                    Submit Inquiry Note
                  </button>

                  <p className="text-[11px] text-muted-foreground text-center">
                    Demonstration form: Client-side validation active. No backend transmission is simulated.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
