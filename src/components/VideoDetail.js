import React from 'react'

const VideoDetail = ({ video }) => {
    const url = `https://www.youtube.com/embed/${ video.id.videoId}`
    
    return (
        <div>
            <div className="ui embed">
                <iframe title={video.snippet.title} src={url}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail