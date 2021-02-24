import React, { useState } from 'react';

const Image = ({ img }) => {
    const [ selected, setSelected ] = useState(false);

    function addFavorite(img) {
        img.favorite? img.favorite = false : img.favorite = true;
        setSelected(!selected);
    }

    return (
        <div key={img.id} className='container'>
            <img src={require(`../../assets/images/${img.url}`).default} alt={img.description} height='auto' width='100%' />       
            <div className='overlay'>
                <button onClick={() => addFavorite(img)} value={img}>
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
