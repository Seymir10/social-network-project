import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


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
        this.getState().profilePage = profileReducer(this.getState().profilePage, action);
        this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
        this._callSubscriber(this.getState());
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;
export default store;

