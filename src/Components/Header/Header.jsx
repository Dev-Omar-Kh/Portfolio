import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from "react-scroll";

import headerCSS from './header.module.css';

import logoImg from '../../assets/Images/logo.png';
import { BiCategory, BiHeadphone, BiInfoCircle } from 'react-icons/bi';
import TrBtn from '../Translation-Button/TrBtn';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack, IoIosArrowForward, IoIosGlobe } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import Animations from '../../Animations/Animations';
import Flag from 'react-world-flags';
import { VscTools } from 'react-icons/vsc';
import { LiaCertificateSolid } from 'react-icons/lia';

export default function Header() {

    const {t, i18n} = useTranslation();

    // ====== nav-for-phone ====== //

    const hideNavBar = () => {

        const navPh = document.getElementById('nav_ph');
        const navBar = document.getElementById('navBar');

        navPh.classList.toggle(headerCSS.change);
        navBar.classList.toggle(headerCSS.display_nav);

    };

    // ====== language-droplist ====== //

    const [displayList, setDisplayList] = useState(false);

    // ====== change-language ====== //

    const changeLanguage = (lang) => {

        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
        setDisplayList(false);

    };

    // ====== auto-active-link ====== //

    const location = useLocation();
    const [activeSection, setActiveSection] = useState(localStorage.getItem("activeSection") || "about");

    useEffect(() => {

        const savedSection = localStorage.getItem("activeSection") || "about";
        setActiveSection(savedSection);

        setTimeout(() => {

            scroller.scrollTo(savedSection, {
                duration: 0,
                smooth: false,
                offset: -300,
            });

        }, 100);

    }, [location.pathname]);

    const handleSetActive = (to) => {
        setActiveSection(to);
        localStorage.setItem("activeSection", to);
    };

    return <React.Fragment>

        <header className={headerCSS.container}>

            <Link to={'/'} className={headerCSS.logo}>
                <img src={logoImg} alt="logoImage" />
            </Link>

            <div id='nav_ph' onClick={hideNavBar} className={headerCSS.burger_cont}>
                <div className={`${headerCSS.burger} ${headerCSS.burger_1}`}></div>
                <div className={`${headerCSS.burger} ${headerCSS.burger_2}`}></div>
                <div className={`${headerCSS.burger} ${headerCSS.burger_3}`}></div>
            </div>

            <nav id='navBar' className={headerCSS.nav}>

                <ul>

                    <li>
                        <ScrollLink 
                            to="about" spy={true} smooth={true} duration={300} 
                            offset={-300} onSetActive={handleSetActive}
                            onClick={hideNavBar} 
                            className={activeSection === "about" ? 'nav_link active' : 'nav_link'}
                        >
                            <BiInfoCircle />
                            {t('aboutWord')}
                        </ScrollLink>
                    </li>

                    <li>
                        <ScrollLink 
                            to="tech" spy={true} smooth={true} duration={300} 
                            offset={-300} onSetActive={handleSetActive}
                            onClick={hideNavBar} className={'nav_link'}
                        >
                            <VscTools />
                            {t('techWord')}
                        </ScrollLink>
                    </li>

                    <li>
                        <ScrollLink 
                            to="projects" spy={true} smooth={true} duration={300} 
                            offset={-300} onSetActive={handleSetActive}
                            onClick={hideNavBar} className={'nav_link'}
                        >
                            <BiCategory />
                            {t('workWord')}
                        </ScrollLink>
                    </li>

                    <li>
                        <ScrollLink 
                            to="certs" spy={true} smooth={true} duration={300} 
                            offset={-300} onSetActive={handleSetActive}
                            onClick={hideNavBar} className={'nav_link'}
                        >
                            <LiaCertificateSolid />
                            {t('certificationsWord')}
                        </ScrollLink>
                    </li>

                    <li>
                        <ScrollLink 
                            to="contact" spy={true} smooth={true} duration={300} 
                            offset={-300} onSetActive={handleSetActive}
                            onClick={hideNavBar} className={'nav_link'}
                        >
                            <BiHeadphone />
                            {t('contactWord')}
                        </ScrollLink>
                    </li>

                    <li className={headerCSS.language_on_nave}>

                        <button 
                            onClick={() => setDisplayList(prev => !prev)} 
                            className={headerCSS.nav_btn} 
                        >
                            <div className={headerCSS.btn_l_side}>
                                <IoIosGlobe />
                                <p>{t('languageWord')}</p>
                            </div>
                            {i18n.language === 'en' ? 
                                <div style={{rotate: displayList ? '90deg' : '0deg'}} className={headerCSS.arrowList}>
                                    <IoIosArrowForward />
                                </div> :
                                <div style={{rotate: displayList ? '-90deg' : '0deg'}} className={headerCSS.arrowList}>
                                    <IoIosArrowBack />
                                </div>
                            }
                        </button>

                        <AnimatePresence>

                            {displayList && <motion.ul 
                                onClick={hideNavBar}
                                variants={Animations.showListVariants} initial='hidden' animate='visible' exit={'hidden'} 
                                className={headerCSS.link_det}
                            >

                                <li
                                    className={i18n.language === 'en' ? '' : headerCSS.active_lang} 
                                    onClick={() => changeLanguage('ar')}
                                >
                                    <Flag code="eg" />
                                    <p>{t('arabicWord')}</p>
                                </li>

                                <li 
                                    className={i18n.language === 'ar' ? '' : headerCSS.active_lang} 
                                    onClick={() => changeLanguage('en')}
                                >
                                    <Flag code="us" />
                                    <p>{t('englishWord')}</p>
                                </li>

                            </motion.ul>}

                        </AnimatePresence>

                    </li>

                </ul>

            </nav>

            <div className={headerCSS.tr_cont}>
                <TrBtn />
            </div>

        </header>

    </React.Fragment>

}
