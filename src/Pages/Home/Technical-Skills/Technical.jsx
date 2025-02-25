import React from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';

import techCSS from './technical.module.css';

import techImg1 from '../../../assets/SVG/html-logo.svg';
import techImg2 from '../../../assets/SVG/css-logo.svg';
import techImg3 from '../../../assets/SVG/js-logo.svg';
import techImg4 from '../../../assets/SVG/jquery-logo.svg';
import techImg5 from '../../../assets/SVG/bootstrap-logo.svg';
import techImg6 from '../../../assets/SVG/tailwindcss-logo.svg';
import techImg7 from '../../../assets/SVG/react-logo.svg';
import techImg8 from '../../../assets/SVG/redux-logo.svg';
import techImg9 from '../../../assets/SVG/node-js-logo.svg';
import techImg10 from '../../../assets/SVG/expressjs-logo.svg';
import techImg11 from '../../../assets/SVG/mongodb-logo.svg';
import techImg12 from '../../../assets/SVG/vscode-logo.svg';
import techImg13 from '../../../assets/SVG/git-logo.svg';
import techImg14 from '../../../assets/SVG/github-logo.svg';
import techImg15 from '../../../assets/SVG/vitelogo.svg';
import techImg16 from '../../../assets/SVG/chrome-logo.svg';

export default function Technical() {

    const {t} = useTranslation();

    // ====== tech-data ====== //

    const techData = [

        {
            id: 1,
            img: techImg1,
            title: t('techDataTitle1')
        },

        {
            id: 2,
            img: techImg2,
            title: t('techDataTitle2')
        },

        {
            id: 3,
            img: techImg3,
            title: t('techDataTitle3')
        },

        {
            id: 4,
            img: techImg4,
            title: t('techDataTitle4')
        },

        {
            id: 5,
            img: techImg5,
            title: t('techDataTitle5')
        },

        {
            id: 6,
            img: techImg6,
            title: t('techDataTitle6')
        },

        {
            id: 7,
            img: techImg7,
            title: t('techDataTitle7')
        },

        {
            id: 8,
            img: techImg8,
            title: t('techDataTitle8')
        },

        {
            id: 9,
            img: techImg9,
            title: t('techDataTitle9')
        },

        {
            id: 10,
            img: techImg10,
            title: t('techDataTitle10')
        },

        {
            id: 11,
            img: techImg11,
            title: t('techDataTitle11')
        },

        {
            id: 12,
            img: techImg12,
            title: t('techDataTitle12')
        },

        {
            id: 13,
            img: techImg13,
            title: t('techDataTitle13')
        },

        {
            id: 14,
            img: techImg14,
            title: t('techDataTitle14')
        },

        {
            id: 15,
            img: techImg15,
            title: t('techDataTitle15')
        },

        {
            id: 16,
            img: techImg16,
            title: t('techDataTitle16')
        },

    ]

    return <React.Fragment>

        <section id='tech' className={`parents_cont comm_container`}>

            <Title title={t('techTitle')} />

            <div className={techCSS.cards_cont}>

                {techData.map(card => <div key={card.id} className={techCSS.tech_card}>

                    <div className={techCSS.t_img}>
                        <img src={card.img} alt="techImg1" />
                    </div>
                    <p className={techCSS.card_p}>{card.title}</p>

                </div>)}

            </div>

        </section>

    </React.Fragment>

}
