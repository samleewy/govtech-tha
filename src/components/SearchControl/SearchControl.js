import React from 'react'
import { getResults } from '../../utils/data'
import SearchButton from '../SearchButton/SearchButton'
import SearchTextBox from '../SearchTextBox/SearchTextBox'

const SearchControl = ({ searchQuery, setSearchQuery, setResults, setLoading, setError }) => {

    const onSearchClick = async () => {
        if (searchQuery.length > 0) {
            setError(false)
            setLoading(true)
            try {
                const data = await getResults()
                setLoading(false)
                setResults(data)
            } catch (err) {
                console.log(err)
                setError(true)
            }
        }
    }

    return (
        <>
            <div style={{ width: '100%', height: 0 }}>
                <SearchTextBox 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    onSearchClick={onSearchClick} />
            </div>
            <div style={{ position: 'relative', left: -10 }}>
                <SearchButton 
                    searchQuery={searchQuery}
                    onSearchClick={onSearchClick} />
            </div>
        </>
    )
}

export default SearchControl