import MyButton from "./UI/Button/MyButton"
import MyInput from "./UI/Input/MyInput"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { postEdit } from "../../actions/postAction"

const PostEditPlace = ({ setVisible }) => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postReducer)
    const post = useSelector((state) => state.modalReducer.item)

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    function Edit(e) {
        const id = post.id
        dispatch(postEdit({ id, title, content }, post))
        setTitle("")
        setContent("")
        setVisible()
    }
    
    return (
        <>
            <MyInput
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={onTitleChanged}
            />
            <MyInput
                type="text"
                placeholder="Post Content"
                value={content}
                onChange={onContentChanged}
            />
            <MyButton onClick={() => Edit()}>Edit Post</MyButton>
            <MyButton onClick={() => setVisible()}>Return</MyButton>
        </>
    )
}

export default PostEditPlace