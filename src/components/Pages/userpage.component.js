import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMyPosts } from "../../actions/postAction"
import UserItem from "../Items/UserItem/UserItem"
import { logoutCheck } from "../../actions/authAction"
import { getMyUser } from "../../actions/userAction"
import PostListPlace from "../Items/PostListPlace"
import ModalPlace from "../Items/ModalPlace";
const UserPage = ({ }) => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer)
    const posts = useSelector((state) => state.postReducer)
    useEffect(async () => {
        dispatch(logoutCheck())
        dispatch(getMyPosts())
        dispatch(getMyUser())
    }, [])
    return (
        <div className="user-page-wrapper">
            {(users.user)
                ?
                (<ul className="user-page">
                    <UserItem user={users.user} currentUser={users.user} /></ul>)
                :
                (<div />)}
            <ModalPlace />
            <PostListPlace posts={posts} />
        </div>
    )
}
export default UserPage