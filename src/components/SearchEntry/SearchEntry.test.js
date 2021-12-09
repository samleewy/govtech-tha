import { render } from "@testing-library/react";
import SearchEntry from "./SearchEntry";

describe("This suit is to test SearchEntry component", () => {
    const testComponent = <SearchEntry title="Test Title" desc="Test Description" link="www.testlink.com" />
    it('should render correctly', () => {
        const { asFragment } = render(testComponent)
        expect(asFragment()).toMatchSnapshot();
    })
})