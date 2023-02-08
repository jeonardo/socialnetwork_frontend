import { DELETE_POST_ERROR, DELETE_POST_SUCCESS, FILTER_BY_VALUE, FILTER_BY_VALUE_POST, GET_POSTS_ERROR, GET_POSTS_SUCCESS, POST_COMMENT_ERROR, POST_COMMENT_SUCCESS, POST_POST_ERROR, POST_POST_SUCCESS, PUT_POSTFILE_ERROR, PUT_POSTFILE_SUCCESS, PUT_POST_ERROR, PUT_POST_SUCCESS, SEND_LIKE_ERROR, SEND_LIKE_SUCCESS } from "../actions/types";

const IninitialData = { posts: null }

export default function (state = IninitialData, action) {
  const { type, payload } = action;

  switch (type) {

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
      };

    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: null,
      };

    case POST_POST_SUCCESS:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };

    case POST_POST_ERROR:
      return {
        ...state,
        posts: state.posts,
      };

    case PUT_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(p => {
          return p.id === action.payload.id ? action.payload : p;
        })
      };

    case PUT_POST_ERROR:
      return {
        ...state,
        posts: state.posts,
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload),
      };

    case DELETE_POST_ERROR:
      return {
        ...state,
        posts: state.posts,
      };

    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(p => {
          return p.id === action.payload.postId ? (
            { ...p, comments: [...p.comments, action.payload] }
          ) : p;
        })
      };

    case POST_COMMENT_ERROR:
      return {
        ...state,
        posts: state.posts,
      };

    case SEND_LIKE_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(p => {
          return p.id === action.payload.id.id ? (
            { ...p, likes: action.payload.d }
          ) : p;
        })
      };

    case SEND_LIKE_ERROR:
      return {
        ...state,
        posts: state.posts,
      };

    default:
      return state;
  }
}