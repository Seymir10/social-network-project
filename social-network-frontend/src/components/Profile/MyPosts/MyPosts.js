import React from "react";
import my_posts from './MyPosts.module.css'
import Post from "../Post/Post";

const MyPosts = (props) => {


    return (
        <main className={my_posts.postsBlock}>
            <div>
                <h3>My Posts</h3>
                <div><textarea></textarea></div>
                <div><button>post</button></div>
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