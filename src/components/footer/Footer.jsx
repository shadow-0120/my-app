import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className='footer__title'>mahdi.</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonial" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://github.com/shadow-0120" className="footer__social-link" target="_blank"><i class="bx bxl-github"></i></a>
                <a href="https://www.behance.net/gallery/223344939/Thumbnails-portfolio" className="footer__social-link" target="_blank"><i class="bx bxl-behance"></i></a>
                <a href="https://www.instagram.com/koussai.dev?igsh=MW9teXR6a2hldWN2Nw==" className="footer__social-link" target="_blank"><i class="bx bxl-instagram"></i></a>
            </div>
            <span className="footer__copy">&#169; Koussai.dev All rigths reserved</span>
        </div>
    </footer>
  )
}
