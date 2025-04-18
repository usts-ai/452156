import React from 'react';
import { motion } from 'framer-motion';
import { FaComments, FaFileAlt, FaQuestionCircle, FaCalendarAlt } from 'react-icons/fa';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaComments className="text-4xl text-blue-500" />,
      title: 'Chat en Direct',
      description: 'Obtenez des réponses instantanées à toutes vos questions d\'immigration grâce à notre chatbot intelligent disponible 24/7.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <FaFileAlt className="text-4xl text-green-500" />,
      title: 'Guide d\'Immigration',
      description: 'Accédez à des ressources personnalisées et des conseils adaptés à votre situation spécifique d\'immigration.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: <FaQuestionCircle className="text-4xl text-purple-500" />,
      title: 'FAQ Intelligente',
      description: 'Explorez notre base de connaissances complète avec des réponses détaillées aux questions les plus fréquentes.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-red-500" />,
      title: 'Rendez-vous en Ligne',
      description: 'Planifiez des consultations avec des experts en immigration pour un accompagnement personnalisé.',
      color: 'from-red-400 to-red-600'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nos Services d'Assistance
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Découvrez comment notre plateforme CanadIA peut vous accompagner à chaque étape de votre parcours d'immigration au Canada.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group"
              variants={item}
            >
              <motion.div 
                className="bg-white rounded-xl shadow-xl p-6 h-full relative overflow-hidden transition-all"
                whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gray-100 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                <motion.div 
                  className="mt-6 pt-4 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <a 
                    href="#" 
                    className="text-blue-600 font-medium flex items-center group-hover:text-blue-800 transition-colors"
                  >
                    <span>En savoir plus</span>
                    <motion.svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ x: 0 }}
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
