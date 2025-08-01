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
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://www.iecommunityhospice.com";
  
  const isZh = locale === 'zh';
  
  const title = isZh 
    ? "諾安安寧療護 - 南加州專業多語言安寧照護服務 | Medicare認證"
    : "IE Community Hospice - Professional Hospice Care Southern California | Medicare Certified";
    
  const description = isZh
    ? "諾安安寧療護為南加州華人家庭提供Medicare認證的專業安寧照護服務。24小時多語言支持，居家照護，疼痛管理。聖貝納迪諾縣、河濱縣、洛杉磯縣、橙縣服務。"
    : "IE Community Hospice provides Medicare-certified hospice care for Southern California families. 24/7 multiple language support, home care, pain management. Serving San Bernardino, Riverside, LA, Orange counties.";

  return {
    title,
    description,
    keywords: isZh 
      ? "安寧療護, 安寧照護, 臨終關懷, Medicare, 華人安寧療護, 南加州, 居家照護, 疼痛管理, 多語言服務, 聖貝納迪諾縣, 河濱縣, 洛杉磯縣, 橙縣, 24小時護理"
      : "hospice care, palliative care, end of life care, Medicare certified, Chinese hospice care, Southern California, home care, pain management, multiple language services, San Bernardino County, Riverside County, Los Angeles County, Orange County, 24/7 nursing",
    authors: [{ name: isZh ? "諾安安寧療護" : "IE Community Hospice" }],
    creator: isZh ? "諾安安寧療護" : "IE Community Hospice",
    publisher: isZh ? "諾安安寧療護" : "IE Community Hospice",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: isZh ? 'zh_TW' : 'en_US',
      alternateLocale: isZh ? 'en_US' : 'zh_TW',
      url: `${baseUrl}/${locale}`,
      siteName: isZh ? '諾安安寧療護' : 'IE Community Hospice',
      title,
      description,
      images: [
        {
          url: `${baseUrl}/images/hospice-care-og.jpg`,
          width: 1200,
          height: 630,
          alt: isZh ? '諾安安寧療護 - 專業安寧照護服務' : 'IE Community Hospice - Professional Hospice Care Services',
        },
        {
          url: `${baseUrl}/images/logo.png`,
          width: 800,
          height: 600,
          alt: isZh ? '諾安安寧療護 Logo' : 'IE Community Hospice Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@iecommunityhospice',
      creator: '@iecommunityhospice',
      title,
      description,
      images: [`${baseUrl}/images/hospice-care-og.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en-US': `${baseUrl}/en`,
        'zh-TW': `${baseUrl}/zh`,
        'x-default': `${baseUrl}/en`,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      other: {
        'msvalidate.01': 'your-bing-verification-code',
      },
    },
    category: 'Healthcare',
    classification: 'Healthcare Services',
    other: {
      'apple-mobile-web-app-title': isZh ? '諾安安寧療護' : 'IE Community Hospice',
      'application-name': isZh ? '諾安安寧療護' : 'IE Community Hospice',
      'msapplication-TileColor': '#3B82F6',
      'theme-color': '#ffffff',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const messages = await getMessages();
  const { locale } = await params;
  const isZh = locale === 'zh';

  return (
    <html lang={locale}>
      <head>
        <SchemaMarkup locale={locale} pageType="home" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "Microsoft JhengHei", "PingFang TC", "Hiragino Sans TC", "Source Han Sans TC", sans-serif;
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <link rel="canonical" href={`https://www.iecommunityhospice.com/${locale}`} />
        <link rel="alternate" hrefLang="en" href="https://www.iecommunityhospice.com/en" />
        <link rel="alternate" hrefLang="zh" href="https://www.iecommunityhospice.com/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iecommunityhospice.com/en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={isZh ? "諾安安寧療護" : "IE Community Hospice"} />
        <meta name="application-name" content={isZh ? "諾安安寧療護" : "IE Community Hospice"} />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="theme-color" content="#ffffff" />
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
