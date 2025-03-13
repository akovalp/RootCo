'use client';

import { motion } from 'framer-motion';

export function ClientFounderHero() {
  return (
    <section className="py-16 px-6 md:px-12 bg-quarter-spanish-white">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-walnut mb-6">
            Kurucularımız
          </h1>
          <p className="text-lg text-willow-grove max-w-3xl">
            Türk göçmen topluluğuna destek vermek için Root'u kuran kişilerle tanışın.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 