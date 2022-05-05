const { getIsInterger } = require('../src/isInteger');

describe('Is integer', () => {
  it('passes for integer value', () => {
    expect(getIsInterger(1)).toBe(true);
  });

  it('fails for non-integer value', () => {
    expect(getIsInterger(1.23)).toBe(false);
  });
});

describe('Is integer each table', () => {
  const integerNumbers = [-3, 0, 1];

  it.each(integerNumbers)(
    'passes for integer value %j',
    (fixture) => expect(getIsInterger(fixture)).toBe(true),
  );

  const floatNumbers = [-10.1, -1.1, 0.1, 1.1, 10.1];

  test.each(floatNumbers)(
    'fails for non-integer value %j',
    (fixture) => expect(getIsInterger(fixture)).toBe(false),
  );
});

describe('Is integer each table another way', () => {
  const integerNumbers = [
    [-1, true],
    [-0, true],
    [1, true],
    ['texto', false],
  ];

  it.each(integerNumbers)(
    'passes for integer value %j with result %j',
    (fixture, result) => expect(getIsInterger(fixture)).toBe(result),
  );
});
