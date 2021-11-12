import classes from '../../assets/css/Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <div className={classes.backgroundImg}>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                    alt='back'/>
            </div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
export default Profile