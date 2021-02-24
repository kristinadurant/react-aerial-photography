import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Image = ({ img }) => {
    const { favorites, addFavorite } = useContext(AppContext);
    const [ selected, setSelected ] = useState(false);

    function handleClick(img) {
        addFavorite(img);
        setSelected(true);
    }
    useEffect(()=> {
        if(favorites.includes(img)) setSelected(true);
        console.log(selected);
    }, []);

    return (
        <div key={img.id} className='container'>
            <img src={require(`../../assets/images/${img.url}`).default} alt={img.description} height='auto' width='100%' />       
            <div className='overlay'>
                <button onClick={() => handleClick(img)} disabled={selected} >
                    <span className='hide'>Favorites</span>
                    {selected
                    ? <i className="fas fa-heart"></i>
                    : <i className="far fa-heart"></i>
                    }
                </button>    
            </div>
        </div>
    )
}

export default Image
