import React from 'react';
import './ProfilePic.css';

const ProfilePic = ({image}) => {
    return (
        <div className="picHolder">
            <div className="frame">
                <img src={image}/>
            </div>
        </div>
    );
};

export default ProfilePic;