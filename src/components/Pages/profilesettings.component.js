import React, { Component, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyInput from "../Items/UI/Input/MyInput"
import MyButton from "../Items/UI/Button/MyButton"
import useInput from "../../hooks/useInput"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { vusername, vusersurname, vusersex, vemail, vpassword, required } from "./Validation/register";
import userService from "../../services/userService";
import { setProfileSetting } from "../../actions/userAction";
import { post } from 'axios';

const ProfileSettings = () => {
  const message = useSelector((state) => state.messageReducer)
  const users = useSelector((state) => state.userReducer)
  const loading = useSelector((state) => state.loadingReducer)

  const dispatch = useDispatch()

  const inputRef = useRef();
  const checkBtn = useRef();

  const [checked, setChecked] = useState(false);
  const [successful, setSuccessful] = useState(false)
  const [inputShower, setInputShower] = useState(false)
  const [photochanger, setPhotoChanger] = useState(false)
  const [passwordchanger, setPasswordchanger] = useState(false)

  const [name, setName] = useState('')
  const onNameChanged = e => setName(e.target.value)
  const [surname, setSurname] = useState('')
  const onSurnameChanged = e => setSurname(e.target.value)
  const [email, setEmail] = useState('')
  const onEmailChanged = e => setEmail(e.target.value)
  const [sex, setSex] = useState('Male')
  const onSexChanged = e => setSex(e.target.value)
  const [birthdate, setBirthdate] = useState('')
  const onBirthdateChanged = e => setBirthdate(e.target.value)

  const [passwordOld, setPasswordOld] = useState('')
  const onPasswordOldChanged = e => setPasswordOld(e.target.value)
  const [passwordNew, setPasswordNew] = useState('')
  const onPasswordNewChanged = e => setPasswordNew(e.target.value)

  const [file, setFile] = useState('')
  const submit = (e) => {
    e.preventDefault();
    const header = JSON.parse(localStorage.getItem("user"));
    const url = `https://localhost:5000/File/profile`;
    const formData = new FormData();
    formData.append('formFile', file);
    formData.append('fileName', "LetItBe");
    const config = {
      headers: {
        "Authorization": `Bearer ${header.token}`,
        'content-type': 'multipart/form-data',
      },
    };
    startFile()
    return post(url, formData, config);
  }

  const setterFile = (e) => {
    setFile(e.target.files[0]);
  }

  const handleChange = () => {
    if (checked === true) {
      setChecked(false)
      userService.excludeFromSearch()
    }
    else {
      setChecked(true)
      userService.excludeFromSearch()
    }
  };

  const profileChange = () => {
    dispatch(setProfileSetting({ name: name, surname: surname, email: email, sex: sex, birthdate: birthdate }))
    handleChange()
    setName('')
    setSurname('')
    setEmail('')
    setSex('')
    setBirthdate('')
    startInput()
  }

  const changeMyPassword = () => {
    userService.setProfilePassword({passwordOld, passwordNew})
    setPasswordOld('')
    setPasswordNew('')
    startPassword()
  }

  const startFile = () => {
    if (photochanger) {
      setPhotoChanger(false)
    }
    else {
      setPhotoChanger(true)
    }
  }

  const startInput = () => {
    if (inputShower) {
      setInputShower(false)
    }
    else {
      setInputShower(true)
    }
  }

  const startPassword = () => {
    if (passwordchanger) {
      setPasswordchanger(false)
    }
    else {
      setPasswordchanger(true)
    }
  }

  return (
    <div className="container">
      {loading.loading
        ?
        (
          <span className="spinner-border spinner-border-sm load-spinner"></span>
        )
        :
        ((!users.user)
          ?
          (<h1>Oops... Something is go wrong</h1>)
          :
          (<>
            <h4>Username: {users.user.username} (Can not be changed!)</h4>
            <div className="deepline" />
            <h4>Email: {users.user.email}</h4>
            <h4>Name: {users.user.name}</h4>
            <h4>Surname: {users.user.surname}</h4>
            <h4>Sex: {users.user.sex}</h4>
            <h4>Birthdate: {(users.user.birthDate === null)
              ?
              (<>You should to set this information!</>)
              : (users.user.birthDate)}</h4>
            <MyButton onClick={() => startInput()}>Change personal data</MyButton>
            <MyButton onClick={() => startPassword()}>Change password</MyButton>
            <MyButton onClick={() => startFile()}>SetProfilePhoto</MyButton>
            <input
              className="checkbox-place"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
            Exclude from search
          </>)
        )}

      {(inputShower)
        ?
        (<div>
          {!successful && (
            <div>
              <div className="form-group">
                <MyInput
                  placeholder="Name"
                  value={name}
                  onChange={onNameChanged}
                />
              </div>
              <div className="form-group">
                <MyInput
                  placeholder="Surname"
                  value={surname}
                  onChange={onSurnameChanged}
                />
              </div>
              <div className="form-group">
                <select
                  value={sex}
                  onChange={onSexChanged}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <MyInput
                  placeholder="Email"
                  value={email}
                  onChange={onEmailChanged}
                />
              </div>
              <div className="form-group">
                <label>BirthDate</label>
                <input
                  type="date"
                  value={birthdate}
                  onChange={onBirthdateChanged}
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => profileChange()}
                >Save Changes</button>
              </div>
            </div>
          )}
        </div>
        )
        :
        (<div />)
      }
      {photochanger
        ?
        (<div className="container-fluid">
          <form onSubmit={e => submit(e)}>
            <input type="file" onChange={e => setterFile(e)} />
            <button className="btn btn-primary" type="submit">Upload</button>
          </form>
        </div>)
        :
        (<div />)}

      {passwordchanger
        ?
        (<>
          <div className="form-group">
            <MyInput
              placeholder="Write current password"
              value={passwordOld}
              onChange={onPasswordOldChanged}
            />
          </div>
          <div className="form-group">
            <MyInput
              placeholder="Write new password"
              value={passwordNew}
              onChange={onPasswordNewChanged}
            />
            <div>password must contain at least 1 big and small letters and specific symbol</div>
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary btn-block"
              onClick={() => changeMyPassword()}
            >Save Changes</button>
          </div>
        </>)
        :
        (<div />)}
    </div>
  );
}

export default ProfileSettings