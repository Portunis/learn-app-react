import classes from '../../assets/css/SideBar/Sidebar.module.css'
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.navItem}>
                <NavLink to="/profile" className={(sideBar) => sideBar.isActive ? classes.active : ''}>Profile</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink to="/dialogs" className={(sideBar) => sideBar.isActive ? classes.active : ''}>Message</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink to="/news" className={(sideBar) => sideBar.isActive ? classes.active : ''}>News</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink to="/music" className={(sideBar) => sideBar.isActive ? classes.active : ''}>Music</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink to="/settings" className={(sideBar) => sideBar.isActive ? classes.active : ''}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default SideBar