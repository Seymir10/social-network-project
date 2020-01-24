const ADD_POST = 'ADD-POST';
const UPDATE_POST_EXT = 'UPDATE-POST-TEXT';

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const onPostUpdateActionCreator = (text) => ({
    type: UPDATE_POST_EXT, newText: text
});


const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: this.getState().profilePage.newPostText,
                likes: 0,
                dislikes: 0,
            }
            state.postsData.unshift(newPost);
            state.newPostText = '';
            break;

        case UPDATE_POST_EXT:
            state.newPostText = action.newText;
            break;
    }

    return state;
}

export default profileReducer;