import React from 'react';
import Title from '../../Components/Title/Title';
import { useTranslation } from 'react-i18next';
import { BiCategory, BiCloudDownload, BiLogoGithub } from 'react-icons/bi';

import mainCSS from './main.module.css';

import myImg from '../../assets/Images/my_img.jpg';
import { FiUsers } from 'react-icons/fi';
import { VscTools } from 'react-icons/vsc';

export default function Main() {

    const {t, i18n} = useTranslation();

    // ====== main-info-data ====== //

    const infoData = [

        {id:1, title: t('roleWord'), content: t('roleContent')},
        {id:2, title: t('phoneWord'), content: "(+20) 1140067845"},
        {id:3, title: t('emailWord'), content: "devomar.2004@gmail.com"},

    ];

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

        <section className={`parents_cont comm_container`}>

            <div className={mainCSS.title_cont}>

                <Title title={t('aboutTitle')} />

                <div className={mainCSS.main_btns}>

                    <a className={mainCSS.git_hub_link} href="https://github.com/Dev-Omar-Kh" target='_blank'>
                        <BiLogoGithub />
                        <p>{t('gitHubWord')}</p>
                    </a>

                    <a 
                        className={mainCSS.cv_link} 
                        href="https://drive.google.com/uc?export=download&id=1SAgA-kOxe7Co1jYdOS81SQdKqUDWw8Jc"
                    >
                        <BiCloudDownload />
                        <p>{t('downloadCvWord')}</p>
                    </a>

                </div>

            </div>

            <div className={mainCSS.my_info}>

                <div className={mainCSS.my_img}>
                    <img src={myImg} alt="Omar Khaled PFP" />
                </div>

                <div className={mainCSS.my_data}>

                    <h3 className={mainCSS.my_name}>{t('myName')}</h3>

                    <div className={mainCSS.my_main_info}>

                        {infoData.map(info => <div key={info.id} className={mainCSS.info_card}>

                            <h4>{info.title}</h4>

                            <p 
                                dir={info.id !== 1 ? (i18n.language == 'ar' ? 'ltr' : '') : ''}
                                style={info.id !== 1 ? (i18n.language === 'ar' ? {textAlign: 'end'} : {}): {}}
                            >{info.content}</p>

                        </div>)}

                    </div>

                </div>

            </div>

            <div className={mainCSS.achievements}>

                {achievementData.map(card => <div key={card.id} className={mainCSS.achieve_card}>

                    <div className={mainCSS.achieve_icon_side}>
                        {card.icon}
                    </div>

                    <div className={mainCSS.achieve_content_side}>
                        { i18n.language === 'en' && <h3>+{card.num < 10 ? `0${card.num}` : card.num}</h3>}
                        {i18n.language === 'ar' && <h3>{card.num < 10 ? `0${card.num}` : card.num}+</h3>}
                        <p>{card.title}</p>
                    </div>

                </div>)}

            </div>

        </section>

    </React.Fragment>

}
