import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getPosts } from "../../actions/postAction"
import PostListPlace from "../Items/PostListPlace"
import ModalPlace from "../Items/ModalPlace"
import { getMyUser } from "../../actions/userAction";
const PostsPage = () => {
    const dispatch = useDispatch()
    useEffect(async () => {
        dispatch(getMyUser())
        dispatch(getPosts())
    }, [])
    const posts = useSelector((state) => state.postReducer)
    const IsAuth = useSelector((state) => state.authReducer.isLoggedIn)
    return (
        <div className="posts-block">
            {IsAuth
                ?
                (<ModalPlace />)
                :
                (<div />)}
            <PostListPlace posts={posts} />
        </div>
    )
}
export default PostsPage