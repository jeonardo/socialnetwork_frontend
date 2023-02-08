import SendMessageForm from '../../hub/SendMessageFrom';
import MessageItem from '../Items/MessageItem/MessageItem';
import ConnectedUsers from '../../hub/ConnectedUsers';
import { Button } from 'react-bootstrap';

const Room = ({ sendMessage, messages, users, closeConnection }) => <div className='hubwrapper'>
    <div className='leave-room'>
        <Button variant='danger' onClick={() => closeConnection()}>Leave Room</Button>
    </div>
    <ConnectedUsers users={users} />
    <div className='chat'>
        <MessageItem messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
    </div>
</div>

export default Room;
