import React, {FC} from 'react';
import './MyMusicPage.scss';
import AnimPage from "../../components/H-O-C/AnimPage";

const MyMusicPage: FC = () => {
    return (
        <div className={'music-page'}>
            <AnimPage className="music-page__body container">
                music
            </AnimPage>
        </div>
    );
};

export default MyMusicPage;