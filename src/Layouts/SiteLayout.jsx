import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

export default function SiteLayout() {

    return <React.Fragment>

        <Header />

        <main>
            <Outlet />
        </main>

    </React.Fragment>

}
