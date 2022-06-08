import React, {FC} from 'react';
import './MyMessagePage.scss';
import AnimPage from "../../components/H-O-C/AnimPage";

const MyMessagePage: FC = () => {
    return (
        <div className={'message-page'}>
            <AnimPage className="message-page__body container">
                message
            </AnimPage>
        </div>
    );
};

export default MyMessagePage;