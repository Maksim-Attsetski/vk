import React, {FC} from 'react';
import AnimPage from "../../components/H-O-C/AnimPage";

const MyFriendsPage: FC = () => {
    return (
        <div className={'friends-page'}>
            <AnimPage className="friends-page__body container">
                friends
            </AnimPage>
        </div>
    );
};

export default MyFriendsPage;