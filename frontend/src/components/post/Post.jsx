import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../dummyData'
import { useState } from 'react';

function Post({post}) {
    const {id:userId} = post
    const user = Users.find(user =>(
        user.id === userId
    ))
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false) 

    const likeHandler = () =>{
        setLike( prevState => {
            if(isLiked===false){
                return prevState+1;
            }else{
                return prevState-1;
            }
        })
        
        setIsLiked( prevState => {
            return !prevState
        })
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={user.profilePicture} alt="" />
                    <span className="postUsername">{user.username}</span>
                    <span className="Date">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc} </span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className='likeIcon' src="assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post