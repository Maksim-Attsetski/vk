import React, {FC} from 'react';
import './AboutMePage.scss';
import AnimPage from "../../components/H-O-C/AnimPage";

const AboutMePage: FC = () => {
    return (
        <div className={'about-me'}>
            <AnimPage className="about-me__body">
                about me
            </AnimPage>
        </div>
    );
};

export default AboutMePage;