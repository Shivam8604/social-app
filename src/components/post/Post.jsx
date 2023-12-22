import { MoreVert } from "@mui/icons-material"
import "./Post.css";
import {Users} from "../../dummyData"
import { useState } from "react";



const Post = ({post}) => {
    const [like, setLike] = useState(1)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

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
                    <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it</span>
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