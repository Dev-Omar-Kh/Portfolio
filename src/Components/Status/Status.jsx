import React, { useEffect, useRef } from 'react';
import successIcon from '../../assets/SVG/success.json';
import failedIcon from '../../assets/SVG/wrong.json';
import { Player } from '@lordicon/react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Animations from '../../Animations/Animations';
import { PropTypes } from 'prop-types';

import statusCSS from './status.module.css';

export default function Status({resType, resMsg}) {

    const {t} = useTranslation();

    const playerRef = useRef(null);
    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, []);

    return <React.Fragment>

        <motion.section variants={Animations.parentVariants} initial='hidden' animate='visible' exit={'exit'} className={statusCSS.container}>

            <motion.div variants={Animations.parentScaleVariants} className={statusCSS.box}>

                <Player 
                    size={100} ref={playerRef} 
                    trigger="autoplay" icon={resType ? successIcon : failedIcon} 
                />

                <motion.p variants={Animations.toTopVariants}>{t(resMsg)}</motion.p>

            </motion.div>

        </motion.section>

    </React.Fragment>

}

Status.propTypes = {
    resType: PropTypes.bool.isRequired,
    resMsg: PropTypes.string.isRequired,
}