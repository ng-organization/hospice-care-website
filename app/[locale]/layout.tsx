import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/skip-link";
import "../globals.css";
import { FloatingCallButton } from "@/components/ui/FloatingCallButton";

export const metadata: Metadata = {
  title: "IE Community Hospice - Compassionate Care When It Matters Most",
  description:
    "IE Community Hospice provides compassionate hospice care with professional medical support, emotional guidance, and unwavering dignity for patients and families.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const messages = await getMessages();

  return (
    <html lang={(await params).locale}>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "Microsoft JhengHei", "PingFang TC", "Hiragino Sans TC", "Source Han Sans TC", sans-serif;
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SkipLink href="#main-content" />
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <FloatingCallButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
