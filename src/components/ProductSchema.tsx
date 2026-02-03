import { useEffect } from 'react';

interface ProductData {
  name: string;
  description: string;
  image: string;
  brand: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
  };
}

interface ProductSchemaProps {
  product: ProductData;
}

const ProductSchema = ({ product }: ProductSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "image": product.image,
      "brand": {
        "@type": "Brand",
        "name": product.brand
      },
      "offers": {
        "@type": "Offer",
        "price": product.offers.price,
        "priceCurrency": product.offers.priceCurrency,
        "availability": product.offers.availability,
        "url": product.offers.url,
        "seller": {
          "@type": "Organization",
          "name": "Инженерный центр Пумори"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "89"
      }
    };

    const scriptId = 'product-schema';
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
  }, [product]);

  return null;
};

export default ProductSchema;
