import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../components/navigation';

afterEach(cleanup);

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        {component}
      </Router>,
    ),
  };
};

describe('Navbar', () => {
  test('should create a snapshot', () => {
    const { asFragment } = renderWithRouter(<NavBar />);
    expect(asFragment(<NavBar />)).toMatchSnapshot();
  });
});
