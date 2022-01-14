import { render, cleanup } from '@testing-library/react';
import Aside from '../components/aside';

afterEach(cleanup);

describe('App', () => {
  test('should create snapshot', () => {
    const { asFragment } = render(<Aside />);
    expect(asFragment(<Aside />)).toMatchSnapshot();
  });
});
