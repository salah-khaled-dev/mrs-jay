"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function ServicesRedirect() {
  const router = useRouter();

  React.useEffect(() => {
    router.replace("/catering");
  }, [router]);

  return (
    <div className="py-24 text-center space-y-4 max-w-md mx-auto px-4">
      <CalendarDays className="w-8 h-8 text-primary mx-auto animate-pulse" />
      <h1 className="font-serif text-2xl font-bold text-foreground">
        Redirecting to Catering...
      </h1>
      <p className="text-sm text-muted-foreground">
        Explore our bespoke event hospitality on our{" "}
        <Link href="/catering" className="text-primary underline font-medium">
          Catering Page
        </Link>
        .
      </p>
    </div>
  );
}
