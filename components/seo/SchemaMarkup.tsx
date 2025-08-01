interface SchemaMarkupProps {
  locale: string
  pageType?: 'home' | 'about' | 'services' | 'contact' | 'areas' | 'dignity' | 'info'
}

export async function SchemaMarkup({ locale, pageType = 'home' }: SchemaMarkupProps) {
  
  const baseUrl = 'https://www.iecommunityhospice.com'
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "Organization"],
    "name": locale === 'zh' ? "諾安安寧療護" : "IE Community Hospice",
    "alternateName": locale === 'zh' ? ["IE Community Hospice", "諾安安寧療護"] : ["諾安安寧療護", "IE Community Hospice"],
    "description": locale === 'zh' 
      ? "諾安安寧療護是聯邦認證的專業機構，專為南加州華人家庭提供雙語安寧照護服務，用心理解每個家庭的文化背景和需要。"
      : "IE Community Hospice provides bilingual hospice care services in Southern California. Medicare/Medi-Cal certified. Professional, compassionate end-of-life care with dignity.",
    "url": `${baseUrl}/${locale}`,
    "logo": `${baseUrl}/images/logo.png`,
    "image": `${baseUrl}/images/hospice-care-og.jpg`,
    "telephone": "+1-909-321-2255",
    "faxNumber": "+1-909-351-0151",
    "email": "info@iecommunityhospice.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "600 N. Mountain Ave, Suite D105",
      "addressLocality": "Upland",
      "addressRegion": "CA",
      "postalCode": "91786",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.1147885",
      "longitude": "-117.6469982"
    },
    "openingHours": [
      "Mo-Fr 09:00-17:00"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-909-321-2255",
        "contactType": "customer service",
        "availableLanguage": ["English", "Chinese"],
        "hoursAvailable": "24/7"
      },
      {
        "@type": "ContactPoint",
        "email": "info@iecommunityhospice.com",
        "contactType": "customer service",
        "availableLanguage": ["English", "Chinese"]
      }
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "San Bernardino County, CA"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Riverside County, CA"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Los Angeles County, CA"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Orange County, CA"
      },
      {
        "@type": "AdministrativeArea",
        "name": "San Diego County, CA"
      }
    ],
    "serviceType": "Hospice Care",
    "medicalSpecialty": ["Palliative Care", "Hospice Care", "End of Life Care"],
    "availableService": [
      {
        "@type": "MedicalService",
        "name": locale === 'zh' ? "居家照護" : "Home Care",
        "description": locale === 'zh' 
          ? "在最熟悉溫暖的家中，我們的護理師定期探視，24小時隨時提供專業照護。"
          : "Routine visits, intermittent and on-demand care provided in the comfort of your home."
      },
      {
        "@type": "MedicalService", 
        "name": locale === 'zh' ? "住院照護" : "Inpatient Care",
        "description": locale === 'zh'
          ? "當需要更進階的醫療照顧時，我們協助安排最合適的專業醫療機構。"
          : "Professional facility care arrangements when specialized nursing is needed."
      },
      {
        "@type": "MedicalService",
        "name": locale === 'zh' ? "連續照護" : "Continuous Care", 
        "description": locale === 'zh'
          ? "在最困難的時刻，我們的專業護理師24小時貼身照顧，讓家人能夠安心。"
          : "Shift-based nursing care to help patients through difficult periods."
      },
      {
        "@type": "MedicalService",
        "name": locale === 'zh' ? "暫託照護" : "Respite Care",
        "description": locale === 'zh'
          ? "讓辛苦照顧的家人能夠稍事休息，我們在專業機構提供最多5天的優質照護。"
          : "Up to 5 days of relief care for families and primary caregivers in professional facilities."
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Medicare Certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Centers for Medicare & Medicaid Services"
        }
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "CMS Certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Centers for Medicare & Medicaid Services"
        }  
      }
    ],
    "foundingDate": "2018",
    "slogan": locale === 'zh' 
      ? "讓生命的最後一程溫暖而有尊嚴"
      : "Life with Dignity, Comfort Care",
    "sameAs": [
      "https://www.facebook.com/iecommunityhospice"
    ]
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": locale === 'zh' ? "諾安安寧療護" : "IE Community Hospice",
    "alternateName": locale === 'zh' ? "IE Community Hospice" : "諾安安寧療護",
    "url": `${baseUrl}/${locale}`,
    "description": locale === 'zh'
      ? "專業安寧療護服務，為南加州華人家庭提供雙語支持和文化敏感的照護"
      : "Professional hospice care services with bilingual support for families in Southern California",
    "inLanguage": [locale === 'zh' ? 'zh-TW' : 'en-US'],
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/${locale}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  // Service Schema for specific pages
  const serviceSchema = pageType === 'services' ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": locale === 'zh' ? "專業安寧療護服務" : "Professional Hospice Care Services",
    "description": locale === 'zh'
      ? "提供全方位安寧療護服務，包括居家照護、疼痛管理、家屬支持等專業服務"
      : "Comprehensive hospice care services including home care, pain management, family support and professional medical care",
    "provider": {
      "@type": "MedicalBusiness",
      "name": locale === 'zh' ? "諾安安寧療護" : "IE Community Hospice"
    },
    "areaServed": "Southern California",
    "serviceType": "Healthcare",
    "audience": {
      "@type": "Audience", 
      "audienceType": "Patients and Families requiring End-of-Life Care"
    }
  } : null

  const schemas = [organizationSchema, websiteSchema] as any[]
  if (serviceSchema) schemas.push(serviceSchema)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas)
      }}
    />
  )
}