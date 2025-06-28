import React, { useState } from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';
import Card from '../../../Components/Cert-Card/Card';
// import certsData from '../../../assets/Data/Certifications.json'
import db from '../../../assets/Data/db.json';

import certCSS from './certifications.module.css';
import { IoIosArrowForward } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';
import Animations from '../../../Animations/Animations';

export default function Certifications() {

    const {t, i18n} = useTranslation();
    const certsData = db.certificationsData;

    // ====== display-certifications ====== //

    const [visibleCerts, setVisibleCerts] = useState(4);
    // const startDelayIndex = visibleCerts - 4;
    const handleLoadMore = () => {
        setVisibleCerts(prev => prev + 4);
    };

    return <React.Fragment>

        <motion.section 
            id='certs' className={`parents_cont comm_container`}
            variants={Animations.parentVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: window.innerWidth <= 768 ? 0.1 : 0.3 }}
        >

            <motion.div variants={Animations.toLeftVariants}>
                <Title title={t('certificationsWord')} />
            </motion.div>

            <motion.div 
                variants={Animations.parentNoStaggerVariants} 
                className={certCSS.cert_cont}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: window.innerWidth <= 768 ? 0.1 : 0.3 }}
            >

                <AnimatePresence>
                    {certsData.slice(0, visibleCerts).map((data, idx) => (
                        <motion.div 
                            variants={Animations.opacityVariants} 
                            custom={idx} initial='hidden' animate='visible' layout
                            className={certCSS.cert_card}  key={idx}
                            viewport={{ once: true, amount: window.innerWidth <= 768 ? 0.05 : 0.2 }}
                        >
                            <Card data={data} />
                        </motion.div>
                    ))}
                </AnimatePresence>

            </motion.div>

            <div className={certCSS.more_btn_cont}>
                <button
                    className={visibleCerts >= certsData.length ? certCSS.stop_btn : ''}
                    onClick={handleLoadMore}
                    disabled={visibleCerts >= certsData.length} 
                >
                    {t('displayMoreWord')}
                    <IoIosArrowForward className={i18n.language == 'en' ? certCSS.svg_en : certCSS.svg_ar} />
                </button>
            </div>

        </motion.section>

    </React.Fragment>

}
