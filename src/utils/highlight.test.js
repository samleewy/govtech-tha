import { render } from "@testing-library/react";
import { getHighlightIndices, highlightText } from "./highlight";

describe('This suite is to test highlight functions', () => {
    it('should return original text if there are no highlights available', () => {
        const highlights = [];
        const text = "This is a test text";
        const result = highlightText(highlights, text);
        expect(result).toBe(text);
    })
    it('should return correctly highlighted text with class \'highlight\'', () => {
        const highlights = [
            {
                BeginOffset: 0,
                EndOffset: 4,
            },
            {
                BeginOffset: 48,
                EndOffset: 52,
            },
            {
                BeginOffset: 57,
                EndOffset: 61,
            }
        ];
        const text = "test this would highlight everything related to test.... test?"
        const result = highlightText(highlights, text);
        const { asFragment } = render(<>{ result }</>)
        expect(asFragment()).toMatchSnapshot();
    })
    it('should correctly return highlighted text indices', () => {
        const text = "test this would highlight everything related to test.... test?"
        const result = getHighlightIndices(text, 'test')
        const expectedHighlight = [
            {
                BeginOffset: 0,
                EndOffset: 4,
            },
            {
                BeginOffset: 48,
                EndOffset: 52,
            },
            {
                BeginOffset: 57,
                EndOffset: 61,
            }
        ];
        expect(JSON.stringify(result)).toBe(JSON.stringify(expectedHighlight));
    })
})