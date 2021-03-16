import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Instagram = () => {
    const [apiData, setApiData] = useState(null);
    const [profile, setProfile] = useState({});

    useEffect(()=> {
        axios.get(`https://graph.instagram.com/me/media?fields=id,media_url,media_type,thumbnail_url,permalink&limit=3&access_token=${process.env.REACT_APP_IG_TOKEN}`)
        .then(response => setApiData(response.data.data));
    }, []);

    useEffect(()=> {
        axios.get(`https://graph.instagram.com/me?fields=username&access_token=${process.env.REACT_APP_IG_TOKEN}`)
        .then(response => setProfile(response.data.username));
    }, []);

    return apiData && (
        <div className='instagram-feed inner'>
            <h2>
                <span className='font2'>Latest on Instagram</span>
                <span className='font1'>
                    <a href={`https://www.instagram.com/${profile}`} target='_blank' rel='noreferrer'>
                        @{profile}
                    </a>
                </span>
            </h2>
            <div className='container'>
                {apiData.map(post => (
                    <div 
                        key={post.id} className='background-image' 
                        style={{backgroundImage: `url(${post.media_type==='VIDEO'? post.thumbnail_url: post.media_url})`}}
                    >
                        <a href={post.permalink} target='_blank' rel='noreferrer'>
                            <span className='hide'>View Instagram Post</span>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Instagram
