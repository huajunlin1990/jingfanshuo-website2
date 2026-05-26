import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { products, categories } from '../data/products';
import SEO from '../components/common/SEO';
import LazyImage from '../components/common/LazyImage';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <SEO
        title="产品中心"
        description="晶凡硕产品中心提供塑胶地板、橡胶制品、装饰材料等多种高品质装饰材料，满足商场、医院、学校等不同场所的需求。"
        canonical="/products"
      />

      <section className="relative bg-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            产品中心
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg"
          >
            专业装饰材料解决方案，为您提供优质产品
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-accent text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            全部产品
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.article
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={product.images[0]}
                  alt={product.name}
                  aspectRatio="16/9"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent/90 text-white rounded-full text-sm font-medium">
                    {product.categoryName}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">产品规格</h4>
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-500">
                          {key === 'wearLayer' ? '耐磨层' :
                           key === 'hardness' ? '硬度' :
                           key === 'size' ? '尺寸' :
                           key === 'certification' ? '认证' : key}
                        </span>
                        <span className="text-gray-700 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="w-full" href="/contact">
                    咨询报价
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </>
  );
};

export default Products;
