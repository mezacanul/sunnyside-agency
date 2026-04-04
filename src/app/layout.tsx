import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

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
  title: "Next Template",
  description:
    "A template for a Next.js project with Tailwind CSS, TypeScript and the App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="relative overflow-x-hidden">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
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
