import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';


import filterCSS from './filter.module.css';

import proData from '../../assets/Data/Projects.json';
import { BiFilterAlt } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';

export default function Filter({productsType, setDataFiltered}) {

    const {t, i18n} = useTranslation();

    const [displayFilteredUsers, setDisplayFilteredUsers] = useState(false);
    const ulRef = useRef(null);

    const handleClickOutside = (event) => {

        if (ulRef.current && !ulRef.current.contains(event.target)) {
            setDisplayFilteredUsers(false);
        }

    };

    useEffect(() => {

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    // ====== chose-filters ====== //

    const [chosenType, setChosenType] = useState(productsType[0]);


    const chooseUsersStatus = (chosenStatus) => {

        setChosenType(chosenStatus);

        setDisplayFilteredUsers(false);

        if(chosenStatus !== productsType[0]){
            setDataFiltered(proData.filter(data => data.tool.includes(chosenStatus)))
        }
        else{
            setDataFiltered(proData);
        }

    }

    // ====== animation ====== //

    const listAnimation = {

        hidden: {opacity: 0, height: '0px'},
        visible: {opacity: 1, height: 'fit-content' , transition: {duration: 0.3}},
        exit: {opacity: 0, height: '0px' , transition: {duration: 0.3}},

    }

    return <React.Fragment>

        <div ref={ulRef} className={filterCSS.title_actions}>

            <button className={filterCSS.time_btn} onClick={() => setDisplayFilteredUsers(!displayFilteredUsers)}>

                <div className={filterCSS.content_side}>

                    <div className={filterCSS.filter_icon}>
                        <BiFilterAlt />
                    </div>

                    <span>{t(chosenType)}</span>

                </div>

                <div 
                    className={filterCSS.arrowList}
                    style={{
                        rotate: displayFilteredUsers ? i18n.language === 'en' ? '90deg' : '-90deg' : '0deg'
                    }} 
                >
                    <IoIosArrowForward style={i18n.language === 'ar' ? {rotate: '180deg'} : {}} />
                </div>

            </button>

            <AnimatePresence>

                {displayFilteredUsers && 

                    <motion.div 
                        key={'times-list'}
                        className={filterCSS.ul_cont} 
                        variants={listAnimation} initial='hidden' animate='visible' exit={'exit'}
                    >

                        <ul className={filterCSS.times_list}>

                            {productsType.map((type, idx) => <li 
                                className={chosenType === type ? filterCSS.chosen_time : ''} key={idx}
                                onClick={() => chooseUsersStatus(type)}
                            >
                                {t(type)}
                            </li>)}

                        </ul>

                    </motion.div>

                }

            </AnimatePresence>

        </div>

    </React.Fragment>

}

Filter.propTypes = {
    productsType: PropTypes.array.isRequired,
    setDataFiltered: PropTypes.func.isRequired,
};