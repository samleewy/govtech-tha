import { render } from '@testing-library/react';
import App from './App'

describe("This suit is to test the App component", () => {
  it('should render correctly', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot();
  })
})