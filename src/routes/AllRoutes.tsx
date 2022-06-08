import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage/HomePage";
import {routeNames} from "./routeNames";
import MyFeedPage from "../pages/MyFeedPage/MyFeedPage";
import AboutMePage from "../pages/AboutMePage/AboutMePage";
import MyFriendsPage from "../pages/MyFriendsPage/MyFriendsPage";
import MyMessagePage from "../pages/MyMessagePage/MyMessagePage";
import MyMusicPage from "../pages/MyMusicPage/MyMusicPage";
import MyVideoPage from "../pages/MyVideoPage/MyVideoPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import IsAuth from '../components/H-O-C/isAuth';
import NotFoundedPage from "../pages/NotFoundedPage/NotFoundedPage";
import AuthPage from "../pages/AuthPage/AuthPage";

const AllRoutes = () => {

    return (
        <Routes>
            <Route path={routeNames.HOME} element={<Layout/>}>
                <Route path={routeNames.HOME} element={<HomePage/>}/>
                <Route path={routeNames.NOT_FOUNDED} element={<NotFoundedPage/>}/>
                <Route path={routeNames.ABOUT_ME + '/:id'} element={<IsAuth><AboutMePage/></IsAuth>}/>
                <Route path={routeNames.FEED} element={<IsAuth><MyFeedPage/></IsAuth>}/>
                <Route path={routeNames.FRIENDS} element={<IsAuth><MyFriendsPage/></IsAuth>}/>
                <Route path={routeNames.MESSAGE} element={<IsAuth><MyMessagePage/></IsAuth>}/>
                <Route path={routeNames.MUSIC} element={<IsAuth><MyMusicPage/></IsAuth>}/>
                <Route path={routeNames.VIDEO} element={<IsAuth><MyVideoPage/></IsAuth>}/>
                <Route path={routeNames.AUTH} element={<AuthPage/>}>
                    <Route path={routeNames.LOG_IN} element={<LoginPage/>}/>
                    <Route path={routeNames.SIGN_UP} element={<SignUpPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default AllRoutes;