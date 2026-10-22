"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function BookRedirect() {
  const router = useRouter();

  React.useEffect(() => {
    router.replace("/contact");
  }, [router]);

  return (
    <div className="py-24 text-center space-y-4 max-w-md mx-auto px-4">
      <Mail className="w-8 h-8 text-primary mx-auto animate-pulse" />
      <h1 className="font-serif text-2xl font-bold text-foreground">
        Redirecting to Inquiries...
      </h1>
      <p className="text-sm text-muted-foreground">
        Direct all catering, meal prep, and event inquiries to our{" "}
        <Link href="/contact" className="text-primary underline font-medium">
          Contact Form
        </Link>
        .
      </p>
    </div>
  );
}
