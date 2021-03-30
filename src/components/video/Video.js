import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './videofooter/VideoFooter';
import VideoSideBar from './videosidebar/VideoSideBar';
const Video = ({ url }) => {

    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);
    const handleVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

    return (
        <div className="video">
            <video
                loop
                ref={videoRef}
                src={url}
                className="video__player"
                onClick={handleVideoPress}
            ></video>
            {/* VideFooter */}
            <div className="video__footer">
                <VideoFooter />
            </div>
            {/* VideoSideBar */}
            <div className="video__sideBar">
                <VideoSideBar />
            </div>
        </div>
    )
}

export default Video;
