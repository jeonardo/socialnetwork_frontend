import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends, getMyUser } from "../../actions/userAction";
import UserListPlace from "../Items/UserListPlace";

const FriendsComponent = () => {
    const dispatch = useDispatch()
    useEffect(async () => {
        dispatch(getFriends())
        dispatch(getMyUser())
    }, [])
    const users = useSelector((state) => state.userReducer)
    return (
        <>
            <UserListPlace users={users} />
        </>
    )
}
export default FriendsComponent