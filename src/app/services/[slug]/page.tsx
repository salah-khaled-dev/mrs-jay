import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { Sparkles, ArrowRight, Check, Clock, Users, HelpCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Luxury Dessert Catering`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Boutique Catering Format</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-lg text-primary italic font-serif">
              &ldquo;{service.tagline}&rdquo;
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {service.longDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span><strong>Guest Capacity:</strong> {service.startingGuests}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span><strong>Setup Time:</strong> {service.setupTime}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href={`/book?service=${service.slug}`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs uppercase tracking-wider font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Book This Experience</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/dessert-menu"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-border bg-card hover:bg-muted text-foreground text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <span>View Dessert Menu</span>
              </Link>
            </div>
          </div>

          {/* Main Visual */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border bg-muted">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Photography Showcase */}
        {service.galleryImages.length > 0 && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Event Presentation Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-border bg-muted"
                >
                  <Image
                    src={img}
                    alt={`${service.title} setup ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Inclusions & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Inclusions Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-xs space-y-6">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              What Is Included In This Format
            </h3>
            <ul className="space-y-3.5">
              {service.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal Settings & Highlights */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-secondary/80 border border-border space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Ideal Celebrations
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.idealFor.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border shadow-xs space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Boutique Service Highlights
              </h3>
              <ul className="space-y-2.5">
                {service.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Service FAQs */}
        {service.faqs.length > 0 && (
          <div className="p-8 sm:p-12 rounded-3xl bg-card/60 border border-border space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Service Inquiries</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Frequently Asked About {service.title}
            </h2>
            <div className="space-y-4 pt-2">
              {service.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="p-5 rounded-2xl bg-card border border-border/80 space-y-2"
                >
                  <h4 className="font-serif text-base font-semibold text-foreground">
                    {faq.question}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-primary text-primary-foreground flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold">
              Reserve Your Date for {service.title}
            </h3>
            <p className="text-xs text-primary-foreground/80">
              Submit your guest count and venue location to receive an itemized proposal.
            </p>
          </div>
          <Link
            href={`/book?service=${service.slug}`}
            className="px-7 py-3.5 rounded-full bg-[#0B0B0D] text-[#E8D5A8] hover:text-white hover:bg-[#1C1C1E] text-xs uppercase tracking-wider font-semibold shadow-md shrink-0 transition-colors border border-[#C9A86A]/40"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
