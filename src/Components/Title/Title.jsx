import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import titleCSS from './title.module.css';
import { useTranslation } from 'react-i18next';

export default function Title({title}) {

    const {i18n} = useTranslation();

    // ====== count-element-height ====== //

    const titleRef = useRef(null);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {

        const handleResize = () => {

            setLineHeight(titleRef.current?.clientHeight || 0);

        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);

    }, [title, i18n.language]);

    return <React.Fragment>

        <div className={titleCSS.container}>

            <span style={{height: lineHeight}} className={titleCSS.line}></span>

            <h3 ref={titleRef}>{title}</h3>

        </div>

    </React.Fragment>

}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};