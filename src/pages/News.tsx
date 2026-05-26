import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '../components/common/Section';
import { SectionTitle } from '../components/common/Section';
import { news } from '../data/news';
import { Calendar, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import LazyImage from '../components/common/LazyImage';

const News: React.FC = () => {
  const companyNews = news.filter(n => n.category === 'company');
  const industryNews = news.filter(n => n.category === 'industry');

  return (
    <>
      <SEO
        title="新闻资讯"
        description="晶凡硕新闻资讯，了解最新公司动态和行业资讯，包括产品发布、企业荣誉、市场趋势等内容。"
        canonical="/news"
      />

      <section className="relative bg-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            新闻资讯
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg"
          >
            了解最新行业动态与公司新闻
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="mb-16">
          <SectionTitle
            subtitle="公司新闻"
            title="晶凡硕动态"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyNews.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to="#" className="group block">
                  <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <LazyImage
                        src={item.coverImage}
                        alt={item.title}
                        aspectRatio="4/3"
                      />
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col justify-center">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.date}
                      </div>
                      <h2 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors mb-3">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-3 mb-4">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                        阅读全文
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle
            subtitle="行业资讯"
            title="市场前沿"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryNews.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <Link to="#" className="block">
                  <div className="relative overflow-hidden">
                    <LazyImage
                      src={item.coverImage}
                      alt={item.title}
                      aspectRatio="16/9"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <h2 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors mb-3 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default News;
