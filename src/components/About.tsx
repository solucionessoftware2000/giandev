import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export const About: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Users size={32} />, value: '100+', label: t('about.stats.clients') },
    { icon: <Code size={32} />, value: '500+', label: t('about.stats.projects') },
    { icon: <Award size={32} />, value: '10+', label: t('about.stats.years') },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-6">{t('about.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {t('about.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-secondary dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};