import React, { useState } from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';
import Card from '../../../Components/Cert-Card/Card';
import certsData from '../../../assets/Data/Certifications.json'

import certCSS from './certifications.module.css';
import { IoMdArrowRoundForward } from 'react-icons/io';

export default function Certifications() {

    const {t, i18n} = useTranslation();

    // ====== display-certifications ====== //

    const [visibleCerts, setVisibleCerts] = useState(4);
    const handleLoadMore = () => {
        setVisibleCerts(prev => prev + 4);
    };

    return <React.Fragment>

        <section className={`parents_cont comm_container`}>

            <Title title={t('certificationsWord')} />

            <div className={certCSS.cert_cont}>

                {certsData.slice(0, visibleCerts).map(data => <Card key={data.id} data={data} />)}

            </div>

            <div className={certCSS.more_btn_cont}>
                <button
                    className={visibleCerts >= certsData.length ? certCSS.stop_btn : ''}
                    onClick={handleLoadMore}
                    disabled={visibleCerts >= certsData.length} 
                >
                    {t('displayMoreWord')}
                    <IoMdArrowRoundForward className={i18n.language == 'en' ? certCSS.svg_en : certCSS.svg_ar} />
                </button>
            </div>

        </section>

    </React.Fragment>

}
