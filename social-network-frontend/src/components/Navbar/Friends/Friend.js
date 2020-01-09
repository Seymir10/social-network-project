import React from "react";
import style from './../Navbar.module.css'


const Friend = (props) => {
    return (
        <div className={style.friend}>
            <div><span>{props.name}</span></div>
            <div>
                <img alt='friend profile' src={props.photo} />
            </div>
        </div>
    )
}

export default Friend;