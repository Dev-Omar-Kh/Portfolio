import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';
import Animations from '../../Animations/Animations';

import cardCSS from './card.module.css';
import { useTranslation } from 'react-i18next';

export default function Card({data}) {

    const {t, i18n} = useTranslation();

    return <React.Fragment>

        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            variants={Animations.parentNoStaggerVariants} initial='hidden' animate='visible' exit={'exit'}
        >

            <Link to={`project/${data.id}`} className={cardCSS.card}>

                <motion.img loading='lazy' src={data.img} alt={data.name} variants={Animations.opacityVariants} />

                <motion.div className={cardCSS.content_cont} variants={Animations.opacityVariants}>

                    <div className={cardCSS.pro_info}>

                        <h3>{t(data.name)}</h3>

                        <motion.div className={cardCSS.pro_tools_cont} variants={Animations.opacityVariants}>
                            {data.tool.map((tool, idx) => (<div key={idx} className={cardCSS.tool_box}>{t(tool)}</div>))}
                        </motion.div>

                    </div>

                    <motion.button className={cardCSS.pro_link}>
                        <FiArrowUpRight style={i18n.language === 'ar' ? {rotate: '-90deg'} : {}} />
                    </motion.button>

                </motion.div>

            </Link>

        </motion.div>

    </React.Fragment>

}

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        tool: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};