import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = 'generate new key'; 

const useVideos = (defaultTerm) => {
    const [ videos, setVideos ] = useState([]);


    useEffect(() => {
        search(defaultTerm)
    }, [defaultTerm])

    const search = async (term) => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            type: "video",
            maxResults: 5,
            key: KEY
          }
        });
        
        setVideos(response.data.items);
    };
    

    return [ videos, search ]
}
  
export default useVideos