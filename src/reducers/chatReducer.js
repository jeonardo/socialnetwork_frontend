import { GET_CHATS_ERROR, GET_CHATS_SUCCESS, GET_MESSAGES_ERROR, GET_MESSAGES_SUCCESS, POST_CHAT_ERROR, POST_CHAT_SUCCESS, SEND_MESSAGE_ERROR, SEND_MESSAGE_SUCCESS } from "../actions/types";

const IninitialData = { chats: null, messagesList: null }

export default function (state = IninitialData, action) {
    const { type, payload } = action;

    switch (type) {

        case GET_CHATS_SUCCESS:
            return {
                ...state,
                chats: payload,
            }

        case GET_CHATS_ERROR:
            return {
                ...state,
                chats: state.chats,
            }

        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                messagesList: payload
            }

        case GET_MESSAGES_ERROR:
            return {
                ...state,
                messagesList: []
            }

        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                messagesList: [...state.messagesList, payload]
            }

        case SEND_MESSAGE_ERROR:
            return {
                ...state,
                messagesList: state.messagesList,
            }

        default:
            return state;
    }
}