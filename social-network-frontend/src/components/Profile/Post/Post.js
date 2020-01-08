import React from "react";
import post from "../Post/Post.module.css";

const Post = (props) => {
    return (
        <div>
            <li className={post.item}>
                <img alt="user img" src='https://p7.hiclipart.com/preview/312/283/679/avatar-computer-icons-user-profile-business-user-avatar.jpg'/>
                {props.message}
            </li>

            <div>
                <span>Like {props.likes} </span>
                <span>Dislike {props.dislikes} </span>
            </div>
        </div>
    )
}

export default Post