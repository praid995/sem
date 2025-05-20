// Schema.org structured data for SEO
export const schemaSurodini = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://surodin-event.ru/#organization",
      "name": "Семён Суродин | Ведущий мероприятий",
      "url": "https://surodin-event.ru",
      "logo": {
        "@type": "ImageObject",
        "url": "https://surodin-event.ru/logo.png",
        "width": 112,
        "height": 112
      },
      "sameAs": [
        "https://vk.com/surodin_event",
        "https://instagram.com/surodin_event",
        "https://t.me/surodin_event01"
      ]
    },
    // Person Schema
    {
      "@type": "Person",
      "@id": "https://surodin-event.ru/#person",
      "name": "Семён Суродин",
      "jobTitle": "Ведущий мероприятий",
      "worksFor": {
        "@id": "https://surodin-event.ru/#organization"
      }
    },
    // Event Service
    {
      "@type": "Service",
      "@id": "https://surodin-event.ru/#service",
      "name": "Проведение мероприятий",
      "description": "Профессиональное проведение свадеб, корпоративов, юбилеев и других торжественных мероприятий",
      "provider": {
        "@id": "https://surodin-event.ru/#person"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "RUB",
        "lowPrice": "35000",
        "highPrice": "60000"
      }
    },
    // Review aggregate
    {
      "@type": "AggregateRating",
      "@id": "https://surodin-event.ru/#aggregateRating",
      "itemReviewed": {
        "@id": "https://surodin-event.ru/#service"
      },
      "ratingValue": "4.9",
      "ratingCount": "87",
      "bestRating": "5",
      "worstRating": "1"
    }
  ]
};