import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getMessages,
  setRequestLocale,
} from "next-intl/server";
import { Barlow, Fraunces } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--next-font-barlow",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--next-font-fraunces",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: "Sunnyside",
  description:
    "Sunnyside is a creative agency that specializes in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validate the locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // This is important for static rendering & caching
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang="en"
      className={`${barlow.variable} ${fraunces.variable} h-full antialiased`}
    >
      <NextIntlClientProvider messages={messages}>
        <body className="relative overflow-x-hidden">
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
      {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(cmsData.jsonLD).replace(
              /</g,
              "\\u003c"
            ),
          }}
        /> */}
    </html>
  );
}
