"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CakeSlice } from "lucide-react";

export default function DessertMenuRedirect() {
  const router = useRouter();

  React.useEffect(() => {
    router.replace("/desserts");
  }, [router]);

  return (
    <div className="py-24 text-center space-y-4 max-w-md mx-auto px-4">
      <CakeSlice className="w-8 h-8 text-primary mx-auto animate-pulse" />
      <h1 className="font-serif text-2xl font-bold text-foreground">
        Redirecting to Desserts...
      </h1>
      <p className="text-sm text-muted-foreground">
        Explore our artisanal dessert collection in{" "}
        <Link href="/desserts" className="text-primary underline font-medium">
          Desserts
        </Link>
        .
      </p>
    </div>
  );
}
