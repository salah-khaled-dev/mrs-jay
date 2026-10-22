"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export default function PackagesRedirect() {
  const router = useRouter();

  React.useEffect(() => {
    router.replace("/meal-prep");
  }, [router]);

  return (
    <div className="py-24 text-center space-y-4 max-w-md mx-auto px-4">
      <UtensilsCrossed className="w-8 h-8 text-primary mx-auto animate-pulse" />
      <h1 className="font-serif text-2xl font-bold text-foreground">
        Redirecting to Meal Prep...
      </h1>
      <p className="text-sm text-muted-foreground">
        Meal Plans are now part of our unified{" "}
        <Link href="/meal-prep" className="text-primary underline font-medium">
          Meal Prep Experience
        </Link>
        .
      </p>
    </div>
  );
}
