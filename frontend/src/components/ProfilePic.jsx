import React from 'react';
import './ProfilePic.css';

const ProfilePic = ({avatar}) => {
    return (
        <div className="picHolder">
            <div className="frame">
                <img src={avatar}/>
            </div>
        </div>
    );
};

export default ProfilePic;