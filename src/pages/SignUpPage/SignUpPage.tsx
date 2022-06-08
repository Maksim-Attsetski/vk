import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import './SignUpPage.scss';
import AnimPage from "../../components/H-O-C/AnimPage";
import {useTypedDispatch} from "../../hooks/redux";
import {authActions} from "../../redux/slices/AuthSlice";
import {routeNames} from "../../routes/routeNames";
import {useLocation, useNavigate} from "react-router-dom";

const SignUpPage: FC = () => {
    const [formItems, setFormItems] = useState({
        pass: '', firstName: '', lastName: ''
    })
    const dispatch = useTypedDispatch()
    const {login} = authActions
    const navigate = useNavigate()
    const location: any = useLocation()

    const handleSignupFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(login())
        navigate(location?.state?.from || routeNames.HOME)
    }

    return (
        <div className={'signup-page'}>
            <AnimPage className="signup-page__body container">
                <h2 className="signup-page__title">Sign</h2>
                <form action="#" className={'signup-page-form'} onSubmit={handleSignupFormSubmit}>
                    <input
                        type="text" className={'input'}
                        value={formItems.firstName}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFormItems({
                            ...formItems,
                            firstName: event.target.value
                        })}
                        placeholder={'Имя...'}
                    />
                    <input
                        type="text" className={'input'}
                        value={formItems.lastName}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFormItems({
                            ...formItems,
                            lastName: event.target.value
                        })}
                        placeholder={'Фамилия...'}
                    />
                    <input
                        type="text" className={'input'}
                        value={formItems.pass}
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

export default SignUpPage;