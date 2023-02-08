const MyMessage = ({ message }) => {
    let TimeD = message.timestamp.substring(0, 10)
    let TimeT = message.timestamp.substring(12, 19)
    return (
        <div>
            {message.userFromName}:  (Created on {TimeD} in {TimeT})
            <div className="current-message">
                {message.content}
            </div>
        </div>

    )
}
export default MyMessage