import React, {FC} from 'react';
import './AboutMePage.scss';
import AnimPage from "../../components/H-O-C/AnimPage";
import {useTypedSelector} from "../../hooks/redux";
import {Link, useParams} from "react-router-dom";
import {routeNames} from "../../routes/routeNames";

interface IMyActivity {
    to: string,
    text: string,
    count: number,
}

const AboutMePage: FC = () => {
    const {authUser} = useTypedSelector(state => state.authList)
    const {id} = useParams()

    const myActivity: IMyActivity[] = [
        {to: routeNames.FRIENDS, text: 'Друзья', count: authUser.friends.length},
        {to: routeNames.MUSIC, text: 'Музыка', count: authUser.music.length},
        {to: routeNames.VIDEO, text: 'Видео', count: authUser.video.length},
        {to: routeNames.FEED, text: 'Посты', count: authUser.posts.length},
    ]

    return (
        <div className={'about-me-page'}>
            <AnimPage className="about-me-page__body">
                {(String(authUser.id) === String(id))
                    ? <div>
                        <div className="about-me-page__title">Это
                            страничка: <span>{authUser.firstName} {authUser.lastName}</span></div>
                        <Link className={'about-me-page__setting'} to={routeNames.SETTING}>Настройки профиля</Link>
                        <div className={'about-me-page__content'}>
                            <div>ID: {authUser.customID}</div>
                            <div>Почта: {authUser.email}</div>
                        </div>
                        <div className={'about-me-page-activity'}>
                            {myActivity.map((item) =>
                                <Link className={'about-me-page-activity__link'} key={item.to} to={item.to}>
                                    <div>{item.text}</div>
                                    <div>{item.count}</div>
                                </Link>
                            )}

                        </div>
                    </div>
                    : <div>Пользователь с таким ID не найден</div>}
            </AnimPage>
        </div>
    );
};

export default AboutMePage;