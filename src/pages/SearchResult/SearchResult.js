import React from 'react'
import SearchButton from '../../components/SearchButton/SearchButton'
import SearchEntry from '../../components/SearchEntry/SearchEntry'
import SearchTextBox from '../../components/SearchTextBox/SearchTextBox'
import './SearchResult.css'

const SearchResult = () => {
    return (
        <div class='container'>
            <div class='top-bar'>
                <div class='top-bar-content'>
                    <div style={{display: 'flex'}}>
                        <SearchTextBox />
                        <SearchButton />
                    </div>
                </div>
            </div>
            <div class='search-results'>
                <div class='search-results-info'>
                    Showing 1-10 of 300 results
                </div>
                <div class='search-results-content'>
                    <SearchEntry 
                        style={{display: 'flex'}}
                        title="Buy an HDB Flat - LifeSG"
                        link="https://services.life.gov.sg/government-services/buy-hdb/"/>
                    <SearchEntry 
                        style={{display: 'flex'}}
                        title="Buy an HDB Flat - LifeSG"
                        link="https://services.life.gov.sg/government-services/buy-hdb/"/>
                </div>
            </div>
        </div>
    )
}

export default SearchResult