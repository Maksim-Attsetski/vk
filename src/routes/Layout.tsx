import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {authListActions} from "../redux/slices/AuthList";
import {useTypedDispatch} from "../hooks/redux";

const Layout = () => {
    const dispatch = useTypedDispatch()
    const {setUser} = authListActions

    useEffect(() => {
        dispatch(setUser())
    }, [])

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