import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header/Header';

export default function SiteLayout() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <React.Fragment>

        <Header />

        <main>
            <Outlet />
        </main>

    </React.Fragment>

}
