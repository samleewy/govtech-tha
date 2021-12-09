import { render, fireEvent } from '@testing-library/react';
import SearchControl from './SearchControl'

describe("This suit is to test SearchControl component", () => {
    it('should render correctly', () => {
        const { asFragment } = render(<SearchControl searchQuery=""/>)
        expect(asFragment()).toMatchSnapshot();
    })
    it('should change input value according to given searchQuery prop', () => {
        const testInput = 'child'
        const { getByTestId } = render(<SearchControl searchQuery={testInput} />)
        const searchTextBox = getByTestId('search-textbox')
        expect(searchTextBox.value).toBe(testInput)
    })
})