import React, {FC} from 'react';
// @ts-ignore
import biteMe from '../../assets/music/bite-me.mp3';

const Audio: FC = () => {
    return (
        <div className={'audio'}>
            <p>neffex</p>
            <audio  controls>
                <source src={biteMe} type="audio/mpeg"/>
            </audio>
        </div>
    );
};

export default Audio;