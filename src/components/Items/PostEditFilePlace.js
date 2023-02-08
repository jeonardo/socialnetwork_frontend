import React, { useState } from 'react';
import { post } from 'axios';
import {useSelector} from "react-redux"
const PostEditFilePlace = ({ setVisible }) => {
    const [file, setFile] = useState('')
    const posts = useSelector((state) => state.modalReducer.item)

    const submit = (e) => {
        e.preventDefault();
        const header = JSON.parse(localStorage.getItem("user"));
        const id = posts.id
        const url = `https://localhost:5000/File`;
        const formData = new FormData();
        formData.append('formFile', file);
        formData.append('fileName', "LetItBe");
        formData.append('ElementId', id)
        const config = {
            headers: {
                "Authorization": `Bearer ${header.token}`,
                'content-type': 'multipart/form-data',
            },
        };
        setVisible()
        return post(url, formData, config);
    }

    const setterFile = (e) => {
        setFile(e.target.files[0]);
    }

    return (
        <div className="container-fluid">
            <form onSubmit={e => submit(e)}>
                <input type="file" onChange={e => setterFile(e)} />
                <button className="btn btn-primary" type="submit">Upload</button>
            </form>
        </div>
    )

}
export default PostEditFilePlace    
