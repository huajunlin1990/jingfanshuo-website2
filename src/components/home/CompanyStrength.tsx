import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../../components/common/Section';
import { strengthData } from '../../data/company';
import { History, Building2, Users, Globe } from 'lucide-react';

const icons = {
  history: History,
  projects: Building2,
  team: Users,
  network: Globe,
};

const CompanyStrength: React.FC = () => {
  return (
    <Section bg="light-gray">
      <SectionTitle
        subtitle="企业实力"
        title="专业铸就品质"
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
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon className="w-8 h-8 text-accent" />
              </div>
              
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">
                  {item.number}
                </span>
                <span className="text-2xl font-bold text-accent">
                  {item.suffix}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default CompanyStrength;
