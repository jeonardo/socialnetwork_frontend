const CommentItem = ({ comment }) => {
    const { commentText, createdOn, userName } = comment;
    let TimeD = createdOn.substring(0, 10)
    let TimeT = createdOn.substring(12, 19)
    return (
        <div className="comment">
            <h5>{userName} (Created on {TimeD} in {TimeT})</h5>
            <div className="deepline"/>
            <div>{commentText}</div>
        </div>
    )
}
export default CommentItem