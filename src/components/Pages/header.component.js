import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/authAction"
import { getMyUser } from "../../actions/userAction";

const HeaderComponent = () => {
    const dispatch = useDispatch();
    const IsAuth = useSelector((state) => state.authReducer.isLoggedIn)
    const user = useSelector((state) => state.userReducer)
    const logOut = (e) => {
        e.preventDefault()
        dispatch(logout())
    }
    useEffect(() => {
        dispatch(getMyUser())
    }, [])
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
                Minimalizm.com
            </Link>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/home"} className="nav-link">
                        NewsList
                    </Link>
                </li>
            </div>
            {IsAuth
                ?
                (
                    <div className="navbar-nav ml-auto nav-if-auth">
                        <li className="nav-item nav-all-users">
                            <Link to={"/users"} className="nav-link">
                                <span>AllUsers</span>
                            </Link>
                            <div className="nav-all-users-block">
                                <Link to="/friends" className="nav-link">
                                    Friends
                                </Link>
                                <Link to="/requests" className="nav-link">
                                    FriendsRequests
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to={"/userpage"} className="nav-link">
                                MyPage
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/chatspage"} className="nav-link">
                                Chatspage
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/messenger"} className="nav-link">
                                <a className="floating-button">JoinCommonChat</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-wrapper">
                                {user.user ? (<span>{user.user.username}</span>) : (<div />)}
                                {(user.user != null)
                                    ?
                                    (
                                        (user.user.profilePictureUrl == null)
                                            ?
                                            (<img src={`https://localhost:5000/root/default/avatar.png`} className="nav-profile" />)
                                            :
                                            (<img src={`https://localhost:5000/root/users/${user.user.username}/${user.user.profilePictureUrl}`} className="nav-profile" />)
                                    )
                                    :
                                    (<div>Who are you?</div>)
                                }
                                <div className="nav-profile-block">
                                    <Link to={"/profile"} className="nav-link">
                                        ProfileSettings
                                    </Link>
                                    <a href="/login" className="nav-link" onClick={logOut}>
                                        LogOut
                                    </a>
                                </div>

                            </div>
                        </li>
                    </div>
                )
                :
                (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                )}
        </nav>
    )
}
export default HeaderComponent;