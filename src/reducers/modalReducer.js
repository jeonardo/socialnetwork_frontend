import { SET_MODAL_CREATE_FALSE, SET_MODAL_CREATE_TRUE, SET_MODAL_DELETE_FALSE, SET_MODAL_DELETE_TRUE, SET_MODAL_EDITFILE_FALSE, SET_MODAL_EDITFILE_TRUE, SET_MODAL_EDIT_FALSE, SET_MODAL_EDIT_TRUE, SET_MODAL_MESSAGE_FALSE, SET_MODAL_MESSAGE_TRUE } from "../actions/types";

const initialState = { canSeeMessage: false, canSeeCreate: false, canSeeDelete: false, canSeeEdit: false, canSeeEditFile: false, itemId: 0, item: { id: 0, title: "", content: "", pictureUrl: "" } };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_MODAL_CREATE_TRUE:
            return {
                ...state,
                canSeeCreate: true,
            };

        case SET_MODAL_CREATE_FALSE:
            return {
                ...state,
                canSeeCreate: false,
            };

        case SET_MODAL_DELETE_TRUE:
            return {
                ...state,
                canSeeDelete: true,
                itemId: payload
            };

        case SET_MODAL_DELETE_FALSE:
            return {
                ...state,
                canSeeDelete: false,
                itemId: payload
            };

        case SET_MODAL_EDIT_TRUE:
            return {
                ...state,
                canSeeEdit: true,
                item: payload
            };

        case SET_MODAL_EDIT_FALSE:
            return {
                ...state,
                canSeeEdit: false,
                item: { id: 0, title: "", content: "", pictureUrl: "" }
            };

        case SET_MODAL_EDITFILE_TRUE:
            return {
                ...state,
                canSeeEditFile: true,
                item: payload
            };

        case SET_MODAL_EDITFILE_FALSE:
            return {
                ...state,
                canSeeEditFile: false,
                item: { id: 0, title: "", content: "", pictureUrl: "" }
            };

        case SET_MODAL_MESSAGE_TRUE:
            return {
                ...state,
                canSeeMessage: true,
                item: payload
            };

        case SET_MODAL_MESSAGE_FALSE:
            return {
                ...state,
                canSeeMessage: false,
                item: { id: 0, title: "", content: "", pictureUrl: "" }
            };

        default:
            return state;
    }
}
