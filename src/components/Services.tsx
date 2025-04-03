import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe2, Smartphone, Server, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export const Services: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Code2 size={40} />,
      title: t('services.webdev.title'),
      description: t('services.webdev.description'),
    },
    {
      icon: <Smartphone size={40} />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
    },
    {
      icon: <Server size={40} />,
      title: t('services.backend.title'),
      description: t('services.backend.description'),
    },
    {
      icon: <Globe2 size={40} />,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
    },
    {
      icon: <Shield size={40} />,
      title: t('services.security.title'),
      description: t('services.security.description'),
    },
    {
      icon: <Palette size={40} />,
      title: t('services.ui.title'),
      description: t('services.ui.description'),
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">{t('services.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-secondary p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-secondary dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};