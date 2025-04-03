import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialIcons = [
    { Icon: Github, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Instagram, href: "#" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={container}
      className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            variants={item}
            className="col-span-1 md:col-span-2"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary mb-4"
            >
              GianDev
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex space-x-4"
            >
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  variants={item}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="text-lg font-semibold text-secondary dark:text-white mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {['services', 'about', 'portfolio', 'contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={`#${item}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  >
                    {t(`nav.${item}`)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="text-lg font-semibold text-secondary dark:text-white mb-4">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2">
              {['webdev', 'mobile', 'cloud', 'ui'].map((service) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  >
                    {t(`services.${service}.title`)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              variants={item}
              className="text-gray-600 dark:text-gray-300 text-sm"
            >
              © {currentYear} GianDev. {t('footer.rights')}
            </motion.p>
            <motion.div
              variants={container}
              className="flex space-x-6 mt-4 md:mt-0"
            >
              {['privacy', 'terms'].map((item) => (
                <motion.a
                  key={item}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                  {t(`footer.${item}`)}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};