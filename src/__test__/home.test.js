import { render, cleanup } from '@testing-library/react';
import Home from '../components/home';

afterEach(cleanup);

test('should create snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment(<Home />)).toMatchSnapshot();
});
