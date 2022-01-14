import { render, cleanup } from '@testing-library/react';
import Quotes from '../components/quote';

afterEach(cleanup);

test('should create a snapshot', () => {
  const { asFragment } = render(<Quotes />);
  expect(asFragment(<Quotes />)).toMatchSnapshot();
});
