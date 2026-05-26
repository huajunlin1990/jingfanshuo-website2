import React from 'react';
import Hero from '../components/home/Hero';
import ProductCategories from '../components/home/ProductCategories';
import CompanyStrength from '../components/home/CompanyStrength';
import CaseGallery from '../components/home/CaseGallery';
import NewsSection from '../components/home/NewsSection';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="首页"
        description="深圳市晶凡硕新材料科技有限公司专业从事塑胶地板、橡胶制品、建筑装饰材料销售，为客户提供高品质的装饰材料解决方案。"
        canonical="/"
      />
      <Schema />
      <Hero />
      <ProductCategories />
      <CompanyStrength />
      <CaseGallery />
      <NewsSection />
    </>
  );
};

export default Home;
