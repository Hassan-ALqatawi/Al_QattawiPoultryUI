// components/SchemaSite.tsx
export default function SchemaSite() {
  const baseUrl = "https://alqattawi-poultry.com"; // غيّر إلى الدومين الحقيقي إن اختلف

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "القطاوي للدواجن",
        "description": "القطاوي للدواجن — أسعار الكتاكيت اليوم، خدمات بيطرية، دليل تربية، وتحليلات سوق الكتاكيت في مصر.",
        "inLanguage": "ar",
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumbs`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": `${baseUrl}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "دليل التربية",
            "item": `${baseUrl}/breeding-guide`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "من نحن",
            "item": `${baseUrl}/about`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "تواصل معنا",
            "item": `${baseUrl}/contact`
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "القطاوي للدواجن",
        "url": baseUrl,
        "logo": `${baseUrl}/images/logo.png`
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
