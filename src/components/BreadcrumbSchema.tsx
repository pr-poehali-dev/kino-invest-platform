import { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    const scriptId = 'breadcrumb-schema';
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
  }, [items]);

  return null;
};

export default BreadcrumbSchema;
