import React, { useState } from 'react'
import './VideoSideBar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';




const VideoSideBar = ({ likes, share, chat }) => {

    const [like, setLike] = useState(false)
    return (
        <div className="videoSidebar">


            <div className="videoSidebar__button" onClick={() => setLike(!like)}>
                {like ? (
                    <FavoriteIcon fontSize="large" />
                ) : (
                    <FavoriteBorderIcon fontSize="large" />
                )}

                <p>{like ? likes : likes - 1}</p>
            </div>
            <div className="videoSidebar__button">
                <ChatIcon fontSize="large" />
                <p>{chat}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{share}</p>
            </div>



        </div>
    )
}

export default VideoSideBar;
