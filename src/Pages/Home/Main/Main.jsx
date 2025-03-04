import React from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';
import { BiCategory, BiCloudDownload, BiLogoGithub } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { VscTools } from 'react-icons/vsc';
import infoData from '../../../assets/Data/MyData.json';

import mainCSS from './main.module.css';

import myImg from '../../../assets/Images/my_img.jpg';
import { motion } from 'framer-motion';
import Animations from './../../../Animations/Animations';

export default function Main() {

    const {t, i18n} = useTranslation();

    // ====== achievement-data ====== //

    const achievementData = [

        {
            id:1,
            icon: <FiUsers />,
            title: t('achieveCardTitle1'),
            num: 8,
        },

        {
            id:2,
            icon: <BiCategory />,
            title: t('achieveCardTitle2'),
            num: 25,
        },

        {
            id:3,
            icon: <VscTools />,
            title: t('achieveCardTitle3'),
            num: 2,
        },

    ];

    return <React.Fragment>

        <motion.section 
            id='about' className={`parents_cont comm_container`}
            variants={Animations.parentVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0 }}
        >

            <div className={mainCSS.title_cont}>

                <motion.div variants={Animations.toLeftVariants}>
                    <Title title={t('aboutTitle')} />
                </motion.div>

                <div className={mainCSS.main_btns}>

                    <motion.a 
                        variants={Animations.toTopVariants} 
                        className={mainCSS.git_hub_link} 
                        href="https://github.com/Dev-Omar-Kh" target='_blank'
                    >
                        <BiLogoGithub />
                        <p>{t('gitHubWord')}</p>
                    </motion.a>

                    <motion.a 
                        variants={Animations.toTopVariants} 
                        className={mainCSS.cv_link} 
                        href="https://drive.google.com/uc?export=download&id=1SAgA-kOxe7Co1jYdOS81SQdKqUDWw8Jc"
                    >
                        <BiCloudDownload />
                        <p>{t('downloadCvWord')}</p>
                    </motion.a>

                </div>

            </div>

            <div className={mainCSS.my_info}>

                <motion.div variants={Animations.toRightVariants} className={mainCSS.my_img}>
                    <img src={myImg} alt="Omar Khaled PFP" />
                </motion.div>

                <div className={mainCSS.my_data}>

                    <motion.h3 variants={Animations.toLeftVariants} className={mainCSS.my_name}>{t('myName')}</motion.h3>

                    <div className={mainCSS.my_main_info}>

                        {infoData.map(info => (
                            <motion.div variants={Animations.toTopVariants} key={info.id} className={mainCSS.info_card}>

                                <h4>{t(info.title)}</h4>

                                <p 
                                    dir={info.id !== 1 ? (i18n.language == 'ar' ? 'ltr' : '') : ''}
                                    style={info.id !== 1 ? (i18n.language === 'ar' ? {textAlign: 'end'} : {}): {}}
                                >{t(info.content)}</p>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </div>

            <div className={mainCSS.achievements}>

                {achievementData.map(card => (
                    <motion.div variants={Animations.toTopVariants} key={card.id} className={mainCSS.achieve_card}>

                        <div className={mainCSS.achieve_icon_side}>
                            {card.icon}
                        </div>

                        <div className={mainCSS.achieve_content_side}>
                            { i18n.language === 'en' && <h3>+{card.num < 10 ? `0${card.num}` : card.num}</h3>}
                            {i18n.language === 'ar' && <h3>{card.num < 10 ? `0${card.num}` : card.num}+</h3>}
                            <p>{card.title}</p>
                        </div>

                    </motion.div>
                ))}

            </div>

        </motion.section>

    </React.Fragment>

}
