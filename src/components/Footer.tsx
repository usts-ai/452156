import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialIcons = [
    { icon: <FaFacebook />, link: '#', color: 'hover:text-blue-600' },
    { icon: <FaTwitter />, link: '#', color: 'hover:text-blue-400' },
    { icon: <FaInstagram />, link: '#', color: 'hover:text-pink-500' },
    { icon: <FaYoutube />, link: '#', color: 'hover:text-red-600' },
    { icon: <FaLinkedin />, link: '#', color: 'hover:text-blue-700' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Chat en direct', href: '#' },
        { name: 'Guide d\'immigration', href: '#' },
        { name: 'FAQ intelligente', href: '#' },
        { name: 'Rendez-vous en ligne', href: '#' },
      ],
    },
    {
      title: 'Information',
      links: [
        { name: 'À propos de nous', href: '#' },
        { name: 'Notre mission', href: '#' },
        { name: 'Témoignages', href: '#' },
        { name: 'Partenaires', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Centre d\'aide', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Politique de confidentialité', href: '#' },
        { name: 'Conditions d\'utilisation', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo et infos */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-400 font-bold text-3xl mr-2">CanadIA</div>
              <span className="text-white font-light">Assistant d'immigration</span>
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Votre compagnon intelligent pour vous guider à travers le processus d'immigration au Canada. Nous vous aidons à naviguer les démarches administratives avec facilité.
            </motion.p>
            <div className="space-y-2 text-gray-300">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FaMapMarkerAlt className="mr-2 text-blue-400" />
                <span>123 Rue de l'Innovation, Montréal, QC</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FaPhone className="mr-2 text-blue-400" />
                <span>+1 (514) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FaEnvelope className="mr-2 text-blue-400" />
                <span>contact@canadia.ca</span>
              </motion.div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <motion.div 
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <motion.a 
                      href={link.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.hr 
          className="my-8 border-blue-700"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-300 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} CanadIA. Tous droits réservés.
          </motion.p>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className={`text-gray-300 ${social.color} text-xl transition-colors`}
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
