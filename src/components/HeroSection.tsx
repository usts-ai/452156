import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (backgroundRef.current) {
      const moveBackground = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gsap.to(backgroundRef.current, {
          backgroundPosition: `${x * 10}% ${y * 10}%`,
          duration: 1.5,
          ease: 'power1.out'
        });
      };
      
      window.addEventListener('mousemove', moveBackground);
      
      return () => {
        window.removeEventListener('mousemove', moveBackground);
      };
    }
  }, []);

  return (
    <div 
      ref={backgroundRef}
      className="min-h-screen bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 flex items-center relative overflow-hidden"
      style={{ 
        backgroundSize: '120% 120%',
        backgroundPosition: '50% 50%'
      }}
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-20"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between z-10">
        <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block">Votre Avenir au Canada</span>
            <span className="block text-blue-300">Commence par une Conversation</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CanadIA simplifie vos démarches d'immigration grâce à notre assistant intelligent qui répond à toutes vos questions en temps réel.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(37, 99, 235, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Essayer le chatbot
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-full text-lg font-semibold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              En savoir plus
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-full max-w-lg mx-auto">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl opacity-30 blur-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-white">CanadIA</h3>
                    <p className="text-xs text-blue-200">Assistant virtuel</p>
                  </div>
                </div>
                <div className="text-blue-200 text-sm">En ligne</div>
              </div>
              
              <div className="space-y-4 mb-4">
                <motion.div 
                  className="bg-blue-600 text-white p-3 rounded-lg rounded-bl-none max-w-xs"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Bonjour! Je suis CanadIA, votre assistant d'immigration canadienne. Comment puis-je vous aider aujourd'hui?
                </motion.div>
                
                <motion.div 
                  className="bg-white/10 p-3 rounded-lg rounded-br-none max-w-xs ml-auto text-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  Je souhaite immigrer au Canada en tant que travailleur qualifié. Par où dois-je commencer?
                </motion.div>
                
                <motion.div 
                  className="bg-blue-600 text-white p-3 rounded-lg rounded-bl-none max-w-xs"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  Excellent choix! Pour les travailleurs qualifiés, je vous recommande d'explorer le système Entrée express. Souhaitez-vous que je vous guide à travers les étapes?
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 }}
                  className="flex justify-center"
                >
                  <div className="flex space-x-2">
                    <motion.button 
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Oui, guidez-moi
                    </motion.button>
                    <motion.button 
                      className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Plus d'options
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="border-t border-white/20 pt-4 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
              >
                <input 
                  type="text" 
                  placeholder="Posez votre question..." 
                  className="bg-transparent border-none w-full text-white placeholder-blue-200 focus:outline-none text-sm"
                />
                <motion.button 
                  className="ml-2 w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
