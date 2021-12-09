import { render } from "@testing-library/react";
import SearchTextBox from "./SearchTextBox";

describe("This suite is to test SearchTextBox component", () => {
    it('should render correctly', () => {
        const { asFragment } = render(<SearchTextBox searchQuery=""/>)
        expect(asFragment()).toMatchSnapshot();
    })
    it('should not show cancel/cross button when searchQuery < 1', () => {
        const { queryByTestId } = render(<SearchTextBox searchQuery=""/>)
        const cancelBtn = queryByTestId('search-cancel-btn');
        expect(cancelBtn).toBeNull();
    })
    it('should show cancel/cross button when searchQuery >= 1', () => {
        const { getByTestId } = render(<SearchTextBox searchQuery="test"/>)
        const cancelBtn = getByTestId('search-cancel-btn');
        expect(cancelBtn).toBeInTheDocument();
    })
})