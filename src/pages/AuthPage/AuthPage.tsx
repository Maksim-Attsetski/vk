import React, {FC} from 'react';
import './AuthPage.scss';
import AnimPage from "../../components/H-O-C/AnimPage";
import {routeNames} from "../../routes/routeNames";
import {NavLink, Outlet, useLocation} from "react-router-dom";

const AuthPage: FC = () => {
    const location = useLocation()
    const {pathname} = location
    return (
        <div className={'auth-page'}>
            <AnimPage className={'auth-page__body'}>
                <Outlet/>
                <div className="auth-page-btns">
                    {pathname !== routeNames.LOG_IN && <div className="auth-page-btns__item">
                        <span>Уже есть аккаунт? Заходи :)</span>
                        <NavLink to={routeNames.LOG_IN} className={'btn'}>Log In</NavLink>
                    </div>}
                    {pathname !== routeNames.SIGN_UP && <div className="auth-page-btns__item">
                        <span>Нет аккаунта? Давай создадим!</span>
                        <NavLink to={routeNames.SIGN_UP} className={'btn'}>Sign Up</NavLink>
                    </div>}
                </div>
            </AnimPage>
        </div>
    );
};

export default AuthPage;