import classes from "../../assets/css/Dialogs/Dialogs.module.css";
import DialogsItems from "./dialogsItems/DialogsItems";
import MessagesItems from "./messegaseItems/MessagesItems";

const Dialogs = (props) => {
    return (
        <div className={classes.boxMessage}>
            <DialogsItems />
           <MessagesItems />
        </div>
    )
}
export default Dialogs