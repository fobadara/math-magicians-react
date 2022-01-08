import {
  render, cleanup, fireEvent, screen,
} from '@testing-library/react';
import Keypad from '../components/keypad';
import { keys } from '../components/calculator';
import '@testing-library/jest-dom/extend-expect';

describe('Keypad', () => {
  afterEach(cleanup);

  test('should create snapshot', () => {
    const { asFragment } = render(<Keypad keys={keys} />);
    expect(asFragment(<Keypad keys={keys} />)).toMatchSnapshot();
  });

  test('should render 19 buttons', () => {
    const { container } = render(<Keypad keys={keys} />);

    expect(container.firstElementChild.children).toHaveLength(19);
  });

  test('should contain correct text (in this case 7)', () => {
    const { container } = render(<Keypad keys={keys} />);

    expect(container.firstElementChild.firstElementChild).toHaveTextContent('AC');
  });

  test('should call onClick when clicked', () => {
    const onClick = jest.fn();
    render(<button name="7" type="button" onClick={onClick} id="7" className="number" key="7">7</button>);
    const number7 = screen.getByText('7');
    fireEvent.click(number7);
    expect(onClick).toHaveBeenCalled();
  });
});
