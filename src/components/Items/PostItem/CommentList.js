import CommentItem from "./CommentItem"
const CommentList = (props) => {
    return (
        <div>
            {
                (props.comments === null)
                    ?
                    (<div />)
                    :
                    (
                        (props.comments.length === 0)
                            ?
                            (<h1>There is no comments!</h1>)
                            :
                            ((props.comments.length === 1)
                                ?
                                (
                                    <CommentItem
                                        key={props.comments[0].id}
                                        comment={props.comments[0]}
                                    />
                                )
                                :
                                (<ul>
                                    {props.comments.map((comment, index) => {
                                        return <CommentItem
                                            key={comment.id}
                                            comment={comment}
                                        />
                                    })}
                                </ul>))
                    )
            }
        </div>
    )
}

export default CommentList