import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Tremblay',
    role: 'Résidente permanente',
    content: 'Grâce à CanadIA, j\'ai pu naviguer dans le processus complexe d\'immigration avec une facilité que je n\'aurais jamais imaginée. Le chatbot m\'a guidé pas à pas et a répondu instantanément à toutes mes questions.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Antoine Dubois',
    role: 'Étudiant international',
    content: 'En tant qu\'étudiant, je ne savais pas par où commencer pour mon permis d\'études. L\'assistant CanadIA m\'a fourni toutes les informations nécessaires et m\'a aidé à préparer ma demande sans stress.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Émilie Bouchard',
    role: 'Travailleuse qualifiée',
    content: 'Le processus d\'Entrée express semblait si compliqué jusqu\'à ce que j\'utilise CanadIA. L\'assistant virtuel m\'a aidé à comprendre mon éligibilité et à préparer tous les documents nécessaires. Je suis maintenant au Canada!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 4,
    name: 'Jean-Pierre Moreau',
    role: 'Regroupement familial',
    content: 'Parrainer ma conjointe était un processus stressant, mais CanadIA a rendu chaque étape claire et compréhensible. Nous avons pu soumettre notre demande avec confiance et elle a été approuvée rapidement.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleNext = () => {
    setIsAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-white">
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
            Témoignages de Succès
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
            Découvrez comment CanadIA a transformé l'expérience d'immigration de ces personnes qui ont réalisé leur rêve canadien.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden relative">
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-0 left-0 w-20 h-20 bg-blue-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 opacity-10 rounded-full translate-x-1/2 translate-y-1/2"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            <div className="p-8 md:p-12">
              <div className="h-[300px] md:h-[250px] relative flex items-center justify-center">
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 }
                    }}
                    className="absolute w-full"
                  >
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <motion.div 
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto md:mx-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <img 
                            src={testimonials[currentIndex].image} 
                            alt={testimonials[currentIndex].name} 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>
                      <div>
                        <svg 
                          className="w-12 h-12 text-blue-300 mb-4 mx-auto md:mx-0" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-gray-700 text-lg mb-4 italic">
                          {testimonials[currentIndex].content}
                        </p>
                        <div>
                          <h4 className="text-gray-900 font-bold text-xl">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-blue-600">{testimonials[currentIndex].role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-center md:justify-end items-center mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setIsAutoplay(false);
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`w-3 h-3 rounded-full ${
                        index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                      }`}
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
                <div className="ml-6 flex space-x-2">
                  <motion.button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    whileHover={{ scale: 1.1, backgroundColor: "#EFF6FF", borderColor: "#3B82F6", color: "#3B82F6" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    whileHover={{ scale: 1.1, backgroundColor: "#EFF6FF", borderColor: "#3B82F6", color: "#3B82F6" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
