import React from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import techCSS from './technical.module.css';
import Animations from '../../../Animations/Animations';
import technoData from '../../../assets/Data/db.json'

export default function Technical() {

    const {t} = useTranslation();

    // ====== tech-data ====== //

    const techData = technoData.technicalSkillsData;

    return <React.Fragment>

        <motion.section 
            id='tech' className={`parents_cont comm_container`}
            variants={Animations.parentVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: window.innerWidth <= 768 ? 0.1 : 0.48 }}
        >

            <motion.div variants={Animations.toLeftVariants}>
                <Title title={t('techTitle')} />
            </motion.div>

            <div className={techCSS.cards_cont}>

                {techData.map(card => <motion.div variants={Animations.toTopVariants} key={card.id} className={techCSS.tech_card}>

                    <div className={techCSS.t_img}>
                        <img src={card.img} alt="techImg1" />
                    </div>
                    <p className={techCSS.card_p}>{t(card.title)}</p>

                </motion.div>)}

            </div>

        </motion.section>

    </React.Fragment>

}
