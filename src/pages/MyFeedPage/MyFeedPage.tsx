import React from 'react';
import AnimPage from "../../components/H-O-C/AnimPage";
import {useTypedSelector} from "../../hooks/redux";

const MyFeedPage = () => {
    const {userList} = useTypedSelector(state => state.authList)
    return (
        <div className={'feed-page'}>
            <AnimPage className="feed-page__body container">
                новости
                {JSON.stringify(userList)}
            </AnimPage>
        </div>
    );
};

export default MyFeedPage;