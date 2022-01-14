import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../app';

afterEach(cleanup);

test('should create snapshot', () => {
  const tree = renderer.create(<Router><App /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
