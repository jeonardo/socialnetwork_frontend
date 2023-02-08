import {
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    SET_LOADING_START,
    SET_LOADING_END,
    FILTER_BY_VALUE_USER,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_ERROR
} from "./types";
import UsersService from "../services/userService"

export const getUsers = () => async (dispatch) => {
    dispatch({ type: SET_LOADING_START })
    try {
        let d = await UsersService.getUsers()
        dispatch({ type: GET_USERS_SUCCESS, payload: d })
    }
    catch (e) {
        dispatch({ type: GET_USERS_ERROR })
    }
    dispatch({ type: SET_LOADING_END })
}

export const getMyUser = () => async (dispatch) => {
    dispatch({ type: SET_LOADING_START })
    try {
        let d = await UsersService.getMyUser()
        dispatch({ type: GET_USER_SUCCESS, payload: d })
    }
    catch (e) {
        dispatch({ type: GET_USER_ERROR })
    }
    dispatch({ type: SET_LOADING_END })
}

export const getFriends = () => async (dispatch) => {
    dispatch({ type: SET_LOADING_START })
    try {
        let d = await UsersService.getMyFriends()
        dispatch({ type: GET_FRIENDS_SUCCESS, payload: d })
    }
    catch (e) {
        dispatch({ type: GET_FRIENDS_ERROR })
    }
    dispatch({ type: SET_LOADING_END })
}

export const getFriendsRequests = () => async (dispatch) => {
    dispatch({ type: SET_LOADING_START })
    try {
        let d = await UsersService.getMyFriendsRequests()
        dispatch({ type: GET_FRIENDS_SUCCESS, payload: d })
    }
    catch (e) {
        dispatch({ type: GET_FRIENDS_ERROR })
    }
    dispatch({ type: SET_LOADING_END })
}

export const filterByValue = (obj) => async (dispatch) => {
    dispatch({ type: SET_LOADING_START })
    try {
        dispatch({ type: FILTER_BY_VALUE_USER, payload: obj })
    }
    catch (e) {
        console.log(e)
    }
    dispatch({ type: SET_LOADING_END })
}

export const addFriend = (obj) => async (dispatch) => {
    try {
        await UsersService.addFriend(obj)
    }
    catch (e) {
        console.log(e)
    }
}

export const setProfileSetting = (obj) => async (dispatch) => {
    try {
        let d = await UsersService.setProfileSetting(obj)
    }
    catch (e) {
        console.log(e)
    }
}