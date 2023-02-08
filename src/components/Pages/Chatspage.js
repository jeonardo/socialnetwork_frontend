import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getChatList, getMessages, sendMessage } from "../../actions/chatAction"
import ChatItem from "../Items/ChatItem";
import './../Items/chatspage.css'
import MyButton from "../Items/UI/Button/MyButton";
import MyInput from "../Items/UI/Input/MyInput";

const ChatsPage = () => {
    const [currentChat, setCurrentChat] = useState('')
    const [content, setContent] = useState('')
    const onContentChanged = e => setContent(e.target.value)
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer)
    useEffect(async () => {
        dispatch(getChatList())
    }, [])

    const loading = useSelector((state) => state.loadingReducer)
    const chats = useSelector((state) => state.chatReducer.chats)

    const getMessagesFromChat = (chatId) => {
        dispatch(getMessages(chatId))
        setCurrentChat(chatId)
    }

    const Create = () => {
        dispatch(sendMessage({ id: currentChat, content }))
        setContent("")
    }

    return (
        <div className="chats-page">
            {(chats) ?
                (<><div className="all-chats">
                    <div className="all-chats-wrapper">
                        {loading.loading
                            ?
                            (
                                <span className="spinner-border spinner-border-sm load-spinner"></span>
                            )
                            :
                            ((chats === null)
                                ?
                                (<div />)
                                :
                                (
                                    (chats.length === 0)
                                        ?
                                        (<h1>There is no chats!</h1>)
                                        :
                                        ((chats.length === 1)
                                            ?
                                            (
                                                <button className="chat-link" onClick={() => getMessagesFromChat(chats[0].id)}>
                                                    {((users.user) && (users.user.username != chats[0].users[0].username))
                                                        ?
                                                        (<div>{chats[0].users[0].username}</div>)
                                                        :
                                                        (<div>{chats[0].users[1].username}</div>)
                                                    }
                                                </button>
                                            )
                                            :
                                            (<>
                                                {chats.map((chatLink, index) => {
                                                    return <button className="chat-link"
                                                        key={index}
                                                        onClick={() => getMessagesFromChat(chatLink.id)}>
                                                        {((users.user) && (users.user.username != chatLink.users[0].username))
                                                            ?
                                                            (<div>{chatLink.users[0].username}</div>)
                                                            :
                                                            (<div>{chatLink.users[1].username}</div>)
                                                        }
                                                    </button>
                                                })}
                                            </>))
                                )
                            )
                        }
                    </div>
                </div>
                    <div className="current-chat">
                        <ChatItem />
                        <div className="chat-controller">
                            <MyInput
                                placeholder="Insert a message"
                                value={content}
                                onChange={onContentChanged}
                            ></MyInput>
                            {(currentChat === "")
                                ?
                                (<div />)
                                :
                                (<MyButton onClick={() => Create()}>Send a message</MyButton>)
                            }
                        </div>
                    </div>
                </>)
                :
                (<div />)}
        </div>
    )
}
export default ChatsPage