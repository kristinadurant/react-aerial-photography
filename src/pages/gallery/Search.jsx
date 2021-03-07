import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';

const Search = () => {
    const { setSearch } = useContext(GalleryContext);

    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div className='search'>
            <form>
                <input
                    className="searchbar"
                    type="text"
                    placeholder="Search..."
                    onChange={e => handleChange(e)}
                />
                <button type='submit'>
                    <span className='hide'>Search</span>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Search;
