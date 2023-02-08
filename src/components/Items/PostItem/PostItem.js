import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./PostItem.css";
import MyButton from "../UI/Button/MyButton"
import MyInput from "../UI/Input/MyInput"
import { SET_MODAL_DELETE_FALSE, SET_MODAL_DELETE_TRUE, SET_MODAL_EDITFILE_FALSE, SET_MODAL_EDITFILE_TRUE, SET_MODAL_EDIT_FALSE, SET_MODAL_EDIT_TRUE } from "../../../actions/types";
import useInput from "../../../hooks/useInput"
import { CreateComment } from "../../../actions/commentAction"
import CommentList from "./CommentList";
import { postLike } from "../../../actions/postAction";

const PostItem = ({ post }) => {

    const { title, content, createdOn, userName, id, comments, pictureUrl } = post;
    let TimeD = createdOn.substring(0, 10)
    let TimeT = createdOn.substring(12, 19)

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postReducer)
    const IsAuth = useSelector((state) => state.authReducer.isLoggedIn)
    const user = useSelector((state) => state.userReducer)
    const canSee = useSelector((state) => state.modalReducer)
    const justComment = useInput('')

    const Liker = useRef()

    function openComment(event) {
        const comments = event.target.closest('.post-footer').children[1];
        comments.classList.toggle('display-block');
    }

    function setPhoto() {
        if (IsAuth) {
            dispatch(postLike({ id }))
        }
    }

    function setDeleteModalView(id) {
        if (canSee.canSeeDelete === false) {
            dispatch({ type: SET_MODAL_DELETE_TRUE, payload: id })
        }
        else {
            dispatch({ type: SET_MODAL_DELETE_FALSE, payload: id })
        }
    }

    function setEditModalView(id) {
        if (canSee.canSeeEdit === false) {
            dispatch({ type: SET_MODAL_EDIT_TRUE, payload: post })
        }
        else {
            dispatch({ type: SET_MODAL_EDIT_FALSE, payload: post })
        }
    }

    function setEditFileModalView(id) {
        if (canSee.canSeeEdit === false) {
            dispatch({ type: SET_MODAL_EDITFILE_TRUE, payload: post })
        }
        else {
            dispatch({ type: SET_MODAL_EDITFILE_FALSE, payload: post })
        }
    }

    function writeComment({ justComment, id }) {
        dispatch(CreateComment({ justComment, id }))
    }

    return (
        <div className="container">
            <div className="post">
                <div className="post-wrapper">
                    <div className="wrapper">
                        <div className="post-function post-controller">
                            {((user.user != null) && (user.user.username === userName))
                                ?
                                (<div className="post-function">
                                    <MyButton onClick={() => setDeleteModalView(id)}>Delete</MyButton>
                                    <MyButton onClick={() => setEditModalView(id)}>Edit</MyButton>
                                    <MyButton onClick={() => setEditFileModalView(id)}>EditFile</MyButton>
                                </div>)
                                :
                                (<div />)}
                        </div>
                        <div className="post-image">
                            {(pictureUrl != null)
                                ?
                                (<img src={`https://localhost:5000/root/posts/${userName}/${pictureUrl}`} />)
                                :
                                <div />}
                        </div>
                    </div>
                    <div className="post-content">
                        <div className="post-header">
                            <h1>{title}</h1>
                            <div className="post-meta">
                                <time dateTime="2019-04-01">Created on {TimeD} in {TimeT}</time>
                                <span className="author">By {userName}</span>
                            </div>
                        </div>
                        <p>{content}
                        </p>
                    </div>
                </div>
                <div className='post-footer'>
                    <div>
                        <img className="my-like" src={`https://localhost:5000/root/default/heart.svg`} onClick={() => setPhoto()} width="50" height="50" />
                        <h1>Likes:{post.likes.length}</h1>
                        <MyButton onClick={(event) => openComment(event)}>Comment</MyButton>
                    </div>
                    <div className="comment-wrapper">
                        <CommentList
                            comments={comments}
                        />
                        {IsAuth
                            ?
                            (<div className="comment-controller">
                                <MyInput {...justComment}></MyInput>
                                <MyButton onClick={() => writeComment({ justComment, id })}>Send</MyButton>
                            </div>)
                            :
                            (<div />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostItem