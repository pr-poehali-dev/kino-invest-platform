import { useEffect } from 'react';

const LocalBusinessSchema = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Инженерный центр ПУМОРИ',
      alternateName: 'Корпорация Пумори',
      description: 'Ремонт, диагностика и техническое обслуживание станков с ЧПУ. Выезд инженера от 2 часов. Работаем по всей России.',
      url: 'https://pumori.ru',
      telephone: '+7-343-287-08-08',
      email: 'pii@pumori.ru',
      foundingDate: '1990',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ул. Монтёрская, 3Д',
        addressLocality: 'Екатеринбург',
        addressRegion: 'Свердловская область',
        addressCountry: 'RU',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '56.8519',
        longitude: '60.6122',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+7-343-287-08-08',
          contactType: 'customer service',
          availableLanguage: 'Russian',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        },
        {
          '@type': 'ContactPoint',
          telephone: '+7-343-287-08-08',
          contactType: 'emergency',
          contactOption: 'TollFree',
          availableLanguage: 'Russian',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Услуги по ремонту станков с ЧПУ',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Диагностика станков с ЧПУ' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ремонт системы ЧПУ FANUC, Siemens, Mitsubishi' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ремонт шпинделя токарного и фрезерного станка' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Замена и ремонт ШВП' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Плановое техническое обслуживание станков' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Поставка запчастей для станков с ЧПУ' } },
        ],
      },
      areaServed: {
        '@type': 'Country',
        name: 'Россия',
      },
      sameAs: [
        'https://t.me/pumori360_bot',
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'local-business-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById('local-business-schema')?.remove();
    };
  }, []);

  return null;
};

export default LocalBusinessSchema;
