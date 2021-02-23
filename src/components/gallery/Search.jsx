import React, { useState } from 'react';

const Search = () => {
    const [ term, setTerm ] = useState('');

    function handleChange(e) {
        setTerm(e.target.value);
        console.log(term);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='search'>
            <form action="action_page.php" onSubmit={e => handleSubmit(e)}>
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
