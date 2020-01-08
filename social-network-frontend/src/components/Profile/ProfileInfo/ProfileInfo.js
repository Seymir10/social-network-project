import React from "react";
import profileInfo from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={profileInfo.bgd_wallpaper}>
                <img alt="background img" src='https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/8ca0b69e-c8e0-4af0-ba77-708ded2c0e5c/STBI_Hero_Image_1600x480.jpg?'/>
            </div>

            <div className={profileInfo.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;