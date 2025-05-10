import React, { useEffect, useRef } from 'react';
import './home.css';
import Social from './social';
import Data from './data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollDown from './scrollDown';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: -400, opacity: 0, rotate: 5, filter: 'blur(30px)' },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div ref={imgRef} className="home_img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}
