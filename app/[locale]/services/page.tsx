import type { Metadata } from "next";
import { ServicesPageClient } from "@/components/pages/ServicesPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://www.iecommunityhospice.com";
  const isZh = locale === 'zh';
  
  const title = isZh 
    ? "安寧療護服務 - 諾安安寧療護 | 四種照護級別，全方位服務"
    : "Hospice Care Services - IE Community Hospice | Four Levels of Care";
    
  const description = isZh
    ? "提供四種安寧療護級別：常規護理、持續護理、一般住院護理、住院喘息護理。24小時護理支持，疼痛管理，個人護理協助，社工服務，喪慟服務，志願者計劃。"
    : "Four levels of hospice care: routine, continuous, general inpatient, and respite care. 24/7 nursing support, pain management, personal care assistance, social work, bereavement services, volunteer program.";

  return {
    title,
    description,
    keywords: isZh 
      ? "安寧療護服務, 四種照護級別, 常規護理, 持續護理, 住院護理, 喘息護理, 疼痛管理, 24小時護理, 個人護理, 社工服務, 喪慟服務, 志願者計劃"
      : "hospice care services, four levels of care, routine care, continuous care, inpatient care, respite care, pain management, 24/7 nursing, personal care, social work, bereavement services, volunteer program",
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services`,
      images: [
        {
          url: `${baseUrl}/images/hospice-care-og.jpg`,
          width: 1200,
          height: 630,
          alt: isZh ? '安寧療護服務 - 四種照護級別' : 'Hospice Care Services - Four Levels of Care',
        },
      ],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services`,
      languages: {
        'en-US': `${baseUrl}/en/services`,
        'zh-TW': `${baseUrl}/zh/services`,
      },
    },
  };
}

export default function ServicesPage() {
  return <ServicesPageClient />;
}
