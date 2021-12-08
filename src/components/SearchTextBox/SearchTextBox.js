import React, { useRef, useState } from 'react'
import Autosuggest from 'react-autosuggest'
import { getSuggestionsApi } from '../../utils/data'
import { getHighlightIndices, highlightText } from '../../utils/highlight'
import './SearchTextBox.css'

const SearchTextBox = ({ searchQuery, setSearchQuery, onSearchClick }) => {

    const [suggestions, setSuggestions] = useState([])
    const inputRef = useRef(null)

    const getSuggestionValue = suggestion => {
        console.log('get suggestion value', suggestion)
        return suggestion
    }

    const onSuggestionsFetchRequested = async ({ value }) => {
        console.log('on suggestion fetch', value)
        const data = await getSuggestionsApi(value);
        setSuggestions(data.suggestions)
    }

    const onSuggestionsClearRequested = () => {
        console.log('on suggestion clear')
        setSuggestions([]);
    }

    const onSuggestionSelected = () => {
        onSearchClick();
    }

    const renderSuggestion = (suggestion) => {
        // 'child' is hard-coded to make sure it gets highlighted, change 'child' with 
        // searchQuery, for proper implementation
        const highlightIndices = getHighlightIndices(suggestion, 'child')
        return highlightText(highlightIndices, suggestion)
    }

    const shouldRenderSuggestions = (value) => {
        return value.trim().length > 2;
    }

    const onTextChange = (_, { newValue }) => {
        console.log('onTextChange', newValue)
        setSearchQuery(newValue)
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') onSearchClick();
    }

    const onCancelClick = () => {
        setSearchQuery("")
        onSuggestionsClearRequested()
        inputRef.current.focus()
    }

    return (
        <>
            <Autosuggest 
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            shouldRenderSuggestions={shouldRenderSuggestions}
            inputProps={{
                value: searchQuery,
                onChange: onTextChange,
                onKeyDown: onKeyDown,
                ref: inputRef,
            }} />
            { searchQuery && searchQuery.length >= 1 && 
            <i 
                class="fas fa-times"
                style={{
                    cursor: 'pointer',
                    position: 'relative',
                    left: 'calc(100% - 40px)',
                    bottom: '30px',
                    color: '#686868'
                }}
                onClick={onCancelClick}
            ></i>}
        </>
    )
}

export default SearchTextBox