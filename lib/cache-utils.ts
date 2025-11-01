// Cache configuration for different content types
export const CACHE_CONFIG = {
  // Static content - cache for 1 year
  STATIC: "public, max-age=31536000, immutable",
  // Dynamic content - cache for 1 hour
  DYNAMIC: "public, max-age=3600, s-maxage=7200",
  // API responses - cache for 5 minutes
  API: "public, max-age=300, s-maxage=600",
  // No cache
  NO_CACHE: "no-store, no-cache, must-revalidate, proxy-revalidate",
}

export function getCacheHeaders(type: keyof typeof CACHE_CONFIG) {
  return {
    "Cache-Control": CACHE_CONFIG[type],
  }
}
