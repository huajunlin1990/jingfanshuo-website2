import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../../components/common/Section';
import { categories, products } from '../../data/products';
import { ArrowRight } from 'lucide-react';
import LazyImage from '../../components/common/LazyImage';

const categoryImages: Record<string, string> = {
  'vinyl-floor': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  'rubber': 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
  'decoration': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
};

const ProductCategories: React.FC = () => {
  return (
    <Section>
      <SectionTitle
        subtitle="产品中心"
        title="专业装饰材料解决方案"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => {
          const categoryProducts = products.filter(p => p.category === category.id);

          return (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                to="/products"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <LazyImage
                    src={categoryImages[category.id]}
                    alt={category.name}
                    aspectRatio="16/9"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {categoryProducts.length} 款产品
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {categoryProducts.slice(0, 3).map((product) => (
                    <div key={product.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700 group-hover:text-accent transition-colors">
                        {product.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-accent font-medium group-hover:gap-3 transition-all">
                  查看全部
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
};

export default ProductCategories;
