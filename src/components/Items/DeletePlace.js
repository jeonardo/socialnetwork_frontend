import { useDispatch, useSelector } from "react-redux"
import { postDelete } from "../../actions/postAction"
import MyButton from "./UI/Button/MyButton"

const DeletePlace = ({ setVisible }) => {
    const dispatch = useDispatch()
    const id = useSelector((state) => state.modalReducer.itemId)
    function Delete(id) {
        dispatch(postDelete(id))
        setVisible()
    }

    return (
        <>
            <h1>Are you sure?</h1>
            <MyButton onClick={() => Delete(id)}>Delete</MyButton>
            <MyButton onClick={() => setVisible()}>No</MyButton>
        </>
    )
}
export default DeletePlace