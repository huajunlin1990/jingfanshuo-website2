import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/common/Section';
import { companyInfo, strengthData } from '../data/company';
import { History, Building2, Users, Globe, Target, Eye, Award } from 'lucide-react';
import SEO from '../components/common/SEO';
import LazyImage from '../components/common/LazyImage';

const icons = {
  history: History,
  projects: Building2,
  team: Users,
  network: Globe,
};

const milestones = [
  { year: '2018', title: '公司成立', description: '深圳市晶凡硕新材料科技有限公司正式注册成立' },
  { year: '2019', title: '业务扩展', description: '成功开拓华南市场，与多家知名地产商建立合作' },
  { year: '2020', title: '产品升级', description: '推出全新环保系列产品，获得多项行业认证' },
  { year: '2021', title: '技术创新', description: '建立研发中心，专注于新材料技术研发' },
  { year: '2022', title: '全国布局', description: '服务网络覆盖全国20+主要城市' },
  { year: '2024', title: '品牌升级', description: '荣获中国建材行业百强企业称号' },
];

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="关于我们"
        description="了解深圳市晶凡硕新材料科技有限公司的企业背景、发展历程、企业使命与愿景。我们是一家专业从事塑胶地板、橡胶制品、建筑装饰材料销售的企业。"
        canonical="/about"
      />

      <section className="relative bg-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            关于我们
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg"
          >
            了解晶凡硕，携手共创未来
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LazyImage
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
              alt="公司办公环境"
              aspectRatio="4/3"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              subtitle="公司简介"
              title="专业创造价值"
              align="left"
            />
            <p className="text-gray-600 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              我们始终秉持"品质第一、客户至上"的经营理念，不断引进先进技术和设备，
              致力于为客户提供最优质的装饰材料解决方案。凭借卓越的产品质量和完善的服务体系，
              我们已成为国内领先的新型装饰材料供应商之一。
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">企业使命</h4>
                  <p className="text-gray-600 text-sm">{companyInfo.mission}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">企业愿景</h4>
                  <p className="text-gray-600 text-sm">{companyInfo.vision}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section bg="light-gray">
        <SectionTitle
          subtitle="企业实力"
          title="我们的优势"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengthData.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">{item.number}</span>
                  <span className="text-2xl font-bold text-accent">{item.suffix}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionTitle
          subtitle="发展历程"
          title="一路走来"
        />
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 md:pr-12 md:pl-0 pl-0 mb-4 md:mb-0">
                  <div className="bg-white rounded-xl p-6 shadow-lg ml-8 md:ml-0">
                    <span className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-bold mb-3">
                      {milestone.year}
                    </span>
                    <h4 className="text-xl font-semibold text-primary mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex w-12 h-12 bg-accent rounded-full items-center justify-center z-10">
                  <Award className="w-6 h-6 text-white" />
                </div>

                <div className="md:w-1/2 md:pl-12" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
