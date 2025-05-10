import React from 'react';
import { motion } from 'framer-motion';
import './header.css';

export default function Header() {
    const [Toggle, showMenu] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);

    // تغيير المود بإضافة أو إزالة الكلاس
    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="index.html" className='nav_logo'>mahdi.</a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link">
                                <i className="uil uil-estate nav_icon "></i>Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav_icon"></i>About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#services" className="nav_link">
                                <i className="uil uil-briefcase-alt nav_icon"></i>Services
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio" className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i>Portfolio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-message nav_icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>

                {/* زر الوضع الليلي خلف "Contact" */}
                <motion.div
                    className="dark-toggle"
                    initial={{ rotate: 0 }}
                    whileTap={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? (
                        <i className="uil uil-sun dark-icon"></i>
                    ) : (
                        <i className="uil uil-moon dark-icon"></i>
                    )}
                </motion.div>
            </nav>
        </header>
    );
}
