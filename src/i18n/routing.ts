import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "fr"];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always", // or 'as-needed' if you want to hide /en
  localeDetection: true, // uses Accept-Language header
});
