import { useSelector } from "react-redux"
import MyMessage from "../Items/MessageItem/Message"
const ChatsItem = () => {
    const loading = useSelector((state) => state.loadingReducer)
    const messages = useSelector((state) => state.chatReducer.messagesList)
    return (
        <div className="messages-list">
            <div className="messages-list-wrapper">
                {loading.loading
                    ?
                    (
                        <span className="spinner-border spinner-border-sm load-spinner"></span>
                    )
                    :
                    ((messages === null)
                        ?
                        (<div />)
                        :
                        (
                            (messages.length === 0)
                                ?
                                (<h1>There is no messages yet!</h1>)
                                :
                                ((messages.length === 1)
                                    ?
                                    (
                                        <MyMessage
                                            message={messages[0]}
                                        />
                                    )
                                    :
                                    (<>
                                        {messages.map((message, index) => {
                                            return <MyMessage className="chat-link"
                                                key={index}
                                                message={message}
                                            />
                                        })}
                                    </>))
                        )
                    )
                }
            </div>
        </div>
    )
}
export default ChatsItem