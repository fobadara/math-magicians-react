import operate from '../logic/operate';

describe('operate', () => {
  test('should get the sum of 2 and 3', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  test('should get the difference of 2 and 3', () => {
    expect(operate(2, 3, '-')).toBe('-1');
  });

  test('should multiply 2 and 3', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  test('should divide 2 and 3', () => {
    expect(operate(2, 3, '÷')).toBe('0.66666666666666666667');
  });

  test('should get the percentage of 2 and 3', () => {
    expect(operate(2, 3, '%')).toBe('2');
  });
});
