const ADD_POST = 'ADD-POST';
const UPDATE_POST_EXT = 'UPDATE-POST-TEXT';

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const onPostUpdateActionCreator = (text) => ({
    type: UPDATE_POST_EXT, newText: text
});


let initialState = {
    postsData: [
        {
            id: 1,
            message: 'Hi how are you?',
            likes: 4,
            dislikes: 1,
        },
        {
            id: 2,
            message: 'I\'ve been graduated from university!',
            likes: 12,
            dislikes: 2,
        },
        {
            id: 3,
            message: 'The weather sucks...',
            likes: 12,
            dislikes: 11,
        }
    ],

    newPostText: ''
}


const profileReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
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