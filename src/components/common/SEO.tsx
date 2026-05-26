import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = '塑胶地板,橡胶制品,装饰材料,深圳建材,晶凡硕',
  author = '深圳市晶凡硕新材料科技有限公司',
  ogImage = '/og-image.jpg',
  canonical,
}) => {
  const fullTitle = `${title} | 深圳市晶凡硕新材料科技有限公司`;
  const baseUrl = 'https://www.jingfanshuo.com';
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="晶凡硕新材料科技" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      <html lang="zh-CN" />
    </Helmet>
  );
};

export default SEO;
