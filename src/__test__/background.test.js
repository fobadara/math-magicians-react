import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Background from '../components/background';

afterEach(cleanup);

describe('Background', () => {
  test('should create snapshot', () => {
    const { asFragment } = render(<Router><Background /></Router>);
    expect(asFragment(<Background />)).toMatchSnapshot();
  });
});
