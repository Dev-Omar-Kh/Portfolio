import React from 'react';

import footerCSS from './footer.module.css';

export default function Footer() {

    return <React.Fragment>

        <footer className={`parents_cont ${footerCSS.container}`}>

            <p>© 2025 <span>Omar Khaled</span>. All Rights Reserved.</p>

        </footer>

    </React.Fragment>

}
