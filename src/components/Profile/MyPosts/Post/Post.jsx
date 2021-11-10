import classes from '../../../../assets/css/Profile/MyPosts/Post/Post.module.css'

const Post = () => {
    return (
            <div className={classes.postsItems}>
                <div className={classes.postsItem}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
                         alt='avatar'/>
                    <div className={classes.itemText}>
                        <p>fdsfgdfsdfg</p>
                    </div>
                </div>
            </div>
    )
}
export default Post