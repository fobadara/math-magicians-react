import { render, cleanup } from '@testing-library/react';
import Screen from '../components/screen';

afterEach(cleanup);

test('should create snapshot', () => {
  const state = { total: '0' };
  const { asFragment } = render(<Screen state={state} />);
  expect(asFragment(<Screen state={state} />)).toMatchSnapshot();
});
