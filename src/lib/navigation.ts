import { withBasePath } from "@/lib/utils";

/**
 * Stops every <video> on the current page and aborts its network download,
 * so the next route gets the full connection pool and hardware decoder.
 */
export function releaseMedia() {
  if (typeof document === "undefined") return;
  document.querySelectorAll("video").forEach((v) => {
    try {
      v.pause();
      v.removeAttribute("src");
      v.load();
    } catch {
      // ignore
    }
  });
}

function normalizePath(path: string) {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

let fallbackTimer: number | undefined;

/**
 * Called on a <Link> click. Next.js performs the instant client-side
 * navigation; this only frees media resources and, as a safety net, falls
 * back to a normal page load if the client transition never commits.
 */
export function onNavLinkClick(href: string) {
  if (typeof window === "undefined") return;
  releaseMedia();

  const target = normalizePath(withBasePath(href));
  window.clearTimeout(fallbackTimer);
  fallbackTimer = window.setTimeout(() => {
    if (normalizePath(window.location.pathname) !== target) {
      window.location.assign(withBasePath(href));
    }
  }, 2500);
}

