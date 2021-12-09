import React, { useState } from 'react'
import SearchControl from '../../components/SearchControl/SearchControl'
import SearchEntry from '../../components/SearchEntry/SearchEntry'
import WOGHeader from '../../components/WOGHeader/WOGHeader'
import { highlightText } from '../../utils/highlight'
import './SearchResult.css'

const SearchResult = () => {

    const [searchQeury, setSearchQuery] = useState("")
    const [results, setResults] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    return (
        <div className='container'>
            <WOGHeader />
            <div className='top-bar'>
                <div className='top-bar-content'>
                        <SearchControl 
                            style={{width: '100%', height: 0, display: 'flex'}}
                            searchQuery={searchQeury}
                            setSearchQuery={setSearchQuery}
                            results={results}
                            setResults={setResults}
                            setLoading={setLoading}
                            setError={setError} />
                </div>
            </div>
            {error && 
            <div className='error-panel'>
                <div className='error-panel-content'>
                    Your search met with an accident, try again please :(
                </div>
            </div>
            }
            {loading && !error && 
            <div className='loading-panel'>
                <div className='loading-panel-content'>
                    We are loading your search results, please wait! :D
                </div>
            </div>
            }
            { results && !loading && <div className='search-results'>
                <div className='search-results-info'>
                    Showing {((results.Page - 1) * 10) + 1}
                    -
                    {results.Page * results.PageSize} of {results.TotalNumberOfResults} results
                </div>
                <div className='search-results-content'>
                    {results.ResultItems && results.ResultItems.length > 0 && results.ResultItems.map(result => {
                        return (
                        <SearchEntry 
                            key={result.DocumentId || result.Id}
                            title={highlightText(result.DocumentTitle.Highlights, result.DocumentTitle.Text)} 
                            desc={highlightText(result.DocumentExcerpt.Highlights, result.DocumentExcerpt.Text)}
                            link={result.DocumentURI} />
                        )
                    })}
                </div>
            </div> }
        </div>
    )
}

export default SearchResult