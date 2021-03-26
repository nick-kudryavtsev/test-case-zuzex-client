import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState:{
        users: ['User1', 'User2'],
        messages: [
            {text: 'Hey DJ!', user: 'Logan'},
        ],
    },
    reducers: {
        addMessage(state, action){
            state.messages.push(action.payload)
        },
        addUser(state, action){
            state.messages.push(action.payload)
        },
    }
})

export default toolkitSlice.reducer
export const {addMessage, addUser} = toolkitSlice.actions