let rerenderEntireTree = () => {
    console.log('State has been changed');
}

let state = {
    profilePage : {
        postsData : [
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

        newPostText : ''
    },

    dialogsPage: {
        dialogsData : [
            {id: 1, name: 'Samir', user_photo : 'https://www.learnaf.com/assets/links/images/user.png'},
            {id : 2, name: 'Sakina', user_photo : 'https://www.learnaf.com/assets/links/images/user.png'},
            {id : 3, name: 'Gektor', user_photo : 'https://www.learnaf.com/assets/links/images/user.png'},
            {id : 4, name: 'Asad', user_photo : 'https://www.learnaf.com/assets/links/images/user.png'},
            {id : 5, name: 'Gulten', user_photo : 'https://www.learnaf.com/assets/links/images/user.png'},
            {id : 6, name: 'Aytach', user_photo : 'https://www.learnaf.com/assets/links/images/user.png'}
        ],

        messagesData : [
            {id: 1, message: 'Hey'},
            {id: 2, message: 'Hey! Wassup?'},
            {id: 3, message: 'Tired...((('}
        ],

        newMessageText: ''


    },

    sidebarPage: {
        friends: [
            {id: 1, name: 'Leysan Akhmedova', user_photo: 'https://www.freeiconspng.com/uploads/flat-face-icon-23.png'},
            {id: 2, name: 'Yuliya Manina', user_photo: 'https://www.freeiconspng.com/uploads/flat-face-icon-23.png'},
            {id: 3, name:'Alsu Fattakhova', user_photo: 'https://www.freeiconspng.com/uploads/flat-face-icon-23.png'}
            ]
    }
}
window.state = state;
export let addPost = (postMessage) => {
    let newPost = {
        id : 4,
        message: postMessage,
        likes: 0,
        dislikes: 0,
    }

    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
}

export let updatePostText = (postText) => {
    state.profilePage.newPostText = postText;
    rerenderEntireTree(state);
}

export let sendMessage = (newMessageText) => {
    let newMessage = {
        id: 4,
        message: newMessageText
    }

    state.dialogsPage.messagesData.push(newMessage);
    rerenderEntireTree(state);
    state.dialogsPage.newMessageText = '';
}

export let updateNewMessageText = (newMes) => {
    state.dialogsPage.newMessageText = newMes;
    rerenderEntireTree(state);
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;

