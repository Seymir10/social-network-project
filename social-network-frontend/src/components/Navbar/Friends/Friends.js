import React from "react";
import Friend from "./Friend";
import style from './../Navbar.module.css'

const Friends = (props) => {

    return (
        <div className={style.friends}>
            {
                props.friends.map(f => {
                    return <Friend id={f.id} name={f.name} photo={f.user_photo}/>
                })
            }
        </div>
    )
}

export default Friends;