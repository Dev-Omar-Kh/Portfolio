import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoExpand } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Animations from '../../Animations/Animations';

import cardCSS from './card.module.css';
import { PropTypes } from 'prop-types';
import CertImg from '../cert-img/CertImg';
import { AnimatePresence } from 'framer-motion';

export default function Card({data}) {

    const {t} = useTranslation();

    // ====== view-certification-full-screen ====== //

    const [displayFullView, setDisplayFullView] = useState(false);

    const handleDisplayFullView = () => {
        setDisplayFullView(true);
    }

    return <React.Fragment>

        <AnimatePresence>
            {displayFullView && <CertImg setDisplayFullView={setDisplayFullView} imgSrc={data.img} />}
        </AnimatePresence>

        <motion.div 
            onClick={handleDisplayFullView} 
            className={cardCSS.card}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            variants={Animations.parentNoStaggerVariants} initial='hidden' animate='visible' exit={'exit'}
        >

            <motion.div className={cardCSS.img_cont} variants={Animations.opacityVariants}>
                <motion.img src={data.img} alt={data.name} loading='lazy'/>
            </motion.div>

            <motion.div 
                className={cardCSS.content}
                variants={Animations.opacityVariants}
            >

                <h3>{t(data.name)}</h3>

                <motion.button className={cardCSS.pro_link}>
                    <IoExpand />
                </motion.button>

            </motion.div>

        </motion.div>

    </React.Fragment>

}

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired
};