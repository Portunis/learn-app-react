import classes from '../../assets/css/SideBar/Sidebar.module.css'

const SideBar = () => {
    return(
        <nav className={classes.nav}>
            <div className={classes.navItem}>
                <p>Profile</p>
            </div>
            <div className={classes.navItem}>
                <p>Message</p>
            </div>
            <div className={classes.navItem}>
                <p>News</p>
            </div>
            <div className={classes.navItem}>
                <p>Music</p>
            </div>
            <div className={classes.navItem}>
                <p>Settings</p>
            </div>
        </nav>
    )
}
export default SideBar