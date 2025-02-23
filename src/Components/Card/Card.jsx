import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { PropTypes } from 'prop-types';

import cardCSS from './card.module.css';
import { useTranslation } from 'react-i18next';

export default function Card({data}) {

    const {t, i18n} = useTranslation();

    return <React.Fragment>

        <Link to={`project/${data.id}`} className={cardCSS.card}>

            <div className={cardCSS.img_cont}>

                <img src={data.img} alt={data.name} />

            </div>

            <div className={cardCSS.content_cont}>

                <div className={cardCSS.pro_info}>

                    <h3>{t(data.name)}</h3>

                    <div className={cardCSS.pro_tools_cont}>

                        {data.tool.map((tool, idx) => <div key={idx} className={cardCSS.tool_box}>
                            {t(tool)}
                        </div>)}

                    </div>

                </div>

                <button className={cardCSS.pro_link}>
                    <FiArrowUpRight style={i18n.language === 'ar' ? {rotate: '-90deg'} : {}} />
                </button>

            </div>

        </Link>

    </React.Fragment>

}

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        tool: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};