import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined) ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://divineanddelight.com")
  ),
  title: {
    default: "Divine & Delight | Meal Prep + Catering (5 for $65)",
    template: "%s | Divine & Delight Meal Prep + Catering",
  },
  description:
    "Healthy. Homemade. High Quality. Weekly Chef-Prepared Meals (5 for $65) delivered fresh to your door, and bespoke full-service event catering across the United States.",
  keywords: [
    "Divine & Delight",
    "D&D meal prep",
    "5 for 65 meal prep",
    "healthy meal prep",
    "event catering",
    "wedding catering",
    "corporate lunch catering",
    "lasagna meal prep",
    "cajun shrimp",
    "chicken kabobs",
    "meat della casa",
  ],
  authors: [{ name: "Divine & Delight Culinary Group" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Divine & Delight | Meal Prep + Catering (5 for $65)",
    description:
      "Healthy • Homemade • High Quality. Savor our signature weekly 5 for $65 chef-prepared meals and bespoke luxury event catering.",
    siteName: "Divine & Delight",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Divine & Delight - Meal Prep + Catering - 5 for $65",
      },
      {
        url: "/images/brand/logo-original.png",
        width: 1024,
        height: 1024,
        alt: "Divine & Delight Official Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine & Delight | Meal Prep + Catering (5 for $65)",
    description:
      "Healthy • Homemade • High Quality. Weekly Chef-Prepared Meals (5 for $65) & Bespoke Event Catering.",
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
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
