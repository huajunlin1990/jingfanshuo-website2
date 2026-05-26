import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../../components/common/Section';
import { Button } from '../../components/common/Button';
import { news } from '../../data/news';
import { Calendar } from 'lucide-react';
import LazyImage from '../../components/common/LazyImage';

const NewsSection: React.FC = () => {
  const latestNews = news.slice(0, 3);

  return (
    <Section bg="light-gray">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <SectionTitle
          subtitle="新闻资讯"
          title="行业动态"
          align="left"
        />
        <Button variant="outline" href="/news">
          查看全部新闻
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestNews.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link to="/news" className="group">
              <div className="relative overflow-hidden">
                <LazyImage
                  src={item.coverImage}
                  alt={item.title}
                  aspectRatio="16/9"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === 'company'
                      ? 'bg-accent text-white'
                      : 'bg-primary text-white'
                  }`}>
                    {item.category === 'company' ? '公司新闻' : '行业资讯'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>

                <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-accent font-medium text-sm group-hover:gap-2 transition-all">
                    阅读全文 →
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default NewsSection;
