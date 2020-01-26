let initialState = {
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

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;