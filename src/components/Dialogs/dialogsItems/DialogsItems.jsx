import classes from "../../../assets/css/Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogsItem from "../dialogItem/DialogsItem";

const DialogsItems = (props) => {
    return (
        <div className={classes.dialogsItems}>
            <DialogsItem name="Pavel" id="1"/>
            <DialogsItem name="Anton" id="2"/>
            <DialogsItem name="Vova" id="3"/>
            <DialogsItem name="Ilya" id="4"/>

        </div>
    );
}
export default DialogsItems