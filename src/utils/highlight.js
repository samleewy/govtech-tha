// takes in highlight in the form: [{ BeginOffset: X, EndOffset: X }]
// wraps those text with class 'highlight'
export const highlightText = (highlights, text) => {
    let prevOffset = 0;
    if (highlights.length == 0) return text;
    return <span>
        { highlights.map(highlight => {
            const elements = (
                <>
                    <span>{ text.slice(prevOffset, highlight.BeginOffset) }</span>
                    <span class='highlight'>{ text.slice(highlight.BeginOffset, highlight.EndOffset) }</span>
                </>
            )
            prevOffset = highlight.EndOffset;
            return elements
        }) }
        <span>{ text.slice(prevOffset, text.length) }</span>
    </span>
}

// finds all indices (begin, end) of all terms in text
export const getHighlightIndices = (text, term) => {
    let result, indices = [];
    const regex = new RegExp(term, "gi")
    while ((result = regex.exec(text))) {
        indices.push({
            BeginOffset: result.index,
            EndOffset: result.index + term.length,
        })
    }
    return indices;
}