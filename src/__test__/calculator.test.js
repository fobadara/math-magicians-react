import { render, cleanup } from '@testing-library/react';
import { Calculator } from '../components/calculator';

afterEach(cleanup);

test('should create snapshot', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment(<Calculator />)).toMatchSnapshot();
});
