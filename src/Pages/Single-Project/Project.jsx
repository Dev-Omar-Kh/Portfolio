import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import projectsData from '../../assets/Data/Projects.json';

import projectCSS from './project.module.css';
import { useTranslation } from 'react-i18next';
import { IoIosArrowForward, IoMdArrowRoundBack } from 'react-icons/io';
import { BiCodeAlt, BiLayer, BiLogoGithub, BiStar } from 'react-icons/bi';
import { TbWorldCode } from 'react-icons/tb';
import { GoDotFill } from 'react-icons/go';
import Title from '../../Components/Title/Title';
import { motion } from 'framer-motion';
import Animations from '../../Animations/Animations';

export default function Project() {

    const {id} = useParams();
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();

    // ====== start-top ====== //

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ====== go-back ====== //

    const handleGoBack = () => {

        navigate(-1);

    }

    // ====== get-project-by-id ====== //

    const proData = projectsData.find(pro => pro.id === Number(id));

    // ====== count-data ====== //

    const countData = [

        {
            id: 1,
            icon: <BiCodeAlt />,
            title: t('countCardTitle1'),
            num: proData?.tool.length
        },

        {
            id: 2,
            icon: <BiLayer />,
            title: t('countCardTitle2'),
            num: proData?.features.length
        }

    ];

    return <React.Fragment>

        <motion.section 
            className={projectCSS.container}
            variants={Animations.parentVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
        >

            <div className={projectCSS.title_cont}>

                <motion.button variants={Animations.toLeftVariants} onClick={handleGoBack} className={projectCSS.back_btn}>
                    <IoMdArrowRoundBack style={i18n.language === 'ar' ? {rotate: '180deg'} : {}} />
                    {t('backWord')}
                </motion.button>

                <motion.div variants={Animations.toLeftVariants} className={projectCSS.path_cont}>

                    <Link to={'/'}>{t('projectsTitle')}</Link>

                    <IoIosArrowForward style={i18n.language === 'ar' ? {rotate: '180deg'} : {}} />

                    <p>{t(proData.name)}</p>

                </motion.div>

            </div>

            <div className={projectCSS.pro_det_cont}>

                <div className={projectCSS.pro_right_cont}>

                    <motion.div variants={Animations.toTopVariants} className={projectCSS.about_pro}>

                        <Title title={t(proData.name)} cap={true} />

                        <p className={projectCSS.about_p}>{t(proData.description)}</p>

                        <div className={projectCSS.links_cont}>

                            <a 
                                className={`${projectCSS.live_demo_link} ${!proData.demoLive ? projectCSS.hidden_link : ''}`} 
                                href={proData.demoLive} target='_blank'
                            >
                                <TbWorldCode />
                                <p>{t('liveDemoWord')}</p>
                            </a>

                            <a 
                                className={`${projectCSS.git_hub_link} ${!proData.gitHub ? projectCSS.hidden_link : ''}`} 
                                href={proData.gitHub} target='_blank'
                            >
                                <BiLogoGithub />
                                <p>{t('gitHubWord')}</p>
                            </a>

                        </div>

                    </motion.div>

                    <motion.div variants={Animations.toTopVariants} className={projectCSS.pro_count}>

                        {countData.map(card => <div key={card.id} className={projectCSS.count_box}>

                            <div className={projectCSS.achieve_icon_side}>
                                {card.icon}
                            </div>
        
                            <div className={projectCSS.achieve_content_side}>
                                <h3>{card.num < 10 ? `0${card.num}` : card.num}</h3>
                                <p>{card.title}</p>
                            </div>

                        </div>)}

                    </motion.div>

                    <motion.div variants={Animations.toTopVariants} className={projectCSS.pro_tech}>

                        <div className={projectCSS.tech_title_cont}>
                            <BiCodeAlt />
                            <h3>{t('techUsedWord')}</h3>
                        </div>

                        <div className={projectCSS.tech_cont}>

                            {proData.tool.map((tool, idx) => <p key={idx} className={projectCSS.tool_box}>{t(tool)}</p>)}

                        </div>

                    </motion.div>

                </div>

                <div className={projectCSS.pro_left_cont}>

                    <motion.div variants={Animations.toTopVariants} className={projectCSS.img_cont}>
                        <img src={proData.img} alt={proData.name} />
                    </motion.div>

                    <motion.div variants={Animations.toTopVariants} className={projectCSS.features_cont}>

                        <div className={projectCSS.tech_title_cont}>
                            <BiStar />
                            <h3>{t('kefFeaturesWord')}</h3>
                        </div>

                        <ul className={projectCSS.features_list}>

                            {proData.features.map((feature, idx) => <li key={idx}>
                                <GoDotFill />
                                <p>{t(feature)}</p>
                            </li>)}

                        </ul>

                    </motion.div>

                </div>

            </div>

        </motion.section>

    </React.Fragment>

}
