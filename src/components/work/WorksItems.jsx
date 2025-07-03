import React from 'react';
import { motion } from 'framer-motion';

export default function WorksItems({ item }) {
  return (
    <motion.div
      className="work__card"
      key={item.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="work__img"
        loading="lazy"
        decoding="async"
      />
      <h3 className="work__title">{item.title}</h3>
      {item.link && (
        <a
          href={item.link}
          className="work__button"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
      )}
    </motion.div>
  );
}
