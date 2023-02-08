import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendsRequests, getMyUser } from "../../actions/userAction";
import UserListPlace from "../Items/UserListPlace";

const RequestPage = () => {
    const dispatch = useDispatch()
    useEffect(async () => {
        dispatch(getFriendsRequests())
        dispatch(getMyUser())
    }, [])
    const users = useSelector((state) => state.userReducer)
    return (
        <>
            <UserListPlace users={users} />
        </>
    )
}
export default RequestPage