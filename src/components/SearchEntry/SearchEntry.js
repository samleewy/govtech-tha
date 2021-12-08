import React from 'react' 
import './SearchEntry.css'

const SearchEntry = ({ title, desc, link }) => {
    return (
        <div>
            <div className='title'>
                <a href={link}>{ title }</a>
            </div>
            <div className='desc'>
                1 Sep 2021 — { desc }
            </div>
            <div className='link'>
                <a href={ link }>{ link }</a>
            </div>
        </div>
    )
}

export default SearchEntry