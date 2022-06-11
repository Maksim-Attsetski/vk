import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import './LoginPage.scss';
import AnimPage from "../../components/H-O-C/AnimPage";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import {authActions} from "../../redux/slices/AuthSlice";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {routeNames} from "../../routes/routeNames";
import {authListActions} from "../../redux/slices/AuthList";
import {IUser} from "../../types/global-types";
import {getID} from "../../helpers/getID";

const LoginPage: FC = () => {
    const [formItems, setFormItems] = useState({
        pass: '', email: '',
    })
    const {authUser, userList} = useTypedSelector(state => state.authList)
    const dispatch = useTypedDispatch()
    const {login} = authActions
    const {logIn} = authListActions

    const navigate = useNavigate()
    const location: any = useLocation()

    const handleLoginFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const user: IUser = {
            ...authUser,
            email: formItems.email,
            pass: formItems.pass,
        }

        dispatch(login())
        dispatch(logIn(user))
        navigate(location?.state?.from || routeNames.HOME)
    }
    return (
        <div className={'login-page'}>
            <AnimPage className="login-page__body">
                <h2 className="login-page__title">Log In</h2>
                <form action="#" className={'login-page-form'} onSubmit={handleLoginFormSubmit}>
                    <input
                        type="text" className={'input'}
                        value={formItems.email} required
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFormItems({
                            ...formItems,
                            email: event.target.value
                        })}
                        placeholder={'Введите email...'}
                    />
                    <input
                        type="text" className={'input'}
                        value={formItems.pass} required minLength={8}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFormItems({
                            ...formItems,
                            pass: event.target.value
                        })}
                        placeholder={'Пароль...'}
                    />
                    <button className="btn">Вход</button>
                </form>
            </AnimPage>
        </div>
    );
};

export default LoginPage;