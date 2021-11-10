import classes from '../../../assets/css/Profile/MyPosts/Post/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.contentPosts}>
            <h2>Посты</h2>
            <div className={classes.postsForm}>
                <form>
                    <input className={classes.postsInput} placeholder='Введите ваше сообщение'/>
                    <button className={classes.postsButton}>Отправить</button>
                </form>
            </div>
           <Post />
        </div>

    )
}
export default MyPosts