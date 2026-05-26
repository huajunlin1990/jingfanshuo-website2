import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../../components/common/Section';
import { Button } from '../../components/common/Button';
import { cases } from '../../data/cases';
import LazyImage from '../../components/common/LazyImage';

const CaseGallery: React.FC = () => {
  const featuredCases = cases.slice(0, 4);

  return (
    <Section>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <SectionTitle
          subtitle="工程案例"
          title="精选项目展示"
          align="left"
        />
        <Button variant="outline" href="/cases">
          查看全部案例
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredCases.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Link
              to="/cases"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
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

              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>{item.location}</span>
                <span>{item.year}</span>
              </div>

              <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 line-clamp-2">
                {item.description}
              </p>
            </Link>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default CaseGallery;
