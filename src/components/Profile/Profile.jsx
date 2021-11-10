import '../../assets/css/Profile/Profile.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className='content'>
            <div className='backgroundImg'>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='back'/>
            </div>
            <div className='contentMain'>
                <div className='userInfoMain'>
                    <div className='avatar'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' alt='avatar'/>
                    </div>
                    <div className='userInfo'>
                        <p>User: Pavel</p>
                        <p>Age: 23</p>
                        <p>Mail: fdasf@mail.ru</p>

                    </div>
                </div>
            </div>
        <MyPosts />
        </div>
    )
}
export default Profile