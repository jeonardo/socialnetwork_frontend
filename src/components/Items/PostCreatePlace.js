import { useState } from "react"
import { useDispatch } from "react-redux"
import { postCreate } from "../../actions/postAction"
import MyButton from "./UI/Button/MyButton"
import MyInput from "./UI/Input/MyInput"

const PostCreatePlace = ({setVisible}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    function Create(e) {
        e.preventDefault()
        dispatch(postCreate({ title, content }))
        setContent("")
        setTitle("")
        setVisible()
    }

    return (
        <div>
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
            <MyButton onClick = {Create}>Create Post</MyButton>
            <MyButton onClick={() => setVisible()}>Return</MyButton>
        </div>
    )
}

export default PostCreatePlace