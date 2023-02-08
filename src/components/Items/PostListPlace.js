import { useSelector } from "react-redux"
import PostItem from "../Items/PostItem/PostItem"
const PostListPlace = (props) => {
    const loading = useSelector((state) => state.loadingReducer)
    return (
        <div className="posts-list-wrapper">
            {loading.loading
                ?
                (
                    <span className="spinner-border spinner-border-sm load-spinner"></span>
                )
                :
                ((props.posts.posts === null)
                    ?
                    (<div />)
                    :
                    (
                        (props.posts.posts.length === 0)
                            ?
                            (<h1>There is no posts!</h1>)
                            :
                            ((props.posts.posts.length === 1)
                                ?
                                (
                                    <PostItem post={props.posts.posts[0]} />
                                )
                                :
                                (<ul>
                                    {props.posts.posts.map((post, index) => {
                                        return <PostItem
                                            key={post.id}
                                            number={index + 1}
                                            post={post}
                                        />
                                    })}
                                </ul>))
                    ))
            }
        </div>
    )
}

export default PostListPlace