import React from 'react';

import projectsCSS from './projects.module.css';
import { useTranslation } from 'react-i18next';
import Title from '../../../Components/Title/Title';
import Filter from '../../../Components/Filter-Button/Filter';

export default function Projects() {

    const {t} = useTranslation();

    return <React.Fragment>

        <section className={`parents_cont comm_container`}>

            <div className={projectsCSS.title_cont}>

                <Title title={t('projectsTitle')} />

                <Filter />

            </div>

        </section>

    </React.Fragment>

}
