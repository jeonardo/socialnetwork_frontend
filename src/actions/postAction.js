import {
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    POST_POST_SUCCESS,
    POST_POST_ERROR,
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR,
    SET_LOADING_END,
    SET_LOADING_START,
    PUT_POST_SUCCESS,
    PUT_POST_ERROR,
    SEND_LIKE_SUCCESS,
    SEND_LIKE_ERROR,
} from "./types";
import PostsService from "../services/postService";

export const getPosts = () => async (dispatch) => {
    dispatch({ type: SET_LOADING_START })
    try {
        let d = await PostsService.getItems()
        dispatch({ type: GET_POSTS_SUCCESS, payload: d })
    }
    catch (e) {
        dispatch({ type: GET_POSTS_ERROR })
    }
    dispatch({ type: SET_LOADING_END })
}

export const getMyPosts = () => async (dispatch) => {
    dispatch({ type: SET_LOADING_START })
    try {
        let d = await PostsService.getMyItems()
        dispatch({ type: GET_POSTS_SUCCESS, payload: d })
    }
    catch (e) {
        dispatch({ type: GET_POSTS_ERROR })
    }
    dispatch({ type: SET_LOADING_END })
}

export const postCreate = (obj) => async (dispatch) => {
    dispatch({ type: SET_LOADING_START })
    try {
        let d = await PostsService.postCreate(obj)
        dispatch({ type: POST_POST_SUCCESS, payload: d.data })
    }
    catch (e) {
        dispatch({ type: POST_POST_ERROR })
    }
    dispatch({ type: SET_LOADING_END })
}

export const postEdit = (obj, post) => async (dispatch) => {
    try {
        let d = await PostsService.postEdit(obj)
        post.title = obj.title
        post.content = obj.content
        dispatch({ type: PUT_POST_SUCCESS, payload: post })
    }
    catch (e) {
        dispatch({ type: PUT_POST_ERROR })
    }
}

export const postEditFile = (obj, post) => async (dispatch) => {
    try {
        let d = await PostsService.postEditFile(obj)
    }
    catch (e) {
        console.log(e)
    }
}

export const postDelete = (id) => async (dispatch) => {
    dispatch({ type: SET_LOADING_START })
    try {
        await PostsService.postDelete(id)
        dispatch({ type: DELETE_POST_SUCCESS, payload: id })
    }
    catch (e) {
        dispatch({ type: DELETE_POST_ERROR })
    }
    dispatch({ type: SET_LOADING_END })
}

export const postLike = (id) => async (dispatch) => {
    try {
        let d = await PostsService.iLikeIt(id)
        dispatch({ type: SEND_LIKE_SUCCESS, payload: { d, id } })
    }
    catch (e) {
        dispatch({ type: SEND_LIKE_ERROR })
    }
}
