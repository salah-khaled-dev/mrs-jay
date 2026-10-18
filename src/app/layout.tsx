import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mrs Jay | Luxury Dessert Catering & Outdoor Carts",
    template: "%s | Mrs Jay Luxury Dessert Catering",
  },
  description:
    "Elevated artisan dessert carts and beautifully curated sweet experiences for luxury weddings, private celebrations, and corporate galas across the United States.",
  keywords: [
    "dessert cart catering",
    "wedding dessert station",
    "luxury dessert cart",
    "outdoor dessert booth",
    "corporate dessert catering",
    "bridal shower sweets",
    "French macarons",
    "event sweet catering",
  ],
  authors: [{ name: "Mrs Jay Dessert Experiences" }],
  openGraph: {
    title: "Mrs Jay | Luxury Dessert Catering & Outdoor Carts",
    description:
      "Elevated artisan dessert carts and beautifully curated sweet experiences for luxury weddings, private celebrations, and corporate galas.",
    siteName: "Mrs Jay",
    locale: "en_US",
    type: "website",
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
