import React, { useState, useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';

const Search = () => {
    const [ term, setTerm ] = useState('');
    const { setSearch } = useContext(GalleryContext);

    function handleChange(e) {
        setSearch(e.target.value);
        console.log(term);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='search'>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    className="searchbar"
                    type="text"
                    placeholder="Search..."
                    onChange={e => handleChange(e)}
                />
                                <button>
                    <span className='hide'>Search</span>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Search;
