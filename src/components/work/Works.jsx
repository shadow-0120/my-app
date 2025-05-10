import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorksItems from './WorksItems';
import { motion, AnimatePresence } from 'framer-motion';

export default function Works() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => project.category === item.name);
      setProjects(newProjects);
    }
  }, [item]);

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <motion.span
            className={`work__item ${active === index ? 'active-work' : ''}`}
            key={index}
            onClick={() => {
              setItem({ name: navItem.name });
              setActive(index);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {navItem.name}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="work__container container grid"
        layout
      >
        <AnimatePresence mode="wait">
          {projects.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <WorksItems item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
