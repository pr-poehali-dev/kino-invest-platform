import { useEffect } from 'react';

interface ServiceData {
  name: string;
  description: string;
  url: string;
  provider: string;
  areaServed: string;
  serviceType: string;
}

interface ServiceSchemaProps {
  services: ServiceData[];
}

const ServiceSchema = ({ services }: ServiceSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "url": service.url,
          "provider": {
            "@type": "Organization",
            "name": service.provider
          },
          "areaServed": {
            "@type": "Country",
            "name": service.areaServed
          },
          "serviceType": service.serviceType
        }
      }))
    };

    const scriptId = 'service-schema';
    let scriptTag = document.getElementById(scriptId);
    
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    
    scriptTag.textContent = JSON.stringify(schema);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [services]);

  return null;
};

export default ServiceSchema;
