import React from 'react';
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={'app'}>
            <Header/>
            <main className="main">
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;