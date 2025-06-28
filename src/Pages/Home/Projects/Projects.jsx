import React, { useState } from 'react';

import projectsCSS from './projects.module.css';
import { useTranslation } from 'react-i18next';
import Title from '../../../Components/Title/Title';
import Filter from '../../../Components/Filter-Button/Filter';
import Card from '../../../Components/Card/Card';
import db from '../../../assets/Data/db.json';
import { IoIosArrowForward } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';
import Animations from '../../../Animations/Animations';

export default function Projects() {

    const {t, i18n} = useTranslation();

    const projectsData = db.projectsData

    // ====== display-more-data ====== //

    const [visibleProjects, setVisibleProjects] = useState(8);
    // const startDelayIndex = visibleProjects - 4;
    const handleLoadMore = () => {
        setVisibleProjects(prev => prev + 4);
    };

    // ====== filter-projects ====== //

    const [dataFiltered, setDataFiltered] = useState(projectsData);
    const filter = ["allProjectsWord", ...new Set(projectsData.flatMap(product => product.tool))];

    return <React.Fragment>

        <motion.section 
            id='projects' className={`parents_cont comm_container`}
            variants={Animations.parentVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: window.innerWidth <= 768 ? 0.1 : 0.3 }}
        >

            <div className={projectsCSS.title_cont}>

                <motion.div variants={Animations.toLeftVariants}>
                    <Title title={t('projectsTitle')} />
                </motion.div>

                <motion.div className={projectsCSS.filter_cont} variants={Animations.toTopVariants}>
                    <Filter productsType={filter} setDataFiltered={setDataFiltered} />
                </motion.div>

            </div>

            <motion.div variants={Animations.parentNoStaggerVariants} className={projectsCSS.projects_cont}>

                <AnimatePresence>
                    {dataFiltered.slice(0, visibleProjects).map((card, idx) => (
                        <motion.div 
                            variants={Animations.opacityVariants} 
                            custom={idx} initial='hidden' animate='visible' layout
                            className={projectsCSS.pro_card} key={idx}
                            viewport={{ once: true, amount: window.innerWidth <= 768 ? 0.05 : 0.2 }}
                        >
                            <Card data={card} />
                        </motion.div>
                    ))}
                </AnimatePresence>

            </motion.div>

            <div className={projectsCSS.more_btn_cont}>
                <motion.button
                    className={visibleProjects >= dataFiltered.length ? projectsCSS.stop_btn : ''}
                    onClick={handleLoadMore}
                    disabled={visibleProjects >= dataFiltered.length} 
                >
                    {t('displayMoreWord')}
                    <IoIosArrowForward className={i18n.language == 'en' ? projectsCSS.svg_en : projectsCSS.svg_ar} />
                </motion.button>
            </div>

        </motion.section>

    </React.Fragment>

}
