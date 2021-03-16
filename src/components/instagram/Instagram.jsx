import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Instagram = () => {
    const [apiData, setApiData ] = useState(null);

    useEffect(()=> {
        axios.get(`https://graph.instagram.com/me/media?fields=id,media_url,permalink&limit=3&access_token=${process.env.REACT_APP_IG_TOKEN}`)
        .then(response => {
            setApiData(response.data.data);
        });
    }, []);

    return apiData && (
        <div className='instagram-feed inner'>
            {apiData.map(post => (
                <div key={post.id} className='background-image' style={{backgroundImage: `url(${post.media_url})`}}>
                    <a href={post.permalink} target='_blank' rel='noreferrer'>
                        <span className='hide'>View Instagram Post</span>
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Instagram
