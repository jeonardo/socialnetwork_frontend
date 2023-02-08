import { SET_LOADING_END, SET_LOADING_START } from "../actions/types";

const IninitialData = { loading: false }

export default function (state = IninitialData, action) {
    const { type, payload } = action;

    switch (type) {

        case SET_LOADING_START:
            return {
                ...state,
                loading: true,
            }

        case SET_LOADING_END:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }
}