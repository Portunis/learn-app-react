import classes from "../../../assets/css/Dialogs/Dialogs.module.css";

const MessageItem = (props) => {
    return (

        <div>
            <div className={classes.messagesItem}>{props.message}</div>
            <div className={classes.messagesInput}>
                <input placeholder='Напишите сообщение'/>
                <button>Отправить</button>
            </div>
        </div>

    )
}
export default MessageItem