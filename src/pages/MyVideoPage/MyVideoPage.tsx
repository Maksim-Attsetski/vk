import React, {FC} from 'react';
import './MyVideoPage.scss';
import AnimPage from "../../components/H-O-C/AnimPage";

const MyVideoPage: FC = () => {
    return (
        <div className={'video-page'}>
            <AnimPage className="video-page__body container">
                video
            </AnimPage>
        </div>
    );
};

export default MyVideoPage;