import React from 'react';
import { useTranslation } from 'react-i18next';

import footerCSS from './footer.module.css';
import { motion } from 'framer-motion';
import Animations from '../../Animations/Animations';

export default function Footer() {

    const {t} = useTranslation();

    return <React.Fragment>

        <motion.footer 
            variants={Animations.parentScaleVariants} 
            initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }}
            className={`parents_cont ${footerCSS.container}`}
        >

            <p>© 2025 <span>{t('footerName')}</span>. {t('footerMsg')}.</p>

        </motion.footer>

    </React.Fragment>

}
