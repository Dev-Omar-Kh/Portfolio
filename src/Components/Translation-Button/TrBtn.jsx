import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosGlobe } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';

import trBtnCSS from './tr_btn.module.css';

export default function TrBtn() {

    // ====== display-langs ====== //

    const [displayLangs, setDisplayLangs] = useState(false);

    const toggleLangsList = () => {

        setDisplayLangs(prev => !prev);

    }

    const langListRef = useRef(null);

    const handleClickOutside = useCallback((event) => {

        if (langListRef.current && !langListRef.current.contains(event.target)) {
            setDisplayLangs(false);
        }

    }, []);

    useEffect(() => {

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [handleClickOutside]);

    // ====== change-language ====== //

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {

        setDisplayLangs(false);
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);

    };

    // ====== animation ====== //

    const displayList = {

        hidden: {opacity: 0 , height: 0},
        visible: {opacity: 1 , height: 'auto' , transition: {duration: 0.15}}

    }

    return <React.Fragment>

        <div ref={langListRef} className={trBtnCSS.container}>

            <button onClick={toggleLangsList} className={`${trBtnCSS.tr_btn}`}>
                <IoIosGlobe />
                <p>{t('languageWord')}</p>
                {i18n.language === 'en' ? 
                    <IoIosArrowForward 
                        className={`
                            ${displayLangs ? trBtnCSS.rotate_positive : ''}
                        `} 
                    /> :
                    <IoIosArrowBack 
                        className={`
                            ${displayLangs ? trBtnCSS.rotate_negative : ''}
                        `} 
                    />
                }
            </button>

            <AnimatePresence>

                {displayLangs && <motion.ul 
                    className={`
                        ${trBtnCSS.tr_list}
                        ${i18n.language === 'ar' ? trBtnCSS.right_position : trBtnCSS.left_position}
                    `}
                    variants={displayList} initial='hidden' animate='visible' exit={'hidden'}
                >

                    <li className={i18n.language === 'ar' ? trBtnCSS.tr_list_li_active : ''} onClick={() => changeLanguage('ar')}>
                        <Flag code="eg" />
                        <span>{t('arabicWord')}</span>
                    </li>
                    <li className={i18n.language === 'en' ? trBtnCSS.tr_list_li_active : ''} onClick={() => changeLanguage('en')}>
                        <Flag code="us" />
                        <span>{t('englishWord')}</span>
                    </li>

                </motion.ul>}

            </AnimatePresence>

        </div>

    </React.Fragment>

}
