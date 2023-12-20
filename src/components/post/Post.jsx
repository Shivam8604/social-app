import { MoreVert } from "@mui/icons-material"
import "./Post.css";
import {Users} from "../../dummyData"



const Post = ({post}) => {
    const user = Users.filter(u=>u.id === 1)
    console.log(user[0].username)
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUserName"> {Users.filter(u=>u.id === post.userId)[0].username} </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="PostText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="PostBottomLeft">
                    <img className="likeIcon" src="assets/like.png" alt="" />
                    <img className="likeIcon" src="assets/heart.png" alt="" />
                    <span className="postLikeCounter">{post.like} people like it</span>
                </div>
                <div className="PostBottomRight">
                    <span className="postCommentText">{post.comment}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post