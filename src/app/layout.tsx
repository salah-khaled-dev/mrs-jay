import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileContactButton } from "@/components/mobile-contact-button";
import { MobileNavBar } from "@/components/layout/mobile-nav-bar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined) ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://divineanddelight.com")
  ),
  title: {
    default: "Divine & Delight | Premium Meal Prep & Catering",
    template: "%s | Divine & Delight",
  },
  description:
    "Exceptional chef-prepared meal preparation and bespoke event catering delivered fresh across the United States.",
  keywords: [
    "Divine & Delight",
    "D&D meal prep",
    "healthy meal prep",
    "event catering",
    "wedding catering",
    "corporate lunch catering",
    "lasagna meal prep",
    "cajun shrimp",
    "chicken kabobs",
    "meat della casa",
    "carne mushroom",
    "tilapia lemon",
  ],
  authors: [{ name: "Divine & Delight Culinary Group" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Divine & Delight | Premium Meal Prep & Catering",
    description:
      "Exceptional chef-prepared meals and bespoke luxury event catering for everyday dining and special occasions.",
    siteName: "Divine & Delight",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Divine & Delight - Premium Meal Prep & Catering",
      },
      {
        url: "/images/brand/logo-original.webp",
        width: 1024,
        height: 1024,
        alt: "Divine & Delight Official Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine & Delight | Premium Meal Prep & Catering",
    description:
      "Exceptional chef-prepared meals and bespoke luxury event catering for everyday dining and special occasions.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-primary/30 selection:text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 w-full pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileContactButton />
          <MobileNavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
