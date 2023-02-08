import { POST_COMMENT_ERROR, POST_COMMENT_SUCCESS, SET_LOADING_END, SET_LOADING_START } from "./types"
import CommentsService from "../services/commentService"
export const CreateComment = (obj) => async (dispatch) => {
    try {
        let d = await CommentsService.CreateComment(obj)
        dispatch({ type: POST_COMMENT_SUCCESS, payload: d })
    }
    catch (e) {
        dispatch({ type: POST_COMMENT_ERROR })
    }
}