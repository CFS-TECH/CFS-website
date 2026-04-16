"use client";
import { useState, useEffect } from "react";

/**
 * HydrationGuard component
 * Prevents hydration mismatches by ensuring children are only rendered on the client.
 * Useful for components interacting with browser extensions (like Bitwarden).
 */
export default function HydrationGuard({ children, fallback = null }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return fallback;
  }

  return <>{children}</>;
}
