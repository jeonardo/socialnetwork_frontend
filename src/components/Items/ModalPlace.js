import { useDispatch, useSelector } from "react-redux"
import { SET_MODAL_CREATE_FALSE, SET_MODAL_CREATE_TRUE, SET_MODAL_DELETE_FALSE, SET_MODAL_DELETE_TRUE, SET_MODAL_EDITFILE_FALSE, SET_MODAL_EDITFILE_TRUE, SET_MODAL_EDIT_FALSE, SET_MODAL_EDIT_TRUE } from "../../actions/types"
import DeletePlace from "./DeletePlace"
import PostCreatePlace from "./PostCreatePlace"
import MyButton from "./UI/Button/MyButton"
import MyModal from "./UI/MyModal/MyModal"
import PostEditPlace from "./PostEditPlace" 
import PostEditFilePlace from "./PostEditFilePlace"

const ModalPlace = () => {
    const dispatch = useDispatch()
    const canSee = useSelector((state) => state.modalReducer)

    function setModalCreate() {
        if (canSee.canSeeCreate === false) {
            dispatch({ type: SET_MODAL_CREATE_TRUE })
        }
        else {
            dispatch({ type: SET_MODAL_CREATE_FALSE })
        }
    }

    function setModalDelete() {
        if (canSee.canSeeDelete === false) {
            dispatch({ type: SET_MODAL_DELETE_TRUE })
        }
        else {
            dispatch({ type: SET_MODAL_DELETE_FALSE })
        }
    }

    function setModalEdit() {
        if (canSee.canSeeEdit === false) {
            dispatch({ type: SET_MODAL_EDIT_TRUE })
        }
        else {
            dispatch({ type: SET_MODAL_EDIT_FALSE })
        }
    }

    function setModalEditFile() {
        if (canSee.canSeeEditFile === false) {
            dispatch({ type: SET_MODAL_EDITFILE_TRUE })
        }
        else {
            dispatch({ type: SET_MODAL_EDITFILE_FALSE })
        }
    }

    return (
        <>
            <MyButton onClick={() => setModalCreate()}>Create new post</MyButton>
            
            <MyModal visible={canSee.canSeeCreate} setVisible={setModalCreate}>
                <PostCreatePlace setVisible={setModalCreate} />
            </MyModal>

            <MyModal visible={canSee.canSeeDelete} setVisible={setModalDelete}>
                <DeletePlace setVisible={setModalDelete} />
            </MyModal>

            <MyModal visible={canSee.canSeeEdit} setVisible={setModalEdit}>
                <PostEditPlace setVisible={setModalEdit}/>
            </MyModal>

            <MyModal visible={canSee.canSeeEditFile} setVisible={setModalEditFile}>
                <PostEditFilePlace setVisible={setModalEditFile}/>
            </MyModal>
        </>
    )
}
export default ModalPlace