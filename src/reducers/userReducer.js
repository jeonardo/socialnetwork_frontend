import { GET_USERS_SUCCESS, GET_USERS_ERROR, GET_USER_SUCCESS, GET_USER_ERROR, FILTER_BY_VALUE, FILTER_BY_VALUE_USER, GET_FRIENDS_SUCCESS, GET_FRIENDS_ERROR, ANSWER_ON_FRIENDSHIP } from "../actions/types"

const IninitialData = { users: null, user: null }
export default function (state = IninitialData, action) {
    const { type, payload } = action;

    switch (type) {

        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: payload,
                usersFiltered: payload
            }

        case GET_USERS_ERROR:
            return {
                ...state,
                users: null,
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                user: payload,
            }

        case GET_USER_ERROR:
            return {
                ...state,
                user: null,
            }

        case GET_FRIENDS_SUCCESS:
            return {
                ...state,
                users: payload,
            }

        case GET_FRIENDS_ERROR:
            return {
                ...state,
                users: null,
            }

        case FILTER_BY_VALUE_USER:
            let newState = Object.assign({}, state);
            let value = action.payload.value.toLowerCase();
            let filteredValues = state.users.filter(obj => obj.username.toLowerCase().includes(value))
            return {
                ...newState,
                usersFiltered: filteredValues
            }

        case ANSWER_ON_FRIENDSHIP:
            return {
                ...state,
                users: state.users.filter(user => user.userId !== payload),
            }

        default:
            return state;
    }
}

