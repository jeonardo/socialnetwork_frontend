import React, { Component, useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { connect, useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/authAction";
import { vusername, vusersurname, vusersex, vemail, vpassword, required } from "./Validation/register";
const Register = () => {
    const message = useSelector((state) => state.messageReducer)
    const dispatch = useDispatch()
    const inputRef = useRef();
    const checkBtn = useRef();
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [sex, setSex] = useState("")
    const [password, setPassword] = useState("")
    const [successful, setSuccessful] = useState(false)
    const onChangeName = e => setName(e.target.value)
    const onChangeSurname = e => setSurname(e.target.value)
    const onChangeEmail = e => setEmail(e.target.value)
    const onChangeSex = e => setSex(e.target.value)
    const onChangeSuccess = e => setSuccessful(e.target.value)
    const onChangePassword = e => setPassword(e.target.value)
    function handleRegister(e) {
        e.preventDefault();
        setSuccessful({
            successful: false,
        });
        dispatch(register(name, surname, email, sex, password))
            .then(() => {
                setSuccessful({
                    successful: true
                })
            })
            .catch(() => {
                setSuccessful({
                    successful: false
                })
            })
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
                    onSubmit={handleRegister}
                    ref={inputRef}
                >
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={onChangeName}
                                    validations={[required, vusername]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="surname">Surname</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="surname"
                                    value={surname}
                                    onChange={onChangeSurname}
                                    validations={[required, vusersurname]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sex">Sex</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="sex"
                                    value={sex}
                                    onChange={onChangeSex}
                                    validations={[required, vusersex]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    validations={[required, vemail]}
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
                                    validations={[required, vpassword]}
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </div>
                    )}
                    <CheckButton
                        style={{ display: "none" }}
                        ref={checkBtn}
                    />
                </Form>
            </div>
        </div>
    );
}

export default Register;
