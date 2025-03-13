import React from 'react';
import { useTranslation } from 'react-i18next';

import footerCSS from './footer.module.css';

export default function Footer() {

    const {t} = useTranslation();

    return <React.Fragment>

        <footer className={`parents_cont ${footerCSS.container}`}>

            <p>© 2025 <span>{t('footerName')}</span>. {t('footerMsg')}.</p>

        </footer>

    </React.Fragment>

}
