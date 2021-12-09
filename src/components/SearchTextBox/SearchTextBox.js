import React, { useEffect, useRef, useState } from 'react'
import Autosuggest from 'react-autosuggest'
import { getSuggestionsApi } from '../../utils/data'
import { getHighlightIndices, highlightText } from '../../utils/highlight'
import './SearchTextBox.css'

const SearchTextBox = ({ searchQuery, setSearchQuery, onSearchClick }) => {

    const [suggestions, setSuggestions] = useState([])
    const inputRef = useRef(null)

    useEffect(() => {
        // provide initial focus onload
        inputRef.current.focus();
    }, []);

    const getSuggestionValue = suggestion => {
        // console.log('get suggestion value', suggestion)
        return suggestion
    }

    const onSuggestionsFetchRequested = async ({ value }) => {
        // console.log('on suggestion fetch', value)
        try {
            const data = await getSuggestionsApi(value);
            setSuggestions(data.suggestions)
        } catch (err) {
            console.log(err)
        }
    }

    const onSuggestionsClearRequested = () => {
        // console.log('on suggestion clear')
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
        // console.log('onTextChange', newValue)
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
                    'data-testid': 'search-textbox'
                }} 
                containerProps={{
                    'data-testid': 'search-textbox-suggest'
                }}
            />
            { searchQuery && searchQuery.length >= 1 && 
            <i 
                data-testid='search-cancel-btn'
                className="fas fa-times"
                onClick={onCancelClick}
            ></i>}
        </>
    )
}

export default SearchTextBox