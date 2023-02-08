import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyUser, getUsers } from "../../actions/userAction"
import { logoutCheck } from "../../actions/authAction"
import UserListPlace from "../Items/UserListPlace";
import SearchPlace from "../Items/SearchPlace";
const UsersPage = ({ }) => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer)
    useEffect(async () => {
        dispatch(getMyUser())
        dispatch(logoutCheck())
        dispatch(getUsers())
    }, [])
    return (
        <div>
            <SearchPlace />
            <UserListPlace users={users} />
        </div>
    )
}
export default UsersPage