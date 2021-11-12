import classes from '../../../assets/css/Profile/Profile.module.css'
const ProfileInfo = (props) => {
    return (
        <div className={classes.contentMain}>
            <div className={classes.userInfoMain}>
                <div className={classes.avatar}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' alt='avatar'/>
                </div>
                <div className={classes.userInfo}>
                    <p>User: Pavel</p>
                    <p>Age: 23</p>
                    <p>Mail: fdasf@mail.ru</p>

                </div>
            </div>
        </div>
    )

}
export default ProfileInfo