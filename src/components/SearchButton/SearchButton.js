import React from 'react'
import './SearchButton.css'

const SearchButton = ({ onSearchClick }) => {

    return (
        <button 
            onClick={onSearchClick}>
            <i className="fas fa-search"></i> Search
        </button>
    )
}

export default SearchButton