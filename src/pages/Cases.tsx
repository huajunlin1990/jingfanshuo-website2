import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/common/Section';
import { cases } from '../data/cases';
import { MapPin, Calendar } from 'lucide-react';
import SEO from '../components/common/SEO';
import LazyImage from '../components/common/LazyImage';

const Cases: React.FC = () => {
  return (
    <>
      <SEO
        title="工程案例"
        description="晶凡硕工程案例展示，包括深圳宝安国际机场、北京大学深圳医院、深圳万象城等多个知名项目，专业品质值得信赖。"
        canonical="/cases"
      />

      <section className="relative bg-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            工程案例
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg"
          >
            精选项目展示，见证品质实力
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={item.images[0]}
                  alt={item.title}
                  aspectRatio="16/9"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.year}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">使用产品</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.products.map((productId) => (
                      <span key={productId} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        产品 {productId}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Cases;
