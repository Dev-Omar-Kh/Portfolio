import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';


import filterCSS from './filter.module.css';

import proData from '../../assets/Data/Projects.json';
import { BiFilterAlt } from 'react-icons/bi';

export default function Filter() {

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

    // ====== users-type-data ====== //

    // const data = proData
    const productsType = ["All Projects", ...new Set(proData.flatMap(product => product.tool))];


    // ====== chose-filters ====== //

    const [chosenType, setChosenType] = useState(productsType[0]);


    const chooseUsersStatus = (chosenStatus) => {

        setChosenType(chosenStatus);

        setDisplayFilteredUsers(false);

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

                <div className={filterCSS.filter_icon}>
                    <BiFilterAlt />
                </div>

                <span>{chosenType}</span>

                <div style={{rotate: displayFilteredUsers ? '90deg' : '0deg'}} className={filterCSS.arrowList}>
                    <IoIosArrowForward />
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
                                {type}
                            </li>)}

                        </ul>

                    </motion.div>

                }

            </AnimatePresence>

        </div>

    </React.Fragment>

}

// Filter.propTypes = {
//     setFilteredDate: PropTypes.func.isRequired,
// };