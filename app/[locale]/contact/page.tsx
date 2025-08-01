import type { Metadata } from "next";
import { ContactPageClient } from "@/components/pages/ContactPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://www.iecommunityhospice.com";
  const isZh = locale === 'zh';
  
  const title = isZh 
    ? "聯絡我們 - 諾安安寧療護 | 24小時服務熱線 909-321-2255"
    : "Contact Us - IE Community Hospice | 24/7 Support 909-321-2255";
    
  const description = isZh
    ? "聯絡諾安安寧療護，24小時服務熱線 909-321-2255。我們的慈悲關懷團隊隨時為您解答安寧療護問題。辦公室位於阿普蘭，服務聖貝納迪諾縣、河濱縣、洛杉磯縣、橙縣。"
    : "Contact IE Community Hospice, 24/7 support line 909-321-2255. Our compassionate care team is ready to answer your hospice care questions. Office in Upland, serving San Bernardino, Riverside, LA, Orange counties.";

  return {
    title,
    description,
    keywords: isZh 
      ? "聯絡我們, 諾安安寧療護, 24小時服務, 909-321-2255, 阿普蘭, 聖貝納迪諾縣, 河濱縣, 洛杉磯縣, 橙縣, 安寧療護諮詢"
      : "contact us, IE Community Hospice, 24/7 support, 909-321-2255, Upland, San Bernardino County, Riverside County, Los Angeles County, Orange County, hospice care consultation",
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/contact`,
      images: [
        {
          url: `${baseUrl}/images/hospice-care-og.jpg`,
          width: 1200,
          height: 630,
          alt: isZh ? '聯絡諾安安寧療護 - 24小時服務' : 'Contact IE Community Hospice - 24/7 Support',
        },
      ],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: {
        'en-US': `${baseUrl}/en/contact`,
        'zh-TW': `${baseUrl}/zh/contact`,
      },
    },
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
} 