import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

export default function SiteLayout() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    window.onload = function () {
        window.scrollTo(0, 0);
    };

    return <React.Fragment>

        <Header />

        <main>
            <Outlet />
        </main>

        <Footer />

    </React.Fragment>

}
