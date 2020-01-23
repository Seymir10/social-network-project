import React from "react";
import my_posts from './MyPosts.module.css'
import Post from "../Post/Post";
import {addPostActionCreator, onPostUpdateActionCreator} from "../../../redux/store";



const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostUpdate = () => {
        let newText = newPostElement.current.value;
        props.dispatch(onPostUpdateActionCreator(newText));
    }

    return (
        <main className={my_posts.postsBlock}>
            <div>
                <h3>My Posts</h3>
                <div><textarea ref={newPostElement} onChange={onPostUpdate} value={props.newPostText}/></div>
                <div><button onClick={addPost}>post</button></div>
                <div>
                    New Post
                </div>

                <div className={my_posts.posts}>
                    <ul>
                        {
                            props.postsData.map(p => {
                                return <Post message={p.message} likes={p.likes} dislikes={p.dislikes}/>
                            })
                        }

                    </ul>
                </div>
            </div>
        </main>
    )
}

export default MyPosts;