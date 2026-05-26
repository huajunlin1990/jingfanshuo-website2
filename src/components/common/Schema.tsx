import React from 'react';
import { companyInfo } from '../../data/company';

const Schema: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyInfo.name,
    "alternateName": companyInfo.shortName,
    "url": "https://www.jingfanshuo.com",
    "logo": "https://www.jingfanshuo.com/logo.png",
    "description": companyInfo.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "沙井街道壆岗社区壆岗大道文体中心商业楼2、3栋611",
      "addressLocality": "深圳市",
      "addressRegion": "广东省",
      "postalCode": "518000",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyInfo.phone,
      "email": companyInfo.email,
      "contactType": "customer service",
      "availableLanguage": ["Chinese", "English"]
    },
    "foundingDate": companyInfo.foundedYear,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyInfo.name,
    "image": "https://www.jingfanshuo.com/og-image.jpg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "沙井街道壆岗社区壆岗大道文体中心商业楼2、3栋611",
      "addressLocality": "深圳市",
      "addressRegion": "广东省",
      "postalCode": "518000",
      "addressCountry": "CN"
    },
    "telephone": companyInfo.phone,
    "email": companyInfo.email,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.7196,
      "longitude": 113.8846
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "产品列表",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "商用塑胶地板系列",
        "description": "高品质商用塑胶地板，耐磨、防滑、环保",
        "brand": {
          "@type": "Brand",
          "name": "晶凡硕"
        },
        "category": "塑胶地板"
      },
      {
        "@type": "Product",
        "name": "运动橡胶地板",
        "description": "专业运动橡胶地板，减震效果优异",
        "brand": {
          "@type": "Brand",
          "name": "晶凡硕"
        },
        "category": "橡胶制品"
      },
      {
        "@type": "Product",
        "name": "室内装饰墙板",
        "description": "新型环保装饰墙板，安装便捷",
        "brand": {
          "@type": "Brand",
          "name": "晶凡硕"
        },
        "category": "装饰材料"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </>
  );
};

export default Schema;
