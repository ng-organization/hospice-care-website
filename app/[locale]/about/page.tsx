import type { Metadata } from "next";
import { AboutPageClient } from "@/components/pages/AboutPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://www.iecommunityhospice.com";
  const isZh = locale === 'zh';
  
  const title = isZh 
    ? "關於我們 - 諾安安寧療護 | Medicare認證，慈悲關懷專業團隊"
    : "About Us - IE Community Hospice | Medicare Certified Compassionate Care";
    
  const description = isZh
    ? "諾安安寧療護是政府認證的專業機構，致力於慈悲關懷。我們的使命是創造舒適與和平，為南加州家庭提供全方位護理級別，包括常規護理、持續護理、一般住院護理和住院喘息護理。"
    : "IE Community Hospice is a Medicare-certified organization committed to compassionate care. Our mission is to create comfort and peace, providing comprehensive care levels for Southern California families including routine, continuous, general inpatient, and respite care.";

  return {
    title,
    description,
    keywords: isZh 
      ? "諾安安寧療護, 關於我們, Medicare認證, 慈悲關懷, 使命, 承諾, 全方位護理, 南加州, 專業團隊, 合規認證"
      : "IE Community Hospice, about us, Medicare certified, compassionate care, mission, promise, comprehensive care, Southern California, professional team, compliance certification",
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/about`,
      images: [
        {
          url: `${baseUrl}/images/hospice-care-og.jpg`,
          width: 1200,
          height: 630,
          alt: isZh ? '關於諾安安寧療護 - 慈悲關懷專業團隊' : 'About IE Community Hospice - Compassionate Care Team',
        },
      ],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        'en-US': `${baseUrl}/en/about`,
        'zh-TW': `${baseUrl}/zh/about`,
      },
    },
  };
}

export default function AboutPage() {
  return <AboutPageClient />;
}
