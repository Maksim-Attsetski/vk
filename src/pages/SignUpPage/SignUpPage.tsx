import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import './SignUpPage.scss';
import AnimPage from "../../components/H-O-C/AnimPage";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import {authActions} from "../../redux/slices/AuthSlice";
import {routeNames} from "../../routes/routeNames";
import {useLocation, useNavigate} from "react-router-dom";
import {IUser} from "../../types/global-types";
import {authListActions} from "../../redux/slices/AuthList";
import {getID} from "../../helpers/getID";
import {checkIsUserExist} from "../../helpers/checkIsUserExist";

const SignUpPage: FC = () => {
    const [formItems, setFormItems] = useState({
        pass: '', firstName: '', lastName: '', email: '',
    })
    const dispatch = useTypedDispatch()
    const {userList} = useTypedSelector(state => state.authList)
    const {login} = authActions
    const {signUp} = authListActions
    const navigate = useNavigate()
    const location: any = useLocation()

    const handleSignupFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const newUser: IUser = {
            id: getID(),
            customID: String(getID() * 10000),
            createdAt: Date(),
            firstName: formItems.firstName,
            lastName: formItems.lastName,
            email: formItems.email,
            pass: formItems.pass,
            friends: [], music: [], posts: [], video: [],
        }

        if(checkIsUserExist(userList, newUser)) {
            dispatch(signUp(newUser))
            dispatch(login())
            navigate(location?.state?.from || routeNames.HOME)
        }
    }

    return (
        <div className={'signup-page'}>
            <AnimPage className="signup-page__body container">
                <h2 className="signup-page__title">Sign</h2>
                <form action="#" className={'signup-page-form'} onSubmit={handleSignupFormSubmit}>
                    <input
                        type="text" className={'input'}
                        value={formItems.firstName} required minLength={2}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFormItems({
                            ...formItems,
                            firstName: event.target.value
                        })}
                        placeholder={'Имя...'}
                    />
                    <input
                        type="text" className={'input'}
                        value={formItems.lastName} required minLength={2}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFormItems({
                            ...formItems,
                            lastName: event.target.value
                        })}
                        placeholder={'Фамилия...'}
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
                    <input
                        type="text" className={'input'}
                        value={formItems.email} required
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFormItems({
                            ...formItems,
                            email: event.target.value
                        })}
                        placeholder={'Email...'}
                    />
                    <button className="btn">Вход</button>
                </form>

            </AnimPage>
        </div>
    );
};

export default SignUpPage;