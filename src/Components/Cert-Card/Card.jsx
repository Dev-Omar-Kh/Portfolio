import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoExpand } from 'react-icons/io5';

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

        <div onClick={handleDisplayFullView} className={cardCSS.card}>

            <img src={data.img} alt={data.name} />

            <div className={cardCSS.content}>

                <h3>{t(data.name)}</h3>

                <button className={cardCSS.pro_link}>
                    <IoExpand />
                </button>

            </div>

        </div>

    </React.Fragment>

}

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired
};