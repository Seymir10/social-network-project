const ADD_POST = 'ADD-POST';
const UPDATE_POST_EXT = 'UPDATE-POST-TEXT';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
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
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Samir', user_photo: 'https://www.learnaf.com/assets/links/images/user.png'},
                {id: 2, name: 'Sakina', user_photo: 'https://www.learnaf.com/assets/links/images/user.png'},
                {id: 3, name: 'Gektor', user_photo: 'https://www.learnaf.com/assets/links/images/user.png'},
                {id: 4, name: 'Asad', user_photo: 'https://www.learnaf.com/assets/links/images/user.png'},
                {id: 5, name: 'Gulten', user_photo: 'https://www.learnaf.com/assets/links/images/user.png'},
                {id: 6, name: 'Aytach', user_photo: 'https://www.learnaf.com/assets/links/images/user.png'}
            ],

            messagesData: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'Hey! Wassup?'},
                {id: 3, message: 'Tired...((('}
            ],

            newMessageText: ''


        },

        sidebarPage: {
            friends: [
                {
                    id: 1,
                    name: 'Leysan Akhmedova',
                    user_photo: 'https://www.freeiconspng.com/uploads/flat-face-icon-23.png'
                },
                {
                    id: 2,
                    name: 'Yuliya Manina',
                    user_photo: 'https://www.freeiconspng.com/uploads/flat-face-icon-23.png'
                },
                {
                    id: 3,
                    name: 'Alsu Fattakhova',
                    user_photo: 'https://www.freeiconspng.com/uploads/flat-face-icon-23.png'
                }
            ]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State has been changed');
    },

    dispatch(action) {

        debugger
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this.getState().profilePage.newPostText,
                likes: 0,
                dislikes: 0,
            }

            this.getState().profilePage.postsData.unshift(newPost);
            this._callSubscriber(this.getState());
            this.getState().profilePage.newPostText = '';

        } else if (action.type === UPDATE_POST_EXT) {
            this.getState().profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        } else if (action.type === UPDATE_MESSAGE_TEXT){
            this.getState().dialogsPage.newMessageText = action.newMsg;
            this._callSubscriber(this.getState());
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this.getState().dialogsPage.newMessageText
            }

            this.getState().dialogsPage.messagesData.push(newMessage);
            this._callSubscriber(this.getState());
            this.getState().dialogsPage.newMessageText = '';
        }
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const onPostUpdateActionCreator = (text) => ({
    type: UPDATE_POST_EXT, newText: text
});

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const onMessageTextUpdateActionCreator = (newMsg) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMsg: newMsg
});



window.store = store;
export default store;

