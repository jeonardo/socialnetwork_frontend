import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { required } from "./Validation/login"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authAction";
const Login = () => {
  const { message } = useSelector((state) => state.messageReducer)
  const dispatch = useDispatch()
  const inputRef = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const onChangeUsername = e => setUsername(e.target.value)
  const onChangePassword = e => setPassword(e.target.value)
  function handleLogin(e) {
    e.preventDefault();
    // inputRef.validateAll();
    // console.log('test')
    setLoading({ loading: true });
    // if (checkBtn.context._errors.length === 0) {
    // console.log('test')
    dispatch(login(username, password))
      .catch(() => {
        setLoading({ loading: false });
      });
    // } else {
    //   setLoading({ loading: false });
    // }
  }
  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Form
          onSubmit={handleLogin}
          ref={inputRef}
        >
          <div className="form-group">
            <label htmlFor="username">YourFirstEmail</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary btn-block"
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          {/* {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )} */}
          <CheckButton
            style={{ display: "none" }}
            ref={checkBtn}
          />
        </Form>
      </div>
    </div>
  );
}
export default Login;