import { useDispatch, useSelector } from "react-redux"
import UserItem from "../Items/UserItem/UserItem"
import MyModal from "../Items/UI/MyModal/MyModal"
import MessageCreatePlace from "./MessageCreatePlace"
import styles from "../Items/UserItem/UserItem.css"
import { SET_MODAL_MESSAGE_FALSE, SET_MODAL_MESSAGE_TRUE } from "../../actions/types"
const UserListPlace = (props) => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.loadingReducer)
    const currentUser = props.users.user
    const canSee = useSelector((state) => state.modalReducer)

    function setModalMessage(item) {
        if (canSee.canSeeMessage === false) {
            dispatch({ type: SET_MODAL_MESSAGE_TRUE, payload: item })
        }
        else {
            dispatch({ type: SET_MODAL_MESSAGE_FALSE, payload: item })
        }
    }

    return (
        <div>
            <MyModal visible={canSee.canSeeMessage} setVisible={setModalMessage}>
                <MessageCreatePlace setVisible={setModalMessage} />
            </MyModal>


            {loading.loading
                ?
                (
                    <span className="spinner-border spinner-border-sm"></span>
                )
                :
                ((props.users.users === null)
                    ?
                    (<div />)
                    :
                    (
                        (props.users.users.length === 0)
                            ?
                            (<h1>There is no users!</h1>)
                            :
                            ((props.users.users.length === 1)
                                ?
                                (<ul className="users-list">
                                    <UserItem
                                        user={props.users.users[0]}
                                        currentUser={currentUser}
                                        setVisible={setModalMessage}
                                    />
                                </ul>)
                                :
                                (<ul className="users-list">
                                    {props.users.usersFiltered.map((user, index) => {
                                        return <UserItem
                                            key={user.id}
                                            number={index + 1}
                                            user={user}
                                            currentUser={currentUser}
                                            setVisible={setModalMessage}
                                        />
                                    })}
                                </ul>))
                    ))
            }
        </div>
    )
}
export default UserListPlace