import chatsService from "../services/chatsService"
import { GET_CHATS_ERROR, GET_CHATS_SUCCESS, GET_MESSAGES_ERROR, GET_MESSAGES_SUCCESS, POST_CHAT_ERROR, POST_CHAT_SUCCESS, SEND_MESSAGE_ERROR, SEND_MESSAGE_SUCCESS, SET_LOADING_END, SET_LOADING_START } from "./types"

export const getChatList = () => async (dispatch) => {
    dispatch({ type: SET_LOADING_START })
    try {
        let d = await chatsService.getChats()
        dispatch({ type: GET_CHATS_SUCCESS, payload: d })
    }
    catch (e) {
        dispatch({ type: GET_CHATS_ERROR })
    }
    dispatch({ type: SET_LOADING_END })
}

export const sendMessage = (obj) => async (dispatch) => {
    try {
        let d = await chatsService.sendMessage(obj)
        dispatch({ type: SEND_MESSAGE_SUCCESS, payload: d })
    }
    catch (e) {
        dispatch({ type: SEND_MESSAGE_ERROR })
    }
}

export const sendMessageAndCheck = (obj) => async (dispatch) => {
    try {
        let d = await chatsService.sendMessageAndCheck(obj)
    }
    catch (e) {
    }
}

export const getMessages = (obj) => async (dispatch) => {
    try {
        let d = await chatsService.getMessagesFromChat(obj)
        dispatch({ type: GET_MESSAGES_SUCCESS, payload: d })
    }
    catch (e) {
        dispatch({ type: GET_MESSAGES_ERROR })
    }
}