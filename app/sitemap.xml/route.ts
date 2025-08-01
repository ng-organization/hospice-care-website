import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://www.iecommunityhospice.com'
  const currentDate = new Date().toISOString()
  
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: 'about', priority: '0.9', changefreq: 'monthly' },
    { url: 'services', priority: '0.9', changefreq: 'monthly' },
    { url: 'contact', priority: '0.8', changefreq: 'monthly' },
    { url: 'areas', priority: '0.8', changefreq: 'monthly' },
    { url: 'death-with-dignity', priority: '0.7', changefreq: 'monthly' },
    { url: 'useful-information', priority: '0.7', changefreq: 'monthly' },
  ]

  const locales = ['en', 'zh']
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticPages.map(page => 
  locales.map(locale => `  <url>
    <loc>${baseUrl}/${locale}${page.url ? '/' + page.url : ''}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${locales.map(altLocale => 
      `<xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}${page.url ? '/' + page.url : ''}" />`
    ).join('\n    ')}
  </url>`).join('\n')
).join('\n')}
  
  <!-- Special healthcare service pages -->
  <url>
    <loc>${baseUrl}/en</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en" />
    <xhtml:link rel="alternate" hreflang="zh" href="${baseUrl}/zh" />
  </url>
  
  <url>
    <loc>${baseUrl}/zh</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="zh" href="${baseUrl}/zh" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en" />
  </url>
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
    },
  })
}