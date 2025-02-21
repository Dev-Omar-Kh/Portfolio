import React from 'react';

import projectsCSS from './projects.module.css';
import { useTranslation } from 'react-i18next';
import Title from '../../../Components/Title/Title';
import Filter from '../../../Components/Filter-Button/Filter';
import Card from '../../../Components/Card/Card';

import projectsData from '../../../assets/Data/Projects.json';

export default function Projects() {

    const {t} = useTranslation();

    return <React.Fragment>

        <section className={`parents_cont comm_container`}>

            <div className={projectsCSS.title_cont}>

                <Title title={t('projectsTitle')} />

                <Filter />

            </div>

            <div className={projectsCSS.projects_cont}>

                {projectsData.slice().reverse().map(card => <Card key={card.id} data={card} />)}

            </div>

        </section>

    </React.Fragment>

}
