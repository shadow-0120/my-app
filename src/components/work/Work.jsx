import React from 'react';
import './work.css';
import Works from './Works';
import { motion } from 'framer-motion';

export default function Work() {
  return (
    <motion.section
      className="work section"
      id="portfolio"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Portfolio
      </motion.h2>

      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Most Recent Works
      </motion.span>

      <Works />
    </motion.section>
  );
}
