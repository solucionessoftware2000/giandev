import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formFields = [
    { name: 'name', type: 'text', label: t('contact.form.name') },
    { name: 'email', type: 'email', label: t('contact.form.email') },
    { name: 'message', type: 'textarea', label: t('contact.form.message') },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-secondary transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">{t('contact.title')}</h2>
            <p className="text-gray-600 dark:text-gray-300">{t('contact.subtitle')}</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            {formFields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-secondary dark:text-white mb-2"
                >
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-secondary dark:text-white"
                    required
                  />
                ) : (
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-secondary dark:text-white"
                    required
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>{t('contact.form.submit')}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Send size={20} />
              </motion.div>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};