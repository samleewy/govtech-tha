// takes in highlight in the form: [{ BeginOffset: X, EndOffset: X }]
// wraps those text with class 'highlight'
export const highlightText = (highlights, text) => {
    let prevOffset = 0;
    if (highlights.length === 0) return text;
    return <span>
        { highlights.map((highlight, idx) => {
            const elements = (
                <div key={idx}>
                    {highlight.BeginOffset != 0 && <span>{ text.slice(prevOffset, highlight.BeginOffset) }</span>}
                    <span className='highlight'>{ text.slice(highlight.BeginOffset, highlight.EndOffset) }</span>
                </div>
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