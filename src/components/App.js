import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = () => {
    const [ videos, search ] = useVideos('house');
    const [ selectedVideo, setSelectedVideo ] = useState(null);

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar onTermSubmit={search}/> 
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        {
                            selectedVideo
                                ? <VideoDetail video={selectedVideo}/>
                                : undefined
                        }
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default App