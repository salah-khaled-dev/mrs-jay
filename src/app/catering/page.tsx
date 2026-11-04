import type { Metadata } from "next";
import { CateringSection } from "@/components/home/catering-section";

export const metadata: Metadata = {
  title: "Catering | Divine & Delight",
  description:
    "Made for every occasion. Experience our immersive scroll-driven showcase of bespoke catering for grand celebrations, private parties, and corporate hospitality.",
};

export default function CateringPage() {
  return (
    <div className="w-full bg-background text-foreground">
      <CateringSection id="catering-showcase" />
    </div>
  );
}
