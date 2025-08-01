import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type HeroImageMap = {
  [locale: string]: {
    [path: string]: string;
  };
};

const heroImageMap: HeroImageMap = {
  zh: {
    '/': 'hero-home',
    '/about': 'hero-about', 
    '/areas': 'hero-service-area',
    '/contact': 'hero-contact-us',
    '/death-with-dignity': 'hero-death-with-dignity',
    '/services': 'hero-service',
    '/useful-information': 'hero-helpful-information'
  },
  en: {
    '/': 'hero-home-page',
    '/about': 'hero-aboutus-page',
    '/areas': 'hero-service-area-page', 
    '/contact': 'hero-contactus-page',
    '/death-with-dignity': 'hero-death-with-dignity-page',
    '/services': 'hero-service-page',
    '/useful-information': 'hero-useful-information-page'
  }
};

export function getHeroImage(locale: string, pagePath: string): string {
  const normalizedLocale = locale === 'zh' ? 'zh' : 'en';
  const imageMap = heroImageMap[normalizedLocale];
  
  if (!imageMap) {
    // Fallback to English if locale not found
    const fallbackImage = heroImageMap.en[pagePath];
    return fallbackImage 
      ? `/image_asset/hero-en/${fallbackImage}.webp?v=${Date.now()}`
      : `/image_asset/hero-en/hero-home-page.webp?v=${Date.now()}`;
  }
  
  const imageName = imageMap[pagePath];
  if (!imageName) {
    // Fallback to home page image if path not found
    const homeImage = imageMap['/'];
    return homeImage 
      ? `/image_asset/hero-${normalizedLocale}/${homeImage}.webp?v=${Date.now()}`
      : `/image_asset/hero-en/hero-home-page.webp?v=${Date.now()}`;
  }
  
  return `/image_asset/hero-${normalizedLocale}/${imageName}.webp?v=${Date.now()}`;
}

type ContentImageMap = {
  [key: string]: string;
};

const contentImageMap: ContentImageMap = {
  // About section
  'about-team': '20250725_1034_Realistic Care Interaction_remix_01k11a9631e8rv6vmsdb2qbgkh.webp',
  
  // Dignity section  
  'dignity-care': '20250724_1445_Realistic Healthcare Portrait_remix_01k0z67dw8f99s2362jmy2mf9p.webp',
  'dignity-philosophy': '20250724_1445_Realistic Healthcare Portrait_remix_01k0z67dw8f99s2362jmy2mf9p.webp',
  
  // Contact section
  'contact-communication': '20250724_1452_Realistic Caring Interaction_remix_01k0z6m6yke1av5srhgz6j4c9c.webp',
  'contact-map-1': '20250725_1034_Realistic Care Interaction_remix_01k11a9631e8rv6vmsdb2qbgkh.webp',
  'contact-map-2': '20250724_1452_Realistic Caring Interaction_remix_01k0z6m6yke1av5srhgz6j4c9c.webp',
  'contact-map-3': '20250724_1137_Quilting Companions in Detail_remix_01k0yvf6vvfjs87kafjp4gsnqs.webp',
  
  // Location section
  'location-visit': '20250724_1131_温馨家庭探访_remix_01k0yv594bfy1vs06ygah5s0qn.webp',
  
  // Mission section
  'mission-consultation': '20250725_1123_Realistic Doctor Consultation_remix_01k11d2jzke1w8mxrazmkk5kny.webp',
  
  // Promise section
  'promise-caregiver': '20250724_1445_Realistic Healthcare Portrait_remix_01k0z67dw8f99s2362jmy2mf9p.webp',
  
  // Office section
  'office-environment': '20250725_1123_Realistic Doctor Consultation_remix_01k11d2jzke1w8mxrazmkk5kny.webp',
};

export function getContentImage(locale: string, imageKey: string): string {
  const normalizedLocale = locale === 'zh' ? 'zh' : 'en';
  
  // First try language-specific folder
  const langSpecificPath = `/image_asset/content-${normalizedLocale}/${imageKey}.webp`;
  
  // If no specific mapping exists, try the shared folder
  const sharedPath = `/image_asset/shared/${imageKey}.webp`;
  
  // Fall back to current image_asset folder with mapped filename
  const mappedFilename = contentImageMap[imageKey];
  if (mappedFilename) {
    return `/image_asset/${mappedFilename}?v=${Date.now()}`;
  }
  
  // Ultimate fallback to a default image
  return `/image_asset/20250724_1445_Realistic Healthcare Portrait_remix_01k0z67dw8f99s2362jmy2mf9p.webp?v=${Date.now()}`;
}
