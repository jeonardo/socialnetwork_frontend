import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import MyButton from "../components/Items/UI/Button/MyButton"
import MyInput from "../components/Items/UI/Input/MyInput"
import { useState } from 'react';
const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                sendMessage(message);
                setMessage('');
            }}>
            <MyInput type="user" placeholder="write a message..."
                onChange={e => setMessage(e.target.value)} value={message} />
            <MyButton variant="primary" type="submit" disabled={!message}>Send</MyButton>
        </form>)
}
export default SendMessageForm;
