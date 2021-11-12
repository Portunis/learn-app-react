import classes from "../../../assets/css/Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return(
        <div className={classes.dialogsItem}>
            <NavLink className={(dialogsItem) => dialogsItem.isActive ? classes.active : ''} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>

    )
}
export default DialogsItem