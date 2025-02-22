import React, { useState } from 'react';

import projectsCSS from './projects.module.css';
import { useTranslation } from 'react-i18next';
import Title from '../../../Components/Title/Title';
import Filter from '../../../Components/Filter-Button/Filter';
import Card from '../../../Components/Card/Card';

import projectsData from '../../../assets/Data/Projects.json';
import { IoMdArrowRoundForward } from 'react-icons/io';

export default function Projects() {

    const {t, i18n} = useTranslation();

    const [visibleProjects, setVisibleProjects] = useState(8);

    const handleLoadMore = () => {
        setVisibleProjects(prev => prev + 4);
    };

    return <React.Fragment>

        <section className={`parents_cont comm_container`}>

            <div className={projectsCSS.title_cont}>

                <Title title={t('projectsTitle')} />

                <Filter />

            </div>

            <div className={projectsCSS.projects_cont}>

                {projectsData.slice().reverse().slice(0, visibleProjects).map(card => <Card key={card.id} data={card} />)}

            </div>

            <div className={projectsCSS.more_btn_cont}>
                <button
                    className={visibleProjects >= projectsData.length ? projectsCSS.stop_btn : ''}
                    onClick={handleLoadMore}
                    disabled={visibleProjects >= projectsData.length} 
                >
                    {t('displayMoreWord')}
                    <IoMdArrowRoundForward className={i18n.language == 'en' ? projectsCSS.svg_en : projectsCSS.svg_ar} />
                </button>
            </div>

        </section>

    </React.Fragment>

}
