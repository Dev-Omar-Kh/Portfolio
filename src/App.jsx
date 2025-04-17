import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SiteLayout from './Layouts/SiteLayout';
import { useTranslation } from 'react-i18next';
import Home from './Pages/Home/Home';
import Project from './Pages/Single-Project/Project';

const routes = createBrowserRouter([

    {path: '/', element: <SiteLayout />, children: [

        {path: '/', element: <Home />},

    ]},

    {path: '/project/:id', element: <Project />}

]);

export default function App() {

    const {i18n} = useTranslation();

    // ====== save-language ====== //

    useEffect(() => {

        const savedLang = localStorage.getItem('language') || 'en';
        if (i18n.language !== savedLang) {
            i18n.changeLanguage(savedLang);
        }

        document.documentElement.lang = savedLang;
        document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';

    }, [i18n, i18n.language]);

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}
