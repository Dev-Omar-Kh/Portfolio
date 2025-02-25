import React from 'react';
import { IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';

import certImgCSS from './cert_img.module.css';
import { motion } from 'framer-motion';
import Animations from '../../Animations/Animations';

export default function CertImg({imgSrc, setDisplayFullView}) {

    const handleCloseFullView = () => {

        setDisplayFullView(false);

    }

    return <React.Fragment>

        <motion.section 
            variants={Animations.parentVariants} initial='hidden' animate='visible' exit={'hidden'} 
            className={certImgCSS.container}
        >

            <div className={certImgCSS.img_cont}>

                <button onClick={handleCloseFullView} className={certImgCSS.close_view}>
                    <IoClose />
                </button>

                <motion.img variants={Animations.scaleVariants} src={imgSrc} alt={imgSrc} />

            </div>

        </motion.section>

    </React.Fragment>

}

CertImg.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    setDisplayFullView: PropTypes.func,
};