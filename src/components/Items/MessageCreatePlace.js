import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createChat, sendMessageAndCheck } from "../../actions/chatAction"
import { postCreate } from "../../actions/postAction"
import MyButton from "./UI/Button/MyButton"
import MyInput from "./UI/Input/MyInput"

const PostCreatePlace = ({setVisible}) => {
    const dispatch = useDispatch()
    const [content, setContent] = useState("")
    const onContentChanged = e => setContent(e.target.value)
const getterId = useSelector((state) => state.modalReducer)

    function Create(e) {
        e.preventDefault()
        dispatch(sendMessageAndCheck({id: getterId.item, content}))
        setContent("")
        setVisible()
    }

    return (
        <div>
            <MyInput
                type="text"
                placeholder="Post Content"
                value={content}
                onChange={onContentChanged}
            />
            <MyButton onClick = {Create}>Send message</MyButton>
            <MyButton onClick={() => setVisible()}>Return</MyButton>
        </div>
    )
}

export default PostCreatePlace