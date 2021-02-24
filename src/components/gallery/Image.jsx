import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Image = ({ img }) => {
    const { addFavorite } = useContext(AppContext);
    const [ selected, setSelected ] = useState(false);

    return (
        <div key={img.id} className='container'>
            <img src={require(`../../assets/images/${img.url}`).default} alt={img.description} height='auto' width='100%' />       
            <div className='overlay'>
                <button onClick={() => addFavorite(img)} value={img}>
                    <span className='hide'>Favorites</span>
                    {selected || img.favorite
                    ? <i className="fas fa-heart"></i>
                    : <i className="far fa-heart"></i>
                    }
                </button>    
            </div>
        </div>
    )
}

export default Image
