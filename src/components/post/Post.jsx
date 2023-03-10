import './post.css'
import postImg from "../../assets/5.jpg"

const Post = () => {
  return (
    <div className='post'>
        <img src={postImg} alt="Post" className='postImg' />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat"> #music </span>
                <span className="postDate"> 1 hour ago </span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet consectetur.
            </span>
            {/* <hr /> */}
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error quibusdam incidunt libero nostrum repellendus optio debitis qui fuga dignissimos aliquam vero, reprehenderit rem at cumque quam doloremque expedita ullam?
            Delectus eveniet eligendi, rerum quaerat impedit ipsam quod! Unde, esse itaque. Harum optio doloremque dolore culpa, perspiciatis, enim quidem, veniam quis odit suscipit accusamus assumenda sint? Corporis enim iste culpa.
            Molestias rem debitis voluptatem ab enim, sunt nulla officiis porro aspernatur fugit ad dolores maxime sint velit minima quibusdam incidunt iste molestiae nisi error quo nihil cumque! Fugit, suscipit corrupti?
        </p>
        <div className="tags">
            <span> Business </span>
            <span> Digital </span>
            <span> Tech </span>
        </div>
        <a href='#' className='link'>  Read More... </a>
    </div>
  )
}

export default Post