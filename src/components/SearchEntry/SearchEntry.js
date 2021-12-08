import React from 'react' 
import './SearchEntry.css'

const SearchEntry = ({ title, desc, link }) => {
    return (
        <div>
            <div class='title'>
                <a href={link}>{ title }</a>
            </div>
            <div class='desc'>
                1 Sep 2021 — Plan Your <span class='highlight'>Finances</span> Applying for a Flat From 
                HDB Before You Apply What to Expect Steps Involved Buying an HDB Resale Flat Eligibility 
                Criteria What to Expect...
            </div>
            <div class='link'>
                { link }
            </div>
        </div>
    )
}

export default SearchEntry