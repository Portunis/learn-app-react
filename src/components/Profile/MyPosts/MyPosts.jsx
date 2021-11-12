import classes from '../../../assets/css/Profile/MyPosts/Post/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.contentPosts}>

            <div className={classes.postsForm}>
                <form>
                    <input className={classes.postsInput} placeholder='Введите ваше сообщение'/>
                    <button className={classes.postsButton}>Отправить</button>
                </form>
            </div>
            <h2>Посты</h2>
           <Post message="Hi" />
            <Post message="Buy" />
        </div>

    )
}
export default MyPosts