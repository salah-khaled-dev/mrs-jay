import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://divineanddelight.com"),
  title: {
    default: "Divine & Delight | Luxury Meal Prep & Bespoke Catering",
    template: "%s | Divine & Delight Luxury Catering",
  },
  description:
    "Divine & Delight (D&D) delivers elevated artisan meal preparation and luxury bespoke catering for weddings, private celebrations, and corporate galas across the United States.",
  keywords: [
    "Divine & Delight",
    "D&D catering",
    "luxury meal prep",
    "bespoke catering",
    "wedding catering",
    "corporate event catering",
    "luxury dessert catering",
    "private chef meal prep",
    "artisan catering",
  ],
  authors: [{ name: "Divine & Delight Culinary Group" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Divine & Delight | Luxury Meal Prep & Bespoke Catering",
    description:
      "Elevated artisan meal preparation and bespoke event catering with signature culinary excellence and white-glove hospitality.",
    siteName: "Divine & Delight",
    locale: "en_US",
    type: "website",
    images: [
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
    title: "Divine & Delight | Luxury Meal Prep & Bespoke Catering",
    description:
      "Elevated artisan meal preparation and bespoke event catering with signature culinary excellence.",
    images: ["/images/brand/logo-original.png"],
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
