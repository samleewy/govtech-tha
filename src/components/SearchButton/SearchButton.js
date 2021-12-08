import React from 'react'
import './SearchButton.css'

const SearchButton = ({ onSearchClick }) => {

    return (
        <button 
            onClick={onSearchClick}>
            <i className="fas fa-search"></i> <span class="search-btn-text">Search</span>
        </button>
    )
}

export default SearchButton