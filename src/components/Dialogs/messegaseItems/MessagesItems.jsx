import classes from "../../../assets/css/Dialogs/Dialogs.module.css";
import MessageItem from "../messagesItem/MessageItem";

const MessagesItems = (props) => {
    return (
        <div className={classes.messagesItems}>
           <MessageItem message="Привет я тут подумал" />
        </div>
    )
}
export default MessagesItems