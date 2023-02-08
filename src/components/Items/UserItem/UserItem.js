import userService from '../../../services/userService';
import MyButton from "../UI/Button/MyButton"
import { useDispatch, useSelector } from "react-redux"
import { ANSWER_ON_FRIENDSHIP } from '../../../actions/types';
const UserItem = (props) => {

    const myUser = useSelector((state) => state.userReducer.user)
    const { email, name, surname, sex, id, isFriend, status, profilePictureUrl, username, friendUserId } = props.user;
    let { userId } = props.user;
    const dispatch = useDispatch()

    async function changeBtn({ event, id }) {
        event.target.innerHTML = 'Request has been sent';
        event.target.setAttribute("disabled", "disabled");
        await userService.addFriend(id)
    }

    async function changeFriendTrue({ event }, id) {
        event.target.innerHTML = 'Request has been sent';
        event.target.setAttribute("disabled", "disabled");
        await userService.addFriendAgree({ userId: userId, status: 1 })
        dispatch({ type: ANSWER_ON_FRIENDSHIP, payload: userId })
    }

    async function changeFriendFalse({ event }, id) {
        event.target.innerHTML = 'Request has been sent';
        event.target.setAttribute("disabled", "disabled");
        await userService.addFriendAgree({ userId: userId, status: 2 })
        dispatch({ type: ANSWER_ON_FRIENDSHIP, payload: userId })
    }

    async function deleteFriend({ event }) {
        event.target.innerHTML = 'Request has been sent';
        event.target.setAttribute("disabled", "disabled");
        if (userId == null) {
            userId = props.user.id
        }
        if (myUser.id === friendUserId)
        {
            await userService.friendDelete({ userId: userId })
        }
        else
        {
            await userService.friendDelete({ userId: friendUserId })
        }
        
    }

    return (
        <div className='user-item'>
            <div>
                <div>
                    {(profilePictureUrl == null)
                        ?
                        (<img src={`https://localhost:5000/root/default/avatar.png`} width="200" height="250" />)
                        :
                        (<img src={`https://localhost:5000/root/users/${username}/${profilePictureUrl}`} width="200" height="250" />)}
                </div>
                <div><h3 className="mb-0">{email}</h3></div>
                <div>{name} {surname}</div>
                <div>{sex}</div>
                <div className='user-controller'>
                    {((status === 0) && ((props.currentUser) && (props.currentUser.email != email)))
                        ?
                        (<>
                            <MyButton onClick={(event) => changeFriendTrue({ event, id })}>Become Friends</MyButton>
                            <MyButton onClick={(event) => changeFriendFalse({ event, id })}>Say NO</MyButton>
                        </>)
                        :
                        (((status === 1) && ((props.currentUser) && (props.currentUser.email != email)))
                            ?
                            (<>
                                <MyButton onClick={(event) => deleteFriend({ event, id })}>Delete friend</MyButton>
                                <MyButton onClick={() => props.setVisible(id)}>Send message</MyButton>
                            </>) :
                            (((props.currentUser) && (props.currentUser.email != email))
                                ?
                                (<>
                                    <MyButton onClick={(event) => changeBtn({ event, id })}>Add friend</MyButton>
                                    <MyButton onClick={() => props.setVisible(id)}>Send message</MyButton>
                                </>)
                                :
                                (<div />)))
                    }
                </div>
            </div>
        </div>
    )
}
export default UserItem


