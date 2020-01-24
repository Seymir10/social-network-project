const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const onMessageTextUpdateActionCreator = (newMsg) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMsg: newMsg
});

const dialogsReducer = (state, action) => {
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