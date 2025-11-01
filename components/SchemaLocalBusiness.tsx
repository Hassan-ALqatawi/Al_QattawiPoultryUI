export default function SchemaLocalBusiness() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "القطاوي للدواجن",
    "image": "https://alqattawi-poultry.com/images/logo.png",
    "@id": "https://alqattawi-poultry.vercel.app/",
    "url": "https://alqattawi-poultry.vercel.app/",
    "telephone": "+201062790104", // ضع رقم الهاتف الحقيقي هنا
    "priceRange": "متوسط",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ابوحماد، الشرقية",
      "addressLocality": "ابوحماد",
      "addressRegion": "الشرقية",
      "addressCountry": "EG"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/alqattawi.poultry",
      "https://wa.me/201062790104"
    ],
    "description":
      "القطاوي للدواجن متخصص في بيع الكتاكيت والبط وتوفير الأدوية والتحصينات البيطرية وخدمات الدعم الفني للمزارع."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
