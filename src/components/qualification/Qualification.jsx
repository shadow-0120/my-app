import React, { useState } from 'react';
import './qualification.css';
import { motion } from 'framer-motion';

export default function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* ===== EDUCATION ===== */}
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            {[ 
              {
                title: "Economic Digital",
                subtitle: "Kolea - Institute",
                date: "2024 - Present"
              },
              {
                title: "W3School Learning",
                subtitle: "Algeria - Institute",
                date: "2019 - Present"
              },
              {
                title: "Computer Science",
                subtitle: "CS50",
                date: "2025"
              },
              {
                title: "Content Creator",
                subtitle: "Algeria - Institute",
                date: "2024 - Present"
              }
            ].map((item, i) => (
              <motion.div
                className="qualification__data"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                custom={i}
                key={i}
              >
                {i % 2 === 0 ? (
                  <>
                    <div>
                      <h3 className="qulification__title">{item.title}</h3>
                      <span className="qualification__subtitle">{item.subtitle}</span>
                      <div className="qulification__calender">
                        <i className="uil uil-calendar-alt"></i> {item.date}
                      </div>
                    </div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification-line"></span>
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification-line"></span>
                    </div>
                    <div>
                      <h3 className="qulification__title">{item.title}</h3>
                      <span className="qualification__subtitle">{item.subtitle}</span>
                      <div className="qulification__calender">
                        <i className="uil uil-calendar-alt"></i> {item.date}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* ===== EXPERIENCE ===== */}
          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            {[ 
              {
                title: "Web Design",
                subtitle: "Algeria - Institute",
                date: "2022 - Present"
              },
              {
                title: "Web Development",
                subtitle: "Algeria - Institute",
                date: "2023 - Present"
              },
              {
                title: "Thumbnails Design",
                subtitle: "Algeria - Institute",
                date: "2021 - Present"
              }
            ].map((item, i) => (
              <motion.div
                className="qualification__data"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                custom={i}
                key={i}
              >
                {i % 2 === 0 ? (
                  <>
                    <div>
                      <h3 className="qulification__title">{item.title}</h3>
                      <span className="qualification__subtitle">{item.subtitle}</span>
                      <div className="qulification__calender">
                        <i className="uil uil-calendar-alt"></i> {item.date}
                      </div>
                    </div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification-line"></span>
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification-line"></span>
                    </div>
                    <div>
                      <h3 className="qulification__title">{item.title}</h3>
                      <span className="qualification__subtitle">{item.subtitle}</span>
                      <div className="qulification__calender">
                        <i className="uil uil-calendar-alt"></i> {item.date}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
