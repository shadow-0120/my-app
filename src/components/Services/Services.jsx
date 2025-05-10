import React, { useState } from 'react';
import './services.css';
import { motion,  AnimatePresence } from 'framer-motion';

export default function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  

  return (
    <section className="services section" id="services">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="services__header"
      >
        <motion.h2 className="section__title" variants={item}>
          Services
        </motion.h2>
        <motion.span className="section__subtitle" variants={item}>
          What I offer
        </motion.span>
      </motion.div>

      <motion.div
        className="services__container container grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Service Card */}
        {[{
          id: 1,
          icon: "uil uil-web-grid",
          title: "Front-End Development",
          modalTitle: "Front-End",
          description: "I specialize in building beautiful, fast, and user-friendly websites using modern front-end technologies. With over 4 years of experience, I’ve worked on projects ranging from landing pages to full business websites.",
          items: [
            "Fully responsive designs for all screen sizes.",
            "Built with the latest web technologies (HTML5, CSS3, JavaScript).",
            "Smooth and intuitive user experiences.",
            "Fast-loading and optimized performance.",
            "Clean, well-structured, and maintainable code."
          ]
        }, {
          id: 2,
          icon: "uil uil-arrow",
          title: "Thumbnail Design",
          modalTitle: "Visual Designer",
          description: "Since 2023 I’ve been creating high-performing thumbnails for YouTubers and content creators. My designs have helped increase viewer engagement and channel growth across multiple niches.",
          items: [
            "Eye-catching designs that boost click-through rates.",
            "Consistent colors and fonts matching your brand.",
            "Clear and engaging message at first glance.",
            "High-quality delivery with fast turnaround.",
            "Unlimited revisions until you're 100% satisfied."
          ]
        }, {
          id: 3,
          icon: "uil uil-edit",
          title: "UI/UX Designer",
          modalTitle: "UI/UX Design",
          description: "Service with more than 3 years of experience, providing quality work to clients and companies.",
          items: [
            "I develop the user interface.",
            "Web page development.",
            "I create UX element interactions.",
            "I position your company brand.",
            "Design and mockups of products for companies."
          ]
        }].map((service) => (
          <motion.div key={service.id} className="services__content" variants={item}>
            <div>
              <i className={`${service.icon} services__icon`}></i>
              <h3 className="services__title">
                {service.title.split(" ").slice(0, 1).join(" ")} <br />
                {service.title.split(" ").slice(1).join(" ")}
              </h3>
            </div>
            <motion.span
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="services__button"
              onClick={() => toggleTab(service.id)}
            >
              View More <i className="uil uil-arrow-right services__button-icon"></i>
            </motion.span>

            <AnimatePresence>
              {toggleState === service.id && (
                <motion.div
                  className="services__modal active-modal"
                //   variants={modal}
                //   initial="hidden"
                //   animate="visible"
                //   exit="exit"
                >
                  <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">{service.modalTitle}</h3>
                    <p className="services__modal-description">{service.description}</p>
                    <ul className="services__modal-services grid">
                      {service.items.map((text, index) => (
                        <motion.li
                          className="services__modal-service"
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <i className="uil uil-check-circle services__modal-icon"></i>
                          <p className="services__modal-info">{text}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
