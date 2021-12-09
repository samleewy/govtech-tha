import { render } from '@testing-library/react';
import SearchButton from './SearchButton'

describe("This suit is to test SearchButton component", () => {
    it('should render correctly', () => {
        const { asFragment } = render(<SearchButton />)
        expect(asFragment()).toMatchSnapshot();
    })
})