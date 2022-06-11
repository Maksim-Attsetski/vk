import React from 'react';
import './HomePage.scss';
import {Link} from "react-router-dom";
import {routeNames} from "../../routes/routeNames";
import AnimPage from "../../components/H-O-C/AnimPage";

const HomePage = () => {

    return (
        <div className={'home-page'}>
            <AnimPage className="home-page__body">
                <h2 className="home-page__title">Добро пожаловать в мою версию ВК</h2>
                <Link to={routeNames.FEED}>Поехали :)</Link>
            </AnimPage>
        </div>
    );
};

export default HomePage;