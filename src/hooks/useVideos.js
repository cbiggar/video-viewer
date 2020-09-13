import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyAg7GjSiUotAVM1EqbqY2g7IfOnYX0fhq8'; 

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