const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const onMessageTextUpdateActionCreator = (newMsg) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMsg: newMsg
});

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMsg;
            break;
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            break;
    }
    return state;
}

export default dialogsReducer;